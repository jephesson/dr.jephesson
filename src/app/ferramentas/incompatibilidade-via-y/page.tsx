import IncompatibilidadeYTool from "@/components/IncompatibilidadeYTool";

export default function Page() {
  return (
    <div className="rounded-2xl bg-white p-6" style={{ border: "1px solid rgba(15,26,43,0.12)" }}>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold" style={{ color: "#0b1422" }}>
          Incompatibilidade via Y
        </h2>
        <p className="text-sm" style={{ color: "rgba(11,20,34,0.68)" }}>
          Adicione os medicamentos para verificar a compatibilidade e gerar um relatório em PDF.
        </p>
      </div>

      <IncompatibilidadeYTool />
    </div>
  );
}
