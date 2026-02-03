"use client";

import { useMemo, useState } from "react";

type TabKey = "vale" | "auc";

function toNumber(value: string): number | null {
  if (!value.trim()) return null;
  const normalized = value.replace(",", ".");
  const num = Number(normalized);
  return Number.isFinite(num) ? num : null;
}

function formatNumber(value: number, digits = 2): string {
  return value.toFixed(digits).replace(".", ",");
}

export default function VancocinemiaTool() {
  const [tab, setTab] = useState<TabKey>("vale");

  const [troughMeasured, setTroughMeasured] = useState("");
  const [troughTarget, setTroughTarget] = useState("");
  const [currentTdd, setCurrentTdd] = useState("");
  const [intervalHours, setIntervalHours] = useState("");

  const [c1, setC1] = useState("");
  const [t1, setT1] = useState("");
  const [c2, setC2] = useState("");
  const [t2, setT2] = useState("");
  const [infusionTime, setInfusionTime] = useState("");
  const [tau, setTau] = useState("");

  const troughResult = useMemo(() => {
    const measured = toNumber(troughMeasured);
    const target = toNumber(troughTarget);
    const tdd = toNumber(currentTdd);
    const interval = toNumber(intervalHours);
    if (!measured || !target || !tdd) return null;
    const newTdd = (tdd * target) / measured;
    const dosePerAdmin = interval ? (newTdd * interval) / 24 : null;
    return { newTdd, dosePerAdmin };
  }, [troughMeasured, troughTarget, currentTdd, intervalHours]);

  const aucResult = useMemo(() => {
    const c1Value = toNumber(c1);
    const t1Value = toNumber(t1);
    const c2Value = toNumber(c2);
    const t2Value = toNumber(t2);
    const infusion = toNumber(infusionTime);
    const tauValue = toNumber(tau);

    if (!c1Value || !t1Value || !c2Value || !t2Value || !infusion || !tauValue) return null;
    if (t2Value <= t1Value) return null;
    if (tauValue <= infusion) return null;

    const k = Math.log(c1Value / c2Value) / (t2Value - t1Value);
    if (!Number.isFinite(k) || k <= 0) return null;

    const halfLife = 0.693 / k;
    const cMax = c1Value / Math.exp(-k * t1Value);
    const cMin = cMax * Math.exp(-k * (tauValue - infusion));
    const aucInf = infusion * (cMax + cMin) / 2;
    const aucElim = (cMax - cMin) / k;
    const auc24 = (aucInf + aucElim) * (24 / tauValue);

    return { k, halfLife, cMax, cMin, aucInf, aucElim, auc24 };
  }, [c1, t1, c2, t2, infusionTime, tau]);

  return (
    <div className="vanco-tool">
      <div className="vanco-tabs">
        <button
          type="button"
          className={`vanco-tab ${tab === "vale" ? "vanco-tab--active" : ""}`}
          onClick={() => setTab("vale")}
        >
          Com 1 exame (vale)
        </button>
        <button
          type="button"
          className={`vanco-tab ${tab === "auc" ? "vanco-tab--active" : ""}`}
          onClick={() => setTab("auc")}
        >
          AUC com 2 medições
        </button>
      </div>

      {tab === "vale" ? (
        <div className="vanco-card">
          <h3 className="text-lg font-semibold" style={{ color: "#0b1422" }}>
            Ajuste com um exame (vale)
          </h3>
          <p className="vanco-help">
            Informe o vale medido e o alvo desejado. O cálculo considera estabilidade renal e o mesmo intervalo entre doses.
          </p>

          <div className="vanco-grid">
            <div className="vanco-field">
              <label>Vale medido (mg/L)</label>
              <input value={troughMeasured} onChange={(e) => setTroughMeasured(e.target.value)} placeholder="Ex.: 12" />
            </div>
            <div className="vanco-field">
              <label>Vale alvo (mg/L)</label>
              <input value={troughTarget} onChange={(e) => setTroughTarget(e.target.value)} placeholder="Ex.: 15" />
            </div>
            <div className="vanco-field">
              <label>Dose diária total atual (mg/dia)</label>
              <input value={currentTdd} onChange={(e) => setCurrentTdd(e.target.value)} placeholder="Ex.: 2000" />
            </div>
            <div className="vanco-field">
              <label>Intervalo entre doses (h) (opcional)</label>
              <input value={intervalHours} onChange={(e) => setIntervalHours(e.target.value)} placeholder="Ex.: 12" />
            </div>
          </div>

          {troughResult ? (
            <div className="vanco-results">
              <div className="vanco-result vanco-result--primary">
                <h4>Nova dose diária total</h4>
                <p>{formatNumber(troughResult.newTdd, 0)} mg/dia</p>
              </div>
              {troughResult.dosePerAdmin ? (
                <div className="vanco-result">
                  <h4>Dose por administração</h4>
                  <p>{formatNumber(troughResult.dosePerAdmin, 0)} mg</p>
                </div>
              ) : null}
            </div>
          ) : (
            <p className="vanco-help">Preencha os campos para ver o resultado.</p>
          )}
        </div>
      ) : (
        <div className="vanco-card">
          <h3 className="text-lg font-semibold" style={{ color: "#0b1422" }}>
            AUC com duas medições
          </h3>
          <p className="vanco-help">
            Informe duas concentrações no mesmo intervalo de dose, com os tempos após o fim da infusão.
          </p>

          <div className="vanco-grid">
            <div className="vanco-field">
              <label>Concentração 1 (C1, pós-infusão) mg/L</label>
              <input value={c1} onChange={(e) => setC1(e.target.value)} placeholder="Ex.: 30" />
            </div>
            <div className="vanco-field">
              <label>Tempo da C1 após fim da infusão (h)</label>
              <input value={t1} onChange={(e) => setT1(e.target.value)} placeholder="Ex.: 1" />
            </div>
            <div className="vanco-field">
              <label>Concentração 2 (C2, mais tardia) mg/L</label>
              <input value={c2} onChange={(e) => setC2(e.target.value)} placeholder="Ex.: 12" />
            </div>
            <div className="vanco-field">
              <label>Tempo da C2 após fim da infusão (h)</label>
              <input value={t2} onChange={(e) => setT2(e.target.value)} placeholder="Ex.: 10" />
            </div>
            <div className="vanco-field">
              <label>Tempo de infusão (h)</label>
              <input value={infusionTime} onChange={(e) => setInfusionTime(e.target.value)} placeholder="Ex.: 1" />
            </div>
            <div className="vanco-field">
              <label>Intervalo entre doses (τ) (h)</label>
              <input value={tau} onChange={(e) => setTau(e.target.value)} placeholder="Ex.: 12" />
            </div>
          </div>

          {aucResult ? (
            <div className="vanco-results">
              <div className="vanco-result vanco-result--primary">
                <h4>AUC0–24 (mg·h/L)</h4>
                <p>{formatNumber(aucResult.auc24, 1)}</p>
              </div>
              <div className="vanco-result">
                <h4>Ke (1/h)</h4>
                <p>{formatNumber(aucResult.k, 4)}</p>
              </div>
              <div className="vanco-result">
                <h4>Meia-vida (h)</h4>
                <p>{formatNumber(aucResult.halfLife, 2)}</p>
              </div>
              <div className="vanco-result">
                <h4>Cmax verdadeiro (mg/L)</h4>
                <p>{formatNumber(aucResult.cMax, 1)}</p>
              </div>
              <div className="vanco-result">
                <h4>Cmin verdadeiro (mg/L)</h4>
                <p>{formatNumber(aucResult.cMin, 1)}</p>
              </div>
            </div>
          ) : (
            <p className="vanco-help">Preencha os campos corretamente para ver os resultados.</p>
          )}
        </div>
      )}

      <p className="vanco-disclaimer">
        Ferramenta educacional. Verifique critérios clínicos, horários das coletas e estabilidade renal antes de decisões terapêuticas.
      </p>
    </div>
  );
}
