import CalculadorasNefrologicasTool from "@/components/CalculadorasNefrologicasTool";

export default function Page() {
  return (
    <div className="rounded-2xl border bg-white p-6" style={{ borderColor: "rgba(15,26,43,0.12)" }}>
      <h2 className="text-2xl font-semibold" style={{ color: "#0b1422" }}>
        Calculadoras nefrológicas
      </h2>
      <p className="mt-3 text-sm" style={{ color: "rgba(11,20,34,0.65)" }}>
        Estimativas de função renal para apoio educacional.
      </p>
      <div className="mt-6">
        <CalculadorasNefrologicasTool />
      </div>
    </div>
  );
}
