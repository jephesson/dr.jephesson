export default function Page() {
  return (
    <section className="mx-auto max-w-3xl">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold">Quem sou eu</h1>
        <p className="mt-2" style={{ color: "var(--muted)" }}>
          Farmacêutico clínico, pesquisador e empreendedor.
        </p>
      </header>

      <div
        className="rounded-2xl p-8"
        style={{
          background: "#fff",
          border: "1px solid var(--stroke)",
          boxShadow: "0 12px 28px rgba(0,0,0,0.06)",
        }}
      >
        <p className="text-base" style={{ color: "var(--muted)" }}>
          Nasci em Guarabira, Paraíba, e sigo dedicado à prática clínica, à pesquisa em farmacologia e à educação em saúde.
          Sou graduado em Farmácia pela UFPB (2015), mestre em Produtos Naturais e Sintéticos Bioativos (UFPB, 2017) e doutor
          em Biologia Celular e Molecular pela UFRGS (2022), com atuação no LabSinal e no HCPA.
        </p>

        <div className="mt-6 grid gap-4">
          <div className="rounded-xl p-5" style={{ background: "rgba(11,20,34,0.03)", border: "1px solid var(--stroke)" }}>
            <p className="font-semibold">Formação</p>
            <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
              Farmácia (UFPB, 2015) • Mestrado em Produtos Naturais e Sintéticos Bioativos (UFPB, 2017) • Doutorado em Biologia
              Celular e Molecular (UFRGS, 2022).
            </p>
          </div>

          <div className="rounded-xl p-5" style={{ background: "rgba(11,20,34,0.03)", border: "1px solid var(--stroke)" }}>
            <p className="font-semibold">Atuação clínica</p>
            <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
              Farmacêutico clínico no HE‑UFPEL. Atuei no CHC de Curitiba até abril de 2025, com experiência em transplante de medula
              óssea e UTI. Também trabalhei como farmacêutico clínico no HCPA durante o doutorado.
            </p>
          </div>

          <div className="rounded-xl p-5" style={{ background: "rgba(11,20,34,0.03)", border: "1px solid var(--stroke)" }}>
            <p className="font-semibold">Tecnologia e empreendedorismo</p>
            <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
              No último ano, concentrei esforços no desenvolvimento de sites e aplicativos voltados à saúde. Também sou empresário
              e empreendedor no ramo de agência de viagens (vias aéreas).
            </p>
          </div>

          <div className="rounded-xl p-5" style={{ background: "rgba(11,20,34,0.03)", border: "1px solid var(--stroke)" }}>
            <p className="font-semibold">Lattes</p>
            <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
              Currículo completo:{" "}
              <a href="http://lattes.cnpq.br/9112252231580180" target="_blank" rel="noreferrer">
                lattes.cnpq.br/9112252231580180
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
