"use client";

import { useMemo, useState } from "react";

type DoseMode = "total" | "porKg";
type InfusionProfile = "padrao" | "pid_tolerada";

type ScheduleStep = {
  startMinutes: number;
  endMinutes: number;
  rateMlKgHour: number;
  rateMlHour: number;
  volumeMl: number;
  note?: string;
};

const STEP_DURATION_MINUTES = 30;
const BASE_STEP_RATES_ML_KG_HOUR = [0.3, 0.6, 1.2, 2.4, 4.8, 7.2];

function toNumber(value: string): number | null {
  if (!value.trim()) return null;
  const normalized = value.replace(",", ".");
  const numberValue = Number(normalized);
  return Number.isFinite(numberValue) ? numberValue : null;
}

function formatNumber(value: number, digits = 1): string {
  return value.toFixed(digits).replace(".", ",");
}

function formatDuration(totalMinutes: number): string {
  const roundedMinutes = Math.round(totalMinutes);
  const hours = Math.floor(roundedMinutes / 60);
  const minutes = roundedMinutes % 60;

  if (hours === 0) return `${minutes} min`;
  if (minutes === 0) return `${hours} h`;
  return `${hours} h ${minutes} min`;
}

function getProfileLabel(profile: InfusionProfile): string {
  return profile === "pid_tolerada" ? "PID com tolerancia previa (ate 7,2 mL/kg/h)" : "Padrao (ate 4,8 mL/kg/h)";
}

function getMaxRate(profile: InfusionProfile): number {
  return profile === "pid_tolerada" ? 7.2 : 4.8;
}

function buildSchedule(weightKg: number, totalVolumeMl: number, maxRateMlKgHour: number): ScheduleStep[] {
  const schedule: ScheduleStep[] = [];
  const allowedStepRates = BASE_STEP_RATES_ML_KG_HOUR.filter((rate) => rate <= maxRateMlKgHour);

  let remainingVolumeMl = totalVolumeMl;
  let elapsedMinutes = 0;

  for (const rateMlKgHour of allowedStepRates) {
    if (remainingVolumeMl <= 0) break;

    const rateMlHour = rateMlKgHour * weightKg;
    const fullStepVolumeMl = (rateMlHour * STEP_DURATION_MINUTES) / 60;
    const volumeMl = Math.min(fullStepVolumeMl, remainingVolumeMl);
    const durationMinutes = (volumeMl / rateMlHour) * 60;

    schedule.push({
      startMinutes: elapsedMinutes,
      endMinutes: elapsedMinutes + durationMinutes,
      rateMlKgHour,
      rateMlHour,
      volumeMl,
      note: volumeMl < fullStepVolumeMl ? "Dose finalizada nesta etapa." : undefined,
    });

    remainingVolumeMl -= volumeMl;
    elapsedMinutes += durationMinutes;
  }

  if (remainingVolumeMl > 0) {
    const rateMlHour = maxRateMlKgHour * weightKg;
    const durationMinutes = (remainingVolumeMl / rateMlHour) * 60;

    schedule.push({
      startMinutes: elapsedMinutes,
      endMinutes: elapsedMinutes + durationMinutes,
      rateMlKgHour: maxRateMlKgHour,
      rateMlHour,
      volumeMl: remainingVolumeMl,
      note: "Manter a velocidade maxima selecionada ate completar a dose.",
    });
  }

  return schedule;
}

