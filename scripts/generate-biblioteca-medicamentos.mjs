import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

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
  return /^(?:\d+(?:\.\d+)*[.)]?\s+).+/.test(line) || /^\d+\)\s+.+/.test(line) || /^refer[êe]ncias?\b/i.test(line);
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

function parseDocx(filePath) {
  const fileName = path.basename(filePath);
  const displayName = fileName.replace(/\.docx$/i, "").normalize("NFC").trim();
  const slug = toSlug(displayName);

  let text = execFileSync("textutil", ["-convert", "txt", "-stdout", filePath], {
    encoding: "utf8",
  });
  text = text.replace(/\r/g, "\n").replace(/\u2028/g, "\n");

  const lines = text.split("\n").map(cleanLine).filter(Boolean);

  const sections = [];
  let current = null;

  for (const line of lines) {
    if (isHeading(line)) {
      if (current) {
        if (!current.paragraphs.length) delete current.paragraphs;
        if (!current.bullets.length) delete current.bullets;
        sections.push(current);
      }
      current = { title: normalizeSectionTitle(line), paragraphs: [], bullets: [] };
      continue;
    }

    if (!current) current = { title: "Visão geral", paragraphs: [], bullets: [] };

    if (isBullet(line)) {
      current.bullets.push(line.replace(/^[•\-–]\s+/, "").trim());
    } else {
      current.paragraphs.push(line);
    }
  }

  if (current) {
    if (!current.paragraphs.length) delete current.paragraphs;
    if (!current.bullets.length) delete current.bullets;
    sections.push(current);
  }

  const summary =
    lines.find(
      (line) =>
        !isHeading(line) &&
        !isBullet(line) &&
        line.length > 90 &&
        !/^refer[êe]ncias?/i.test(line)
    ) ||
    lines.find((line) => !isHeading(line) && !isBullet(line)) ||
    `Monografia técnica de ${displayName}.`;

  const references = [{ label: `Fonte interna: ${fileName} (Biblioteca).` }];
  const extraRef = [...lines].reverse().find((line) => /uptodate|doi|acesso em|refer[êe]ncia/i.test(line));
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
