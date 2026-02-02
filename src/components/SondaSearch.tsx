"use client";

import { useMemo, useState } from "react";
import type { SondaItem } from "@/lib/sonda";

type Props = {
  data: SondaItem[];
};

function normalize(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function formatPermitido(value: string) {
  const normalized = normalize(value);
  if (normalized.startsWith("s")) {
    return { label: "Sim", tone: "ok" as const };
  }
  if (normalized.startsWith("n")) {
    return { label: "Não", tone: "no" as const };
  }
  return { label: "Não informado", tone: "unknown" as const };
}

const toneStyles = {
  ok: {
    background: "rgba(16,185,129,0.12)",
    color: "#047857",
    borderColor: "rgba(16,185,129,0.4)",
  },
  no: {
    background: "rgba(239,68,68,0.12)",
    color: "#b91c1c",
    borderColor: "rgba(239,68,68,0.4)",
  },
  unknown: {
    background: "rgba(100,116,139,0.12)",
    color: "#475569",
    borderColor: "rgba(100,116,139,0.35)",
  },
};

export default function SondaSearch({ data }: Props) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<SondaItem | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const normalizedQuery = normalize(query.trim());

  const results = useMemo(() => {
    if (normalizedQuery.length < 2) return [];
    return data
      .filter((item) => normalize(item.medicamento).includes(normalizedQuery))
      .sort((a, b) => a.medicamento.localeCompare(b.medicamento));
  }, [data, normalizedQuery]);

  return (
    <div className="sonda-search mt-8">
      <div className="mx-auto w-full" style={{ maxWidth: 760 }}>
        <label className="text-sm font-semibold" style={{ color: "#0b1422" }}>
          Pesquisar medicamento
        </label>

        <div className="relative mt-3">
          <div className="sonda-search__shell">
            <div className="sonda-search__inner">
              <span className="sonda-search__dot" aria-hidden="true" />
              <input
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setSelected(null);
                  setIsOpen(true);
                }}
                onFocus={() => setIsOpen(true)}
                onBlur={() => setTimeout(() => setIsOpen(false), 120)}
                placeholder="Digite o nome do medicamento"
                className="sonda-search__input"
              />
            </div>
          </div>

          {isOpen && normalizedQuery.length >= 2 ? (
            <div className="sonda-search__dropdown absolute z-10 w-full">
              {results.length === 0 ? (
                <div className="px-4 py-3 text-sm" style={{ color: "rgba(11,20,34,0.7)" }}>
                  Nenhum medicamento encontrado.
                </div>
              ) : (
                <ul className="max-h-80 overflow-auto">
                  {results.slice(0, 20).map((item) => (
                    <li key={`${item.medicamento}-${item.observacao}`}>
                      <button
                        type="button"
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={() => {
                          setQuery(item.medicamento);
                          setSelected(item);
                          setIsOpen(false);
                        }}
                        className="sonda-search__item"
                      >
                        {item.medicamento}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : null}
        </div>

        <p className="mt-3 text-xs text-center" style={{ color: "rgba(11,20,34,0.6)" }}>
          Digite ao menos 2 letras para ver sugestões.
        </p>
      </div>

      {selected ? (
        <div className="sonda-result">
          <div className="sonda-result__inner">
            <h3 className="sonda-result__title">{selected.medicamento}</h3>
            {(() => {
              const status = formatPermitido(selected.permitido);
              return (
                <span className="sonda-result__badge" style={toneStyles[status.tone]}>
                  Permitido: {status.label}
                </span>
              );
            })()}

            <div className="sonda-result__grid">
              <div className="sonda-result__card">
                <p className="sonda-result__label">Permitido</p>
                <p className="sonda-result__value">{formatPermitido(selected.permitido).label}</p>
              </div>
              <div className="sonda-result__card">
                <p className="sonda-result__label">Pausa dieta</p>
                <p className="sonda-result__value">{selected.pausaDieta || "Não informado"}</p>
              </div>
            </div>

            <div className="sonda-result__card" style={{ marginTop: 12 }}>
              <p className="sonda-result__label">Observação</p>
              <p className="sonda-result__value">
                {selected.observacao || "Sem observações adicionais."}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
