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
  const normalizedQuery = normalize(query.trim());

  const results = useMemo(() => {
    if (normalizedQuery.length < 2) return [];
    return data
      .filter((item) => normalize(item.medicamento).includes(normalizedQuery))
      .sort((a, b) => a.medicamento.localeCompare(b.medicamento));
  }, [data, normalizedQuery]);

  return (
    <div className="mt-6 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold" style={{ color: "#0b1422" }}>
          Pesquisar medicamento
        </label>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Digite o nome do medicamento"
          className="w-full rounded-xl border px-4 py-2 text-sm outline-none"
          style={{ borderColor: "rgba(15,26,43,0.18)" }}
        />
        <p className="text-xs" style={{ color: "rgba(11,20,34,0.6)" }}>
          Digite ao menos 2 letras para ver resultados.
        </p>
      </div>

      {normalizedQuery.length >= 2 && results.length === 0 ? (
        <div className="rounded-xl border px-4 py-3 text-sm" style={{ borderColor: "rgba(15,26,43,0.12)", color: "rgba(11,20,34,0.7)" }}>
          Nenhum medicamento encontrado para essa busca.
        </div>
      ) : null}

      {results.length > 0 ? (
        <div
          style={{
            display: "grid",
            gap: 12,
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          }}
        >
          {results.map((item) => {
            const status = formatPermitido(item.permitido);
            return (
              <div
                key={`${item.medicamento}-${item.observacao}`}
                className="rounded-xl border bg-white p-4"
                style={{ borderColor: "rgba(15,26,43,0.12)" }}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm font-semibold" style={{ color: "#0b1422" }}>
                    {item.medicamento}
                  </h3>
                  <span
                    className="rounded-full border px-2 py-1 text-[11px] font-semibold"
                    style={toneStyles[status.tone]}
                  >
                    Permitido: {status.label}
                  </span>
                </div>
                {item.observacao ? (
                  <p
                    className="mt-2 text-xs"
                    style={{
                      color: "rgba(11,20,34,0.7)",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {item.observacao}
                  </p>
                ) : null}
                {item.pausaDieta ? (
                  <p className="mt-2 text-[11px]" style={{ color: "rgba(11,20,34,0.55)" }}>
                    Pausa dieta: {item.pausaDieta}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
