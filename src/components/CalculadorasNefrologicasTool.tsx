"use client";

import { useMemo, useState } from "react";

type Sex = "F" | "M";

type TabKey = "ckd-epi" | "mdrd" | "cockcroft";

function toNumber(value: string): number | null {
  if (!value.trim()) return null;
  const normalized = value.replace(",", ".");
  const num = Number(normalized);
  return Number.isFinite(num) ? num : null;
}

function formatNumber(value: number, digits = 1): string {
  return value.toFixed(digits).replace(".", ",");
}

export default function CalculadorasNefrologicasTool() {
  const [tab, setTab] = useState<TabKey>("ckd-epi");
  const [age, setAge] = useState("");
  const [scr, setScr] = useState("");
  const [sex, setSex] = useState<Sex>("F");

  const [mdrdRaceFactor, setMdrdRaceFactor] = useState(false);

  const [weight, setWeight] = useState("");

  const ckdEpiResult = useMemo(() => {
    const ageValue = toNumber(age);
    const scrValue = toNumber(scr);
    if (!ageValue || !scrValue) return null;

    const k = sex === "F" ? 0.7 : 0.9;
    const alpha = sex === "F" ? -0.241 : -0.302;
    const sexFactor = sex === "F" ? 1.012 : 1;

    const minRatio = Math.min(scrValue / k, 1);
    const maxRatio = Math.max(scrValue / k, 1);

    const egfr =
      142 *
      Math.pow(minRatio, alpha) *
      Math.pow(maxRatio, -1.2) *
      Math.pow(0.9938, ageValue) *
      sexFactor;

    return egfr;
  }, [age, scr, sex]);

  const mdrdResult = useMemo(() => {
    const ageValue = toNumber(age);
    const scrValue = toNumber(scr);
    if (!ageValue || !scrValue) return null;

    let egfr = 175 * Math.pow(scrValue, -1.154) * Math.pow(ageValue, -0.203);
    if (sex === "F") egfr *= 0.742;
    if (mdrdRaceFactor) egfr *= 1.212;
    return egfr;
  }, [age, scr, sex, mdrdRaceFactor]);

  const cockcroftResult = useMemo(() => {
    const ageValue = toNumber(age);
    const scrValue = toNumber(scr);
    const weightValue = toNumber(weight);
    if (!ageValue || !scrValue || !weightValue) return null;

    let crcl = ((140 - ageValue) * weightValue) / (72 * scrValue);
    if (sex === "F") crcl *= 0.85;
    return crcl;
  }, [age, scr, weight, sex]);

  return (
    <div className="nephro-tool">
      <div className="nephro-tabs">
        <button
          type="button"
          className={`nephro-tab ${tab === "ckd-epi" ? "nephro-tab--active" : ""}`}
          onClick={() => setTab("ckd-epi")}
        >
          CKD-EPI 2021
        </button>
        <button
          type="button"
          className={`nephro-tab ${tab === "mdrd" ? "nephro-tab--active" : ""}`}
          onClick={() => setTab("mdrd")}
        >
          MDRD 4 variáveis
        </button>
        <button
          type="button"
          className={`nephro-tab ${tab === "cockcroft" ? "nephro-tab--active" : ""}`}
          onClick={() => setTab("cockcroft")}
        >
          Cockcroft-Gault
        </button>
      </div>

      <div className="nephro-card">
        <div className="nephro-grid">
          <div className="nephro-field">
            <label>Idade (anos)</label>
            <input value={age} onChange={(e) => setAge(e.target.value)} placeholder="Ex.: 62" />
          </div>
          <div className="nephro-field">
            <label>Creatinina sérica (mg/dL)</label>
            <input value={scr} onChange={(e) => setScr(e.target.value)} placeholder="Ex.: 1,3" />
          </div>
          <div className="nephro-field">
            <label>Sexo biológico</label>
            <select value={sex} onChange={(e) => setSex(e.target.value as Sex)}>
              <option value="F">Feminino</option>
              <option value="M">Masculino</option>
            </select>
          </div>
          {tab === "cockcroft" ? (
            <div className="nephro-field">
              <label>Peso (kg)</label>
              <input value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Ex.: 70" />
            </div>
          ) : null}
        </div>

        {tab === "mdrd" ? (
          <label className="nephro-checkbox">
            <input
              type="checkbox"
              checked={mdrdRaceFactor}
              onChange={(e) => setMdrdRaceFactor(e.target.checked)}
            />
            Aplicar fator raça (1,212) do MDRD clássico
          </label>
        ) : null}

        <div className="nephro-results">
          {tab === "ckd-epi" ? (
            <div className="nephro-result">
              <h4>eGFR CKD-EPI 2021</h4>
              <p>{ckdEpiResult ? `${formatNumber(ckdEpiResult)} mL/min/1,73 m²` : "Preencha os campos"}</p>
            </div>
          ) : null}

          {tab === "mdrd" ? (
            <div className="nephro-result">
              <h4>eGFR MDRD</h4>
              <p>{mdrdResult ? `${formatNumber(mdrdResult)} mL/min/1,73 m²` : "Preencha os campos"}</p>
            </div>
          ) : null}

          {tab === "cockcroft" ? (
            <div className="nephro-result">
              <h4>ClCr (Cockcroft-Gault)</h4>
              <p>{cockcroftResult ? `${formatNumber(cockcroftResult)} mL/min` : "Preencha os campos"}</p>
            </div>
          ) : null}
        </div>
      </div>

      <div className="nephro-explain">
        <h3>Como escolher</h3>
        <ul>
          <li>
            <strong>CKD-EPI 2021:</strong> recomendado para estimar eGFR em adultos e estadiar função renal. Melhor
            desempenho em faixas de GFR mais altas.
          </li>
          <li>
            <strong>MDRD:</strong> equação mais antiga, tende a subestimar GFR quando o valor é alto. Útil para comparação
            com relatórios ou estudos antigos.
          </li>
          <li>
            <strong>Cockcroft-Gault:</strong> gera depuração de creatinina em mL/min (não ajustada por área de superfície
            corporal). Muito usada para ajuste de dose em bulas que ainda referenciam essa fórmula, mas depende do peso e
            pode variar em extremos.
          </li>
        </ul>
      </div>

      <div className="nephro-notes">
        <div>
          <h4>Vantagens e desvantagens</h4>
          <ul>
            <li>
              CKD-EPI 2021: mais atual e sem fator raça; requer creatinina padronizada (IDMS) para melhor precisão.
            </li>
            <li>MDRD: simples, mas perde precisão em GFR mais altos.</li>
            <li>Cockcroft-Gault: útil para dose, porém sensível ao peso e à estabilidade da creatinina.</li>
          </ul>
        </div>
        <p className="nephro-disclaimer">
          Ferramenta educativa. Não substitui avaliação clínica, protocolos institucionais ou orientação do prescritor.
        </p>
      </div>
    </div>
  );
}
