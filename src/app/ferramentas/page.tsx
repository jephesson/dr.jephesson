export default function Page() {
  return (
    <div className="rounded-2xl border bg-white p-6" style={{ borderColor: "rgba(15,26,43,0.12)" }}>
      <h2 className="text-2xl font-semibold" style={{ color: "#0b1422" }}>
        Ferramentas
      </h2>
      <p className="mt-3 text-sm" style={{ color: "rgba(11,20,34,0.65)" }}>
        Selecione a ferramenta que deseja usar.
      </p>

      <div
        className="mt-6"
        style={{
          display: "grid",
          gap: 16,
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        }}
      >
        <a
          href="/ferramentas/incompatibilidade-via-y"
          className="rounded-xl border bg-white p-4"
          style={{ borderColor: "rgba(15,26,43,0.12)" }}
        >
          <h3 className="text-sm font-semibold" style={{ color: "#0b1422" }}>
            Incompatibilidade via Y
          </h3>
          <p className="mt-2 text-xs" style={{ color: "rgba(11,20,34,0.6)" }}>
            Verificar incompatibilidades relacionadas ao Y.
          </p>
        </a>

        <a
          href="/ferramentas/administracao-via-sonda"
          className="rounded-xl border bg-white p-4"
          style={{ borderColor: "rgba(15,26,43,0.12)" }}
        >
          <h3 className="text-sm font-semibold" style={{ color: "#0b1422" }}>
            Administração via sonda
          </h3>
          <p className="mt-2 text-xs" style={{ color: "rgba(11,20,34,0.6)" }}>
            Pesquise o medicamento e veja se é permitido e a observação.
          </p>
        </a>
      </div>
    </div>
  );
}
