"use client";

import { useMemo, useState } from "react";

type Entry = {
  bacteria: string;
  antibiotics: string[];
};

const entries: Entry[] = [
  {
    bacteria: "Staphylococcus aureus resistente à meticilina (MRSA)",
    antibiotics: [
      "Clindamicina",
      "Rifampicina",
      "Sulfametoxazol + Trimetropim",
      "Doxiciclina",
      "Tigeciclina",
      "Vancomicina",
      "Daptomicina",
      "Linezolida",
    ],
  },
];

function normalize(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function uniqueSorted(list: string[]) {
  return Array.from(new Set(list)).sort((a, b) => a.localeCompare(b, "pt-BR"));
}

export default function EspectroAntimicrobianosTool() {
  const [query, setQuery] = useState("");

  const bacteriaList = useMemo(() => uniqueSorted(entries.map((e) => e.bacteria)), []);
  const antibioticList = useMemo(
    () => uniqueSorted(entries.flatMap((e) => e.antibiotics)),
    []
  );

  const result = useMemo(() => {
    const q = normalize(query);
    if (!q) return null;

    const bacteriaMatch = entries.find((entry) => normalize(entry.bacteria) === q);
    if (bacteriaMatch) {
      return {
        type: "bacteria" as const,
        title: bacteriaMatch.bacteria,
        items: bacteriaMatch.antibiotics,
      };
    }

    const antibioticMatch = antibioticList.find((name) => normalize(name) === q);
    if (antibioticMatch) {
      const covers = entries
        .filter((entry) => entry.antibiotics.some((name) => normalize(name) === q))
        .map((entry) => entry.bacteria);
      return {
        type: "antibiotic" as const,
        title: antibioticMatch,
        items: covers,
      };
    }

    const bacteriaSuggestions = entries
      .filter((entry) => normalize(entry.bacteria).includes(q))
      .map((entry) => entry.bacteria);

    const antibioticSuggestions = antibioticList.filter((name) => normalize(name).includes(q));

    return {
      type: "suggestions" as const,
      bacteria: bacteriaSuggestions,
      antibiotics: antibioticSuggestions,
    };
  }, [query, antibioticList]);

  return (
    <div className="espectro-tool">
      <div className="espectro-search">
        <label htmlFor="espectro-input">Buscar bactéria ou antimicrobiano</label>
        <input
          id="espectro-input"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Ex.: Staphylococcus aureus resistente à meticilina (MRSA)"
        />
      </div>

      {!query ? (
        <div className="espectro-lists">
          <div>
            <h4>Bactérias disponíveis</h4>
            <ul>
              {bacteriaList.map((item) => (
                <li key={item}>
                  <button type="button" onClick={() => setQuery(item)}>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}

      <div className="espectro-result">
        {!query ? (
          <p>Digite ou selecione uma bactéria ou antimicrobiano para ver o espectro.</p>
        ) : null}

        {result?.type === "bacteria" ? (
          <div className="espectro-tree">
            <div className="espectro-node espectro-node--bacteria">{result.title}</div>
            <div className="espectro-branch">
              <span className="espectro-branch__label">Cobre:</span>
              <div className="espectro-tags">
                {result.items.map((item) => (
                  <span key={item} className="espectro-tag espectro-tag--ok">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {result?.type === "antibiotic" ? (
          <div className="espectro-tree">
            <div className="espectro-node espectro-node--antibiotic">{result.title}</div>
            <div className="espectro-branch">
              <span className="espectro-branch__label">Cobre:</span>
              <div className="espectro-tags">
                {result.items.map((item) => (
                  <span key={item} className="espectro-tag espectro-tag--ok">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {result?.type === "suggestions" ? (
          <div>
            <h3>Resultados encontrados</h3>
            <div className="espectro-suggestions">
              <div>
                <h5>Bactérias</h5>
                <ul>
                  {result.bacteria.length === 0 ? <li>Nenhuma encontrada.</li> : null}
                  {result.bacteria.map((item) => (
                    <li key={item}>
                      <button type="button" onClick={() => setQuery(item)}>
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5>Antimicrobianos</h5>
                <ul>
                  {result.antibiotics.length === 0 ? <li>Nenhum encontrado.</li> : null}
                  {result.antibiotics.map((item) => (
                    <li key={item}>
                      <button type="button" onClick={() => setQuery(item)}>
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
