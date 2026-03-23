import Link from "next/link";

export default function Page() {
  return (
    <div className="review-hub">
      <section className="review-hub__hero">
        <span className="review-hub__eyebrow">Conteúdo organizado para estudo e prática clínica</span>
        <h1>Revisões clínicas</h1>
        <p>
          Nesta área, reunimos revisões estruturadas com foco em condutas, tabelas práticas e organização visual para
          consulta rápida.
        </p>
      </section>

      <section className="review-hub__grid">
        <Link href="/revisoes-clinicas/choque-septico" className="review-hub__card">
          <span className="review-hub__tag">Revisão clínica</span>
          <h2>Choque séptico</h2>
          <p>
            Guia avançado de manejo da sepse e do choque séptico, da SSC 2021 à medicina de precisão, com tabelas e
            checklist do plantonista.
          </p>
          <strong>Abrir revisão</strong>
        </Link>
      </section>
    </div>
  );
}
