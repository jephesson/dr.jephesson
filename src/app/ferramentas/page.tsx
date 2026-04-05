"use client";

import type { CSSProperties } from "react";
import { useMemo, useState } from "react";
import Link from "next/link";

type ToolItem = {
  href: string;
  label: string;
  description: string;
  kind: "Ferramenta" | "Calculadora";
  from: string;
  to: string;
};

const tools: ToolItem[] = [
  {
    href: "/ferramentas/administracao-via-sonda",
    label: "Administração via sonda",
    description: "Pesquise o medicamento e veja se é permitido e a observação.",
    kind: "Ferramenta",
    from: "#0b3a2f",
    to: "#22c55e",
  },
  {
    href: "/ferramentas/calculadoras-nefrologicas",
    label: "Calculadoras nefrológicas",
    description: "CKD-EPI, MDRD e Cockcroft-Gault com comparativo prático.",
    kind: "Calculadora",
    from: "#0b2f3a",
    to: "#38bdf8",
  },
  {
    href: "/ferramentas/calculo-gotejamento",
    label: "Cálculo de gotejamento",
    description: "Estime dose, volume total e frascos necessários.",
    kind: "Calculadora",
    from: "#0b3a2f",
    to: "#84cc16",
  },
  {
    href: "/ferramentas/velocidade-infusao",
    label: "Cálculo da velocidade de infusão e diluição",
    description: "Escolha o medicamento e calcule preparo, diluição e tempo mínimo de infusão.",
    kind: "Calculadora",
    from: "#1f2937",
    to: "#0ea5e9",
  },
  {
    href: "/ferramentas/correcao-calcio-albumina",
    label: "Correção do cálcio",
    description: "Corrija o cálcio total pela albumina com interpretação rápida.",
    kind: "Calculadora",
    from: "#1f2937",
    to: "#ef4444",
  },
  {
    href: "/ferramentas/diluicao-medicamentos",
    label: "Diluição de medicamentos",
    description: "Consulte preparo, diluição, infusão e compatibilidade.",
    kind: "Ferramenta",
    from: "#1f2937",
    to: "#06b6d4",
  },
  {
    href: "/ferramentas/espectro-antimicrobianos",
    label: "Espectro terapêutico",
    description: "Consulte cobertura por bactéria ou antimicrobiano.",
    kind: "Ferramenta",
    from: "#0f172a",
    to: "#14b8a6",
  },
  {
    href: "/ferramentas/imunoglobulina-g-humana",
    label: "Imunoglobulina G humana",
    description: "Estime volume e escalonamento da infusão do Privigen em mL/h.",
    kind: "Calculadora",
    from: "#1e293b",
    to: "#8b5cf6",
  },
  {
    href: "/ferramentas/incompatibilidade-via-y",
    label: "Incompatibilidade via Y",
    description: "Verifique incompatibilidades relacionadas ao uso em Y.",
    kind: "Ferramenta",
    from: "#0f172a",
    to: "#2563eb",
  },
  {
    href: "/ferramentas/sacarato-ferrico",
    label: "Sacarato férrico",
    description: "Calcule o ferro a repor e o número de ampolas do Sucrofer.",
    kind: "Calculadora",
    from: "#3f1d12",
    to: "#f59e0b",
  },
  {
    href: "/ferramentas/vancocinemia",
    label: "Vancocinemia",
    description: "Calcule ajuste pelo vale e AUC com duas medições.",
    kind: "Calculadora",
    from: "#2b1d3a",
    to: "#f97316",
  },
];

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export default function Page() {
  const [search, setSearch] = useState("");

  const filteredTools = useMemo(() => {
    const ordered = [...tools].sort((a, b) => a.label.localeCompare(b.label, "pt-BR", { sensitivity: "base" }));
    const normalizedSearch = normalizeText(search);

    if (!normalizedSearch) return ordered;

    return ordered.filter((tool) =>
      normalizeText(`${tool.label} ${tool.description} ${tool.kind}`).includes(normalizedSearch),
    );
  }, [search]);

  return (
    <div className="rounded-2xl border bg-white p-6" style={{ borderColor: "rgba(15,26,43,0.12)" }}>
      <h2 className="text-2xl font-semibold" style={{ color: "#0b1422" }}>
        Ferramentas
      </h2>
      <p className="mt-3 text-sm" style={{ color: "rgba(11,20,34,0.65)" }}>
        Selecione a ferramenta que deseja usar.
      </p>

      <div className="mt-6" style={{ maxWidth: 640 }}>
        <label
          htmlFor="ferramenta-search"
          style={{
            display: "block",
            marginBottom: 8,
            fontSize: 14,
            fontWeight: 700,
            color: "#0b1422",
          }}
        >
          Pesquisar ferramenta
        </label>
        <input
          id="ferramenta-search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Digite o nome da ferramenta"
          style={{
            width: "100%",
            border: "1px solid rgba(11,20,34,0.12)",
            borderRadius: 16,
            padding: "14px 16px",
            fontSize: 15,
            color: "#0b1422",
            background: "#fff",
          }}
        />
      </div>

      <div className="tool-grid mt-6">
        {filteredTools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="tool-card"
            style={
              {
                "--card-from": tool.from,
                "--card-to": tool.to,
              } as CSSProperties
            }
          >
            <span className="tool-card__label">{tool.kind}</span>
            <h3>{tool.label}</h3>
            <p>{tool.description}</p>
          </Link>
        ))}
      </div>

      {filteredTools.length === 0 ? (
        <p className="mt-6 text-sm" style={{ color: "rgba(11,20,34,0.65)" }}>
          Nenhuma ferramenta encontrada para essa busca.
        </p>
      ) : null}
    </div>
  );
}
