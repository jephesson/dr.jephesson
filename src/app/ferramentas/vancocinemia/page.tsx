import VancocinemiaTool from "@/components/VancocinemiaTool";

export default function Page() {
  return (
    <div className="rounded-2xl p-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold" style={{ color: "#0b1422" }}>
          Vancocinemia
        </h2>
        <p className="text-sm" style={{ color: "rgba(11,20,34,0.68)" }}>
          Calculadoras rápidas para ajuste pelo vale ou estimativa de AUC com duas medições.
        </p>
      </div>

      <VancocinemiaTool />
    </div>
  );
}
