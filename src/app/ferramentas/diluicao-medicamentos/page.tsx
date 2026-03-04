import DiluicaoMedicamentosTool, { type DiluicaoItem } from "@/components/DiluicaoMedicamentosTool";

const itensDiluicao: DiluicaoItem[] = [
  {
    id: "abatacepte-135",
    name: "Abatacepte",
    principioAtivo: "Abatacepte 135",
    apresentacaoComercial: "Orência® 250mg Fap",
    volumeReconstituicao: "10 mL AD",
    estabilidadeReconstituido: "24h TA ou Ref",
    solucaoInfusao: "SF",
    volumeDiluicao: "100 mL QSP",
    estabilidadeDiluido: "24h TA ou Ref",
    concentracaoMaximaAdm: "-",
    velocidadeTempoInfusao: "Infusão: 30 min",
    observacoes: "Utilizar filtro de 0,2 a 1,2 μm para administração IV",
    fotossensivel: "-",
    flebite: "-",
  },
  {
    id: "aciclovir",
    name: "Aciclovir",
    principioAtivo: "Aciclovir",
    apresentacaoComercial: "Aciclovir® 250mg Fap (Teuto)",
    volumeReconstituicao: "10 mL AD",
    estabilidadeReconstituido: "12h TA",
    solucaoInfusao: "SF, SG5%",
    volumeDiluicao: "100 mL (250 - 500mg)",
    estabilidadeDiluido: "12h TA",
    concentracaoMaximaAdm: "5mg/mL",
    velocidadeTempoInfusao: "> 1h",
    observacoes: "-",
    fotossensivel: "-",
    flebite: "XX",
  },
  {
    id: "acetilcisteina",
    name: "Acetilcisteína",
    principioAtivo: "Acetilcisteína",
    apresentacaoComercial: "Fluimucil® 10% Ap 3mL (100mg/mL)",
    volumeReconstituicao: "-",
    estabilidadeReconstituido: "-",
    solucaoInfusao: "SF 0,45%, SG5%",
    volumeDiluicao: "100 mL",
    estabilidadeDiluido: "24h TA",
    concentracaoMaximaAdm: "-",
    velocidadeTempoInfusao: "> 1h",
    observacoes: "-",
    fotossensivel: "-",
    flebite: "-",
  },
];

export default function Page() {
  return (
    <div className="rounded-2xl p-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold" style={{ color: "#0b1422" }}>
          Diluição de medicamentos
        </h2>
        <p className="text-sm" style={{ color: "rgba(11,20,34,0.68)" }}>
          Lista com busca dinâmica. A pesquisa atualiza automaticamente enquanto você digita.
        </p>
      </div>

      <DiluicaoMedicamentosTool items={itensDiluicao} />
    </div>
  );
}
