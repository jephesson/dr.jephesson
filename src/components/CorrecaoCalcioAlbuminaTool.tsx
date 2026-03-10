"use client";

import { useMemo, useState } from "react";

function toNumber(value: string): number | null {
  if (!value.trim()) return null;
  const normalized = value.replace(",", ".");
  const num = Number(normalized);
  return Number.isFinite(num) ? num : null;
}

function formatNumber(value: number, digits = 1): string {
  return value.toFixed(digits).replace(".", ",");
}

function interpretCalcium(value: number): "baixo" | "normal" | "alto" {
  if (value < 8.5) return "baixo";
  if (value > 10.5) return "alto";
  return "normal";
}

export default function CorrecaoCalcioAlbuminaTool() {
  const [totalCalcium, setTotalCalcium] = useState("");
  const [albumin, setAlbumin] = useState("");

  const result = useMemo(() => {
    const calciumValue = toNumber(totalCalcium);
    const albuminValue = toNumber(albumin);

    if (calciumValue === null || albuminValue === null) return null;

    const corrected = calciumValue + 0.8 * (4 - albuminValue);

    return {
      corrected,
      interpretation: interpretCalcium(corrected),
    };
  }, [totalCalcium, albumin]);

  return (
    <div className="calcio-tool">
      <div className="calcio-card">
        <div className="calcio-grid">
          <div className="calcio-field">
            <label>Calcio total (mg/dL)</label>
            <input
              value={totalCalcium}
              onChange={(event) => setTotalCalcium(event.target.value)}
              placeholder="Ex.: 8,0"
            />
          </div>
          <div className="calcio-field">
            <label>Albumina (g/dL)</label>
            <input
              value={albumin}
              onChange={(event) => setAlbumin(event.target.value)}
              placeholder="Ex.: 2,0"
            />
          </div>
        </div>

        <p className="calcio-help">Formula utilizada: calcio corrigido = calcio total + 0,8 x (4 - albumina).</p>

        {result ? (
          <div className="calcio-results">
            <div className="calcio-result calcio-result--primary">
              <h4>Calcio corrigido</h4>
              <p>{formatNumber(result.corrected)} mg/dL</p>
            </div>
            <div className="calcio-result">
              <h4>Interpretacao</h4>
              <p>{result.interpretation}</p>
            </div>
          </div>
        ) : (
          <p className="calcio-help">Preencha calcio total e albumina para ver o resultado.</p>
        )}
      </div>

      <p className="calcio-disclaimer">
        Ferramenta educativa. A interpretacao e orientativa e nao substitui avaliacao clinica, calcio ionizado ou protocolo
        institucional.
      </p>
    </div>
  );
}
