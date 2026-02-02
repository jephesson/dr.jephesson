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
  const normalizedQuery = normalize(query.trim());

  const results = useMemo(() => {
    if (normalizedQuery.length < 2) return [];
    return data
      .filter((item) => normalize(item.medicamento).includes(normalizedQuery))
      .sort((a, b) => a.medicamento.localeCompare(b.medicamento));
  }, [data, normalizedQuery]);

  return (
    <div className="mt-8 flex flex-col gap-6">
      <div className="mx-auto w-full max-w-2xl">
        <label className="text-sm font-semibold" style={{ color: "#0b1422" }}>
          Pesquisar medicamento
        </label>
        <div className="relative mt-2">
          <input
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setSelected(null);
            }}
            placeholder="Digite o nome do medicamento"
            className="w-full rounded-2xl border px-5 py-3 text-base outline-none"
            style={{ borderColor: "rgba(15,26,43,0.18)" }}
          />

          {normalizedQuery.length >= 2 ? (
            <div
              className="absolute z-10 mt-2 w-full overflow-hidden rounded-2xl border bg-white shadow-lg"
              style={{ borderColor: "rgba(15,26,43,0.12)" }}
            >
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
                        onClick={() => {
                          setQuery(item.medicamento);
                          setSelected(item);
                        }}
                        className="flex w-full flex-col gap-1 px-4 py-3 text-left text-sm hover:bg-slate-50"
                      >
                        <span className="font-semibold" style={{ color: "#0b1422" }}>
                          {item.medicamento}
                        </span>
                        {item.observacao ? (
                          <span className="text-xs" style={{ color: "rgba(11,20,34,0.6)" }}>
                            {item.observacao}
                          </span>
                        ) : null}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : null}
        </div>
        <p className="mt-2 text-xs text-center" style={{ color: "rgba(11,20,34,0.6)" }}>
          Digite ao menos 2 letras para ver sugestões.
        </p>
      </div>

      {selected ? (
        <div className="mx-auto w-full max-w-3xl rounded-2xl border bg-white p-5" style={{ borderColor: "rgba(15,26,43,0.12)" }}>
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold" style={{ color: "#0b1422" }}>
              {selected.medicamento}
            </h3>
            {(() => {
              const status = formatPermitido(selected.permitido);
              return (
                <span
                  className="rounded-full border px-3 py-1 text-xs font-semibold"
                  style={toneStyles[status.tone]}
                >
                  Permitido: {status.label}
                </span>
              );
            })()}
          </div>
          {selected.observacao ? (
            <p className="mt-3 text-sm" style={{ color: "rgba(11,20,34,0.75)" }}>
              {selected.observacao}
            </p>
          ) : null}
          {selected.pausaDieta ? (
            <p className="mt-2 text-xs" style={{ color: "rgba(11,20,34,0.55)" }}>
              Pausa dieta: {selected.pausaDieta}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
