import SondaSearch from "@/components/SondaSearch";
import { loadSondaData } from "@/lib/sonda";

export default async function Page() {
  const { items, error } = await loadSondaData();

  return (
    <div className="rounded-2xl border bg-white p-6" style={{ borderColor: "rgba(15,26,43,0.12)" }}>
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "rgba(11,20,34,0.55)" }}>
          Ferramenta
        </p>
        <h2 className="text-2xl font-semibold" style={{ color: "#0b1422" }}>
          Administração via sonda
        </h2>
        <p className="text-sm" style={{ color: "rgba(11,20,34,0.68)" }}>
          Consulte o banco de dados para saber se o medicamento pode ser administrado via sonda e veja a observação.
        </p>
      </div>

      {error === "invalid-format" ? (
        <div className="mt-6 rounded-xl border px-4 py-3 text-sm" style={{ borderColor: "rgba(15,26,43,0.12)", color: "rgba(11,20,34,0.75)" }}>
          O arquivo <strong>public/sonda.csv</strong> está no formato Excel (.xlsx). Exporte como CSV (UTF-8) e substitua o arquivo.
        </div>
      ) : null}

      {error === "missing-file" ? (
        <div className="mt-6 rounded-xl border px-4 py-3 text-sm" style={{ borderColor: "rgba(15,26,43,0.12)", color: "rgba(11,20,34,0.75)" }}>
          Não encontramos o arquivo <strong>public/sonda.csv</strong>. Coloque o CSV nessa pasta para habilitar a busca.
        </div>
      ) : null}

      {!error ? <SondaSearch data={items} /> : null}
    </div>
  );
}
