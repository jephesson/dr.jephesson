"use client";

import { useMemo, useState } from "react";

type Section = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type Reference = {
  label: string;
  href?: string;
};

type Post = {
  id: string;
  name: string;
  className: string;
  category: "Farmacologia" | "Uso hospitalar";
  summary: string;
  sections: Section[];
  references: Reference[];
};

const posts: Post[] = [
  {
    id: "vortioxetina",
    name: "Vortioxetina (Trintellix®)",
    className: "Antidepressivos",
    category: "Farmacologia",
    summary:
      "A vortioxetina é um antidepressivo de ação multimodal: além de inibir o transportador de serotonina (SERT), ela modula diretamente vários receptores serotoninérgicos.",
    sections: [
      {
        title: "Vortioxetina (Trintellix®): farmacologia completa para uso em site",
        paragraphs: [
          "A vortioxetina é um antidepressivo de ação multimodal: além de inibir o transportador de serotonina (SERT), ela modula diretamente vários receptores serotoninérgicos. Esse “pacote” farmacológico ajuda a explicar por que, na prática clínica, o medicamento costuma ser discutido não só como um ISRS “clássico”, mas como um modulador mais amplo de circuitos ligados a humor, ansiedade, cognição, sono e sintomas somáticos.",
        ],
      },
      {
        title: "1) História e contexto de desenvolvimento",
        paragraphs: [
          "A vortioxetina (código de desenvolvimento Lu AA21004) foi desenvolvida como um antidepressivo com proposta de combinar inibição de recaptação de serotonina com modulação de receptores 5-HT, visando efeitos mais amplos em redes neurais relacionadas a depressão e sintomas associados.",
          "Nos EUA, o medicamento está registrado como TRINTELLIX (vortioxetine) e tem aprovação inicial em 2013 para depressão maior em adultos; o documento regulatório disponível indica revisão em 08/2023.",
        ],
      },
      {
        title: "Dados da molécula",
        bullets: [
          "Nome químico: vortioxetine",
          "Fórmula molecular (base livre): C₁₈H₂₂N₂S",
          "Massa molecular: ~298,45 g/mol",
          "Forma comercial: geralmente como bromidrato de vortioxetina",
          "Massa molecular do sal: ~379,3 g/mol",
          "pKa aproximado: ~9,1",
          "LogP (lipofilicidade): ~3,5–3,8",
          "Alta permeabilidade através da barreira hematoencefálica",
          "Ligação a proteínas plasmáticas: ≈98%",
          "Essas propriedades explicam sua boa absorção oral, ampla distribuição tecidual e meia-vida prolongada.",
        ],
      },
      {
        title: "2) Indicação terapêutica (on-label) e usos discutidos (off-label)",
        paragraphs: [
          "Indicação aprovada (on-label)",
          "Transtorno depressivo maior (TDM) em adultos.",
          "Usos discutidos na prática (off-label) — sem aprovação regulatória",
          "Na literatura e na prática clínica, a vortioxetina é frequentemente estudada/discutida para:",
        ],
        bullets: [
          "Sintomas ansiosos associados ao TDM e, em alguns cenários, transtornos de ansiedade (p. ex., TAG), com resultados variáveis entre estudos e necessidade de individualização.",
          "Sintomas cognitivos em depressão (atenção, velocidade de processamento, funções executivas), tema recorrente em revisões mecanísticas/translacionais.",
          "Disfunção sexual induzida por antidepressivos (como estratégia de troca/otimização), tópico comum em discussões clínicas — embora isso dependa muito do contexto e de avaliação médica.",
        ],
      },
      {
        title: "3) Mecanismo de ação detalhado",
        paragraphs: ["3.1 Inibição do SERT (transportador de serotonina)", "O componente “base” é a inibição da recaptação de serotonina, elevando a sinalização serotoninérgica no SNC. A bula descreve alta afinidade pelo SERT e ocupação do transportador em estudos de PET, aumentando conforme a dose.", "3.2 Ações em receptores 5-HT (o “multimodal”)", "A vortioxetina apresenta, além do SERT, um perfil funcional em receptores 5-HT com antagonismo/agonismo (conforme descrito no documento regulatório):"],
        bullets: ["Antagonista 5-HT3", "Agonista 5-HT1A", "Antagonista 5-HT7", "Antagonista 5-HT1D", "Agonista parcial 5-HT1B", "A própria bula ressalta que a contribuição exata dessas ações receptoras para o efeito antidepressivo não é totalmente estabelecida."],
      },
      {
        title: "3.3 Efeitos “em rede” (downstream) em outros sistemas neurotransmissores",
        paragraphs: [
          "Além do aumento direto da serotonina sináptica por inibição do SERT, a vortioxetina promove uma reorganização funcional de redes neuronais por meio da sua ação simultânea em múltiplos receptores 5-HT. Esse efeito combinado gera alterações “downstream” em diversos sistemas neurotransmissores, fenômeno frequentemente descrito como modulação de circuitos ou efeito em rede.",
          "Em modelos pré-clínicos e em revisões translacionais, essa modulação multimodal é associada a mudanças na atividade de:",
        ],
        bullets: [
          "Noradrenalina (especialmente em córtex pré-frontal e hipocampo)",
          "Dopamina (em vias mesocorticais ligadas à motivação e função executiva)",
          "Acetilcolina (importante para atenção e memória)",
          "Histamina (vigília e energia)",
          "Glutamato (plasticidade sináptica e cognição)",
          "além da própria serotonina, agora redistribuída de forma diferente entre circuitos",
        ],
      },
      {
        title: "Mecanismos integrados e impacto clínico",
        paragraphs: [
          "Esses efeitos emergem principalmente de três mecanismos integrados:",
          "1. Desinibição cortical via antagonismo 5-HT3, reduzindo o controle GABAérgico sobre neurônios piramidais e facilitando transmissão glutamatérgica em regiões corticais;",
          "2. Modulação do feedback serotoninérgico pré-sináptico (5-HT1B e 5-HT1D), alterando o padrão de liberação de serotonina e de outros neurotransmissores em microcircuitos específicos;",
          "3. Regulação de circuitos límbico-corticais por meio do agonismo 5-HT1A e antagonismo 5-HT7, impactando reatividade ao estresse, ritmo circadiano, arquitetura do sono e integração cognitivo-emocional.",
          "O resultado não é simplesmente “mais serotonina”, mas sim uma recalibração da comunicação entre redes frontais, límbicas e hipocampais, com potencial aumento de sinalização dopaminérgica e colinérgica em áreas relacionadas à atenção, memória de trabalho, velocidade de processamento e flexibilidade cognitiva.",
          "Essa reorganização de rede é uma das principais bases neurobiológicas propostas para o interesse na vortioxetina em sintomas cognitivos associados à depressão, incluindo déficits de concentração, lentificação mental e comprometimento executivo — dimensões que frequentemente persistem mesmo após melhora do humor.",
          "É fundamental ressaltar, entretanto, que essa cadeia “mecanismo molecular → modulação de circuito → benefício clínico” não é linear nem garantida. A tradução desses efeitos neuroquímicos em melhora cognitiva mensurável depende de múltiplos fatores, incluindo gravidade do quadro, variabilidade individual, dose, tempo de tratamento e características basais do paciente. Assim, embora o racional farmacológico seja consistente, o impacto clínico deve sempre ser avaliado com base em desfechos objetivos e resposta individual.",
        ],
      },
      {
        title: "4) O que cada receptor faz e seu possível envolvimento clínico",
        paragraphs: [
          "4.1 5-HT3 (antagonismo)",
          "O que é: o 5-HT3 é um receptor serotoninérgico “diferente” da maioria: em vez de ser acoplado à proteína G, ele é um canal iônico (ligante-dependente). Ele aparece em circuitos centrais (ex.: interneurônios) e também em vias periféricas relacionadas a náusea/vômito.",
          "O que tende a modular: excitabilidade neuronal e liberação de neurotransmissores via interneurônios, com implicações para ansiedade, humor, sintomas somáticos e comorbidades. Revisões apontam o antagonismo 5-HT3 como estratégia com potencial em depressão e condições associadas.",
          "Por que pode importar na vortioxetina:",
        ],
        bullets: [
          "Pode contribuir para um “rebalanço” de redes excitatórias/inibitórias em circuitos corticolímbicos (hipótese mecanística em revisões).",
          "É um alvo clássico para antieméticos (p. ex., ondansetrona), o que ajuda a contextualizar por que esse receptor é tão citado quando se fala de tolerabilidade GI (embora a vortioxetina, na prática, ainda tenha náusea como evento comum).",
        ],
      },
      {
        title: "4.2 5-HT1A (agonismo)",
        paragraphs: [
          "O que é: receptor acoplado à proteína G (Gi/Go), com duas populações funcionais muito discutidas:",
        ],
        bullets: [
          "Autorreceptores (no núcleo da rafe): quando ativados, reduzem a taxa de disparo dos neurônios serotoninérgicos e modulam a liberação de 5-HT.",
          "Heterorreceptores (pós-sinápticos em regiões como hipocampo/córtex): relacionados a efeitos em humor e ansiedade.",
          "Por que é importante em humor/ansiedade: revisões destacam que a distinção auto vs. heterorreceptor ajuda a entender por que a sinalização 5-HT1A está fortemente ligada a fenótipos de ansiedade e comportamentos tipo-depressivos, e como adaptações ao longo do tempo podem influenciar resposta a antidepressivos.",
          "Na vortioxetina: o agonismo 5-HT1A é frequentemente apontado como um componente que pode favorecer efeitos ansiolíticos e modulação de circuitos límbicos, dentro da proposta multimodal.",
        ],
      },
      {
        title: "4.3 5-HT7 (antagonismo)",
        paragraphs: [
          "O que é: receptor acoplado à proteína G (Gs), com presença em circuitos relacionados a ritmos circadianos, arquitetura do sono e processos cognitivos.",
          "O que tende a modular: sono/vigília, sincronização circadiana e aspectos de aprendizagem/memória, além de interação com vias serotoninérgicas ligadas a humor. Revisões do 5-HT7 discutem esse alvo como promissor em condições do SNC.",
          "Na vortioxetina: o antagonismo 5-HT7 entra como possível peça para efeitos em sono/circadiano e dimensões cognitivas relatadas em estudos e discussões translacionais.",
        ],
      },
      {
        title: "4.4 5-HT1D (antagonismo)",
        paragraphs: [
          "O que é: receptor Gi/Go com papel relevante em vias serotoninérgicas presinápticas e circuitos que também aparecem como pano de fundo em enxaqueca, pois receptores 5-HT1B/1D são alvos de triptanos (agonistas).",
          "Por que isso aparece em farmacologia: a referência a triptanos ajuda a entender a fisiologia 1B/1D em controle de liberação de neuropeptídeos e modulação vascular/neural em cefaleias. (Uso como contexto fisiológico, não como indicação da vortioxetina.)",
          "Na vortioxetina: o antagonismo 5-HT1D é citado no perfil farmacodinâmico regulatório; em termos clínicos, é geralmente tratado como parte do “ajuste fino” multimodal da neurotransmissão.",
        ],
      },
      {
        title: "4.5 5-HT1B (agonismo parcial)",
        paragraphs: [
          "O que é: receptor Gi/Go frequentemente descrito como auto/heterorreceptor que modula liberação de neurotransmissores (incluindo 5-HT) em diferentes regiões.",
          "Relevância em depressão: revisões discutem o 5-HT1B como alvo potencial para efeito antidepressivo, justamente por sua capacidade de modular circuitos e liberação sináptica.",
          "Agonismo parcial: por que isso importa?",
          "Agonistas parciais podem atuar como “moduladores” que não empurram o sistema ao máximo (em comparação a agonistas plenos), o que, em teoria, pode favorecer estabilidade de rede e reduzir extremos de sinalização — um raciocínio comum em farmacologia de receptores.",
          "Na vortioxetina: o agonismo parcial 5-HT1B é parte do perfil multimodal descrito na bula.",
        ],
      },
      {
        title: "5) Farmacocinética (ADME)",
        paragraphs: ["Absorção:"],
        bullets: [
          "Pico de concentração (Tmax) em torno de 7–11 horas após a dose.",
          "Biodisponibilidade ~75%.",
          "Alimento não altera de forma clinicamente relevante a farmacocinética.",
        ],
      },
      {
        title: "Distribuição",
        bullets: [
          "Ligação a proteínas plasmáticas ~98%.",
          "Volume de distribuição elevado, sugerindo ampla distribuição extravascular.",
        ],
      },
      {
        title: "Metabolismo",
        bullets: [
          "Metabolizada principalmente por oxidação via CYP2D6 (principal), com participação de CYP3A4/5, CYP2C19, CYP2C9, CYP2A6, CYP2C8, CYP2B6, seguida de conjugação.",
        ],
      },
      {
        title: "Eliminação",
        bullets: [
          "Meia-vida terminal média ~66 horas; estado de equilíbrio tipicamente em ~2 semanas.",
          "Excreção predominantemente como metabólitos (urina e fezes).",
        ],
      },
      {
        title: "Interações (destaques)",
        bullets: [
          "Inibidores fortes de CYP2D6 aumentam níveis de vortioxetina → pode ser necessário ajuste de dose.",
          "Indutores fortes de CYP podem reduzir níveis → pode ser necessário ajuste clínico.",
          "Em metabolizadores pobres de CYP2D6, a exposição pode ser maior.",
        ],
      },
      {
        title: "6) Efeitos adversos e segurança",
        paragraphs: ["6.1 Efeitos adversos comuns", "Os eventos adversos mais frequentemente relatados incluem náusea (muito comum, especialmente no início), além de sintomas gastrointestinais como constipação e vômitos (frequência varia por estudo/dose).", "6.2 Disfunção sexual (versão aprimorada)", "A disfunção sexual é um efeito adverso possível com antidepressivos que aumentam a neurotransmissão serotoninérgica, pois a serotonina pode inibir componentes da resposta sexual (por exemplo, reduzindo interesse sexual e dificultando a resposta sexual em alguns indivíduos), além de interagir com dopamina e noradrenalina em circuitos de recompensa/motivação. Em termos clínicos, pode se manifestar como redução de libido e dificuldade de desempenho sexual, em intensidade variável.", "Na vortioxetina, estudos e revisões comparativas sugerem que:"],
        bullets: [
          "A taxa e o padrão de disfunção sexual podem ser diferentes de alguns SSRIs/SNRIs em certos contextos, mas não é “zero” e varia com dose, população, método de avaliação e presença de depressão ativa (a própria depressão pode causar disfunção sexual).",
          "Em pesquisas clínicas, a avaliação frequentemente usa escalas padronizadas (por exemplo, instrumentos de função sexual), o que reduz subjetividade, mas ainda assim há grande variabilidade individual.",
          "Pontos práticos para comunicação em saúde (sem prescrição):",
          "Disfunção sexual é uma das principais causas de baixa adesão ao antidepressivo; vale orientar pacientes a relatar abertamente o sintoma para ajuste terapêutico com segurança.",
          "Estratégias clínicas comuns (definidas pelo médico) incluem reavaliar dose, tempo de adaptação, comorbidades e interações — e, quando indicado, considerar troca para fármaco com melhor tolerabilidade individual.",
        ],
      },
      {
        title: "6.3 Alertas relevantes (classe/medicamento)",
        bullets: [
          "Risco aumentado de ideação/comportamento suicida em crianças, adolescentes e adultos jovens (alerta de antidepressivos).",
          "Síndrome serotoninérgica, especialmente em combinações com outros serotoninérgicos/IMAO.",
          "Sangramento (maior risco quando associado a AINEs/antiagregantes/anticoagulantes).",
          "Hiponatremia/SIADH (atenção especial em idosos e pacientes de risco).",
          "Ativação de mania/hipomania em indivíduos suscetíveis.",
          "Glaucoma de ângulo fechado em predispostos (precaução).",
        ],
      },
      {
        title: "7) Interações medicamentosas (principais)",
        bullets: [
          "Inibidores fortes de CYP2D6 (p. ex., bupropiona, fluoxetina, paroxetina, quinidina) podem aumentar a exposição à vortioxetina; pode ser necessário ajuste de dose conforme orientação clínica.",
          "Indutores fortes de enzimas (p. ex., rifampicina, carbamazepina, fenitoína) podem reduzir níveis e exigir reavaliação terapêutica.",
          "IMAO e combinações serotoninérgicas relevantes exigem cuidado por risco de síndrome serotoninérgica (seguir regras de intervalo/washout do material regulatório).",
        ],
      },
      {
        title: "8) Um resumo “em uma frase”",
        paragraphs: [
          "A vortioxetina combina inibição do SERT com um perfil multirreceptor (5-HT3/5-HT7/5-HT1D antagonismo; 5-HT1A agonismo; 5-HT1B agonismo parcial), o que sustenta o racional de modulação mais ampla de redes ligadas a humor, ansiedade, sono e cognição — ainda que a contribuição exata de cada receptor para o efeito antidepressivo não seja completamente definida na bula.",
        ],
      },
    ],
    references: [
      {
        label:
          "TAKEDA PHARMACEUTICALS AMERICA, INC. TRINTELLIX (vortioxetine) tablets, for oral use: prescribing information. Silver Spring: U.S. Food and Drug Administration, 2023. Disponível em: https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/204447s026lbl.pdf. Acesso em: 4 fev. 2026.",
        href: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/204447s026lbl.pdf",
      },
      {
        label:
          "SÁNCHEZ, C.; ASÍN, K. E.; ARTIGAS, F. Vortioxetine, a novel antidepressant with multimodal activity: review of preclinical and clinical data. Pharmacology & Therapeutics, v. 145, p. 43–57, 2015. DOI: 10.1016/j.pharmthera.2014.07.001. Disponível em: https://pubmed.ncbi.nlm.nih.gov/25016186/. Acesso em: 4 fev. 2026.",
        href: "https://pubmed.ncbi.nlm.nih.gov/25016186/",
      },
      {
        label:
          "GARCIA-GARCIA, A.; NEWMAN-TANCREDI, A.; LEONARDO, E. D. 5-HT1A receptors in mood and anxiety: recent insights into autoreceptor versus heteroreceptor function. Psychopharmacology (Berl), v. 231, n. 4, p. 623–636, 2014. DOI: 10.1007/s00213-013-3389-x. Disponível em: https://pmc.ncbi.nlm.nih.gov/articles/PMC3927969/. Acesso em: 4 fev. 2026.",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3927969/",
      },
      {
        label:
          "TIGER, M.; VARNÄS, K.; OKUBO, Y.; LUNDBERG, J. The 5-HT1B receptor: a potential target for antidepressant treatment. Psychopharmacology (Berl), v. 235, n. 5, p. 1317–1334, 2018. DOI: 10.1007/s00213-018-4868-8. Disponível em: https://pmc.ncbi.nlm.nih.gov/articles/PMC5919989/. Acesso em: 4 fev. 2026.",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5919989/",
      },
      {
        label:
          "NIKIFORUK, A.; POPIK, P. Targeting the serotonin 5-HT7 receptor in the search for treatments for CNS disorders: rationale and progress to date. Disponível em: https://pmc.ncbi.nlm.nih.gov/articles/PMC4555343/. Acesso em: 4 fev. 2026.",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4555343/",
      },
      {
        label:
          "BHATT, S.; DEVADOSS, T.; MANJULA, S. N.; RAJANGAM, J. 5-HT3 receptor antagonism: a potential therapeutic approach for the treatment of depression and other disorders. Current Neuropharmacology, v. 19, n. 9, p. 1545–1559, 2021. DOI: 10.2174/1570159X18666201015155816. Disponível em: https://pmc.ncbi.nlm.nih.gov/articles/PMC8762176/. Acesso em: 4 fev. 2026.",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8762176/",
      },
      {
        label:
          "BÉTRY, C.; ETIÉVANT, A.; OOSTERHOF, C.; EBERT, B.; SANCHEZ, C.; HADDJERI, N. Role of 5-HT3 receptors in the antidepressant response. Pharmaceuticals, v. 4, n. 4, p. 603–629, 2011. DOI: 10.3390/ph4040603. Disponível em: https://www.mdpi.com/1424-8247/4/4/603. Acesso em: 4 fev. 2026.",
        href: "https://www.mdpi.com/1424-8247/4/4/603",
      },
      {
        label:
          "(Pano de fundo 5-HT1B/1D e triptanos em enxaqueca) TEPPER, S. J. et al. Mechanisms of action of the 5-HT1B/1D receptor agonists. Disponível em: https://pubmed.ncbi.nlm.nih.gov/12117355/. Acesso em: 4 fev. 2026.",
        href: "https://pubmed.ncbi.nlm.nih.gov/12117355/",
      },
    ],
  },
  {
    id: "fluoxetina",
    name: "Fluoxetina (Prozac®, Sarafem®)",
    className: "Antidepressivos",
    category: "Farmacologia",
    summary:
      "A fluoxetina é um antidepressivo da classe dos inibidores seletivos da recaptação de serotonina (ISRS).",
    sections: [
      {
        title: "Fluoxetina (Prozac®, Sarafem®)",
        paragraphs: [
          "A fluoxetina é um antidepressivo da classe dos inibidores seletivos da recaptação de serotonina (ISRS). Seu efeito central é inibir o transportador de serotonina (SERT), aumentando a sinalização serotoninérgica no SNC. Diferente de fármacos “multimodais” (como a vortioxetina), a fluoxetina é, em essência, um ISRS “clássico” — mas com particularidades relevantes: metabólito ativo (norfluoxetina), meia-vida longa, e um perfil de interações importante por inibição de CYP2D6.",
        ],
      },
      {
        title: "1) História e contexto de desenvolvimento",
        paragraphs: [
          "A fluoxetina foi desenvolvida como um dos primeiros ISRS a alcançar uso amplo na prática clínica moderna, marcando uma transição dos antidepressivos tricíclicos (com maior carga anticolinérgica/sedativa) para fármacos com maior seletividade farmacológica. Ela se tornou conhecida mundialmente por marcas como Prozac®.",
        ],
      },
      {
        title: "Dados da molécula",
        bullets: [
          "Nome químico (genérico): fluoxetine (fluoxetina)",
          "Forma comercial: geralmente cloridrato de fluoxetina (HCl)",
          "Fórmula molecular (base livre): C₁₇H₁₈F₃NO",
          "Fórmula do sal (HCl): C₁₇H₁₈F₃NO·HCl",
          "Massa molecular (HCl): 345,79 g/mol",
          "Mistura racêmica: R- e S-fluoxetina (50/50)",
          "pKa (base monoprotica, aprox.): ~9,8",
          "Lipofilicidade (logKow/logP, aprox.): ~4,1",
          "Ligação a proteínas plasmáticas: ~94,5%",
          "Boa penetração no SNC, coerente com seu perfil lipofílico e ação central (característica de ISRS).",
        ],
      },
      {
        title: "2) Indicação terapêutica (on-label) e usos discutidos (off-label)",
        paragraphs: [
          "Indicações aprovadas (on-label) — variam por país/marca",
          "Conforme bula FDA de Prozac®:",
        ],
        bullets: [
          "Transtorno depressivo maior (TDM) em adultos e em crianças/adolescentes (8 a 18 anos)",
          "Transtorno obsessivo-compulsivo (TOC) em adultos e em crianças/adolescentes (7 a 17 anos)",
          "Bulimia nervosa (redução de compulsão alimentar e vômitos) em adultos",
          "Transtorno do pânico (com ou sem agorafobia) em adultos",
          "Em combinação com olanzapina: episódios depressivos do transtorno bipolar I (inclui 10 a 17 anos) e depressão resistente ao tratamento em adultos",
          "Obs.: a própria bula de Prozac cita que a fluoxetina também é comercializada para TDPM/PMDD sob a marca Sarafem®.",
        ],
      },
      {
        title: "Usos discutidos na prática (off-label) — sem aprovação universal",
        bullets: [
          "Transtornos de ansiedade (p. ex., TAG, fobia social), TEPT, entre outros — com necessidade de individualização e evidência variável por indicação.",
          "Estratégias de troca/otimização quando há disfunção sexual ou tolerabilidade ruim com outro antidepressivo (decisão médica).",
        ],
      },
      {
        title: "3) Mecanismo de ação detalhado",
        paragraphs: [
          "3.1 Inibição do SERT (transportador de serotonina)",
          "O mecanismo central é a inibição da recaptação neuronal de serotonina (5-HT) no SNC, aumentando a disponibilidade sináptica e modulando a neurotransmissão em circuitos relacionados a humor, ansiedade e controle de impulsos.",
          "3.2 “Acessórios” farmacodinâmicos relevantes",
          "A bula descreve que a fluoxetina tem baixa afinidade (em comparação a tricíclicos) por receptores como muscarínicos, histaminérgicos e α1-adrenérgicos, o que ajuda a contextualizar um perfil tipicamente menos anticolinérgico/sedativo do que antidepressivos clássicos.",
          "Além disso, bases de farmacologia molecular frequentemente descrevem antagonismo em 5-HT2C como um possível componente que diferencia a fluoxetina de outros ISRS em alguns modelos (mais como “nuance” do que como pilar terapêutico).",
        ],
      },
      {
        title: "3.3 Efeitos “em rede” (downstream) em outros sistemas",
        paragraphs: [
          "O efeito clínico de um ISRS raramente é “só serotonina”. Com o tempo, surgem adaptações de circuito (mudanças de sensibilidade, reorganização de microcircuitos e padrões de disparo), que podem influenciar sintomas emocionais e somáticos.",
          "Em modelos experimentais, há evidência de que a fluoxetina pode aumentar noradrenalina e dopamina extracelulares no córtex pré-frontal, fenômeno discutido como potencialmente ligado a mecanismos indiretos (incluindo modulação 5-HT2C) e à forma como circuitos serotoninérgicos regulam interneurônios e vias catecolaminérgicas.",
          "Importante: mecanismo → benefício clínico não é uma linha reta. A resposta depende de dose, tempo, diagnóstico, gravidade, comorbidades e variabilidade individual.",
        ],
      },
      {
        title: "4) “O que cada alvo faz” e possíveis correlações clínicas",
        paragraphs: ["4.1 SERT (inibição)", "O que faz: reduz a recaptação de 5-HT, aumentando a sinalização serotoninérgica.", "Por que importa: base farmacológica para efeitos em humor, ansiedade, obsessões/compulsões e impulsividade (contexto do TOC e bulimia).", "4.2 5-HT2C (antagonismo — hipótese/nuance)", "O que é: receptor serotoninérgico envolvido em controle de circuitos que modulam dopamina/noradrenalina em algumas regiões.", "Por que aparece na fluoxetina: estudos sugerem que esse componente pode contribuir para efeitos mais “ativadores” e para mudanças catecolaminérgicas no córtex pré-frontal em modelos.", "4.3 Receptores muscarínicos, histaminérgicos e α1 (baixa afinidade)", "O que isso sugere: menor tendência a efeitos anticolinérgicos (boca seca intensa, constipação anticolinérgica marcada), sedação e certos efeitos cardiovasculares típicos de tricíclicos (comparativamente).", "4.4 Metabólito ativo (norfluoxetina) como “prolongador” de efeito", "O que é: metabólito ativo formado por desmetilação.", "Por que importa: contribui para persistência do efeito e para a necessidade de considerar interações por semanas após suspensão."],
      },
      {
        title: "5) Farmacocinética (ADME)",
        paragraphs: ["Absorção"],
        bullets: [
          "Após dose oral, picos plasmáticos são observados em ~6–8 horas.",
          "Alimento não altera de forma clinicamente relevante a biodisponibilidade; pode apenas atrasar a absorção em ~1–2 horas.",
        ],
      },
      {
        title: "Distribuição",
        bullets: ["Ligação a proteínas: ~94,5%."],
      },
      {
        title: "Metabolismo",
        bullets: [
          "Metabolismo hepático extenso com formação de norfluoxetina (ativa).",
          "Variabilidade por CYP2D6 (inclui “metabolizadores pobres” em uma fração da população), com implicações para exposição e interações.",
        ],
      },
      {
        title: "Eliminação e meia-vida",
        bullets: [
          "Fluoxetina: meia-vida de 1–3 dias (aguda) e 4–6 dias (crônica).",
          "Norfluoxetina: meia-vida de 4–16 dias.",
          "Steady-state: níveis de equilíbrio podem se aproximar do platô em 4–5 semanas; e o fármaco/metabólito podem persistir por semanas após interromper.",
        ],
      },
      {
        title: "6) Efeitos adversos e segurança",
        paragraphs: ["6.1 Efeitos adversos comuns (exemplos)", "Em estudos controlados, eventos frequentes incluem:"],
        bullets: [
          "Náusea, diarreia, anorexia, boca seca",
          "Insônia, nervosismo/ansiedade, tremor, sonolência",
          "Diminuição de libido (e outros efeitos sexuais em parte dos pacientes)",
        ],
      },
      {
        title: "6.2 Disfunção sexual (visão prática)",
        paragraphs: [
          "A disfunção sexual pode ocorrer com ISRS por efeitos serotoninérgicos em circuitos de desejo/recompensa e reflexos autonômicos. A intensidade é variável e pode depender de dose, quadro depressivo de base, comorbidades e tempo de uso. (Discussão/conduta sempre deve ser individualizada por profissional.)",
        ],
      },
      {
        title: "6.3 Alertas relevantes (classe/medicamento)",
        bullets: [
          "Alerta de segurança para antidepressivos: aumento de risco de pensamentos/comportamentos suicidas em crianças, adolescentes e adultos jovens, especialmente no início do tratamento ou ajuste de dose (monitoramento clínico é essencial).",
          "Síndrome serotoninérgica (especialmente com combinações serotoninérgicas/IMAO).",
          "Risco de sangramento (maior com AINEs/antiagregantes/anticoagulantes).",
          "Ativação de mania/hipomania em suscetíveis.",
          "Interações com risco cardíaco (p. ex., pimozida; tioridazina).",
        ],
      },
      {
        title: "7) Interações medicamentosas (principais)",
        bullets: [
          "CYP2D6: a fluoxetina impacta o sistema CYP2D6 e pode aumentar níveis de fármacos metabolizados por essa via (atenção maior com fármacos de índice terapêutico estreito).",
          "Tioridazina: não usar com fluoxetina e não usar tioridazina dentro de 5 semanas após interromper fluoxetina, devido a risco de arritmias graves.",
          "Pimozida: contraindicação por risco cardíaco importante.",
          "IMAO/linezolida/azul de metileno (IV): risco elevado de toxicidade serotoninérgica — seguir regras de intervalo (washout) do material regulatório, lembrando a persistência longa da fluoxetina/norfluoxetina.",
        ],
      },
      {
        title: "8) Um resumo “em uma frase”",
        paragraphs: [
          "A fluoxetina é um ISRS que inibe o SERT, com metabólito ativo e meia-vida longa, o que sustenta eficácia em depressão/TOC e outras indicações, mas também exige atenção especial a interações (CYP2D6) e washout prolongado em trocas e combinações.",
        ],
      },
    ],
    references: [
      {
        label:
          "TAKEDA/Eli Lilly (FDA). PROZAC (fluoxetine) – Prescribing Information. U.S. Food and Drug Administration, 2017.",
      },
      {
        label: "HEAL, D. J. et al. Fluoxetine: the first selective serotonin reuptake inhibitor. A case history. Wiley, 2014.",
      },
      {
        label: "SOHEL, A. J. et al. Fluoxetine. StatPearls/NCBI Bookshelf, 2024.",
      },
      {
        label: "ROSSI, A. et al. Fluoxetine: a review on evidence based medicine. 2004 (PMC).",
      },
      {
        label:
          "BYMASTER, F. P. et al. Fluoxetine… increases norepinephrine and dopamine extracellular levels in prefrontal cortex. Psychopharmacology, 2002.",
      },
      {
        label: "PUBCHEM/NIH. Fluoxetine – compound/substance records. National Library of Medicine.",
      },
      {
        label: "CÂRCU-DOBRIN, M. et al. Enantioselective analysis of fluoxetine… (pKa 9,80). 2016 (PMC).",
      },
      {
        label: "SOUZA-SILVA, G. et al. Ecotoxicity of Fluoxetine Hydrochloride… (pKa/logKow). MDPI, 2025.",
      },
    ],
  },
  {
    id: "tirzepatida",
    name: "Tirzepatida (Mounjaro® / Zepbound®)",
    className: "Incretínicos",
    category: "Farmacologia",
    summary:
      "A tirzepatida é um fármaco injetável de ação “dupla incretina”: ela ativa os receptores de GIP e de GLP-1.",
    sections: [
      {
        title: "Tirzepatida (Mounjaro® / Zepbound®): farmacologia completa para uso em site",
        paragraphs: [
          "A tirzepatida é um fármaco injetável de ação “dupla incretina”: ela ativa os receptores de GIP e de GLP-1. Esse perfil explica por que seus efeitos vão além da glicemia e envolvem apetite/ingestão calórica, peso corporal, secreção de insulina e glucagon, sensibilidade à insulina e esvaziamento gástrico.",
          "Nota de marca/indicação: nos EUA, Mounjaro® é rotulado para diabetes tipo 2 (inclui ≥10 anos), enquanto Zepbound® é rotulado para controle crônico do peso e também para apneia obstrutiva do sono (AOS) moderada a grave em adultos com obesidade.",
        ],
      },
      {
        title: "1) História e contexto de desenvolvimento",
        paragraphs: [
          "A tirzepatida foi desenvolvida como um agonista “single-molecule” capaz de ativar simultaneamente GIPR e GLP-1R, buscando potencializar efeitos metabólicos (glicêmicos e de peso) observados nas incretinas. A aprovação inicial nos EUA como Mounjaro® ocorreu em 2022.",
          "Para controle crônico do peso, a FDA aprovou Zepbound® (tirzepatida) em 2023.",
          "No Brasil, a Anvisa aprovou Mounjaro® inicialmente para diabetes tipo 2 (2023) e publicou atualização de indicação para uso em manejo de peso em 2025.",
        ],
      },
      {
        title: "2) Indicação terapêutica (on-label) e usos discutidos (off-label)",
        paragraphs: ["2.1 Indicações aprovadas (exemplos por jurisdição/rotulagem):"],
        bullets: [
          "Mounjaro® (EUA): adjuvante a dieta e exercício para melhorar controle glicêmico em adultos e pacientes pediátricos ≥10 anos com diabetes tipo 2.",
          "Zepbound® (EUA): indicado para redução e manutenção de peso em adultos elegíveis e para AOS moderada a grave em adultos com obesidade (conforme bula vigente).",
          "União Europeia (EMA): Mounjaro para adultos com diabetes tipo 2 insuficientemente controlado (detalhes e combinações no EPAR).",
        ],
      },
      {
        title: "Usos discutidos (off-label, sem necessariamente haver aprovação no seu país)",
        paragraphs: [
          "Na prática e na literatura, a tirzepatida é frequentemente estudada/discutida em cenários como esteatose hepática associada a disfunção metabólica, risco cardiovascular/metabólico e outras condições ligadas à obesidade — mas a adoção depende de evidência, bula local e avaliação médica. (Para descrever off-label no seu site, vale sempre deixar explícito que não é indicação regulatória.)",
        ],
      },
      {
        title: "2.2 Efeito terapêutico esperado (o “que melhora”)",
        paragraphs: ["No diabetes tipo 2, espera-se:"],
        bullets: [
          "Redução da glicemia (jejum e pós-prandial), por efeitos incretínicos (insulina/glucagon) e por retardo do esvaziamento gástrico, que reduz absorção pós-refeição.",
        ],
      },
      {
        title: "No controle de peso, espera-se:",
        bullets: [
          "Redução de apetite/ingestão calórica e queda progressiva de peso, com manutenção quando o tratamento e o estilo de vida são sustentados. Em estudos de Zepbound, a eficácia foi avaliada em 72 semanas, com intervenção de estilo de vida desde o início.",
        ],
      },
      {
        title: "2.3 Prazos típicos para perceber efeitos (sem prometer resultado individual)",
        paragraphs: [
          "Os prazos variam bastante, mas um jeito útil (e honesto) de explicar em site é:",
          "(a) Primeiras semanas (semanas 1–4)",
          "É comum perceber mudanças em apetite e tolerabilidade gastrointestinal mais cedo, especialmente enquanto o organismo se adapta.",
          "O efeito de retardo do esvaziamento gástrico tende a ser mais forte após a primeira dose e diminui com o tempo, o que ajuda a entender por que alguns efeitos GI são mais intensos no início.",
          "Em rotulagem, a dose inicial (2,5 mg/semana) é descrita como fase de início e não é dose de manutenção (o objetivo principal aqui é adaptação/tolerância).",
          "(b) 1–3 meses",
          "Para diabetes, é comum que a melhora fique mais “visível” em marcadores como HbA1c depois de 8–12 semanas, porque a HbA1c reflete a média de glicose dos últimos ~3 meses (é um marcador “lento” por natureza).",
          "(c) 3–12 meses e longo prazo",
          "Para peso, a redução costuma ser progressiva por meses; nos estudos pivotais de Zepbound, a avaliação principal foi em 72 semanas, e os participantes ficaram ao menos 52 semanas em dose de manutenção. Isso reforça que é um tratamento de médio-longo prazo, não “efeito relâmpago”.",
        ],
      },
      {
        title: "2.4 Por que dieta e exercício são complementares (e não “detalhe”)",
        paragraphs: [
          "A própria indicação na bula já coloca o tratamento em conjunto com estilo de vida (diabetes: dieta/exercício; peso: dieta hipocalórica + atividade física).",
          "Mas vale explicar o “porquê” de forma didática:",
          "Dieta (redução calórica) complementa porque:",
          "A tirzepatida facilita comer menos (apetite/saciedade), mas a qualidade e o planejamento alimentar ajudam a:",
        ],
        bullets: [
          "Sustentar um déficit calórico consistente;",
          "Manter proteína/fibras/micronutrientes adequados;",
          "Reduzir desconfortos GI (ex.: refeições menores, menos gordura, mais fracionadas — conforme tolerância clínica).",
        ],
      },
      {
        title: "Nos estudos de Zepbound, a intervenção incluiu orientação para ~500 kcal/dia de déficit.",
        paragraphs: ["Exercício complementa porque:"],
        bullets: [
          "Ajuda a preservar massa magra e melhora capacidade cardiorrespiratória, algo que o medicamento sozinho não “treina”.",
          "Melhora sensibilidade à insulina e marcadores cardiometabólicos por vias independentes.",
          "Nos estudos, houve recomendação de mínimo de 150 min/semana como parte do pacote de estilo de vida.",
        ],
      },
      {
        title: "Tradução prática para o leitor do site",
        paragraphs: [
          "O medicamento reduz barreiras biológicas (fome/saciedade e eixo incretínico), enquanto dieta e exercício criam e sustentam o ambiente para perda de peso/controle glicêmico com melhor qualidade e manutenção.",
        ],
      },
      {
        title: "2.5 Cuidados com uso (pontos de segurança e orientação geral)",
        paragraphs: [
          "Titulação gradual: a escalada de dose é usada para reduzir efeitos GI (náusea, vômitos etc.).",
          "Contraceptivo oral: a bula orienta considerar método não oral ou barreira por 4 semanas após início e 4 semanas após cada aumento de dose (por impacto no esvaziamento gástrico/absorção).",
          "Associação com outros agonistas GLP-1: não é recomendado combinar com outros produtos contendo tirzepatida ou com agonistas de GLP-1 (evitar duplicidade).",
          "Atenção a sintomas importantes (alertas de bula): orientar o paciente a procurar avaliação médica se surgirem sinais compatíveis com eventos relevantes descritos na rotulagem (p.ex., pancreatite, desidratação por vômitos/diarreia, etc.). (Você pode listar de forma não alarmista, baseado na bula local.)",
        ],
      },
      {
        title: "3) Mecanismo de ação detalhado",
        paragraphs: ["3.1 Agonismo de GIPR + GLP-1R (o “duplo incretínico”)"],
        bullets: [
          "A tirzepatida liga e ativa os receptores de GIP e GLP-1, que são alvos fisiológicos das incretinas endógenas.",
          "Ela contém uma cadeia lipídica (C20) que favorece ligação à albumina e prolonga a meia-vida.",
        ],
      },
      {
        title: "3.2 Efeitos metabólicos centrais (glicemia e eixo insulina/glucagon)",
        paragraphs: ["Em termos funcionais (descritos em bula), a tirzepatida:"],
        bullets: [
          "Aumenta a secreção de insulina (primeira e segunda fase) de modo glicose-dependente;",
          "Reduz níveis de glucagon também de modo glicose-dependente;",
          "Aumenta sensibilidade à insulina;",
          "Retarda esvaziamento gástrico, sobretudo após a primeira dose, com atenuação ao longo do tempo.",
        ],
      },
      {
        title: "3.3 Efeitos “em rede” (downstream) em apetite, peso e circuitos de ingestão",
        paragraphs: [
          "Além do pâncreas e do fígado, o efeito clínico relevante envolve ingestão calórica e controle de apetite:",
        ],
        bullets: [
          "O GLP-1 é regulador fisiológico de apetite e ingestão calórica;",
          "Dados não clínicos sugerem que a adição de GIP pode contribuir adicionalmente para regulação de ingestão;",
          "Receptores de GIP e GLP-1 estão presentes em áreas cerebrais de regulação do apetite, e estudos em animais mostram ativação de neurônios nessas regiões.",
        ],
      },
      {
        title: "4) O que cada receptor faz e seu possível envolvimento clínico",
        paragraphs: ["4.1 GLP-1R (agonismo)", "GLP-1 participa de:"],
        bullets: [
          "Aumento de insulina glicose-dependente e redução de glucagon;",
          "Retardo do esvaziamento gástrico;",
          "Sinalização de saciedade e redução de ingestão.",
        ],
      },
      {
        title: "Tradução clínica típica",
        paragraphs: ["Melhora de glicemias (jejum e pós-prandial) e suporte à redução de peso (via menor ingestão)."],
      },
      {
        title: "4.2 GIPR (agonismo)",
        paragraphs: [
          "GIP é outra incretina com papel no eixo insulina/glucagon e, no contexto da tirzepatida, é descrito como componente que pode somar ao controle de ingestão e peso quando combinado ao GLP-1.",
          "Tradução clínica (racional): potencial de efeito complementar ao GLP-1 em regulação metabólica e de apetite — ainda que a “parcela” exata de cada receptor nos desfechos finais possa variar e dependa de evidência clínica.",
        ],
      },
      {
        title: "5) Farmacocinética (ADME)",
        paragraphs: ["Absorção"],
        bullets: ["SC; Tmax tipicamente entre 8–72 h; biodisponibilidade absoluta média ~80%."],
      },
      {
        title: "Distribuição",
        bullets: ["Vd aparente ~10 L (ordem de grandeza na bula); ligação à albumina ~99%."],
      },
      {
        title: "Eliminação",
        bullets: ["Depuração populacional ~0,06 L/h; meia-vida ~5 dias (Zepbound: ~5–6 dias), sustentando administração semanal."],
      },
      {
        title: "Metabolismo/Excreção",
        bullets: [
          "Metabolizada por clivagem proteolítica do peptídeo, beta-oxidação da cadeia C20 e hidrólise; excreção de metabólitos por urina e fezes (tirzepatida intacta não é observada).",
        ],
      },
      {
        title: "Dados da molécula (descrição/bula)",
        bullets: [
          "Fórmula empírica: C₂₂₅H₃₄₈N₄₈O₆₈; massa molecular ~4813,5 Da; peptídeo baseado na sequência de GIP, com modificações e cadeia C20.",
        ],
      },
      {
        title: "6) Efeitos adversos e segurança (visão geral de bula)",
        paragraphs: ["Reações comuns (classe incretínica; frequência varia por dose/estudo):"],
        bullets: [
          "Gastrointestinais como náusea, diarreia, vômitos, constipação, dispepsia, dor abdominal, além de redução de apetite.",
        ],
      },
      {
        title: "Alertas importantes descritos em bula (principais pontos)",
        bullets: [
          "Risco de tumores de células C da tireoide em roedores (causalidade em humanos não estabelecida); contraindicado em histórico pessoal/familiar de carcinoma medular de tireoide ou MEN2 (conforme bula).",
          "Pancreatite aguda: alerta de classe/medicamento (procura avaliação médica se sintomas ocorrerem).",
          "Hipoglicemia quando associada a insulina ou secretagogos (ex.: sulfonilureias).",
          "Retardo do esvaziamento gástrico e risco relacionado a aspiração em anestesia/sedação profunda (alerta descrito em bulas).",
          "Para site: vale inserir um bloco fixo “uso sob prescrição e acompanhamento”, e lembrar que eventos e contraindicações dependem da bula local e do perfil do paciente.",
        ],
      },
      {
        title: "7) Interações medicamentosas (principais)",
        paragraphs: [
          "A tirzepatida retarda o esvaziamento gástrico e pode impactar a absorção de medicamentos orais.",
          "Bula dos EUA descreve recomendação específica para contraceptivos hormonais orais durante início/escala de dose (devido à alteração de absorção), orientando método não oral ou método de barreira por período definido.",
          "Estudos in vitro na bula apontam baixo potencial para inibir/induzir CYP de forma relevante; o ponto central prático costuma ser mesmo a absorção por via oral.",
        ],
      },
      {
        title: "8) Resumo “em uma frase”",
        paragraphs: [
          "A tirzepatida é um agonista duplo de GIPR e GLP-1R, com cadeia lipídica C20 que prolonga a meia-vida, promovendo melhora glicêmica glicose-dependente, retardo do esvaziamento gástrico e redução de ingestão calórica/peso, com perfil de segurança que exige atenção especial a tireoide (alerta de bula), pancreatite, hipoglicemia em combinações e efeitos GI.",
        ],
      },
    ],
    references: [
      {
        label:
          "ELI LILLY AND COMPANY. MOUNJARO® (tirzepatide) injection: U.S. Prescribing Information. 2026. Disponível em: pi.lilly.com/us/mounjaro-uspi.pdf. Acesso em: 4 fev. 2026.",
      },
      {
        label:
          "ELI LILLY AND COMPANY. ZEPBOUND® (tirzepatide) injection: U.S. Prescribing Information. Disponível em: pi.lilly.com/us/zepbound-uspi.pdf. Acesso em: 4 fev. 2026.",
      },
      {
        label:
          "U.S. FOOD AND DRUG ADMINISTRATION (FDA). FDA approves new treatment for chronic weight management, first since 2014 (tirzepatide – Zepbound). 2023. Acesso em: 4 fev. 2026.",
      },
      {
        label:
          "AGÊNCIA NACIONAL DE VIGILÂNCIA SANITÁRIA (ANVISA). Mounjaro® (tirzepatida): nova indicação. 2025. Acesso em: 4 fev. 2026.",
      },
      {
        label: "EUROPEAN MEDICINES AGENCY (EMA). Mounjaro – EPAR / Product information. Acesso em: 4 fev. 2026.",
      },
    ],
  },
];

