import SacaratoFerricoTool from "@/components/SacaratoFerricoTool";

export default function Page() {
  return (
    <div className="rounded-2xl border bg-white p-6" style={{ borderColor: "rgba(15,26,43,0.12)" }}>
      <h2 className="text-2xl font-semibold" style={{ color: "#0b1422" }}>
        Reposição com sacarato férrico
      </h2>
      <p className="mt-3 text-sm" style={{ color: "rgba(11,20,34,0.65)" }}>
        Estime o ferro a repor pela hemoglobina e peso, com cálculo de ampolas do Sucrofer.
      </p>

      <div className="mt-6">
        <SacaratoFerricoTool />
      </div>
    </div>
  );
}
