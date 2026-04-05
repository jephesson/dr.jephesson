import VelocidadeInfusaoTool from "@/components/VelocidadeInfusaoTool";

export default function Page() {
  return (
    <div className="rounded-2xl border bg-white p-6" style={{ borderColor: "rgba(15,26,43,0.12)" }}>
      <h2 className="text-2xl font-semibold" style={{ color: "#0b1422" }}>
        Velocidade de infusão
      </h2>
      <p className="mt-3 text-sm" style={{ color: "rgba(11,20,34,0.65)" }}>
        Calcule preparo, volume final, diluente e tempo mínimo de infusão para vancomicina 500 mg (Blau).
      </p>

      <div className="mt-6">
        <VelocidadeInfusaoTool />
      </div>
    </div>
  );
}