const themes = ["Todos", "Antidepressivos", "Incretínicos"];

export default function MedicamentosHub() {
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState("Todos");
  const [selectedId, setSelectedId] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((post) => {
      const themeOk = theme === "Todos" ? true : post.className === theme;
      const queryOk =
        !q ||
        post.name.toLowerCase().includes(q) ||
        post.summary.toLowerCase().includes(q) ||
        post.className.toLowerCase().includes(q);
      return themeOk && queryOk;
    });
  }, [query, theme]);

  const selected = posts.find((post) => post.id === selectedId) ?? null;

  const dropdownOptions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return posts.filter((post) => post.name.toLowerCase().includes(q)).slice(0, 6);
  }, [query]);

  return (
    <div className="meds-page">
      <div className="meds-header">
        <div>
          <h2>Medicamentos</h2>
          <p>Farmacologia, uso hospitalar e conteúdos práticos para apoiar a prática clínica.</p>
        </div>
        <span className="meds-pill">Em expansão</span>
      </div>

      <div className="meds-filters">
        <div className="meds-search">
          <label>Buscar medicamento</label>
          <div className="meds-search__box">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Digite o nome do medicamento"
            />
          </div>
          {dropdownOptions.length > 0 ? (
            <div className="meds-dropdown">
              {dropdownOptions.map((post) => (
                <button
                  key={post.id}
                  type="button"
                  onClick={() => {
                    setSelectedId(post.id);
                    setQuery(post.name);
                  }}
                >
                  <strong>{post.name}</strong>
                  <span>
                    {post.category} • {post.className}
                  </span>
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <div className="meds-themes">
          <label>Filtrar por tema</label>
          <div className="meds-theme__list">
            {themes.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setTheme(item)}
                className={item === theme ? "meds-theme meds-theme--active" : "meds-theme"}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {!selected ? (
        <div className="meds-available">
          <p>Disponíveis agora:</p>
          <ul>
            {filtered.map((post) => (
              <li key={post.id}>
                <button type="button" onClick={() => setSelectedId(post.id)}>
                  {post.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {selected ? (
        <article className="meds-article meds-article--full">
          <header>
            <div className="meds-article__meta">
              <span>{selected.category}</span>
              <span>{selected.className}</span>
            </div>
            <h3>{selected.name}</h3>
            <p>{selected.summary}</p>
          </header>

          {selected.sections.map((section) => (
            <section key={section.title} className="meds-section">
              <h4>{section.title}</h4>
              {section.paragraphs?.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
              {section.bullets ? (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <section className="meds-section">
            <h4>Referências (ABNT – NBR 6023:2018)</h4>
            <ol>
              {selected.references.map((ref) => (
                <li key={ref.label}>
                  {ref.href ? (
                    <a href={ref.href} target="_blank" rel="noreferrer">
                      {ref.label}
                    </a>
                  ) : (
                    ref.label
                  )}
                </li>
              ))}
            </ol>
          </section>
        </article>
      ) : (
        <div className="meds-article meds-article--full">
          <p style={{ margin: 0, color: "rgba(11,20,34,.6)" }}>
            Selecione um medicamento na busca para visualizar o conteúdo completo.
          </p>
        </div>
      )}
    </div>
  );
}
