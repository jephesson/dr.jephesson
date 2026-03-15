import ImunoglobulinaHumanaTool from "@/components/ImunoglobulinaHumanaTool";

export default function Page() {
  return (
    <div className="rounded-2xl border bg-white p-6" style={{ borderColor: "rgba(15,26,43,0.12)" }}>
      <h2 className="text-2xl font-semibold" style={{ color: "#0b1422" }}>
        Imunoglobulina G humana (Privigen)
      </h2>
      <p className="mt-3 text-sm" style={{ color: "rgba(11,20,34,0.65)" }}>
        Calcule volume total e cronograma progressivo de infusão em mL/h para Privigen 10%, com observações de
        diluição e soro compatível.
      </p>

      <div className="mt-6">
        <ImunoglobulinaHumanaTool />
      </div>
    </div>
  );
}
