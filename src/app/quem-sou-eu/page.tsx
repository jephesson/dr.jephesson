export default function Page() {
  return (
    <section className="mx-auto max-w-2xl">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-center">Quem sou eu</h1>
      </header>

      <div className="rounded-2xl bg-white p-8" style={{ border: "1px solid var(--stroke)" }}>
        <div
          className="space-y-5"
          style={{
            color: "#0b1422",
            textAlign: "justify",
            textAlignLast: "left",
            lineHeight: 1.8,
          }}
        >
          <p style={{ textIndent: "1.5em" }}>
            Sou Jephesson Alex Floriano dos Santos, farmacêutico clínico, pesquisador e empreendedor. Nasci em Guarabira, Paraíba,
            e minha trajetória profissional sempre esteve conectada ao cuidado com o paciente, à pesquisa em farmacologia e à
            educação em saúde.
          </p>
          <p style={{ textIndent: "1.5em" }}>
            Graduado em Farmácia pela Universidade Federal da Paraíba (UFPB, 2015), segui para o mestrado no Programa de
            Pós-Graduação em Produtos Naturais e Sintéticos Bioativos, com ênfase em Farmacologia, também na UFPB (2017). Em
            seguida, concluí o doutorado em Biologia Celular e Molecular na Universidade Federal do Rio Grande do Sul (UFRGS, 2022),
            no Laboratório de Sinalização e Plasticidade Celular (LabSinal), período em que atuei como farmacêutico clínico no
            Hospital de Clínicas de Porto Alegre (HCPA).
          </p>
          <p style={{ textIndent: "1.5em" }}>
            Minha atuação clínica inclui experiência no Complexo do Hospital de Clínicas de Curitiba (CHC/UFPR), onde trabalhei com
            transplante de medula óssea e UTI até abril de 2025. Atualmente, sou farmacêutico clínico no HE‑UFPEL, mantendo o foco
            em segurança do paciente, uso racional de medicamentos e prática baseada em evidências.
          </p>
          <p style={{ textIndent: "1.5em" }}>
            No último ano, ampliei minha atuação para a inovação em saúde, dedicando-me ao desenvolvimento de sites e aplicativos
            voltados à área. Também sou empresário no ramo de agência de viagens, a Vias Aéreas LTDA., conciliando a visão
            empreendedora com o compromisso de gerar valor em diferentes frentes.
          </p>
          <p style={{ textIndent: "1.5em" }}>
            Meu currículo completo está no{" "}
            <a href="http://lattes.cnpq.br/9112252231580180" target="_blank" rel="noreferrer">
              lattes.cnpq.br/9112252231580180
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
