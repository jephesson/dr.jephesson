"use client";

import { useMemo, useState } from "react";

type Diluente = "sf" | "sg5";
type ConcentracaoFinal = 5 | 10;

function toNumber(value: string): number | null {
  if (!value.trim()) return null;
  const normalized = value.replace(",", ".");
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : null;
}

function formatNumber(value: number, digits = 1): string {
  return value.toFixed(digits).replace(".", ",");
}

function formatDuration(totalMinutes: number): string {
  const rounded = Math.round(totalMinutes);
  const hours = Math.floor(rounded / 60);
  const minutes = rounded % 60;

  if (hours === 0) return `${minutes} min`;
  if (minutes === 0) return `${hours} h`;
  return `${hours} h ${minutes} min`;
}

function getDiluenteLabel(diluente: Diluente) {
  return diluente === "sg5" ? "SG 5%" : "SF 0,9%";
}

export default function VelocidadeInfusaoTool() {
  const [dose, setDose] = useState("");
  const [diluente, setDiluente] = useState<Diluente>("sf");
  const [concentracaoFinal, setConcentracaoFinal] = useState<ConcentracaoFinal>(5);

  const result = useMemo(() => {
    const doseMg = toNumber(dose);

    if (doseMg === null || doseMg <= 0) return null;

    const frascos = Math.ceil(doseMg / 500);
    const aguaReconstituicaoMl = frascos * 10;
    const volumeAspiradoMl = doseMg / 50;
    const volumeFinalMl = doseMg / concentracaoFinal;
    const volumeDiluenteMl = Math.max(volumeFinalMl - volumeAspiradoMl, 0);
    const tempoMinimoMin = doseMg / 15;
    const velocidadeMlHora = (volumeFinalMl / tempoMinimoMin) * 60;

    return {
      doseMg,
      frascos,
      aguaReconstituicaoMl,
      volumeAspiradoMl,
      volumeFinalMl,
      volumeDiluenteMl,
      tempoMinimoMin,
      velocidadeMlHora,
    };
  }, [concentracaoFinal, dose]);

  return (
    <div className="infusao-tool">
      <div className="infusao-card">
        <div className="infusao-grid">
          <div className="infusao-field">
            <label>Medicamento</label>
            <select value="vanco-blau-500" disabled>
              <option value="vanco-blau-500">Vancomicina 500 mg (Blau)</option>
            </select>
          </div>

          <div className="infusao-field">
            <label>Dose prescrita (mg)</label>
            <input value={dose} onChange={(event) => setDose(event.target.value)} placeholder="Ex.: 1000" />
          </div>

          <div className="infusao-field">
            <label>Diluente</label>
            <select value={diluente} onChange={(event) => setDiluente(event.target.value as Diluente)}>
              <option value="sf">SF 0,9%</option>
              <option value="sg5">SG 5%</option>
            </select>
          </div>

          <div className="infusao-field">
            <label>Concentração final</label>
            <select
              value={String(concentracaoFinal)}
              onChange={(event) => setConcentracaoFinal(Number(event.target.value) as ConcentracaoFinal)}
            >
              <option value="5">Padrão 5 mg/mL</option>
              <option value="10">Restrição hídrica 10 mg/mL</option>
            </select>
          </div>
        </div>

        <div className="infusao-static">
          <div className="infusao-static__card">
            <h4>Reconstituição</h4>
            <p>10 mL de água para injetáveis para cada frasco de 500 mg.</p>
            <p>Concentração após reconstituição: 50 mg/mL.</p>
          </div>

          <div className="infusao-static__card">
            <h4>Parâmetros fixos</h4>
            <p>Diluente compatível: {getDiluenteLabel(diluente)}.</p>
            <p>Via: CVC.</p>
            <p>Velocidade máxima: até 15 mg/min.</p>
          </div>
        </div>

        {result ? (
          <>
            <div className="infusao-results">
              <div className="infusao-result infusao-result--primary">
                <h4>Tempo mínimo de infusão</h4>
                <p>{formatDuration(result.tempoMinimoMin)}</p>
                <small>Limite de 15 mg/min</small>
              </div>

              <div className="infusao-result">
                <h4>Velocidade máxima da bomba</h4>
                <p>{formatNumber(result.velocidadeMlHora, 0)} mL/h</p>
                <small>{formatNumber(15, 0)} mg/min</small>
              </div>

              <div className="infusao-result">
                <h4>Volume final para infusão</h4>
                <p>{formatNumber(result.volumeFinalMl, 0)} mL</p>
                <small>{formatNumber(concentracaoFinal, 0)} mg/mL</small>
              </div>

              <div className="infusao-result">
                <h4>Volume do diluente</h4>
                <p>{formatNumber(result.volumeDiluenteMl, 0)} mL</p>
                <small>{getDiluenteLabel(diluente)}</small>
              </div>
            </div>

            <div className="infusao-details">
              <div className="infusao-detail-card">
                <h4>Preparo calculado</h4>
                <ul>
                  <li>Frascos necessários: {result.frascos} frasco(s) de 500 mg.</li>
                  <li>Água para reconstituição: {formatNumber(result.aguaReconstituicaoMl, 0)} mL no total.</li>
                  <li>Volume a aspirar da solução reconstituída: {formatNumber(result.volumeAspiradoMl, 1)} mL.</li>
                  <li>Volume final da preparação: {formatNumber(result.volumeFinalMl, 0)} mL.</li>
                </ul>
              </div>

              <div className="infusao-detail-card">
                <h4>Resumo prático</h4>
                <ul>
                  <li>Dose prescrita: {formatNumber(result.doseMg, 0)} mg.</li>
                  <li>Diluente selecionado: {getDiluenteLabel(diluente)}.</li>
                  <li>Concentração final: {formatNumber(concentracaoFinal, 0)} mg/mL.</li>
                  <li>Administrar via CVC.</li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <p className="infusao-help">
            Informe a dose prescrita para calcular reconstituição, volume final, diluente e tempo mínimo de infusão.
          </p>
        )}
      </div>

      <p className="infusao-disclaimer">
        Ferramenta educativa para vancomicina 500 mg (Blau). Validar concentração final, acesso venoso e protocolo
        institucional antes da administração.
      </p>
    </div>
  );
}
