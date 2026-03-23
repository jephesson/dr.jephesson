type ReviewTable = {
  caption?: string;
  headers: string[];
  rows: string[][];
};

type ReviewSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  tables?: ReviewTable[];
};

const sections: ReviewSection[] = [
  {
    id: "introducao",
    title: "1. Introdução e Epidemiologia",
    paragraphs: [
      "A sepse é uma das principais causas de morbimortalidade em todo o mundo. Nas últimas décadas, sua incidência aumentou, em parte devido ao envelhecimento populacional, ao maior uso de terapias imunossupressoras e à disseminação de microrganismos multirresistentes. Simultaneamente, a mortalidade vem diminuindo gradualmente, graças à implementação de protocolos padronizados e à melhoria dos cuidados intensivos.",
      "Dados epidemiológicos relevantes:",
    ],
    bullets: [
      "Incidência global estimada: 48,9 milhões de casos (2017), com 11 milhões de mortes (19,7% de todas as mortes no mundo).",
      "Nos EUA, a sepse responde por aproximadamente 6% das internações hospitalares.",
      "Pacientes com idade ≥65 anos representam 60–85% dos episódios.",
      "Agentes mais comuns: bactérias Grampositivas (ex.: Staphylococcus aureus), seguidas por Gramnegativas; fungos vêm aumentando; vírus (influenza, SARSCoV2, etc.) são causas subdiagnosticadas.",
      "Em cerca de 50% dos casos, a cultura é negativa (sepse culturanegativa).",
    ],
  },
  {
    id: "definicoes",
    title: "2. Definições Atuais (Sepsis-3)",
    paragraphs: [
      "As definições propostas pela Society of Critical Care Medicine (SCCM) e European Society of Intensive Care Medicine (ESICM) em 2016 substituíram os conceitos anteriores de SIRS e sepse grave.",
      "2.1 Sepse",
      "Disfunção orgânica com risco de vida causada por uma resposta desregulada do hospedeiro à infecção.",
      "O diagnóstico é confirmado por um aumento agudo ≥2 pontos no escore SOFA (Sequential Organ Failure Assessment) em relação ao valor basal presumido. Esse aumento está associado a uma mortalidade intrahospitalar ≥10%.",
      "2.2 Choque Séptico",
      "Subconjunto da sepse com anormalidades circulatórias, celulares e metabólicas profundas, associadas a maior risco de mortalidade.",
      "Critérios clínicos (devem estar todos presentes):",
    ],
    bullets: [
      "Necessidade de vasopressores para manter a Pressão Arterial Média (PAM) ≥65 mmHg após ressuscitação volêmica adequada.",
      "Lactato sérico ≥2 mmol/L (>18 mg/dL).",
      "A mortalidade associada ao choque séptico é ≥40%.",
      "Infecção: invasão de tecidos normalmente estéreis por microrganismos.",
      "Bacteremia: presença de bactérias viáveis no sangue.",
      "SIRS: síndrome inflamatória sistêmica que pode ocorrer tanto em infecções quanto em condições não infecciosas. Não é mais utilizada para definir sepse, mas ainda aparece em registros administrativos.",
      "MODS: disfunção progressiva de múltiplos órgãos em paciente gravemente enfermo, podendo ser primária ou secundária à resposta desregulada do hospedeiro.",
    ],
  },
  {
    id: "fisiopatologia",
    title: "3. Fisiopatologia: o papel central do endotélio",
    paragraphs: [
      "A sepse desencadeia uma cascata complexa de respostas pró e anti-inflamatórias. O elemento central é o endotélio vascular, cuja integridade é essencial para a homeostase.",
      "3.1 Glicocálix Endotelial",
    ],
    bullets: [
      "Camada de proteoglicanos e glicoproteínas que reveste o endotélio.",
      "Regula a permeabilidade vascular, adesão leucocitária e fluxo sanguíneo.",
      "Na sepse, toxinas bacterianas e mediadores inflamatórios causam shedding (descamação) do glicocálix.",
      "Consequências: aumento da permeabilidade capilar, edema intersticial, má distribuição do fluxo microcirculatório e hipoperfusão tecidual.",
    ],
  },
  {
    id: "imunoparalisia",
    title: "3.2 Imunoparalisia",
    bullets: [
      "Após uma fase inicial hiperinflamatória, alguns pacientes evoluem com supressão imune.",
      "Caracteriza-se por baixa expressão de HLA-DR em monócitos (mHLA-DR) e incapacidade de produzir citocinas pró-inflamatórias.",
      "Predispõe a infecções secundárias e aumenta a mortalidade.",
    ],
  },
  {
    id: "riscos",
    title: "4. Fatores de Risco",
    paragraphs: ["Os principais fatores associados ao desenvolvimento e à pior evolução da sepse incluem:"],
    bullets: [
      "Idade avançada (≥65 anos).",
      "Imunossupressão (neoplasias, quimioterapia, AIDS, insuficiência hepática ou renal, uso de corticoides/imunossupressores).",
      "Diabetes mellitus e obesidade.",
      "Internação em UTI ou hospitalização recente.",
      "Bacteremia documentada.",
      "Pneumonia adquirida na comunidade.",
      "Procedimentos invasivos (cateteres venosos centrais, sondas, ventilação mecânica).",
      "Uso prévio de antibióticos nos últimos 90 dias.",
      "Fatores genéticos que afetam o reconhecimento de patógenos.",
    ],
  },
  {
    id: "triagem",
    title: "5. Triagem, Diagnóstico e Avaliação Inicial",
    paragraphs: [
      "O reconhecimento precoce é o principal determinante da sobrevida. A abordagem deve ser rápida e sistemática.",
      "5.1 Ferramentas de Triagem",
    ],
    tables: [
      {
        headers: ["Ferramenta", "Componentes", "Sensibilidade", "Recomendação SSC 2021"],
        rows: [
          [
            "NEWS (National Early Warning Score)",
            "Frequência respiratória, SpO2, pressão arterial, frequência cardíaca, nível de consciência, temperatura",
            "Alta",
            "Recomendado (preferível)",
          ],
          ["SIRS", "Temperatura, FC, FR, leucócitos", "Alta", "Útil para triagem inicial, mas inespecífico"],
          ["qSOFA", "FR ≥22, PAS ≤100, alteração mental", "Baixa", "Contraindicado como ferramenta única"],
        ],
      },
    ],
    bullets: [
      "NEWS: 0–4 = baixo risco; 5–6 = risco moderado; 7 ou mais = alto risco.",
      "qSOFA ≥2 identifica maior risco de desfecho desfavorável, mas tem baixa sensibilidade para triagem inicial.",
    ],
  },
  {
    id: "sofa",
    title: "5.2 Critérios Diagnósticos: Escore SOFA",
    paragraphs: ["O diagnóstico de sepse é confirmado por um aumento agudo ≥2 pontos no escore SOFA em relação ao basal."],
    tables: [
      {
        headers: ["Sistema", "Parâmetro", "0", "1", "2", "3", "4"],
        rows: [
          ["Respiratório", "PaO2/FiO2 (mmHg)", "≥400", "<400", "<300", "<200 (com suporte)", "<100 (com suporte)"],
          ["Coagulação", "Plaquetas (×10³/µL)", "≥150", "<150", "<100", "<50", "<20"],
          ["Hepático", "Bilirrubina (mg/dL)", "<1,2", "1,2–1,9", "2,0–5,9", "6,0–11,9", ">12,0"],
          [
            "Cardiovascular",
            "PAM / vasopressores",
            "≥70",
            "<70",
            "Dopamina ≤5 ou dobutamina",
            "Dopamina >5 ou epi ≤0,1 ou nor ≤0,1",
            "Dopamina >15 ou epi >0,1 ou nor >0,1",
          ],
          ["Neurológico", "Escala de Glasgow", "15", "13–14", "10–12", "6–9", "<6"],
          ["Renal", "Creatinina (mg/dL) ou débito urinário", "<1,2", "1,2–1,9", "2,0–3,4", "3,5–4,9 ou <500 mL/dia", ">5,0 ou <200 mL/dia"],
        ],
      },
    ],
  },
  {
    id: "lactato-exames",
    title: "5.3 Papel do Lactato e 5.4 Exames Complementares",
    bullets: [
      "Medir lactato em todo adulto com suspeita de sepse.",
      "Lactato elevado indica hipoperfusão tecidual e pior prognóstico.",
      "Lactato ≥2 mmol/L após ressuscitação volêmica adequada define choque séptico.",
      "Interpretar o lactato no contexto clínico; não é marcador exclusivo de sepse.",
      "Hemograma, coagulograma, função renal/hepática, glicemia, procalcitonina, culturas e imagem devem compor a avaliação inicial.",
    ],
  },
  {
    id: "manejo-inicial",
    title: "6. Manejo Inicial e Ressuscitação (SSC 2021)",
    paragraphs: [
      "A Surviving Sepsis Campaign (SSC) 2021 consolidou as principais recomendações baseadas em evidências. O tratamento deve ser iniciado imediatamente após o reconhecimento, pois cada hora de atraso aumenta linearmente a mortalidade.",
      "6.1 Terapia Antimicrobiana",
    ],
    bullets: [
      "No choque séptico, administrar antibióticos dentro de 1 hora após o reconhecimento; na sepse sem choque, em até 3 horas após a suspeita.",
      "Usar esquema empírico de amplo espectro, considerando risco para MRSA, Pseudomonas e Candida.",
      "Usar dose de ataque para garantir níveis terapêuticos precoces.",
      "Para betalactâmicos, preferir infusão prolongada após o bolus inicial, maximizando T>MIC.",
      "Controle de foco: drenar abscessos, desbridar tecidos necrosados e remover cateteres suspeitos idealmente em <6–12 horas.",
      "Desescalonar diariamente conforme culturas e resposta clínica; cursos de 7 dias costumam ser suficientes.",
    ],
    tables: [
      {
        caption: "Fatores de risco para patógenos multirresistentes",
        headers: ["Patógeno", "Fatores de risco"],
        rows: [
          ["MRSA", "Infecção prévia por MRSA, hemodiálise, CVC, uso recente de antibióticos, internação prolongada"],
          ["P. aeruginosa", "Bronquiectasias, neutropenia, corticoides prolongados, internação em UTI, ventilação mecânica"],
          ["Candida spp.", "Imunossupressão, NPT, cirurgia abdominal recente, antibióticos de amplo espectro por tempo prolongado"],
        ],
      },
    ],
  },
  {
    id: "volumetria",
    title: "6.2 Ressuscitação Volêmica",
    bullets: [
      "Cristaloides balanceados (Ringer lactato, PlasmaLyte) são preferíveis ao SF 0,9%.",
      "Administrar pelo menos 30 mL/kg nas primeiras 3 horas, ajustando individualmente à resposta.",
      "Albumina pode ser considerada quando houver necessidade de grandes volumes de cristaloides.",
      "Abandonar parâmetros estáticos isolados; usar elevação passiva das pernas, variação do volume sistólico ou ecocardiografia.",
      "Evitar sobrecarga hídrica, associada a pior desfecho.",
    ],
  },
  {
    id: "vasoativos",
    title: "6.3 Vasopressores e Metas Hemodinâmicas",
    bullets: [
      "Primeira linha: noradrenalina.",
      "Meta de PAM: ≥65 mmHg.",
      "Em idosos, pode-se considerar PAM de 60–65 mmHg em cenário selecionado.",
      "Adicionar vasopressina quando a noradrenalina atingir 0,25–0,5 µg/kg/min.",
      "Epinefrina: reservar para choque refratário ou disfunção cardíaca persistente.",
      "Considerar dobutamina se houver disfunção miocárdica com hipoperfusão persistente e baixo débito.",
    ],
  },
  {
    id: "ventilacao",
    title: "6.4 Suporte Ventilatório",
    bullets: [
      "Oxigenoterapia com alvo de SpO2 94–98%; em risco de hipercapnia, usar 88–92%.",
      "Cânula nasal de alto fluxo é sugerida em vez de VNI na insuficiência respiratória hipoxêmica induzida por sepse.",
      "Na SDRA: volume corrente de 6 mL/kg (peso predito), pressão de platô <30 cmH2O e decúbito prona se PaO2/FiO2 <150 por >12 h/dia.",
    ],
  },
  {
    id: "adjuvantes",
    title: "6.5 Terapias Adjuvantes",
    tables: [
      {
        headers: ["Intervenção", "Recomendação"],
        rows: [
          ["Corticosteroides", "Hidrocortisona IV 200 mg/dia se choque séptico refratário com noradrenalina ≥0,25 µg/kg/min por ≥4 h."],
          ["Controle glicêmico", "Iniciar insulina se glicemia ≥180 mg/dL; alvo entre 144–180 mg/dL."],
          ["Profilaxia de TEV", "Preferir heparina de baixo peso molecular em vez de heparina não fracionada."],
          ["Profilaxia de úlcera de estresse", "Indicar se houver fatores de risco para sangramento gastrointestinal."],
          ["Bicarbonato de sódio", "Sugerido em choque séptico com pH ≤7,2 e lesão renal aguda (AKIN 2 ou 3)."],
          ["Transfusão de hemácias", "Estratégia restritiva com gatilho <7 g/dL na maioria dos pacientes."],
          ["Vitamina C", "Recomendação fraca contra o uso rotineiro."],
        ],
      },
    ],
  },
  {
    id: "negativas",
    title: "6.6 Recomendações Negativas Importantes",
    bullets: [
      "Não usar qSOFA como ferramenta única de triagem.",
      "Não usar parâmetros estáticos isolados para guiar reposição volêmica.",
      "Não iniciar antibióticos baseado apenas em procalcitonina.",
      "Não usar vitamina C intravenosa rotineiramente.",
      "Não usar terlipressina devido ao risco de isquemia digital.",
    ],
  },
  {
    id: "precisao",
    title: "7. Evolução para a Medicina de Precisão",
    paragraphs: [
      "A padronização por bundles atingiu um platô de eficácia. A heterogeneidade biológica dos pacientes exige abordagem mais personalizada, baseada em endótipos e trajetórias biológicas.",
      "7.1 Modelo da Tríade: Imune, Endotelial e Coagulação",
      "A sepse representa a falha simultânea de três sistemas interconectados. Identificar o fenótipo predominante permite terapias direcionadas.",
      "7.2 Endótipos e Trajetórias Biológicas",
    ],
    tables: [
      {
        headers: ["Endótipo", "Características", "Implicação terapêutica"],
        rows: [
          ["Imunoparalisia", "Baixa expressão de mHLA-DR; falha na recuperação entre dias 3–5; alto risco de infecções secundárias", "Candidatos a imunoestimulantes (GM-CSF, IL-7) em estudos clínicos"],
          ["Hiperinflamação", "Citocinas elevadas, febre persistente", "Possível benefício de modulação anti-inflamatória, ainda em investigação"],
          ["Endotelial", "Shedding do glicocálix, edema refratário, má distribuição microcirculatória", "Estabilizadores de barreira endotelial e monitorização microcirculatória"],
          ["Metabólico", "Acidose lática persistente, disfunção mitocondrial", "Terapias de suporte metabólico e otimização da oferta de oxigênio"],
        ],
      },
    ],
  },
  {
    id: "biomarcadores",
    title: "7.3 Biomarcadores e Fenótipos Clínicos",
    bullets: [
      "mHLA-DR: valor seriado; a não recuperação até o 5º dia identifica pacientes de muito alto risco.",
      "Procalcitonina e proadrenomedulina (MR-proADM): auxiliam no diagnóstico e na duração da antibioticoterapia.",
      "OCTA permite visualização em tempo real da microcirculação retiniana como proxy da circulação sistêmica.",
      "Fenótipos clínicos de Seymour et al.: alfa (~5% mortalidade), beta (~13%), gama (~24%) e delta (~40%).",
      "A distribuição desses fenótipos pode influenciar ensaios clínicos e, futuramente, guiar terapias específicas.",
    ],
  },
  {
    id: "prognostico",
    title: "8. Prognóstico e Cuidados Pós-Alta",
    bullets: [
      "Mortalidade intrahospitalar global: 10–52%, dependendo da população e dos critérios.",
      "Sepse (SOFA ≥2): ≥10%.",
      "Choque séptico: ≥40%.",
      "A mortalidade tem diminuído nas últimas décadas em alguns sistemas de saúde.",
      "Mortalidade pós-alta pode chegar a 20% no primeiro ano, mantendo-se elevada por até dois anos.",
      "Reinternações em 90 dias ocorrem em cerca de 10% dos sobreviventes.",
      "Aumenta o risco de infarto, AVC e síndrome pós-cuidados intensivos.",
      "Planejamento de alta deve incluir reconciliação medicamentosa, triagem social, reabilitação e seguimento ambulatorial.",
    ],
  },
  {
    id: "checklist",
    title: "9. Checklist do Plantonista",
    bullets: [
      "Identificar foco anatômico e remover cateteres suspeitos imediatamente.",
      "Coletar culturas e lactato antes do antibiótico sempre que possível.",
      "Administrar dose de ataque e considerar infusão prolongada para betalactâmicos.",
      "Avaliar risco de MRSA, Pseudomonas e Candida.",
      "Iniciar antibiótico em até 1 hora no choque séptico e até 3 horas nos demais casos.",
      "Administrar 30 mL/kg de cristaloide balanceado nas primeiras 3 horas.",
      "Considerar albumina 20% se grandes volumes forem necessários.",
      "Reavaliar com métodos dinâmicos e ecocardiografia.",
      "Usar noradrenalina para PAM ≥65 mmHg; adicionar vasopressina se noradrenalina >0,25 µg/kg/min.",
      "Reavaliar diariamente antibióticos, considerar corticoides se choque refratário e instituir profilaxias quando indicadas.",
    ],
  },
  {
    id: "referencias",
    title: "10. Referências e Leituras Recomendadas",
    bullets: [
      "Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Intensive Care Med. 2021;47(11):1181-1247.",
      "Singer M, Deutschman CS, Seymour CW, et al. The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3). JAMA. 2016;315(8):801-810.",
      "Rudd KE, Johnson SC, Agesa KM, et al. Global, regional, and national sepsis incidence and mortality, 1990-2017. Lancet. 2020;395(10219):200-211.",
      "Seymour CW, Kennedy JN, Wang S, et al. Derivation, Validation, and Potential Treatment Implications of Novel Clinical Phenotypes for Sepsis. JAMA. 2019;321(20):2003-2017.",
    ],
  },
];

