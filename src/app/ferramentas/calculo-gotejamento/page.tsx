import GotejamentoTool from "@/components/GotejamentoTool";
import { loadGotejamentoData } from "@/lib/gotejamento";

export default async function Page() {
  const { items, error } = await loadGotejamentoData();

  return (
    <div className="rounded-2xl p-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold" style={{ color: "#0b1422" }}>
          Cálculo de gotejamento
        </h2>
        <p className="text-sm" style={{ color: "rgba(11,20,34,0.68)" }}>
          Selecione o medicamento e informe a posologia para estimar dose, volume total e frascos necessários.
        </p>
      </div>

      {error === "invalid-format" ? (
        <div className="mt-6 rounded-xl border px-4 py-3 text-sm" style={{ borderColor: "rgba(15,26,43,0.12)", color: "rgba(11,20,34,0.75)" }}>
          O arquivo <strong>public/callculo_gotejamento.csv</strong> está no formato Excel (.xlsx). Exporte como CSV (UTF-8) e substitua o arquivo.
        </div>
      ) : null}

      {error === "missing-file" ? (
        <div className="mt-6 rounded-xl border px-4 py-3 text-sm" style={{ borderColor: "rgba(15,26,43,0.12)", color: "rgba(11,20,34,0.75)" }}>
          Não encontramos o arquivo <strong>public/callculo_gotejamento.csv</strong>. Coloque o CSV nessa pasta para habilitar a ferramenta.
        </div>
      ) : null}

      {!error ? <GotejamentoTool items={items} /> : null}
    </div>
  );
}
