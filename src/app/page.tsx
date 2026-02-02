import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl">
      <section className="py-12 text-center">
        <h1 className="text-4xl font-semibold tracking-tight">dr.jephesson</h1>

        <p className="mt-3 text-base" style={{ color: "var(--muted)" }}>
          Conteúdo prático sobre medicamentos — aulas, e-books e ferramentas para prática clínica com segurança.
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
