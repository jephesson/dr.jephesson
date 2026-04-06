"use client";

import { useMemo, useState } from "react";

type Diluente = "sf" | "sg5";
type ConcentracaoFinal = 5 | 10;
type RestricaoHidrica = "nao" | "sim";
type MedicationId = "vancomicina-blau-500" | "meropenem-500";

type MedicationOption = {
  id: MedicationId;
  nome: string;
  apresentacao: string;
  reconstituicao: string;
  concentracaoReconstituidaMgMl: number;
  diluentes: Diluente[];
  via: string;
  tipoCalculo: "concentracao" | "restricao";
  velocidadeMaximaMgMin?: number;
};

const MEDICATIONS: MedicationOption[] = [
  {
    id: "vancomicina-blau-500",
    nome: "Vancomicina",
    apresentacao: "500 mg (Blau)",
    reconstituicao: "10 mL de agua para injetaveis por frasco de 500 mg",
    concentracaoReconstituidaMgMl: 50,
    diluentes: ["sf", "sg5"],
    via: "CVC",
    tipoCalculo: "concentracao",
    velocidadeMaximaMgMin: 15,
  },
  {
    id: "meropenem-500",
    nome: "Meropenem",
    apresentacao: "500 mg",
    reconstituicao: "10 mL de agua para injetaveis ou SF 0,9% por frasco de 500 mg",
    concentracaoReconstituidaMgMl: 50,
    diluentes: ["sf", "sg5"],
    via: "EV",
    tipoCalculo: "restricao",
  },
];

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
  const [medicationId, setMedicationId] = useState<MedicationId>("vancomicina-blau-500");
  const [dose, setDose] = useState("");
  const [diluente, setDiluente] = useState<Diluente>("sf");
  const [concentracaoFinal, setConcentracaoFinal] = useState<ConcentracaoFinal>(5);
  const [restricaoHidrica, setRestricaoHidrica] = useState<RestricaoHidrica>("nao");

  const medication = MEDICATIONS.find((item) => item.id === medicationId) ?? MEDICATIONS[0];

  const result = useMemo(() => {
    const doseMg = toNumber(dose);

    if (doseMg === null || doseMg <= 0) return null;

    const frascos = Math.ceil(doseMg / 500);
    const aguaReconstituicaoMl = frascos * 10;
    const volumeAspiradoMl = doseMg / medication.concentracaoReconstituidaMgMl;
    const volumeFinalMl =
      medication.tipoCalculo === "concentracao"
        ? doseMg / concentracaoFinal
        : restricaoHidrica === "sim"
          ? (doseMg / 1000) * 20
          : (doseMg / 1000) * 50;
    const volumeDiluenteMl = Math.max(volumeFinalMl - volumeAspiradoMl, 0);
    const tempoMinimoMin =
      medication.tipoCalculo === "concentracao"
        ? doseMg / (medication.velocidadeMaximaMgMin ?? 15)
        : (doseMg / 1000) * 30;
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
  }, [
    concentracaoFinal,
    dose,
    medication.concentracaoReconstituidaMgMl,
    medication.tipoCalculo,
    medication.velocidadeMaximaMgMin,
    restricaoHidrica,
  ]);

  return (
    <div className="infusao-tool">
      <div className="infusao-card">
        <div className="infusao-grid">
          <div className="infusao-field">
            <label>Medicamento</label>
            <select
              value={medicationId}
              onChange={(event) => {
                const selected = event.target.value as MedicationId;
                setMedicationId(selected);
                setDiluente("sf");
                setConcentracaoFinal(5);
                setRestricaoHidrica("nao");
              }}
            >
              {MEDICATIONS.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.nome} {item.apresentacao}
                </option>
              ))}
            </select>
          </div>

          <div className="infusao-field">
            <label>Dose prescrita (mg)</label>
            <input value={dose} onChange={(event) => setDose(event.target.value)} placeholder="Ex.: 1000" />
          </div>

          <div className="infusao-field">
            <label>Diluente</label>
            <select value={diluente} onChange={(event) => setDiluente(event.target.value as Diluente)}>
              {medication.diluentes.includes("sf") ? <option value="sf">SF 0,9%</option> : null}
              {medication.diluentes.includes("sg5") ? <option value="sg5">SG 5%</option> : null}
            </select>
          </div>

          <div className="infusao-field">
            {medication.tipoCalculo === "concentracao" ? (
              <>
                <label>Concentração final</label>
                <select
                  value={String(concentracaoFinal)}
                  onChange={(event) => setConcentracaoFinal(Number(event.target.value) as ConcentracaoFinal)}
                >
                  <option value="5">Padrão 5 mg/mL</option>
                  <option value="10">Restrição hídrica 10 mg/mL</option>
                </select>
              </>
            ) : (
              <>
                <label>Estratégia de diluição</label>
                <select
                  value={restricaoHidrica}
                  onChange={(event) => setRestricaoHidrica(event.target.value as RestricaoHidrica)}
                >
                  <option value="nao">Sem restrição hídrica (1 g em 50 mL)</option>
                  <option value="sim">Restrição hídrica (1 g em 20 mL)</option>
                </select>
              </>
            )}
          </div>
        </div>

        <div className="infusao-static">
          <div className="infusao-static__card">
            <h4>Reconstituição</h4>
            <p>{medication.reconstituicao}.</p>
            <p>Concentração após reconstituição: {formatNumber(medication.concentracaoReconstituidaMgMl, 0)} mg/mL.</p>
          </div>

          <div className="infusao-static__card">
            <h4>Parâmetros fixos</h4>
            <p>
              Diluentes compatíveis: {medication.diluentes.map((item) => getDiluenteLabel(item)).join(" ou ")}.
            </p>
            <p>Via: {medication.via}.</p>
            <p>
              {medication.tipoCalculo === "concentracao"
                ? `Velocidade máxima: até ${formatNumber(medication.velocidadeMaximaMgMin ?? 15, 0)} mg/min.`
                : "Infusão: 30 minutos para cada 1 g."}
            </p>
            {medication.id === "meropenem-500" ? (
              <>
                <p>Hipodermóclise: 60 minutos.</p>
                <p>Estabilidade após diluição: 3 h em temperatura ambiente ou 15 h sob refrigeração.</p>
              </>
            ) : null}
          </div>
        </div>

        {result ? (
          <>
            <div className="infusao-results">
              <div className="infusao-result infusao-result--primary">
                <h4>Tempo mínimo de infusão</h4>
                <p>{formatDuration(result.tempoMinimoMin)}</p>
                <small>
                  {medication.tipoCalculo === "concentracao"
                    ? `Limite de ${formatNumber(medication.velocidadeMaximaMgMin ?? 15, 0)} mg/min`
                    : "30 min para cada 1 g"}
                </small>
              </div>

              <div className="infusao-result">
                <h4>Velocidade máxima da bomba</h4>
                <p>{formatNumber(result.velocidadeMlHora, 0)} mL/h</p>
                <small>
                  {medication.tipoCalculo === "concentracao"
                    ? `${formatNumber(medication.velocidadeMaximaMgMin ?? 15, 0)} mg/min`
                    : restricaoHidrica === "sim"
                      ? "1 g em 20 mL"
                      : "1 g em 50 mL"}
                </small>
              </div>

              <div className="infusao-result">
                <h4>Volume final para infusão</h4>
                <p>{formatNumber(result.volumeFinalMl, 0)} mL</p>
                <small>
                  {medication.tipoCalculo === "concentracao"
                    ? `${formatNumber(concentracaoFinal, 0)} mg/mL`
                    : restricaoHidrica === "sim"
                      ? "Restrição hídrica"
                      : "Sem restrição hídrica"}
                </small>
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
                  <li>
                    Frascos necessários: {result.frascos} frasco(s) de {medication.apresentacao}.
                  </li>
                  <li>Água para reconstituição: {formatNumber(result.aguaReconstituicaoMl, 0)} mL no total.</li>
                  <li>Volume a aspirar da solução reconstituída: {formatNumber(result.volumeAspiradoMl, 1)} mL.</li>
                  <li>Volume final da preparação: {formatNumber(result.volumeFinalMl, 0)} mL.</li>
                </ul>
              </div>

              <div className="infusao-detail-card">
                <h4>Resumo prático</h4>
                <ul>
                  <li>
                    Medicamento selecionado: {medication.nome} {medication.apresentacao}.
                  </li>
                  <li>Dose prescrita: {formatNumber(result.doseMg, 0)} mg.</li>
                  <li>Diluente selecionado: {getDiluenteLabel(diluente)}.</li>
                  <li>
                    {medication.tipoCalculo === "concentracao"
                      ? `Concentração final: ${formatNumber(concentracaoFinal, 0)} mg/mL.`
                      : `Estratégia: ${
                          restricaoHidrica === "sim" ? "restrição hídrica (1 g em 20 mL)" : "sem restrição hídrica (1 g em 50 mL)"
                        }.`}
                  </li>
                  <li>Administrar via {medication.via}.</li>
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
        Ferramenta educativa para cálculo da velocidade de infusão e diluição. Selecione o medicamento e valide
        concentração final, acesso venoso e protocolo institucional antes da administração.
      </p>
    </div>
  );
}