function Table({ table }: { table: ReviewTable }) {
  return (
    <div className="review-table-wrap">
      {table.caption ? <p className="review-table-caption">{table.caption}</p> : null}
      <div className="review-table-scroll">
        <table className="review-table">
          <thead>
            <tr>
              {table.headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, index) => (
              <tr key={`${row[0]}-${index}`}>
                {row.map((cell, cellIndex) => (
                  <td key={`${cellIndex}-${cell}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="review-article">
      <section className="review-banner">
        <span className="review-banner__eyebrow">Guia avançado de manejo da sepse e choque séptico</span>
        <h1>Choque séptico</h1>
        <p>
          Das diretrizes iniciais à medicina de precisão. Conteúdo estruturado para graduação, residência e prática
          clínica, com foco em ressuscitação, suporte hemodinâmico e estratificação biológica.
        </p>
      </section>

      <section className="review-infographic">
        <div className="review-infographic__header">
          <h2>Guia de Sobrevivência à Sepse</h2>
          <p>
            Das diretrizes iniciais à medicina de precisão: um resumo visual do bundle de 1–3 horas e do manejo avançado.
          </p>
        </div>

        <div className="review-infographic__grid">
          <article className="review-infographic__card">
            <strong>Intervenção inicial e ressuscitação</strong>
            <p>Reconhecimento rápido, lactato, culturas, antibiótico precoce e reposição volêmica guiada por resposta.</p>
          </article>
          <article className="review-infographic__card">
            <strong>Terapia antimicrobiana urgente</strong>
            <p>Idealmente em &lt;1 h no choque séptico, com dose de ataque e atenção a PK/PD e controle de foco.</p>
          </article>
          <article className="review-infographic__card">
            <strong>Ventilação protetora na SDRA</strong>
            <p>Volume corrente baixo (6 mL/kg), pressão de platô &lt;30 cmH2O e prona se PaO2/FiO2 &lt;150.</p>
          </article>
          <article className="review-infographic__card">
            <strong>Manejo avançado e medicina de precisão</strong>
            <p>Uso de biomarcadores, endótipos e fenótipos clínicos para personalizar a terapia e o seguimento.</p>
          </article>
        </div>
      </section>

      <div className="review-layout">
        <aside className="review-sidebar">
          <h3>Índice</h3>
          <nav>
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`}>
                {section.title}
              </a>
            ))}
          </nav>
        </aside>

        <main className="review-main">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="review-section-card">
              <h2>{section.title}</h2>

              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              {section.bullets?.length ? (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}

              {section.tables?.map((table, index) => (
                <Table key={`${section.id}-${index}`} table={table} />
              ))}
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
