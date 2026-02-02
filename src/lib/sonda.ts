import fs from "fs/promises";
import path from "path";
export type SondaItem = {
  medicamento: string;
  permitido: string;
  pausaDieta: string;
  observacao: string;
};

export type SondaDataResult = {
  items: SondaItem[];
  error?: "missing-file" | "invalid-format";
};

const DATA_FILE = path.join(process.cwd(), "public", "sonda.csv");

function normalizeCell(value: unknown): string {
  if (value === null || value === undefined) return "";
  return String(value).trim();
}

function isHeaderRow(row: string[]): boolean {
  const first = (row[0] || "").toLowerCase();
  return first.includes("medicamento");
}

function toItems(rows: string[][]): SondaItem[] {
  const items: SondaItem[] = [];
  for (const row of rows) {
    if (!row || row.length === 0) continue;
    if (isHeaderRow(row)) continue;
    const medicamento = normalizeCell(row[0]);
    if (!medicamento) continue;
    const permitido = normalizeCell(row[1]);
    const pausaDieta = normalizeCell(row[2]);
    let observacao = normalizeCell(row[3]);
    if (row.length > 4) {
      observacao = normalizeCell(row.slice(3).join(" "));
    }
    items.push({ medicamento, permitido, pausaDieta, observacao });
  }
  return items;
}

function detectDelimiter(text: string): string {
  const firstLine = text.split(/\r?\n/)[0] ?? "";
  const candidates = [",", ";", "\t", "|"];
  let best = ";";
  let bestCount = -1;
  for (const candidate of candidates) {
    const count = firstLine.split(candidate).length - 1;
    if (count > bestCount) {
      best = candidate;
      bestCount = count;
    }
  }
  return best;
}

function parseCsv(text: string): string[][] {
  const cleaned = text.replace(/^\uFEFF/, "");
  if (!cleaned.trim()) return [];
  const delimiter = detectDelimiter(cleaned);
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < cleaned.length; i += 1) {
    const char = cleaned[i];
    if (char === "\"") {
      if (inQuotes && cleaned[i + 1] === "\"") {
        field += "\"";
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (!inQuotes && char === delimiter) {
      row.push(field);
      field = "";
      continue;
    }

    if (!inQuotes && (char === "\n" || char === "\r")) {
      if (char === "\r" && cleaned[i + 1] === "\n") {
        i += 1;
      }
      row.push(field);
      field = "";
      if (row.some((cell) => cell.trim().length > 0)) {
        rows.push(row.map((cell) => cell.trim()));
      }
      row = [];
      continue;
    }

    field += char;
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field);
    if (row.some((cell) => cell.trim().length > 0)) {
      rows.push(row.map((cell) => cell.trim()));
    }
  }

  return rows;
}

function isXlsx(buffer: Buffer): boolean {
  return buffer.length >= 2 && buffer[0] === 0x50 && buffer[1] === 0x4b;
}

export async function loadSondaData(): Promise<SondaDataResult> {
  try {
    const buffer = await fs.readFile(DATA_FILE);
    if (isXlsx(buffer)) {
      return { items: [], error: "invalid-format" };
    }
    const text = buffer.toString("utf8");
    return { items: toItems(parseCsv(text)) };
  } catch (error) {
    console.error(error);
    return { items: [], error: "missing-file" };
  }
}