export default function ImunoglobulinaHumanaTool() {
  const [weight, setWeight] = useState("");
  const [doseMode, setDoseMode] = useState<DoseMode>("total");
  const [doseValue, setDoseValue] = useState("");
  const [profile, setProfile] = useState<InfusionProfile>("padrao");

  const result = useMemo(() => {
    const weightKg = toNumber(weight);
    const dose = toNumber(doseValue);

    if (weightKg === null || dose === null) return null;
    if (weightKg <= 0 || dose <= 0) return null;

    const totalDoseGrams = doseMode === "porKg" ? dose * weightKg : dose;
    const totalVolumeMl = totalDoseGrams * 10;
    const maxRateMlKgHour = getMaxRate(profile);
    const maxRateMlHour = maxRateMlKgHour * weightKg;
    const schedule = buildSchedule(weightKg, totalVolumeMl, maxRateMlKgHour);
    const totalMinutes = schedule[schedule.length - 1]?.endMinutes ?? 0;

    return {
      totalDoseGrams,
      totalVolumeMl,
      maxRateMlKgHour,
      maxRateMlHour,
      totalMinutes,
      schedule,
      profileLabel: getProfileLabel(profile),
    };
  }, [doseMode, doseValue, profile, weight]);

  return (
    <div className="igg-tool">
      <div className="igg-card">
        <div className="igg-grid">
          <div className="igg-field">
            <label>Peso do paciente (kg)</label>
            <input value={weight} onChange={(event) => setWeight(event.target.value)} placeholder="Ex.: 70" />
          </div>

          <div className="igg-field">
            <label>Modo da dose</label>
            <select value={doseMode} onChange={(event) => setDoseMode(event.target.value as DoseMode)}>
              <option value="total">Dose total em g</option>
              <option value="porKg">Dose em g/kg</option>
            </select>
          </div>

          <div className="igg-field">
            <label>{doseMode === "porKg" ? "Dose prescrita (g/kg)" : "Dose prescrita total (g)"}</label>
            <input
              value={doseValue}
              onChange={(event) => setDoseValue(event.target.value)}
              placeholder={doseMode === "porKg" ? "Ex.: 0,4" : "Ex.: 30"}
            />
          </div>

          <div className="igg-field">
            <label>Perfil de velocidade</label>
            <select value={profile} onChange={(event) => setProfile(event.target.value as InfusionProfile)}>
              <option value="padrao">Padrao (ate 4,8 mL/kg/h)</option>
              <option value="pid_tolerada">PID com tolerancia previa (ate 7,2 mL/kg/h)</option>
            </select>
          </div>
        </div>

        <div className="igg-static">
          <div className="igg-static__card">
            <h4>Diluicao</h4>
            <p>Privigen 10% e pronto para uso. Se precisar diluir, usar apenas SG 5% em volume igual ao produto.</p>
            <p>Concentracao final apos diluicao: 50 mg/mL (5%).</p>
          </div>

          <div className="igg-static__card">
            <h4>Soro / linha</h4>
            <p>Para diluir: SG 5%.</p>
            <p>Para lavar a linha: SG 5% ou SF 0,9%.</p>
            <p>Nao misturar com outros medicamentos na mesma linha.</p>
          </div>
        </div>

        {result ? (
          <>
            <div className="igg-results">
              <div className="igg-result igg-result--primary">
                <h4>Dose total</h4>
                <p>{formatNumber(result.totalDoseGrams, 1)} g</p>
              </div>

              <div className="igg-result">
                <h4>Volume total do Privigen 10%</h4>
                <p>{formatNumber(result.totalVolumeMl, 0)} mL</p>
              </div>

              <div className="igg-result">
                <h4>Velocidade maxima</h4>
                <p>{formatNumber(result.maxRateMlHour, 0)} mL/h</p>
                <small>{formatNumber(result.maxRateMlKgHour, 1)} mL/kg/h</small>
              </div>

              <div className="igg-result">
                <h4>Tempo total estimado</h4>
                <p>{formatDuration(result.totalMinutes)}</p>
                <small>{result.profileLabel}</small>
              </div>
            </div>

            <div className="igg-schedule">
              <div className="igg-schedule__header">
                <h4>Cronograma de aumento gradual</h4>
                <p>Aumentar a cada 30 minutos, se tolerado, ate a velocidade maxima selecionada.</p>
              </div>

              <div className="igg-schedule__list">
                {result.schedule.map((step, index) => (
                  <div key={`${step.startMinutes}-${step.endMinutes}-${index}`} className="igg-step">
                    <div className="igg-step__time">
                      {formatDuration(step.startMinutes)} - {formatDuration(step.endMinutes)}
                    </div>
                    <div className="igg-step__body">
                      <strong>{formatNumber(step.rateMlHour, 0)} mL/h</strong>
                      <span>
                        {formatNumber(step.rateMlKgHour, 1)} mL/kg/h • volume da etapa {formatNumber(step.volumeMl, 1)} mL
                      </span>
                      {step.note ? <em>{step.note}</em> : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <p className="igg-help">Preencha peso e dose para calcular o volume total e as velocidades em mL/h.</p>
        )}
      </div>

      <p className="igg-disclaimer">
        Ferramenta educativa baseada na rotulagem oficial do Privigen 10% e em cronograma operacional progressivo de 30 em
        30 minutos. Validar com a indicacao, tolerancia previa e protocolo institucional antes da administracao.
      </p>
    </div>
  );
}
