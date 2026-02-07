import type { CSSProperties } from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="rounded-2xl border bg-white p-6" style={{ borderColor: "rgba(15,26,43,0.12)" }}>
      <h2 className="text-2xl font-semibold" style={{ color: "#0b1422" }}>
        Ferramentas
      </h2>
      <p className="mt-3 text-sm" style={{ color: "rgba(11,20,34,0.65)" }}>
        Selecione a ferramenta que deseja usar.
      </p>

      <div className="tool-grid mt-6">
        <Link
          href="/ferramentas/incompatibilidade-via-y"
          className="tool-card"
          style={
            {
              "--card-from": "#0f172a",
              "--card-to": "#2563eb",
            } as CSSProperties
          }
        >
          <span className="tool-card__label">Ferramenta</span>
          <h3>Incompatibilidade via Y</h3>
          <p>Verifique incompatibilidades relacionadas ao uso em Y.</p>
        </Link>

        <Link
          href="/ferramentas/administracao-via-sonda"
          className="tool-card"
          style={
            {
              "--card-from": "#0b3a2f",
              "--card-to": "#22c55e",
            } as CSSProperties
          }
        >
          <span className="tool-card__label">Ferramenta</span>
          <h3>Administração via sonda</h3>
          <p>Pesquise o medicamento e veja se é permitido e a observação.</p>
        </Link>

        <Link
          href="/ferramentas/vancocinemia"
          className="tool-card"
          style={
            {
              "--card-from": "#2b1d3a",
              "--card-to": "#f97316",
            } as CSSProperties
          }
        >
          <span className="tool-card__label">Calculadora</span>
          <h3>Vancocinemia</h3>
          <p>Calcule ajuste pelo vale e AUC com duas medições.</p>
        </Link>

        <Link
          href="/ferramentas/calculadoras-nefrologicas"
          className="tool-card"
          style={
            {
              "--card-from": "#0b2f3a",
              "--card-to": "#38bdf8",
            } as CSSProperties
          }
        >
          <span className="tool-card__label">Calculadora</span>
          <h3>Calculadoras nefrológicas</h3>
          <p>CKD-EPI, MDRD e Cockcroft-Gault com comparativo prático.</p>
        </Link>

        <Link
          href="/ferramentas/espectro-antimicrobianos"
          className="tool-card"
          style={
            {
              "--card-from": "#0f172a",
              "--card-to": "#14b8a6",
            } as CSSProperties
          }
        >
          <span className="tool-card__label">Ferramenta</span>
          <h3>Espectro terapêutico</h3>
          <p>Consulte cobertura por bactéria ou antimicrobiano.</p>
        </Link>

        <Link
          href="/ferramentas/calculo-gotejamento"
          className="tool-card"
          style={
            {
              "--card-from": "#0b3a2f",
              "--card-to": "#84cc16",
            } as CSSProperties
          }
        >
          <span className="tool-card__label">Calculadora</span>
          <h3>Cálculo de gotejamento</h3>
          <p>Estime dose, volume total e frascos necessários.</p>
        </Link>
      </div>
    </div>
  );
}
