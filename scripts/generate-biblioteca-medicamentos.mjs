import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

function decodeXml(value) {
  return value
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

function toSlug(name) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9\s-]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function isHeading(line) {
  return (
    /^\d+\.\s+.+/.test(line) ||
    /^\d+\.\d+(?:\.\d+)*\s+.+/.test(line) ||
    /^\d+\)\s+.+/.test(line) ||
    /^refer[êe]ncias?(?:\s*\(.*\))?[:.]?$/i.test(line)
  );
}

function isBullet(line) {
  return /^[•\-–]\s+/.test(line);
}

function cleanLine(line) {
  return line
    .replace(/\u00A0/g, " ")
    .replace(/\t+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeSectionTitle(title) {
  if (/^8\.1\s+Com\s+ou\s+sem\s+alimentos$/i.test(title)) {
    return "8.1 Interação com a dieta";
  }
  return title;
}

function isListLikeSection(title) {
  return /nome gen[eé]rico|classe farmacol[oó]gica|apresenta[cç][oõ]es|pearls|micro-organismos|alvos|lacunas|quando n[aã]o usar|resist[eê]ncia|indica[cç][oõ]es|off-label|posologia|dose|pediatria|neonatologia|ajustes|insufici[eê]ncia|obesidade|idoso|administra[cç][aã]o|intera[cç][oõ]es|estabilidade|compatibilidade|efeitos adversos|contraindica[cç][oõ]es|advert[eê]ncias|gesta[cç][aã]o|lacta[cç][aã]o|farmacocin[eé]tica|par[aâ]metros|monitoriza[cç][aã]o|crit[eé]rios|conduta|erros comuns|dicas|observa[cç][oõ]es/i.test(
    title
  );
}

function addLinesToSection(section, lines, { forceBullets = false } = {}) {
  const cleaned = lines.map(cleanLine).filter(Boolean);
  if (!cleaned.length) return;

  const values = cleaned.map((line) => line.replace(/^[•\-–]\s+/, "").trim());
  const shouldUseBullets = forceBullets || cleaned.some(isBullet) || (cleaned.length > 1 && isListLikeSection(section.title));

  if (shouldUseBullets) {
    section.bullets.push(...values);
  } else {
    section.paragraphs.push(...values);
  }
}

function splitTopLevelNodes(bodyXml) {
  const nodes = [];
  let cursor = 0;

  while (cursor < bodyXml.length) {
    const paragraphStart = bodyXml.indexOf("<w:p", cursor);
    const tableStart = bodyXml.indexOf("<w:tbl", cursor);
    let start = -1;
    let type = "";

    if (paragraphStart === -1 && tableStart === -1) break;
    if (paragraphStart === -1 || (tableStart !== -1 && tableStart < paragraphStart)) {
      start = tableStart;
      type = "table";
    } else {
      start = paragraphStart;
      type = "paragraph";
    }

    const closeTag = type === "table" ? "</w:tbl>" : "</w:p>";
    const end = bodyXml.indexOf(closeTag, start);
    if (end === -1) break;

    const xml = bodyXml.slice(start, end + closeTag.length);
    nodes.push({ type, xml });
    cursor = end + closeTag.length;
  }

  return nodes;
}

function extractParagraphLines(paragraphXml) {
  const lines = [""];
  const tokenRegex = /<w:t(?:\s[^>]*)?>([\s\S]*?)<\/w:t>|<w:tab(?:\s[^>]*)?\/>|<w:br(?:\s[^>]*)?\/>/g;
  let match;

  while ((match = tokenRegex.exec(paragraphXml)) !== null) {
    const token = match[0];

    if (match[1] !== undefined) {
      lines[lines.length - 1] += decodeXml(match[1]);
      continue;
    }

    if (/^<w:tab/.test(token)) {
      lines[lines.length - 1] += " ";
      continue;
    }

    lines.push("");
  }

  return lines.map(cleanLine).filter(Boolean);
}

function extractParagraphText(paragraphXml) {
  return cleanLine(extractParagraphLines(paragraphXml).join(" "));
}

function extractTable(tableXml) {
  const rowRegex = /<w:tr\b[\s\S]*?<\/w:tr>/g;
  const cellRegex = /<w:tc\b[\s\S]*?<\/w:tc>/g;
  const paragraphRegex = /<w:p\b[\s\S]*?<\/w:p>/g;
  const rows = [];
  let rowMatch;

  while ((rowMatch = rowRegex.exec(tableXml)) !== null) {
    const rowXml = rowMatch[0];
    const cells = [];
    let cellMatch;

    while ((cellMatch = cellRegex.exec(rowXml)) !== null) {
      const cellXml = cellMatch[0];
      const parts = [];
      let paragraphMatch;

      while ((paragraphMatch = paragraphRegex.exec(cellXml)) !== null) {
        const text = extractParagraphText(paragraphMatch[0]);
        if (text) parts.push(text);
      }

      cells.push(cleanLine(parts.join(" ")));
    }

    while (cells.length > 0 && !cells[cells.length - 1]) {
      cells.pop();
    }

    if (cells.some(Boolean)) rows.push(cells);
  }

  if (rows.length < 2) return null;
  const maxColumns = Math.max(...rows.map((row) => row.length));
  if (maxColumns < 2) return null;

  const normalizedRows = rows.map((row) => {
    const padded = [...row];
    while (padded.length < maxColumns) padded.push("");
    return padded;
  });

  return {
    headers: normalizedRows[0],
    rows: normalizedRows.slice(1),
  };
}

function parseDocx(filePath) {
  const fileName = path.basename(filePath);
  const displayName = fileName.replace(/\.docx$/i, "").normalize("NFC").trim();
  const slug = toSlug(displayName);

  let xml = execFileSync("unzip", ["-p", filePath, "word/document.xml"], {
    encoding: "utf8",
  });
  xml = xml.replace(/\r/g, "\n");
  const bodyMatch = xml.match(/<w:body>([\s\S]*?)<\/w:body>/);
  const bodyXml = bodyMatch ? bodyMatch[1] : xml;
  const nodes = splitTopLevelNodes(bodyXml);

  const sections = [];
  let current = null;
  const linearTexts = [];

  for (const node of nodes) {
    if (node.type === "paragraph") {
      const paragraphLines = extractParagraphLines(node.xml);
      if (!paragraphLines.length) continue;
      linearTexts.push(...paragraphLines);
      const [line, ...contentLines] = paragraphLines;

      if (isHeading(line)) {
        if (current) {
          if (!current.paragraphs.length) delete current.paragraphs;
          if (!current.bullets.length) delete current.bullets;
          if (!current.tables.length) delete current.tables;
          sections.push(current);
        }
        current = { title: normalizeSectionTitle(line), paragraphs: [], bullets: [], tables: [] };
        addLinesToSection(current, contentLines);
        continue;
      }

      if (!current) current = { title: "Visão geral", paragraphs: [], bullets: [], tables: [] };

      addLinesToSection(current, paragraphLines, { forceBullets: node.xml.includes("<w:numPr>") });
      continue;
    }

    const table = extractTable(node.xml);
    if (!table) continue;
    if (!current) current = { title: "Visão geral", paragraphs: [], bullets: [], tables: [] };
    current.tables.push(table);
  }

  if (current) {
    if (!current.paragraphs.length) delete current.paragraphs;
    if (!current.bullets.length) delete current.bullets;
    if (!current.tables.length) delete current.tables;
    sections.push(current);
  }

  const summary =
    linearTexts.find(
      (line) =>
        !isHeading(line) &&
        !isBullet(line) &&
        line.length > 90 &&
        !/^refer[êe]ncias?/i.test(line)
    ) ||
    linearTexts.find((line) => !isHeading(line) && !isBullet(line)) ||
    `Monografia técnica de ${displayName}.`;

  const references = [{ label: `Fonte interna: ${fileName} (Biblioteca).` }];
  const extraRef = [...linearTexts].reverse().find((line) => /uptodate|doi|acesso em|refer[êe]ncia/i.test(line));
  if (extraRef && !references.some((item) => item.label === extraRef)) {
    references.push({ label: extraRef });
  }

  return {
    id: `bula-${slug}`,
    name: displayName,
    className: /bilastina/i.test(displayName) ? "Anti-histamínicos" : "Antimicrobianos",
    category: "Uso hospitalar",
    summary,
    sections,
    references,
  };
}

const baseDir = process.cwd();
const bibliotecaDir = path.join(baseDir, "Biblioteca");
const outputPath = path.join(baseDir, "src", "data", "bibliotecaMedicamentos.json");

if (!fs.existsSync(bibliotecaDir)) {
  console.error(`Pasta não encontrada: ${bibliotecaDir}`);
  process.exit(1);
}

const files = fs
  .readdirSync(bibliotecaDir)
  .filter((file) => file.toLowerCase().endsWith(".docx"))
  .sort((a, b) => a.localeCompare(b, "pt-BR"));

const posts = files.map((file) => parseDocx(path.join(bibliotecaDir, file)));

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(posts, null, 2)}\n`, "utf8");

console.log(`Gerado: ${outputPath}`);
console.log(`Medicamentos processados: ${posts.length}`);
