import Link from "next/link";

export default function Home() {
  return (
    <div className="home-page">
      <section className="py-6">
        <div className="home-hero">
          <div className="home-hero__content">
            <span className="home-hero__eyebrow">Ferramentas • Aulas • Colaboração</span>
            <h1 className="home-hero__title">dr.jephesson</h1>
            <p className="home-hero__lead">
              Este espaço foi criado para oferecer ferramentas, aulas e colaboração entre profissionais da saúde. Aqui você
              encontra calculadoras em saúde, análise de incompatibilidade via Y e detalhes sobre medicamentos para apoiar a
              prática clínica com segurança. Também disponibilizamos aulas gratuitas no YouTube e conteúdos para atualização
              contínua.
            </p>
            <div className="home-hero__tags">
              <span className="home-tag">Ferramentas clínicas</span>
              <span className="home-tag">Incompatibilidade via Y</span>
              <span className="home-tag">Aulas gratuitas</span>
              <span className="home-tag">Medicamentos</span>
            </div>
            <div className="home-hero__actions">
              <Link href="/quem-sou-eu" className="home-btn home-btn--primary">
                Quem sou eu
              </Link>
              <Link href="/ferramentas" className="home-btn home-btn--ghost">
                Ver ferramentas
              </Link>
            </div>
          </div>

          <div className="home-hero__cards">
            <article className="home-card home-card--blue">
              <div className="home-card__icon">Y</div>
              <h3>Incompatibilidade via Y</h3>
              <p>Monte combinações, visualize a matriz e gere relatórios em PDF.</p>
            </article>
            <article className="home-card home-card--green">
              <div className="home-card__icon">Rx</div>
              <h3>Medicamentos e prática clínica</h3>
              <p>Informações essenciais para apoiar decisões seguras na assistência.</p>
            </article>
            <article className="home-card home-card--orange">
              <div className="home-card__icon">▶</div>
              <h3>Aulas gratuitas no YouTube</h3>
              <p>Conteúdos atualizados, didáticos e acessíveis para profissionais.</p>
            </article>
          </div>
        </div>

        <p className="home-hero__foot">As outras seções ficam no menu acima.</p>
      </section>
    </div>
  );
}
