"use client";

import { useMemo, useState } from "react";

type TabKey = "vale" | "auc";
type ClockValue = { hour: string; minute: string };
type AucResult =
  | {
      kind: "error";
      message: string;
    }
  | {
      kind: "result";
      k: number;
      halfLife: number;
      cMax: number;
      cMin: number;
      aucInf: number;
      aucElim: number;
      auc24: number;
      infusion: number;
      t1Value: number;
      t2Value: number;
      tauValue: number;
      status: "below" | "in-range" | "above";
      doseSuggestion: {
        currentDoseValue: number;
        currentDailyDose: number;
        targetDosePerAdminMin: number;
        targetDosePerAdminMax: number;
        targetDailyDoseMin: number;
        targetDailyDoseMax: number;
      } | null;
    };

function toNumber(value: string): number | null {
  if (!value.trim()) return null;
  const normalized = value.replace(",", ".");
  const num = Number(normalized);
  return Number.isFinite(num) ? num : null;
}

function formatNumber(value: number, digits = 2): string {
  return value.toFixed(digits).replace(".", ",");
}

function roundDose(value: number, step = 250): number {
  return Math.round(value / step) * step;
}

const HOUR_OPTIONS = Array.from({ length: 24 }, (_, index) => index.toString().padStart(2, "0"));
const MINUTE_OPTIONS = Array.from({ length: 60 }, (_, index) => index.toString().padStart(2, "0"));

function emptyClock(): ClockValue {
  return { hour: "", minute: "" };
}

function clockToMinutes(value: ClockValue): number | null {
  if (value.hour === "" || value.minute === "") return null;
  return Number(value.hour) * 60 + Number(value.minute);
}

function diffHours(startMinutes: number, endMinutes: number): number {
  const diff = endMinutes - startMinutes;
  return (diff < 0 ? diff + 24 * 60 : diff) / 60;
}

