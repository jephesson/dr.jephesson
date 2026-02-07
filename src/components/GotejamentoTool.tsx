"use client";

import { useMemo, useState } from "react";
import type { GotejamentoItem } from "@/lib/gotejamento";

function toNumber(value: string): number | null {
  if (!value.trim()) return null;
  const normalized = value.replace(",", ".");
  const num = Number(normalized);
  return Number.isFinite(num) ? num : null;
}

function formatNumber(value: number, digits = 1): string {
  return value.toFixed(digits).replace(".", ",");
}

function getUnitLabel(unit: string): string {
  if (!unit) return "mg";
  const cleaned = unit.trim();
  if (cleaned.includes("/")) return cleaned.split("/")[0];
  return cleaned;
}

type Props = {
  items: GotejamentoItem[];
};

export default function GotejamentoTool({ items }: Props) {
  const sorted = useMemo(
    () => [...items].sort((a, b) => a.medicamento.localeCompare(b.medicamento, "pt-BR")),
    [items]
  );

  const [selected, setSelected] = useState(sorted[0]?.medicamento ?? "");
  const [dropsPerDose, setDropsPerDose] = useState("");
  const [frequencyPerDay, setFrequencyPerDay] = useState("");
  const [days, setDays] = useState("");

  const selectedItem = useMemo(
    () => sorted.find((item) => item.medicamento === selected) ?? null,
    [sorted, selected]
  );

  const results = useMemo(() => {
    if (!selectedItem) return null;
    const drops = toNumber(dropsPerDose);
    const freq = toNumber(frequencyPerDay);
    const daysValue = toNumber(days);

    if (!drops || !freq || !daysValue) return null;
    if (!selectedItem.gotasPorMl || !selectedItem.volumeFrascoMl || !selectedItem.valorPorMl) return null;

    const unitPerDrop = selectedItem.valorPorMl / selectedItem.gotasPorMl;
    const dosePerTake = drops * unitPerDrop;
    const dosePerDay = dosePerTake * freq;

    const totalDrops = drops * freq * daysValue;
    const totalVolumeMl = totalDrops / selectedItem.gotasPorMl;
    const bottles = Math.ceil(totalVolumeMl / selectedItem.volumeFrascoMl);

    const intervalHours = 24 / freq;

    return {
      unitPerDrop,
      dosePerTake,
      dosePerDay,
      totalDrops,
      totalVolumeMl,
      bottles,
      intervalHours,
    };
  }, [selectedItem, dropsPerDose, frequencyPerDay, days]);

  return (
    <div className="gotejamento-tool">
      <div className="gotejamento-form">
        <div className="gotejamento-field">
          <label>Medicamento</label>
          <select value={selected} onChange={(e) => setSelected(e.target.value)}>
            {sorted.map((item) => (
              <option key={item.medicamento} value={item.medicamento}>
                {item.medicamento}
              </option>
            ))}
          </select>
        </div>
        {selectedItem ? (
          <div className="gotejamento-meta">
            <span>{selectedItem.concentracaoLabel || "Concentração não informada"}</span>
            <span>{selectedItem.gotasPorMl || "?"} gotas/mL</span>
            <span>{selectedItem.volumeFrascoMl || "?"} mL por frasco</span>
          </div>
        ) : null}

        <div className="gotejamento-grid">
          <div className="gotejamento-field">
            <label>Gotas por tomada</label>
            <input value={dropsPerDose} onChange={(e) => setDropsPerDose(e.target.value)} placeholder="Ex.: 20" />
          </div>
          <div className="gotejamento-field">
            <label>Frequência (vezes/dia)</label>
            <input value={frequencyPerDay} onChange={(e) => setFrequencyPerDay(e.target.value)} placeholder="Ex.: 4" />
          </div>
          <div className="gotejamento-field">
            <label>Dias de tratamento</label>
            <input value={days} onChange={(e) => setDays(e.target.value)} placeholder="Ex.: 7" />
          </div>
        </div>
      </div>

      <div className="gotejamento-results">
        {results && selectedItem ? (
          <div className="gotejamento-card">
            <h4>Resumo da prescrição</h4>
            <p>
              {formatNumber(results.dosePerTake, 1)} {getUnitLabel(selectedItem.unidade)} por tomada • {formatNumber(results.intervalHours, 1)} h
              entre doses
            </p>
            <div className="gotejamento-stats">
              <div>
                <span>Dose diária</span>
                <strong>
                  {formatNumber(results.dosePerDay, 1)} {getUnitLabel(selectedItem.unidade)}/dia
                </strong>
              </div>
              <div>
                <span>Gotas totais</span>
                <strong>{formatNumber(results.totalDrops, 0)} gotas</strong>
              </div>
              <div>
                <span>Volume total</span>
                <strong>{formatNumber(results.totalVolumeMl, 1)} mL</strong>
              </div>
              <div>
                <span>Frascos necessários</span>
                <strong>{results.bottles} frascos</strong>
              </div>
            </div>
          </div>
        ) : (
          <p className="gotejamento-empty">Preencha os dados para calcular a dose e os frascos necessários.</p>
        )}

        <p className="gotejamento-disclaimer">
          Arredondamento sempre para cima. Ferramenta educativa, não substitui validação farmacêutica.
        </p>
      </div>
    </div>
  );
}
