"use client";

import { useMemo, useState } from "react";

type Sex = "masculino" | "feminino";

function toNumber(value: string): number | null {
  if (!value.trim()) return null;
  const normalized = value.replace(",", ".");
  const num = Number(normalized);
  return Number.isFinite(num) ? num : null;
}

function formatNumber(value: number, digits = 1): string {
  return value.toFixed(digits).replace(".", ",");
}

function getTargetHemoglobin(age: number, sex: Sex): number {
  if (age < 5) return 11;
  if (age <= 11) return 11.5;
  if (age <= 14) return 12;
  return sex === "masculino" ? 13 : 12;
}

function getProfileLabel(age: number, sex: Sex): string {
  if (age < 5) return "Crianca ate 5 anos";
  if (age <= 11) return "Crianca de 5 a 11 anos";
  if (age <= 14) return "Paciente de 12 a 14 anos";
  return sex === "masculino" ? "Homem" : "Mulher";
}

export default function SacaratoFerricoTool() {
  const [age, setAge] = useState("");
  const [sex, setSex] = useState<Sex>("masculino");
  const [weight, setWeight] = useState("");
  const [currentHemoglobin, setCurrentHemoglobin] = useState("");

  const result = useMemo(() => {
    const ageValue = toNumber(age);
    const weightValue = toNumber(weight);
    const hemoglobinValue = toNumber(currentHemoglobin);

    if (ageValue === null || weightValue === null || hemoglobinValue === null) return null;
    if (ageValue < 0 || weightValue <= 0 || hemoglobinValue <= 0) return null;

    const targetHemoglobin = getTargetHemoglobin(ageValue, sex);
    const isAnemic = hemoglobinValue < targetHemoglobin;
    const ironToReplace = isAnemic ? (targetHemoglobin - hemoglobinValue) * weightValue * 2.4 + 500 : 0;
    const ampoules = Math.ceil(ironToReplace / 100);

    return {
      isAnemic,
      targetHemoglobin,
      profileLabel: getProfileLabel(ageValue, sex),
      ironToReplace,
      ampoules,
    };
  }, [age, sex, weight, currentHemoglobin]);

  return (
    <div className="ferro-tool">
      <div className="ferro-card">
        <div className="ferro-grid">
          <div className="ferro-field">
            <label>Idade (anos)</label>
            <input value={age} onChange={(event) => setAge(event.target.value)} placeholder="Ex.: 42" />
          </div>

          <div className="ferro-field">
            <label>Sexo</label>
            <select value={sex} onChange={(event) => setSex(event.target.value as Sex)}>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
            </select>
          </div>

          <div className="ferro-field">
            <label>Peso (kg)</label>
            <input value={weight} onChange={(event) => setWeight(event.target.value)} placeholder="Ex.: 70" />
          </div>

          <div className="ferro-field">
            <label>Hb atual (g/dL)</label>
            <input
              value={currentHemoglobin}
              onChange={(event) => setCurrentHemoglobin(event.target.value)}
              placeholder="Ex.: 9,8"
            />
          </div>
        </div>

        <p className="ferro-help">
          Formula utilizada: ferro a repor = (Hb desejado - Hb atual) x peso (kg) x 2,4 + 500.
        </p>
        <p className="ferro-help">
          Apresentacao considerada: Sucrofer 20 mg/mL em ampola de 5 mL, equivalente a 100 mg de ferro por ampola.
        </p>

        {result ? (
          <div className="ferro-results">
            <div className="ferro-result ferro-result--primary">
              <h4>Ferro a repor</h4>
              <p>{formatNumber(result.ironToReplace, 0)} mg</p>
            </div>

            <div className="ferro-result">
              <h4>Ampolas de Sucrofer</h4>
              <p>{result.ampoules}</p>
            </div>

            <div className="ferro-result">
              <h4>Hb desejada</h4>
              <p>{formatNumber(result.targetHemoglobin)} g/dL</p>
            </div>

            <div className="ferro-result">
              <h4>Classificacao</h4>
              <p>{result.isAnemic ? `Anemia (${result.profileLabel})` : `Sem anemia (${result.profileLabel})`}</p>
            </div>
          </div>
        ) : (
          <p className="ferro-help">Preencha idade, sexo, peso e hemoglobina para calcular.</p>
        )}
      </div>

      <p className="ferro-disclaimer">
        Ferramenta educativa. Nesta versao, a Hb desejada foi assumida como o limiar minimo informado para cada faixa
        etaria/sexo. Se a Hb atual estiver igual ou acima desse valor, o calculo retorna 0 mg e 0 ampolas.
      </p>
    </div>
  );
}
