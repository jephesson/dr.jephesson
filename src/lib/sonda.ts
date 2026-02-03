import fs from "fs/promises";
import path from "path";
import { parseCsv } from "@/lib/csv";
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

// CSV parser lives in lib/csv.ts

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
