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
    observacoes: "Não refrigerar, por risco de precipitação",
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
  {
    id: "piperacilina-tazobactam",
    name: "Piperacilina + Tazobactam",
    principioAtivo: "Piperacilina (A) + Tazobactam (B)",
    apresentacaoComercial:
      "Tazocin 4,5 g injetável (4 g + 500 mg)/frasco-ampola; Tazocin 2,25 g injetável (2 g + 250 mg)/frasco-ampola",
    volumeReconstituicao: "2,25 g: 10 mL AD ou SF; 4,5 g: 20 mL AD ou SF",
    estabilidadeReconstituido: "24h TA ou 48h sob refrigeração",
    solucaoInfusao: "SF, SG e RL",
    volumeDiluicao: "50 a 150 mL; padrão HSL: 50 mL",
    estabilidadeDiluido: "24h TA ou 48h sob refrigeração",
    concentracaoMaximaAdm: "-",
    velocidadeTempoInfusao: "Infusão: 30 min; padrão HSL: 60 min",
    observacoes:
      "EV. Padrão HSL considera 50 mL e infusão em 60 min por protocolo institucional de risco de flebite.",
    fotossensivel: "-",
    flebite: "Protocolo institucional HSL: diluir em 50 mL e administrar em 60 min por risco de flebite",
  },
  {
    id: "vancomicina",
    name: "Vancomicina",
    principioAtivo: "Vancomicina",
    apresentacaoComercial: "Vancocina injetável 500 mg/frasco; vancomicina 125 mg/cápsula (manipulado)",
    volumeReconstituicao: "10 mL AD (concentração de 50 mg/mL)",
    estabilidadeReconstituido: "14 dias sob refrigeração ou 7 dias em temperatura ambiente",
    solucaoInfusao: "SF 0,9%",
    volumeDiluicao:
      "Diluir para 5 mg/mL. 500-1000 mg: 250 mL (mínimo 100 mL); 1250-1500 mg: 350 mL (mínimo 150 mL); 1750-2000 mg: 500 mL (mínimo 200 mL)",
    estabilidadeDiluido: "14 dias sob refrigeração ou 7 dias em temperatura ambiente",
    concentracaoMaximaAdm: "10 mg/mL",
    velocidadeTempoInfusao:
      "Infundir até 15 mg/min. 500-1000 mg: 60 min; 1250-1500 mg: 90 min; 1750-2000 mg: 120 min",
    observacoes:
      "VO e EV. Utilizar equipo de bomba de infusão pelo risco de reação infusional relacionada à concentração e ao tempo de infusão (síndrome do homem vermelho). Manter protocolo de vancocinemia e monitorização sérica quando indicado.",
    fotossensivel: "-",
    flebite: "Risco relacionado à concentração e ao tempo de infusão; preferir volumes mínimos apenas em CVC/restrição hídrica",
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
