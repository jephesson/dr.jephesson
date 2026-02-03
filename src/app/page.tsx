import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl">
      <section className="py-12 text-center">
        <h1 className="text-4xl font-semibold tracking-tight">dr.jephesson</h1>

        <p className="mt-3 text-base" style={{ color: "var(--muted)" }}>
          Este espaço foi criado para oferecer ferramentas, aulas e colaboração entre profissionais da saúde. Aqui você encontra
          calculadoras em saúde, análise de incompatibilidade via Y e detalhes sobre medicamentos para apoiar a prática clínica
          com segurança. Também disponibilizamos aulas gratuitas no YouTube e conteúdos para atualização contínua.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/quem-sou-eu"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold"
            style={{ background: "var(--accent)", color: "#0b1422" }}
          >
            Quem sou eu
          </Link>
        </div>

        <p className="mt-6 text-sm" style={{ color: "var(--muted)" }}>
          As outras seções ficam no menu acima.
        </p>
      </section>
    </div>
  );
}
