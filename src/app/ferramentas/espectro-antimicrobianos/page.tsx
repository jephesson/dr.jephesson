import EspectroAntimicrobianosTool from "@/components/EspectroAntimicrobianosTool";

export default function Page() {
  return (
    <div className="rounded-2xl p-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold" style={{ color: "#0b1422" }}>
          Espectro terapêutico antimicrobianos
        </h2>
        <p className="text-sm" style={{ color: "rgba(11,20,34,0.68)" }}>
          Selecione a bactéria ou o antimicrobiano para visualizar a cobertura.
        </p>
      </div>

      <EspectroAntimicrobianosTool />
    </div>
  );
}
