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
    items.push({
      medicamento,
      permitido: normalizeCell(row[1]),
      pausaDieta: normalizeCell(row[2]),
      observacao: normalizeCell(row[3]),
    });
  }
  return items;
}

function detectDelimiter(line: string): string {
  const commas = (line.match(/,/g) || []).length;
  const semicolons = (line.match(/;/g) || []).length;
  return semicolons > commas ? ";" : ",";
}

function parseCsv(text: string): string[][] {
  const cleaned = text.replace(/^\uFEFF/, "");
  const lines = cleaned.split(/\r?\n/).filter((line) => line.trim().length > 0);
  if (lines.length === 0) return [];
  const delimiter = detectDelimiter(lines[0]);

  return lines.map((line) => {
    const cells: string[] = [];
    let current = "";
    let inQuotes = false;
    for (let i = 0; i < line.length; i += 1) {
      const char = line[i];
      if (char === "\"") {
        if (inQuotes && line[i + 1] === "\"") {
          current += "\"";
          i += 1;
        } else {
          inQuotes = !inQuotes;
        }
        continue;
      }
      if (char === delimiter && !inQuotes) {
        cells.push(current);
        current = "";
        continue;
      }
      current += char;
    }
    cells.push(current);
    return cells.map((cell) => cell.trim());
  });
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
