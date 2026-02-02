export default function Page() {
  return (
    <section className="mx-auto max-w-3xl">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold">Quem sou eu</h1>
        <p className="mt-2" style={{ color: "var(--muted)" }}>
          Uma apresentação curta, objetiva e profissional.
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
        <p style={{ color: "var(--muted)" }}>
          Escreva aqui sua bio (2–4 linhas). Depois, complete os tópicos abaixo:
        </p>

        <div className="mt-6 grid gap-4">
          <div className="rounded-xl p-5" style={{ background: "rgba(11,20,34,0.03)", border: "1px solid var(--stroke)" }}>
            <p className="font-semibold">Formação</p>
            <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
              Farmácia • (Mestrado/Doutorado) • áreas de foco
            </p>
          </div>

          <div className="rounded-xl p-5" style={{ background: "rgba(11,20,34,0.03)", border: "1px solid var(--stroke)" }}>
            <p className="font-semibold">Atuação</p>
            <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
              Farmácia clínica • UTI • TMO • educação em saúde
            </p>
          </div>

          <div className="rounded-xl p-5" style={{ background: "rgba(11,20,34,0.03)", border: "1px solid var(--stroke)" }}>
            <p className="font-semibold">Objetivo do site</p>
            <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
              Conteúdo prático sobre medicamentos, com aulas, e-books e ferramentas (parte gratuita e parte paga).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
