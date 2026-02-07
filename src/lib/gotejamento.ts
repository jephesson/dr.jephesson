import fs from "fs/promises";
import path from "path";
import { parseCsv } from "@/lib/csv";

export type GotejamentoItem = {
  medicamento: string;
  concentracaoLabel: string;
  gotasPorMl: number;
  volumeFrascoMl: number;
  valorPorMl: number;
  unidade: string;
};

export type GotejamentoDataResult = {
  items: GotejamentoItem[];
  error?: "missing-file" | "invalid-format";
};

const DATA_FILE = path.join(process.cwd(), "public", "callculo_gotejamento.csv");

function normalizeCell(value: unknown): string {
  if (value === null || value === undefined) return "";
  return String(value).trim();
}

function toNumber(value: string): number | null {
  if (!value) return null;
  const normalized = value.replace(",", ".");
  const num = Number(normalized);
  return Number.isFinite(num) ? num : null;
}

function parseDropsPerMl(raw: string): number | null {
  const direct = toNumber(raw);
  if (direct) return direct;
  const match = raw.match(/(\d+[\.,]?\d*)\s*gotas/i);
  if (match) return toNumber(match[1]);
  return null;
}

function isHeaderRow(row: string[]): boolean {
  const first = (row[0] || "").toLowerCase();
  return first.includes("medicamento");
}

function toItems(rows: string[][]): GotejamentoItem[] {
  const items: GotejamentoItem[] = [];
  for (const row of rows) {
    if (!row || row.length === 0) continue;
    if (isHeaderRow(row)) continue;

    const medicamento = normalizeCell(row[0]);
    if (!medicamento) continue;

    const concentracaoLabel = normalizeCell(row[1]);
    const gotasRaw = normalizeCell(row[2]);
    const volumeRaw = normalizeCell(row[3]);
    const valorRaw = normalizeCell(row[4]);
    const unidade = normalizeCell(row[5]);

    const gotasPorMl = parseDropsPerMl(gotasRaw) ?? 0;
    const volumeFrascoMl = toNumber(volumeRaw) ?? 0;
    const valorPorMl = toNumber(valorRaw) ?? 0;

    items.push({
      medicamento,
      concentracaoLabel,
      gotasPorMl,
      volumeFrascoMl,
      valorPorMl,
      unidade,
    });
  }
  return items;
}

function isXlsx(buffer: Buffer): boolean {
  return buffer.length >= 2 && buffer[0] === 0x50 && buffer[1] === 0x4b;
}

export async function loadGotejamentoData(): Promise<GotejamentoDataResult> {
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
