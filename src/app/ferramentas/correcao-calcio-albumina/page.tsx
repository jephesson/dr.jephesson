import CorrecaoCalcioAlbuminaTool from "@/components/CorrecaoCalcioAlbuminaTool";

export default function Page() {
  return (
    <div className="rounded-2xl border bg-white p-6" style={{ borderColor: "rgba(15,26,43,0.12)" }}>
      <h2 className="text-2xl font-semibold" style={{ color: "#0b1422" }}>
        Correção do cálcio pela albumina
      </h2>
      <p className="mt-3 text-sm" style={{ color: "rgba(11,20,34,0.65)" }}>
        Calculadora simples para estimar o cálcio corrigido a partir do cálcio total e da albumina.
      </p>

      <div className="mt-6">
        <CorrecaoCalcioAlbuminaTool />
      </div>
    </div>
  );
}