function ClockSelect({
  label,
  value,
  onChange,
}: {
  label: string;
  value: ClockValue;
  onChange: (value: ClockValue) => void;
}) {
  return (
    <div className="vanco-field">
      <label>{label}</label>
      <div className="vanco-clock">
        <select value={value.hour} onChange={(event) => onChange({ ...value, hour: event.target.value })}>
          <option value="">Hora</option>
          {HOUR_OPTIONS.map((hour) => (
            <option key={hour} value={hour}>
              {hour}
            </option>
          ))}
        </select>
        <select value={value.minute} onChange={(event) => onChange({ ...value, minute: event.target.value })}>
          <option value="">Min</option>
          {MINUTE_OPTIONS.map((minute) => (
            <option key={minute} value={minute}>
              {minute}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default function VancocinemiaTool() {
  const [tab, setTab] = useState<TabKey>("vale");

  const [troughMeasured, setTroughMeasured] = useState("");
  const [troughTarget, setTroughTarget] = useState("");
  const [currentTdd, setCurrentTdd] = useState("");
  const [intervalHours, setIntervalHours] = useState("");

  const [c1, setC1] = useState("");
  const [c2, setC2] = useState("");
  const [currentDosePerAdmin, setCurrentDosePerAdmin] = useState("");
  const [infusionStart, setInfusionStart] = useState<ClockValue>(emptyClock());
  const [infusionEnd, setInfusionEnd] = useState<ClockValue>(emptyClock());
  const [c1Collection, setC1Collection] = useState<ClockValue>(emptyClock());
  const [troughCollection, setTroughCollection] = useState<ClockValue>(emptyClock());
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

  const aucResult = useMemo<AucResult | null>(() => {
    const c1Value = toNumber(c1);
    const c2Value = toNumber(c2);
    const currentDoseValue = toNumber(currentDosePerAdmin);
    const tauValue = toNumber(tau);
    const infusionStartMinutes = clockToMinutes(infusionStart);
    const infusionEndMinutes = clockToMinutes(infusionEnd);
    const c1CollectionMinutes = clockToMinutes(c1Collection);
    const troughCollectionMinutes = clockToMinutes(troughCollection);

    if (
      !c1Value ||
      !c2Value ||
      !tauValue ||
      infusionStartMinutes === null ||
      infusionEndMinutes === null ||
      c1CollectionMinutes === null ||
      troughCollectionMinutes === null
    ) {
      return null;
    }

    const infusion = diffHours(infusionStartMinutes, infusionEndMinutes);
    const t1Value = diffHours(infusionEndMinutes, c1CollectionMinutes);
    const t2Value = diffHours(infusionEndMinutes, troughCollectionMinutes);

    if (infusion <= 0) {
      return { kind: "error", message: "O término da infusão deve ocorrer após o início da infusão." };
    }
    if (tauValue <= infusion) {
      return { kind: "error", message: "O intervalo entre doses deve ser maior que o tempo de infusão." };
    }
    if (t1Value <= 0) {
      return { kind: "error", message: "A coleta da C1 deve ocorrer após o término da infusão." };
    }
    if (t2Value <= t1Value) {
      return { kind: "error", message: "O horário do vale deve ser posterior à C1." };
    }
    if (t2Value > tauValue - infusion) {
      return { kind: "error", message: "O vale deve ser coletado antes da próxima dose." };
    }
    if (c1Value <= c2Value) {
      return { kind: "error", message: "A concentração pós-infusão deve ser maior que a concentração do vale." };
    }

    const k = Math.log(c1Value / c2Value) / (t2Value - t1Value);
    if (!Number.isFinite(k) || k <= 0) {
      return { kind: "error", message: "Não foi possível calcular a constante de eliminação." };
    }

    const halfLife = 0.693 / k;
    const cMax = c1Value / Math.exp(-k * t1Value);
    const cMin = cMax * Math.exp(-k * (tauValue - infusion));
    const aucInf = infusion * (cMax + cMin) / 2;
    const aucElim = (cMax - cMin) / k;
    const auc24 = (aucInf + aucElim) * (24 / tauValue);

    const status = auc24 < 400 ? "below" : auc24 > 600 ? "above" : "in-range";
    const doseSuggestion =
      currentDoseValue && currentDoseValue > 0
        ? {
            currentDoseValue,
            currentDailyDose: currentDoseValue * (24 / tauValue),
            targetDosePerAdminMin: currentDoseValue * (400 / auc24),
            targetDosePerAdminMax: currentDoseValue * (600 / auc24),
            targetDailyDoseMin: currentDoseValue * (24 / tauValue) * (400 / auc24),
            targetDailyDoseMax: currentDoseValue * (24 / tauValue) * (600 / auc24),
          }
        : null;

    return {
      kind: "result",
      k,
      halfLife,
      cMax,
      cMin,
      aucInf,
      aucElim,
      auc24,
      infusion,
      t1Value,
      t2Value,
      tauValue,
      status,
      doseSuggestion,
    };
  }, [c1, c2, currentDosePerAdmin, tau, infusionStart, infusionEnd, c1Collection, troughCollection]);

  return (
    <div className="vanco-tool">
      <div className="vanco-alert">
        Esta calculadora de vancocinemia está em fase de testes. Não utilize os resultados para decisões clínicas, pois os
        dados ainda não são confiáveis.
      </div>

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
            Informe duas concentrações no mesmo intervalo de dose. Os tempos após o fim da infusão serão calculados
            automaticamente a partir dos horários.
          </p>

          <div className="vanco-grid">
            <div className="vanco-field">
              <label>Concentração 1 (C1, pós-infusão) mg/L</label>
              <input value={c1} onChange={(e) => setC1(e.target.value)} placeholder="Ex.: 30" />
            </div>
            <div className="vanco-field">
              <label>Concentração 2 (vale) mg/L</label>
              <input value={c2} onChange={(e) => setC2(e.target.value)} placeholder="Ex.: 12" />
            </div>
            <div className="vanco-field">
              <label>Dose atual por administração (mg)</label>
              <input
                value={currentDosePerAdmin}
                onChange={(e) => setCurrentDosePerAdmin(e.target.value)}
                placeholder="Ex.: 1000"
              />
            </div>
            <div className="vanco-field">
              <label>Intervalo entre doses (τ) (h)</label>
              <input value={tau} onChange={(e) => setTau(e.target.value)} placeholder="Ex.: 12" />
            </div>
            <ClockSelect label="Início da infusão" value={infusionStart} onChange={setInfusionStart} />
            <ClockSelect label="Término da infusão" value={infusionEnd} onChange={setInfusionEnd} />
            <ClockSelect label="Horário da coleta da C1" value={c1Collection} onChange={setC1Collection} />
            <ClockSelect label="Horário da coleta do vale" value={troughCollection} onChange={setTroughCollection} />
          </div>

          {aucResult?.kind === "result" ? (
            <div className="vanco-results">
              <div className="vanco-result vanco-result--primary">
                <h4>AUC0–24 (mg·h/L)</h4>
                <p>{formatNumber(aucResult.auc24, 1)}</p>
              </div>
              <div className="vanco-result">
                <h4>Tempo de infusão</h4>
                <p>{formatNumber(aucResult.infusion, 2)} h</p>
              </div>
              <div className="vanco-result">
                <h4>Tempo da C1 após fim</h4>
                <p>{formatNumber(aucResult.t1Value, 2)} h</p>
              </div>
              <div className="vanco-result">
                <h4>Tempo do vale após fim</h4>
                <p>{formatNumber(aucResult.t2Value, 2)} h</p>
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
              <div className="vanco-result">
                <h4>Faixa terapêutica</h4>
                <p>
                  {aucResult.status === "in-range"
                    ? "Dentro da janela 400-600"
                    : aucResult.status === "below"
                      ? "Abaixo da janela 400-600"
                      : "Acima da janela 400-600"}
                </p>
              </div>
              <div className={`vanco-result ${aucResult.status === "in-range" ? "vanco-result--accent" : ""}`}>
                <h4>Interpretação</h4>
                <p>
                  {aucResult.status === "in-range"
                    ? "Exposição adequada para a meta 400-600."
                    : aucResult.status === "above"
                      ? "Risco de toxicidade aumentado com AUC acima de 600."
                      : "AUC abaixo da meta; pode não ser suficiente em infecções graves."}
                </p>
              </div>
              {aucResult.doseSuggestion ? (
                <>
                  <div className="vanco-result vanco-result--accent">
                    <h4>Dose total diária estimada</h4>
                    <p>
                      {formatNumber(roundDose(aucResult.doseSuggestion.targetDailyDoseMin), 0)}-
                      {formatNumber(roundDose(aucResult.doseSuggestion.targetDailyDoseMax), 0)} mg/dia
                    </p>
                  </div>
                  <div className="vanco-result">
                    <h4>Posologia estimada para AUC 400-600</h4>
                    <p>
                      {formatNumber(roundDose(aucResult.doseSuggestion.targetDosePerAdminMin), 0)}-
                      {formatNumber(roundDose(aucResult.doseSuggestion.targetDosePerAdminMax), 0)} mg q
                      {formatNumber(aucResult.tauValue, 0)}h
                    </p>
                  </div>
                  <div className="vanco-result">
                    <h4>Sugestão</h4>
                    <p>
                      {aucResult.status === "in-range"
                        ? `Manter ${formatNumber(roundDose(aucResult.doseSuggestion.currentDoseValue), 0)} mg q${formatNumber(
                            aucResult.tauValue,
                            0,
                          )}h se contexto clínico e função renal estiverem estáveis.`
                        : aucResult.status === "above"
                          ? `Considerar reduzir para a faixa de ${formatNumber(
                              roundDose(aucResult.doseSuggestion.targetDosePerAdminMin),
                              0,
                            )}-${formatNumber(roundDose(aucResult.doseSuggestion.targetDosePerAdminMax), 0)} mg q${formatNumber(
                              aucResult.tauValue,
                              0,
                            )}h.`
                          : `Considerar aumentar para a faixa de ${formatNumber(
                              roundDose(aucResult.doseSuggestion.targetDosePerAdminMin),
                              0,
                            )}-${formatNumber(roundDose(aucResult.doseSuggestion.targetDosePerAdminMax), 0)} mg q${formatNumber(
                              aucResult.tauValue,
                              0,
                            )}h.`}
                    </p>
                  </div>
                </>
              ) : null}
            </div>
          ) : aucResult?.kind === "error" ? (
            <p className="vanco-error">{aucResult.message}</p>
          ) : (
            <p className="vanco-help">Preencha os campos corretamente para ver os resultados.</p>
          )}

          {aucResult?.kind === "result" && !aucResult.doseSuggestion ? (
            <p className="vanco-help">
              Para estimar dose e posologia mantendo o mesmo intervalo, preencha tambem a dose atual por administração.
            </p>
          ) : null}
        </div>
      )}

      <p className="vanco-disclaimer">
        Ferramenta em validação. Os resultados não devem ser usados para decisões clínicas até nova atualização.
      </p>
    </div>
  );
}
