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
  {
    id: "semaglutida",
    name: "Semaglutida (Ozempic®)",
    className: "Incretínicos",
    category: "Farmacologia",
    summary:
      "A semaglutida é um agonista do receptor de GLP-1 (GLP-1RA) de ação prolongada, usado principalmente no diabetes tipo 2.",
    sections: [
      {
        title: "Semaglutida (Ozempic®): farmacologia completa para uso em site",
        paragraphs: [
          "A semaglutida é um agonista do receptor de GLP-1 (GLP-1RA) de ação prolongada, usado principalmente no diabetes tipo 2. Ela atua reduzindo glicemia de forma dependente da glicose (com menor risco de hipoglicemia “sozinha”), além de efeitos no apetite, esvaziamento gástrico e, em populações específicas, desfechos cardiovasculares e renais.",
          "Nota para o site (importante): conteúdo educativo, não substitui avaliação e prescrição médica.",
        ],
      },
      {
        title: "1) História e contexto de desenvolvimento",
        paragraphs: [
          "A semaglutida foi desenvolvida pela Novo Nordisk como um análogo de GLP-1 com meia-vida longa (permitindo administração semanal), ampliando a classe dos GLP-1RAs. O Ozempic® é a formulação injetável semanal indicada para diabetes tipo 2 (e algumas reduções de risco em grupos específicos), enquanto a mesma molécula aparece em outras marcas/posologias para outros objetivos regulatórios (p. ex., Wegovy® para manejo crônico do peso, em indicações específicas).",
        ],
      },
      {
        title: "Dados da molécula (visão prática)",
        bullets: [
          "Nome: semaglutida",
          "Tipo: peptídeo (análogo de GLP-1)",
          "Fórmula molecular: C₁₈₇H₂₉₁N₄₅O₅₉",
          "Massa molecular: ~4113,6 g/mol",
          "Ligação a proteínas (albumina): muito alta (>99%)",
          "Ação prolongada: exposição sustentada e eliminação lenta (base para uso semanal)",
        ],
      },
      {
        title: "2) Indicação terapêutica, efeito esperado e “linha do tempo” de resposta (com dieta e exercício)",
        paragraphs: ["2.1 Indicações aprovadas (on-label) — Ozempic®", "De acordo com bula/label, o Ozempic® é indicado em adultos com diabetes tipo 2:"],
        bullets: [
          "para melhorar o controle glicêmico, como adjuvante à dieta e ao exercício;",
          "para reduzir risco de eventos cardiovasculares maiores (MACE) em adultos com DM2 e doença cardiovascular estabelecida;",
          "para reduzir risco de progressão de doença renal (piora sustentada de eTFG, insuficiência renal terminal e morte cardiovascular) em adultos com DM2 e doença renal crônica.",
          "Limitações de uso importantes (visão geral): não é “insulina”, não é para DM1; há advertências relevantes (ex.: tumores de células C em roedores; ver seção Segurança).",
        ],
      },
      {
        title: "2.2 Efeito terapêutico esperado (o que melhora)",
        paragraphs: ["Efeitos metabólicos centrais (esperados):"],
        bullets: [
          "Redução de glicemia (jejum e pós-prandial) por ↑ insulina e ↓ glucagon dependentes da glicose",
          "Redução de apetite/ingesta energética e retardo do esvaziamento gástrico (mais evidente no início)",
          "Perda de peso costuma ocorrer em muitos pacientes com DM2 em estudos clínicos (magnitude variável; não é a indicação primária do Ozempic®, mas é um efeito frequente observado em trial)",
        ],
      },
      {
        title: "2.3 Em quanto tempo “começa a fazer efeito”? (prazos realistas)",
        paragraphs: [
          "1) Primeiros dias a 2 semanas (início):",
          "É comum notar redução de apetite e/ou sintomas gastrointestinais (ex.: náusea), que muitas vezes diminuem com adaptação.",
          "2) 4 a 5 semanas (estabilização farmacocinética):",
          "A semaglutida atinge estado de equilíbrio (steady-state) tipicamente em 4–5 semanas. Isso ajuda a explicar por que a resposta “fica mais consistente” após algumas semanas.",
          "3) ~12 semanas (janela clássica para avaliar HbA1c/controle):",
          "A HbA1c reflete a média de glicose dos ~3 meses anteriores; por isso, costuma ser mais informativo reavaliar após algumas semanas/meses, e não em poucos dias.",
          "No próprio material regulatório há referência de avaliações farmacodinâmicas após 12 semanas incluindo escalonamento de dose em steady-state.",
          "4) Meses (peso, CV e rim):",
          "Peso e marcadores cardiometabólicos geralmente mudam ao longo de meses, e os estudos clínicos frequentemente medem desfechos em 30–56 semanas.",
          "Redução de risco cardiovascular e renal é um objetivo de médio/longo prazo, dependente do perfil do paciente e da indicação específica em bula.",
        ],
      },
      {
        title: "2.4 Por que dieta e exercício são complementares (e não “opcionais”)?",
        paragraphs: [
          "A bula deixa explícito que o uso é adjuvante à dieta e ao exercício.",
          "Na prática, isso faz sentido porque:",
          "Semaglutida ajuda, mas não substitui: qualidade alimentar, regularidade de refeições, sono, estresse e rotina de atividade — que influenciam glicemia, pressão, lipídios e manutenção de resultados.",
          "Atividade física aumenta a sensibilidade à insulina e pode reduzir glicose por até 24h ou mais após o treino (efeito “metabólico prolongado”).",
          "Exercício também protege massa muscular e capacidade funcional (especialmente relevante quando há perda de peso), ajudando na sustentação de resultados a longo prazo.",
          "Cuidados práticos (sem “dieta da moda”):",
        ],
        bullets: [
          "Priorizar mudanças sustentáveis (alimentos minimamente processados, fibra, proteína adequada, hidratação).",
          "Combinar aeróbico + força tende a ser uma estratégia bem fundamentada para metabolismo e composição corporal.",
          "Ajustes individualizados são essenciais (principalmente se houver retinopatia, neuropatia, doença cardiovascular, etc.).",
        ],
      },
      {
        title: "3) Mecanismo de ação detalhado",
        paragraphs: [
          "A semaglutida é um agonista do receptor de GLP-1 e reproduz/otimiza efeitos do GLP-1 endógeno:",
          "↑ secreção de insulina e ↓ secreção de glucagon de forma dependente da glicose;",
          "retarda o esvaziamento gástrico (impactando pico pós-prandial e saciedade, sobretudo no início);",
          "atua em circuitos de apetite no SNC, reduzindo ingestão energética.",
        ],
      },
      {
        title: "4) O que o receptor de GLP-1 “faz” e por que isso importa clinicamente",
        paragraphs: [
          "Onde está o receptor GLP-1? (visão funcional)",
          "Pâncreas: melhora resposta de insulina e reduz glucagon quando a glicose está elevada.",
          "Trato gastrointestinal: modula motilidade/esvaziamento gástrico (efeitos pós-prandiais e GI).",
          "SNC (fome/saciedade): contribui para menor apetite/ingesta.",
          "Sistema CV/renal (em subgrupos): há indicações em bula para redução de risco CV e renal em populações específicas com DM2.",
          "Tradução clínica: a cascata “receptor → efeito metabólico → desfecho” depende de aderência, dose/tempo, perfil do paciente e comorbidades. Em DM2, o efeito costuma ser mais previsível para glicemia; desfechos CV/renais dependem da indicação específica e do risco basal.",
        ],
      },
      {
        title: "5) Farmacocinética (ADME)",
        paragraphs: ["Absorção/Distribuição"],
        bullets: [
          "Exposição sustentada com pico tardio (tmax em torno de ~1–3 dias, dependendo do material regulatório) e alta ligação à albumina.",
        ],
      },
      {
        title: "Meia-vida e estado de equilíbrio",
        bullets: [
          "Meia-vida ~1 semana e steady-state em 4–5 semanas.",
          "Após interrupção, a exposição pode persistir por semanas (relevante para planejamento clínico, especialmente em situações específicas como gestação planejada).",
        ],
      },
      {
        title: "Metabolismo/Eliminação",
        bullets: [
          "Por ser um peptídeo, a eliminação envolve vias proteolíticas e clearance sistêmico compatível com molécula de ação prolongada (detalhes completos variam entre documentos regulatórios).",
        ],
      },
      {
        title: "6) Efeitos adversos e segurança (pontos essenciais)",
        paragraphs: ["6.1 Eventos comuns (principalmente GI)"],
        bullets: [
          "Os mais característicos na classe GLP-1RA incluem náusea, vômitos, diarreia/constipação e desconforto abdominal (frequentemente mais intensos no início e durante escalonamento).",
        ],
      },
      {
        title: "6.2 Alertas relevantes (visão “de bula”)",
        bullets: [
          "Risco de tumores de células C da tireoide em roedores; contraindicado em quem tem história pessoal/familiar de carcinoma medular de tireoide ou MEN2.",
          "Pancreatite aguda: atenção a sintomas compatíveis e conduta médica.",
          "Doença da vesícula biliar (colelitíase/colecistite): risco aumentado em alguns cenários.",
          "Complicações de retinopatia diabética: observadas/monitoradas em grupos de risco.",
          "Desidratação/lesão renal aguda pode ocorrer secundariamente a efeitos GI importantes (vômitos/diarreia) — hidratação e acompanhamento são cruciais.",
          "Reações GI graves / gastroparesia importante: há recomendações de cautela; não é recomendado em gastroparesia severa.",
        ],
      },
      {
        title: "6.3 Alerta farmacovigilância recente (olhos – NAION/NOIANA)",
        paragraphs: [
          "Agências regulatórias comunicaram que a neuropatia óptica isquêmica anterior não arterítica (NAION/NOIANA) foi considerada um evento muito raro associado à semaglutida e solicitaram atualização de informação de produto.",
          "Mensagem prática para o site: se houver alteração visual súbita, é situação de avaliação médica imediata.",
        ],
      },
      {
        title: "7) Interações medicamentosas (principais)",
        bullets: [
          "Hipoglicemia quando combinado com insulina ou sulfonilureias: pode exigir ajuste pelo prescritor.",
          "Esvaziamento gástrico mais lento pode alterar a absorção de alguns fármacos orais (a relevância clínica varia).",
        ],
      },
      {
        title: "8) Resumo “em uma frase”",
        paragraphs: [
          "Ozempic® (semaglutida) é um agonista de GLP-1 de ação prolongada que melhora controle glicêmico em DM2 (complementando dieta e exercício), pode reduzir risco cardiovascular e renal em subgrupos definidos em bula, e tem perfil de segurança dominado por efeitos gastrointestinais e alertas específicos de farmacovigilância.",
        ],
      },
    ],
    references: [
      {
        label:
          "UNITED STATES. Food and Drug Administration. Ozempic (semaglutide) injection: Prescribing Information. (revisões e indicações em bula). Acesso em: 4 fev. 2026.",
      },
      {
        label: "EUROPEAN MEDICINES AGENCY. Ozempic (INN-semaglutide): EPAR – Product Information. Acesso em: 4 fev. 2026.",
      },
      {
        label: "NATIONAL INSTITUTE OF DIABETES AND DIGESTIVE AND KIDNEY DISEASES (NIDDK). The A1C Test & Diabetes. Acesso em: 4 fev. 2026.",
      },
      {
        label: "CENTERS FOR DISEASE CONTROL AND PREVENTION (CDC). Physical activity and diabetes (Get Active). Acesso em: 4 fev. 2026.",
      },
      {
        label: "AMERICAN DIABETES ASSOCIATION (ADA). Understanding your blood glucose and exercise. Acesso em: 4 fev. 2026.",
      },
      {
        label: "EUROPEAN MEDICINES AGENCY (EMA). PRAC concludes NAION is a very rare side effect of semaglutide medicines. Acesso em: 4 fev. 2026.",
      },
      {
        label: "AGÊNCIA NACIONAL DE VIGILÂNCIA SANITÁRIA (ANVISA). Alerta GGMON 06/2025: perda da visão (NOIANA) associada à semaglutida. Acesso em: 4 fev. 2026.",
      },
    ],
  },
  {
    id: "bilastina",
    name: "Bilastina (Bilaxten®, Alektos®/Ilaxten®, Blexten®)",
    className: "Anti-histamínicos",
    category: "Farmacologia",
    summary:
      "A bilastina é um anti-histamínico de 2ª geração (antagonista/inverso agonista de receptores H1) com ação predominantemente periférica.",
    sections: [
      {
        title: "Bilastina (ex.: Bilaxten®, Alektos®/Ilaxten®, Blexten®): farmacologia completa para uso em site",
        paragraphs: [
          "A bilastina é um anti-histamínico de 2ª geração (antagonista/inverso agonista de receptores H1) com ação predominantemente periférica, usado para alívio sintomático de doenças alérgicas como rinite e urticária. Seu perfil é desenhado para reduzir sintomas mediados por histamina (coceira, espirros, coriza, pápulas/urticas) com menor sedação do que anti-histamínicos de 1ª geração — embora sonolência ainda possa ocorrer em algumas pessoas.",
        ],
      },
      {
        title: "1) História e contexto de desenvolvimento",
        paragraphs: [
          "A bilastina foi desenvolvida como anti-histamínico H1 de 2ª geração, buscando alta seletividade periférica e baixa interferência em outros receptores (o que, em tese, reduz efeitos como sedação intensa e “efeitos anticolinérgicos” típicos de moléculas mais antigas). Em diversos países é comercializada em comprimidos de 20 mg para adultos/adolescentes e, em alguns mercados, há apresentações pediátricas.",
        ],
      },
      {
        title: "Dados da molécula (substância ativa)",
        bullets: [
          "Nome (DCI): bilastina",
          "Nome químico (resumo): derivado benzimidazólico/piperidínico (ácido carboxílico)",
          "Fórmula molecular: C₂₈H₃₇N₃O₃",
          "Massa molecular: 463,61 g/mol",
          "pKa (reportado): ~4,15 (métodos UV/HPLC)",
          "Ligação a proteínas plasmáticas: 84–90%",
          "Observação: valores físico-químicos (pKa/solubilidade etc.) variam conforme método e fonte; quando o objetivo é uso clínico, os itens mais “operacionais” costumam ser tempo de início, duração, interações com alimento/suco e transportadores.",
        ],
      },
      {
        title: "2) Indicação terapêutica, efeito esperado e “prazo para funcionar” (complementos: cuidados, dieta e exercício)",
        paragraphs: ["Indicações (on-label; depende do país/bula)", "De forma geral, a bilastina é indicada para:"],
        bullets: [
          "Rinite alérgica (sintomas nasais e não-nasais; em algumas bulas, sazonal e/ou perene).",
          "Urticária (incluindo urticária crônica espontânea): alívio de prurido e urticas/pápulas.",
          "Exemplo (Canadá): rinite alérgica sazonal (≥12 anos) e urticária crônica espontânea (≥18 anos).",
        ],
      },
      {
        title: "Efeito terapêutico esperado (o que melhora)",
        paragraphs: ["Rinite alérgica: redução de espirros, prurido nasal/ocular, coriza e parte dos sintomas oculares. Congestão nasal pode melhorar menos do que outros sintomas em alguns pacientes (muitas vezes responde melhor a corticoide intranasal, conforme avaliação clínica).", "Urticária: redução de coceira (prurido) e do número/intensidade das urticas."],
      },
      {
        title: "Em quanto tempo começa a fazer efeito?",
        bullets: [
          "Início de ação: cerca de 1 hora após a tomada.",
          "Duração do efeito: cerca de 24 horas (em monografias, efeito anti-histamínico pode persistir por ~26 horas).",
          "Na prática: muita gente percebe melhora no mesmo dia; em quadros persistentes (p.ex., urticária crônica), a avaliação de controle costuma ser feita ao longo de dias a semanas, porque gatilhos e variabilidade do quadro influenciam os sintomas, mesmo com medicação.",
        ],
      },
      {
        title: "Cuidados de uso (e por que “dieta” importa aqui)",
        paragraphs: [
          "O ponto mais importante, e muitas vezes ignorado, é que alimento e sucos de fruta podem reduzir a absorção:",
        ],
        bullets: [
          "Refeições podem reduzir Cmax/AUC (efeito observado tanto com refeições “gordurosas” quanto “leves”).",
          "Suco de grapefruit reduziu a biodisponibilidade em ~30%; outros sucos também podem reduzir (mecanismo: inibição do transportador de captação OATP1A2, do qual a bilastina é substrato).",
          "Implicação prática (educacional, não prescritiva): se a pessoa toma junto com comida/suco, pode ter menos efeito e achar que “não funciona”. Por isso, bulas/monografias frequentemente orientam tomar em jejum (ex.: 1 hora antes ou 2 horas após alimentos/sucos — ver orientação da bula local).",
        ],
      },
      {
        title: "Por que medidas complementares (ambiente, dieta, exercício) ajudam?",
        paragraphs: [
          "A bilastina controla principalmente a via da histamina (H1). Só que sintomas alérgicos também dependem de:",
        ],
        bullets: [
          "Exposição ao gatilho (ácaros, pólen, mofo, pelos, irritantes), que continua ocorrendo;",
          "Outros mediadores inflamatórios além da histamina;",
          "Fatores de estilo de vida que modulam sintomas (sono ruim, estresse, álcool em alguns casos de urticária, etc.).",
        ],
      },
      {
        title: "Estratégias complementares",
        bullets: [
          "Rinite: redução de exposição (limpeza/ácaros), lavagem nasal com soro, e tratamento nasal direcionado quando indicado.",
          "Urticária: tentar reconhecer gatilhos, registrar padrão de sintomas, e revisar medicamentos/irritantes com o profissional.",
          "Exercício físico não “substitui” anti-histamínico, mas pode ajudar indiretamente (sono, estresse, saúde nasal/respiratória). Em algumas pessoas, exercício intenso pode piorar urticária colinérgica ou sintomas (por calor/sudorese), então o ideal é individualizar.",
        ],
      },
      {
        title: "3) Mecanismo de ação detalhado",
        paragraphs: [
          "3.1 Bloqueio seletivo de receptores H1 periféricos",
          "A bilastina exerce seus efeitos por inibição seletiva de receptores H1 periféricos, reduzindo a resposta à histamina liberada em reações alérgicas.",
          "3.2 “Por que dá menos sono?”",
          "Como anti-histamínico de 2ª geração, a bilastina foi desenhada para ter menor penetração no SNC do que anti-histamínicos antigos, o que tende a reduzir sedação. Ainda assim, sonolência pode ocorrer em uma minoria e deve-se ter cautela individual com dirigir/operar máquinas.",
        ],
      },
      {
        title: "4) O que o receptor H1 faz (e o que isso explica nos sintomas)",
        paragraphs: [
          "O receptor H1 media boa parte dos efeitos da histamina em alergias:",
        ],
        bullets: [
          "Vasodilatação e aumento de permeabilidade → edema/coriza;",
          "Estimulação de terminações nervosas → coceira (prurido);",
          "Reflexos nasais → espirros;",
          "Pele → pápulas/urticas na urticária.",
        ],
      },
      {
        title: "Ao bloquear H1",
        paragraphs: ["A bilastina reduz principalmente prurido, espirros, coriza e urticas (controle sintomático)."],
      },
      {
        title: "5) Farmacocinética (ADME)",
        paragraphs: ["Absorção"],
        bullets: [
          "Tmax: ~1,1–1,3 h (absorção rápida).",
          "Biodisponibilidade absoluta: ~61%.",
          "Alimento reduz exposição; sucos de frutas podem reduzir biodisponibilidade (OATP1A2).",
        ],
      },
      {
        title: "Distribuição",
        bullets: [
          "Ligação a proteínas: 84–90%.",
          "É substrato de transportadores P-gp e OATP (relevante para interações).",
        ],
      },
      {
        title: "Metabolismo",
        bullets: [
          "Pouco ou nenhum metabolismo significativo; não parece induzir/inibir CYP450 de forma relevante em estudos in vitro/in vivo descritos em monografia.",
        ],
      },
      {
        title: "Eliminação",
        bullets: [
          "Em estudo de balanço de massa, ~95% recuperado em urina (28,3%) e fezes (66,5%) como fármaco inalterado.",
          "Meia-vida média: ~14,5 h.",
        ],
      },
      {
        title: "6) Efeitos adversos e segurança",
        paragraphs: ["6.1 Efeitos adversos comuns (tendência)", "Em estudos, eventos relatados incluem cefaleia, tontura e sonolência em parte dos usuários; também podem ocorrer queixas gastrointestinais (ex.: dor abdominal).", "6.2 Sonolência e desempenho (ponto prático)"],
        bullets: [
          "Em estudo de direção “em tempo real”, bilastina não diferiu de placebo em desempenho ao dirigir após 1 dia ou 1 semana, mas a monografia recomenda informar que raramente pode haver sonolência com impacto em atividades que exigem atenção.",
        ],
      },
      {
        title: "6.3 Segurança cardiovascular (QT)",
        paragraphs: [
          "Algumas monografias trazem alerta de prolongamento de QTc e recomendam evitar em pacientes com história de QT prolongado/torsades e ter cautela com fatores de risco (eletrólitos baixos, bradicardia importante, uso concomitante de outros fármacos que prolongam QT).",
        ],
      },
      {
        title: "7) Interações medicamentosas e com alimentos (principais)",
        paragraphs: ["Interações com alimentos/sucos"],
        bullets: [
          "Refeições reduzem níveis plasmáticos (Cmax/AUC).",
          "Grapefruit e possivelmente outros sucos reduzem biodisponibilidade (~30%) por OATP1A2.",
        ],
      },
      {
        title: "Interações com fármacos (transportadores)",
        bullets: [
          "Cetoconazol e eritromicina aumentaram AUC (~2x) e Cmax (2–3x), explicado por interação com transportadores intestinais (bilastina é substrato de P-gp e não é metabolizada de forma relevante).",
          "Em insuficiência renal moderada/grave, recomenda-se evitar coadministração com inibidores de P-gp (ex.: alguns azólicos, macrolídeos, ciclosporina, ritonavir, diltiazem) por risco de aumentar níveis e efeitos adversos.",
        ],
      },
      {
        title: "8) Resumo “em uma frase”",
        paragraphs: [
          "A bilastina é um anti-histamínico H1 periférico de 2ª geração, indicado para rinite alérgica e urticária, com início em ~1 hora e ação por ~24 h, cuja eficácia depende bastante de tomar longe de comida e sucos (interação por transportadores), e com perfil geralmente pouco sedativo — mas com cautelas individuais e atenção a riscos/associações relacionados a QT conforme bula/monografia local.",
        ],
      },
    ],
    references: [
      {
        label:
          "ARALEZ PHARMACEUTICALS CANADA INC. BLEXTEN® (bilastine) 20 mg tablets: Product Monograph. Mississauga, ON, 2018. Disponível em documento do Drug Product Database (Health Canada). Acesso em: 4 fev. 2026.",
      },
      {
        label: "SANDOZ CANADA INC. M-BILASTINE (bilastine) Product Monograph. Disponível em: Sandoz Canada (PDF). Acesso em: 4 fev. 2026.",
      },
      {
        label: "EUROFARMA. Bilastina: bula/paciente (Brasil). Disponível em: Eurofarma (PDF/HTML). Acesso em: 4 fev. 2026.",
      },
      {
        label:
          "RIDOLO, E. et al. Bilastine: new insight into antihistamine treatment. Allergy, Asthma & Clinical Immunology, 2021. Disponível em: PubMed Central. Acesso em: 4 fev. 2026.",
      },
    ],
  },
  {
    id: "heparina-nao-fracionada",
    name: "Heparina não fracionada (HNF / “heparin sodium”)",
    className: "Anticoagulantes",
    category: "Farmacologia",
    summary:
      "A heparina não fracionada (HNF) é um anticoagulante parenteral clássico que potencializa a antitrombina (ATIII), inibindo principalmente Xa e trombina.",
    sections: [
      {
        title: "Heparina não fracionada (HNF / “heparin sodium”): farmacologia completa para uso em site",
        paragraphs: [
          "A heparina não fracionada (HNF) é um anticoagulante parenteral clássico, composto por uma mistura heterogênea de glicosaminoglicanos sulfatados. Seu efeito anticoagulante ocorre principalmente pela potencialização da antitrombina (ATIII), inibindo fatores-chave da coagulação (especialmente fator Xa e trombina/fator IIa). Ela não “dissolve” trombos já formados: o objetivo é evitar a progressão e novas formações, ganhando tempo para o organismo e/ou terapias definitivas atuarem.",
        ],
      },
      {
        title: "1) História e contexto de desenvolvimento",
        paragraphs: [
          "A heparina é usada há muitas décadas como anticoagulante hospitalar, com aprovação inicial nos EUA em 1939 e ampla utilização em situações agudas (tromboembolismo), procedimentos (cirurgia/dialise) e cenários que exigem controle rápido e reversível do efeito anticoagulante.",
        ],
      },
      {
        title: "2) Indicação terapêutica, efeito esperado e “prazos” de ação (complementos e cuidados)",
        paragraphs: ["2.1 Indicações (on-label / bula – exemplos)", "A HNF é indicada (conforme bula) para:"],
        bullets: [
          "Profilaxia e tratamento de trombose venosa e embolia pulmonar",
          "Prevenção de TVP/EP no pós-operatório em pacientes de risco",
          "Fibrilação atrial com embolização",
          "Coagulopatias consumptivas (ex.: CIVD)",
          "Prevenção de coagulação em cirurgia arterial/cardiaca e em circuitos extracorpóreos (incluindo diálise)",
          "Profilaxia e tratamento de embolia arterial periférica",
        ],
      },
      {
        title: "Observação prática",
        paragraphs: [
          "Em hospitais, a HNF também é usada em protocolos institucionais para cenários específicos (ex.: circulação extracorpórea/CRRT), sob monitorização.",
        ],
      },
      {
        title: "2.2 Efeito terapêutico esperado",
        bullets: [
          "Reduzir o risco de extensão do trombo e de novos eventos tromboembólicos.",
          "Diminuir complicações associadas à hipercoagulabilidade em procedimentos/circuitos.",
          "Em termos clínicos, o benefício costuma ser avaliado por: estabilidade/hemodinâmica, evolução de sintomas, exames de imagem quando indicados e parâmetros de anticoagulação (aPTT/anti-Xa/ACT, conforme o contexto).",
        ],
      },
      {
        title: "2.3 Prazos: início, pico e duração (no que dá pra “prometer” com segurança)",
        bullets: [
          "Início de ação IV: imediato (pico plasmático e início após administração intravenosa).",
          "Duração/“desaparecimento” do efeito: curta e dependente de dose, com meia-vida plasmática em geral de ~0,5 a 2 horas (varia com dose e condições clínicas).",
          "Impacto em sintomas (dor/edema/dispneia): pode levar dias, porque a HNF não é fibrinolítica (não lise coágulo); ela impede crescimento/propagação, enquanto o organismo e o manejo clínico resolvem o restante.",
        ],
      },
      {
        title: "2.4 Por que medidas “complementares” importam (e quando dieta/exercício entram)",
        paragraphs: [
          "Para anticoagulação, “dieta e exercício” não são a base do efeito do fármaco (como em GLP-1), mas medidas comportamentais e mecânicas influenciam muito o risco trombótico e a recuperação:",
          "Complementares frequentes (conforme indicação clínica):",
        ],
        bullets: [
          "Mobilização precoce quando liberada e segura (reduz estase venosa).",
          "Hidratação adequada (em pacientes elegíveis) e manejo de fatores de risco.",
          "Meias de compressão/dispositivos pneumáticos em profilaxia quando indicado.",
          "Parar tabagismo, controlar comorbidades e seguir reavaliações.",
        ],
      },
      {
        title: "Por que isso é complementar",
        paragraphs: [
          "Trombose é multifatorial (estase, lesão endotelial, hipercoagulabilidade). A heparina atua no braço da coagulação, mas não corrige sozinha estase/lesão/fatores de risco.",
        ],
      },
      {
        title: "2.5 Cuidados essenciais de uso (segurança)",
        paragraphs: [
          "Anticoagulantes exigem monitorização e orientação clínica. Em regimes terapêuticos, a bula recomenda ajuste de dose com testes frequentes de coagulação e acompanhamento de plaquetas/hematócrito durante todo o curso.",
          "Se ocorrer sangramento importante ou teste “excessivamente prolongado”, a bula orienta interromper prontamente e conduzir como urgência.",
          "Não aplicar por via intramuscular (risco de hematoma no local).",
        ],
      },
      {
        title: "3) Mecanismo de ação detalhado",
        paragraphs: [
          "3.1 Antitrombina (ATIII) como “amplificador” do efeito",
          "A HNF interage com a antitrombina III, induzindo mudança conformacional que aumenta muito sua capacidade de inibir fatores ativados da coagulação, sobretudo Xa e IIa (trombina). Pequenas quantidades tendem a inibir mais Xa; quantidades maiores inibem também trombina.",
          "3.2 O que ela NÃO faz: fibrinólise",
          "A heparina não tem atividade fibrinolítica, portanto não lise trombos existentes; seu papel é prevenir crescimento/propagação.",
        ],
      },
      {
        title: "4) Farmacodinâmica: o que muda nos testes e como isso se liga ao efeito",
        paragraphs: [
          "Em doses terapêuticas, a HNF prolonga tempos de coagulação, incluindo aPTT (além de outros testes, a depender do método). Em doses baixas, esses tempos podem não ser “mensuravelmente” alterados.",
          "A bula recomenda ajuste com testes frequentes quando usado regime de dose plena.",
          "Em algumas situações (ex.: suspeita de “resistência” ou condições inflamatórias), pode-se discutir monitorização por anti-Fator Xa, conforme protocolos.",
        ],
      },
      {
        title: "5) Farmacocinética (ADME)",
        paragraphs: ["Absorção", "Não é absorvida pelo trato GI → uso apenas parenteral.", "IV: início imediato."],
      },
      {
        title: "Distribuição",
        bullets: [
          "Alta ligação a proteínas e alvos plasmáticos (incluindo antitrombina e outras proteínas).",
          "Volume de distribuição ~0,07 L/kg (pequeno, predominantemente intravascular).",
        ],
      },
      {
        title: "Metabolismo e eliminação",
        bullets: [
          "Depuração principalmente por captação hepática e por células do sistema reticuloendotelial, com eliminação bifásica (uma fase saturável e outra de primeira ordem).",
          "Meia-vida plasmática dose-dependente ~0,5–2 h.",
        ],
      },
      {
        title: "6) Efeitos adversos e segurança",
        paragraphs: ["6.1 Sangramento (principal risco)", "Sangramento pode ocorrer em praticamente qualquer sítio e pode ser grave. A bula traz alerta para hemorragias inclusive fatais."],
      },
      {
        title: "6.2 HIT/HITT (trombocitopenia induzida por heparina)",
        paragraphs: [
          "A HIT é reação imunomediada por anticorpos contra complexo PF4-heparina, levando à ativação plaquetária e risco de trombose (HITT). A bula destaca que pode ocorrer trombose venosa e arterial, e que HIT/HITT pode aparecer até semanas após suspensão. Se plaquetas caem (ex.: <100.000/mm³) ou ocorre trombose recorrente, a orientação é suspender prontamente e avaliar HIT/HITT, usando anticoagulante alternativo quando necessário.",
        ],
      },
      {
        title: "6.3 Outras reações relevantes (menção educacional)",
        bullets: [
          "Trombocitopenia (além de HIT), reações locais, hipersensibilidade (derivada de tecido animal).",
          "Perda óssea/osteoporose com uso prolongado é um risco descrito na literatura (mais associado a cursos longos).",
        ],
      },
      {
        title: "6.4 Gravidez e lactação (ponto de segurança importante)",
        paragraphs: [
          "Diretrizes obstétricas destacam que heparina não fracionada e HBPM não atravessam a placenta, sendo opções clássicas quando anticoagulação é necessária na gestação.",
        ],
      },
      {
        title: "7) Interações medicamentosas (principais)",
        bullets: [
          "Somação de risco de sangramento com antiplaquetários, AINEs e outros anticoagulantes (decisão clínica individualizada).",
          "Antitrombina III (humana) pode potencializar o efeito anticoagulante; a bula menciona que pode ser necessário reduzir dose para reduzir risco de sangramento.",
          "“Resistência à heparina” e variabilidade de resposta existem em estados inflamatórios, trombose ativa e outros contextos, exigindo ajuste guiado por testes e avaliação de antitrombina.",
        ],
      },
      {
        title: "8) Reversão (antídoto) e condutas gerais em superanticoagulação",
        paragraphs: [
          "Em caso de sangramento com necessidade de reversão, a bula descreve protamina como agente neutralizante e ressalta administração lenta e risco de reações graves (tipo anafilactoide), devendo ser usada onde há suporte de ressuscitação.",
          "A necessidade de protamina diminui com o tempo, pois a heparina é eliminada; a bula menciona meia-vida de referência para essa finalidade.",
        ],
      },
      {
        title: "9) Um resumo “em uma frase”",
        paragraphs: [
          "A heparina não fracionada é um anticoagulante parenteral de início imediato (IV) e meia-vida curta, que atua ao potencializar a antitrombina (ATIII) e inibir principalmente Xa e IIa, sendo valiosa quando se precisa de controle rápido, ajustável por testes e reversão (protamina), com atenção especial a sangramento e HIT/HITT.",
        ],
      },
    ],
    references: [
      {
        label:
          "UNITED STATES. Food and Drug Administration. Heparin Sodium Injection: prescribing information (revisado jan. 2020). Silver Spring: FDA, 2020.",
      },
      {
        label:
          "UNITED STATES. Food and Drug Administration. Heparin Sodium Injection: Clinical Pharmacology (mecanismo, PK; meia-vida 0,5–2 h; início imediato IV). Silver Spring: FDA, 2020.",
      },
      {
        label:
          "NUTESCU, E. A. et al. Pharmacology of anticoagulants used in the treatment of venous thromboembolism. Vascular Health and Risk Management, 2016.",
      },
      {
        label:
          "AMERICAN COLLEGE OF OBSTETRICIANS AND GYNECOLOGISTS (ACOG). Practice Bulletin No. 196: Thromboembolism in Pregnancy. Obstetrics & Gynecology, 2018.",
      },
      {
        label:
          "SIGNORELLI, S. S. et al. Anticoagulants and Osteoporosis. International Journal of Molecular Sciences, 2019.",
      },
      {
        label:
          "YANG, S. et al. Effect of long-term use of unfractionated or low-molecular-weight heparin on bone. Journal of Clinical Pharmacy and Therapeutics, 2020.",
      },
      {
        label: "AMERICAN SOCIETY OF HEMATOLOGY (ASH). Troubleshooting heparin resistance. Hematology, 2024.",
      },
    ],
  },
  {
    id: "escitalopram",
    name: "Escitalopram (Lexapro®, Cipralex®)",
    className: "Antidepressivos",
    category: "Farmacologia",
    summary:
      "O escitalopram é um ISRS altamente seletivo que aumenta a serotonina por inibição do SERT.",
    sections: [
      {
        title: "Escitalopram (Lexapro®, Cipralex®): farmacologia completa para uso em site",
        paragraphs: [
          "O escitalopram é um ISRS (inibidor seletivo da recaptação de serotonina). Ele atua principalmente bloqueando o transportador de serotonina (SERT), aumentando a sinalização serotoninérgica no SNC. Diferente de fármacos “multimodais”, seu perfil é altamente seletivo para serotonina, com baixa afinidade por outros receptores — e isso ajuda a explicar tanto sua eficácia quanto parte do seu perfil de tolerabilidade.",
        ],
      },
      {
        title: "1) História e contexto de desenvolvimento",
        paragraphs: [
          "O escitalopram é o S-enantiômero (isômero ativo) do citalopram racêmico. A ideia do desenvolvimento foi “refinar” o citalopram, priorizando o componente com maior potência no SERT.",
          "Nos EUA, o Lexapro® teve aprovação pela FDA em 14/08/2002.",
        ],
      },
      {
        title: "Dados da molécula (visão prática)",
        bullets: [
          "Nome (base): escitalopram",
          "Forma comercial comum: oxalato de escitalopram",
          "Fórmula (oxalato): C₂₀H₂₁FN₂O • C₂H₂O₄",
          "Massa molecular (oxalato): 414,40",
          "pKa (base, estimativa): ~9,78; logP ~3,58–3,76 (predições)",
        ],
      },
      {
        title: "2) Indicação terapêutica, efeito esperado e prazos (complementando com hábitos)",
        paragraphs: ["2.1 Indicações “on-label” (variam por país)", "EUA (FDA – Lexapro®):"],
        bullets: [
          "TDM (depressão maior) em adultos e ≥12 anos",
          "TAG (ansiedade generalizada) em adultos e ≥7 anos",
          "Europa/Reino Unido (SmPC – Cipralex®): inclui, além de depressão, alguns transtornos de ansiedade (ex.: pânico, fobia social, TAG, TOC), mas o SmPC também registra que em geral não é recomendado para <18 anos por avaliação regulatória europeia (isso é um ponto importante para sites: aprovação ≠ universal).",
        ],
      },
      {
        title: "2.2 Efeito terapêutico esperado (o que costuma melhorar)",
        bullets: [
          "humor deprimido, anedonia, ruminação, irritabilidade",
          "ansiedade persistente, tensão, preocupação e sintomas físicos associados",
          "sintomas vegetativos (sono, apetite, energia), quando presentes",
        ],
      },
      {
        title: "2.3 Prazos realistas de resposta (sem “promessa”)",
        bullets: [
          "Primeiras mudanças podem surgir em 1–2 semanas (ex.: sono/ansiedade “de fundo”, energia), mas isso é variável.",
          "Melhora mais nítida costuma aparecer entre 2–4 semanas, e pode continuar progredindo por 6–8+ semanas.",
          "Em pânico, alguns guias regulatórios citam que o efeito pode levar 2–4 semanas, com benefício máximo mais tardio.",
        ],
      },
      {
        title: "2.4 Cuidados importantes (especialmente no início)",
        bullets: [
          "Adolescentes e adultos jovens: antidepressivos podem se associar a aumento de risco de pensamentos/comportamentos suicidas no curto prazo; recomenda-se monitoramento próximo, sobretudo nas primeiras semanas e após ajustes.",
          "Não interromper abruptamente: pode ocorrer síndrome de descontinuação (por isso, ajustes devem ser guiados por profissional).",
        ],
      },
      {
        title: "2.5 Por que dieta, sono e exercício são complementares (e não “detalhe”)",
        paragraphs: [
          "O escitalopram atua em neurotransmissão serotoninérgica, mas sintomas e recaídas envolvem também sono, estresse, inflamação, condicionamento físico, hábitos e gatilhos comportamentais. Por isso, intervenções não-farmacológicas tendem a somar:",
        ],
        bullets: [
          "Exercício físico: há evidência de benefício em sintomas depressivos (como intervenção terapêutica e adjuvante), além de efeitos em sono e ansiedade.",
          "Psicoterapia: diretrizes clínicas frequentemente colocam terapia psicológica como parte central do cuidado, isolada ou combinada com fármacos conforme gravidade e contexto.",
          "Padrão alimentar: estudos observacionais e revisões sugerem associação entre qualidade da dieta e saúde mental; não substitui tratamento, mas pode reduzir vulnerabilidades (energia, sono, estabilidade do dia a dia).",
          "Em linguagem simples para o site: medicação ajusta o “volume químico”, enquanto terapia e hábitos reeducam circuitos e rotinas que sustentam o quadro — juntos, aumentam a chance de resposta sustentada.",
        ],
      },
      {
        title: "3) Mecanismo de ação detalhado",
        paragraphs: [
          "3.1 Inibição do SERT (base do efeito)",
          "O mecanismo antidepressivo é atribuído à potencialização da atividade serotoninérgica no SNC por inibição da recaptação neuronal de 5-HT.",
          "3.2 Seletividade e “o que ele NÃO faz”",
          "O escitalopram é descrito como um ISRS altamente seletivo, com mínimos efeitos sobre recaptação de noradrenalina/dopamina e baixa afinidade por receptores 5-HT (1–7) e por receptores histamínicos, muscarínicos, adrenérgicos etc.",
          "3.3 Efeitos “em rede” (downstream) — de forma adequada para ISRS",
          "Aqui o raciocínio é diferente do da vortioxetina:",
          "o escitalopram não é “agonista/antagonista” desses receptores como estratégia principal;",
          "porém, ao aumentar serotonina sináptica, ele modula indiretamente múltiplos receptores e circuitos (córtico-límbicos), e a melhora clínica depende de adaptações ao longo de semanas (plasticidade e recalibração de redes).",
        ],
      },
      {
        title: "4) “Alvos” relevantes e possível relação clínica (adaptado ao ISRS)",
        paragraphs: [
          "SERT: alvo central; aumento de 5-HT em sinapses → base para efeito antidepressivo/ansiolítico.",
          "5-HT1A (indireto): com o tempo, adaptações em auto/heterorreceptores 5-HT1A são frequentemente usadas para explicar por que ISRS levam semanas para “virar a chave” clínica (modelo neurobiológico clássico).",
          "Receptores muscarínicos/histamínicos (baixa afinidade): ajuda a entender por que, comparado a alguns antidepressivos, tende a ter menos sedação anticolinérgica “pura” (mas ainda pode dar sonolência/insônia por vias centrais).",
        ],
      },
      {
        title: "5) Farmacocinética (ADME)",
        paragraphs: ["Absorção"],
        bullets: ["Tmax ~ 5 h; alimento não afeta de forma relevante."],
      },
      {
        title: "Distribuição",
        bullets: ["Ligação a proteínas ~56%."],
      },
      {
        title: "Metabolismo",
        bullets: [
          "Metabólitos principais: S-DCT e S-DDCT (com pouca contribuição para o efeito).",
          "Enzimas principais: CYP3A4 e CYP2C19 (N-desmetilação).",
        ],
      },
      {
        title: "Eliminação",
        bullets: [
          "Meia-vida terminal ~27–32 h; steady-state ~1 semana; excreção urinária parcial como fármaco/metabólitos.",
        ],
      },
      {
        title: "6) Efeitos adversos e segurança",
        paragraphs: ["6.1 Comuns (exemplos frequentes em bula)"],
        bullets: ["Náusea, distúrbios do sono (insônia ou sonolência), fadiga, sudorese."],
      },
      {
        title: "6.2 Disfunção sexual",
        paragraphs: [
          "A bula destaca disfunção sexual como alerta clínico relevante da classe (e pode ser causa importante de baixa adesão).",
        ],
      },
      {
        title: "6.3 Alertas importantes",
        bullets: [
          "Risco aumentado de pensamentos/comportamentos suicidas em populações jovens no início do tratamento (monitorar de perto).",
          "Síndrome serotoninérgica (especialmente em combinações serotoninérgicas).",
          "Hiponatremia/SIADH, sangramento (com AINEs/antiagregantes/anticoagulantes), mania/hipomania em suscetíveis, glaucoma de ângulo fechado em predispostos.",
          "QT prolongado/arrítmias: o SmPC europeu traz atenção para risco de prolongamento de QT e cautela com fármacos que prolongam QT/condições predisponentes.",
        ],
      },
      {
        title: "7) Interações medicamentosas (principais)",
        bullets: [
          "IMAO e outras combinações serotoninérgicas relevantes: risco de síndrome serotoninérgica; seguir regras de troca/washout.",
          "AINEs/aspirina/varfarina e afins: cautela por aumento de risco de sangramento.",
          "CYP2C19/CYP3A4: como participa do metabolismo, mudanças por interações podem ocorrer (a bula descreve CYP3A4/CYP2C19 como principais isozimas).",
          "QT-prolongadores: cautela em associação (SmPC).",
        ],
      },
      {
        title: "8) Resumo em uma frase",
        paragraphs: [
          "Escitalopram é um ISRS altamente seletivo que aumenta a serotonina por inibição do SERT, com baixa afinidade por outros receptores; a resposta costuma levar semanas e o cuidado inclui monitoramento no início (especialmente em jovens), manejo de interações e suporte complementar com psicoterapia e hábitos (sono, exercício e rotina).",
        ],
      },
    ],
    references: [
      {
        label:
          "UNITED STATES. Food and Drug Administration. Lexapro (escitalopram) Prescribing Information. Revised 05/2023.",
      },
      {
        label:
          "UNITED STATES. Food and Drug Administration. Lexapro (escitalopram) – FDA approval date (14 Aug 2002).",
      },
      {
        label:
          "ELECTRONIC MEDICINES COMPENDIUM (emc). Cipralex 10 mg film-coated tablets – SmPC (atualizado 21 jan. 2026).",
      },
      {
        label: "MEDLINEPLUS. Escitalopram (informações ao paciente: tempo para efeito e alertas).",
      },
      {
        label: "NHS. Escitalopram: about / how long it takes to work.",
      },
      {
        label: "COCHRANE. Exercise for depression (revisão/atualização).",
      },
      {
        label: "PARLETTA, N. et al. Food and mood: how do diet and nutrition affect mental wellbeing? BMJ, 2018.",
      },
      {
        label: "DRUGBANK. Escitalopram oxalate – propriedades previstas (logP, pKa).",
      },
    ],
  },
  {
    id: "quetiapina",
    name: "Quetiapina (Seroquel® / Seroquel XR®)",
    className: "Antipsicóticos",
    category: "Farmacologia",
    summary:
      "A quetiapina é um antipsicótico atípico com ação multialvo em receptores dopaminérgicos, serotoninérgicos, histaminérgicos e adrenérgicos.",
    sections: [
      {
        title: "Quetiapina (Seroquel® / Seroquel XR®): farmacologia completa para uso em site",
        paragraphs: [
          "A quetiapina é um antipsicótico atípico com ação “multialvo” em receptores dopaminérgicos, serotoninérgicos, histaminérgicos e adrenérgicos. Na prática, esse perfil ajuda a explicar por que ela aparece tanto no manejo de psicoses quanto de transtornos do humor (especialmente bipolaridade) — e por que seus efeitos variam muito conforme formulação (IR vs XR) e contexto clínico.",
        ],
      },
      {
        title: "1) História e contexto de desenvolvimento",
        paragraphs: [
          "Nos EUA, o fármaco está registrado como SEROQUEL (liberação imediata) e SEROQUEL XR (liberação prolongada), com aprovação inicial em 1997.",
          "O rótulo do SEROQUEL XR (revisado em 03/2020) inclui, além de esquizofrenia e transtorno bipolar, a indicação de terapia adjuvante no transtorno depressivo maior (TDM).",
        ],
      },
      {
        title: "2) Indicação terapêutica (on-label) e usos discutidos (off-label)",
        paragraphs: ["Indicações aprovadas (on-label) – visão geral (FDA/EUA)"],
        bullets: [
          "Esquizofrenia",
          "Transtorno bipolar: episódios maníacos/mistos e episódios depressivos",
          "Seroquel XR: adjuvante no TDM (associado a antidepressivos), conforme rótulo.",
        ],
      },
      {
        title: "Usos discutidos na prática (off-label) — sem aprovação regulatória (exemplos comuns)",
        bullets: [
          "Insônia: uso relativamente frequente, mas com evidência limitada e preocupação com efeitos metabólicos e necessidade de monitorização (não é “atalho inofensivo”).",
          "Ansiedade em alguns cenários (p. ex., sintomas ansiosos em depressão bipolar), geralmente como extrapolação/estratégia clínica individualizada e não como indicação primária.",
          "Observação editorial para site: ao citar off-label, vale sempre deixar explícito “discutido na prática / não aprovado” e evitar qualquer linguagem prescritiva.",
        ],
      },
      {
        title: "3) Mecanismo de ação detalhado",
        paragraphs: [
          "3.1 Antagonismo dopaminérgico e serotoninérgico (núcleo antipsicótico/estabilizador)",
          "O mecanismo exato não é totalmente conhecido, mas a quetiapina apresenta antagonismo em receptores 5-HT2A e D2, um eixo clássico dos antipsicóticos atípicos.",
          "3.2 Afinidade por receptores “não clássicos” (sedação e efeitos autonômicos)",
          "O perfil de ligação mostra afinidade relevante por:",
          "H1 (histamina) → sedação/sonolência e aumento de apetite em parte dos pacientes",
          "α1-adrenérgico → hipotensão ortostática/tontura",
          "M1 (muscarínico) (menor, mas presente no perfil global) → boca seca/constipação/efeitos anticolinérgicos em suscetíveis",
          "3.3 Efeitos “em rede” (downstream) e o papel do metabólito ativo (norquetiapina)",
          "Além do “bloqueio D2/5-HT2”, a quetiapina tem um metabólito clinicamente relevante, a norquetiapina, cuja farmacologia ajuda a explicar a presença do fármaco em estratégias para humor:",
          "A norquetiapina tem inibição de NET (transportador de noradrenalina) e interação com 5-HT1A, compondo um conjunto de alvos típico de fármacos com racional antidepressivo/anxiolítico.",
          "Em modelos pré-clínicos, o conjunto NET + 5-HT1A + 5-HT2A/2C aparece como parte da hipótese para efeitos “além da psicose”, sem que isso transforme automaticamente a molécula em “antidepressivo puro” — é uma tradução farmacológica, não uma garantia clínica.",
        ],
      },
      {
        title: "4) O que cada receptor faz e seu possível envolvimento clínico",
        paragraphs: [
          "4.1 D2 (antagonismo)",
          "Base do efeito antipsicótico; quetiapina tende a ter perfil de EPS mais baixo que antipsicóticos “típicos”, mas não é “zero risco”. (Detalhes e advertências ficam no rótulo.)",
          "4.2 5-HT2A (antagonismo)",
          "Marca dos atípicos: contribui para o equilíbrio dopamina/serotonina em circuitos corticoestriatais e está no racional de menor EPS em comparação a bloqueio D2 isolado.",
          "4.3 H1 (antagonismo)",
          "Associado a sonolência/sedação e possível aumento de apetite — muito citado quando se fala do “efeito de sono” em doses mais baixas.",
          "4.4 α1 (antagonismo)",
          "Explica tontura e hipotensão ortostática, sobretudo no início e em titulações mais rápidas/sensíveis.",
          "4.5 NET e 5-HT1A (via norquetiapina)",
          "Contribuem para hipóteses de efeitos em humor/ansiedade, particularmente no racional do uso em depressão (incluindo adjuvância no TDM na formulação XR).",
        ],
      },
      {
        title: "5) Farmacocinética (ADME) – destaques úteis para prática",
        bullets: [
          "Ligação a proteínas: ~83%.",
          "Metabolismo: predominantemente via CYP3A4 (ponto central para interações).",
          "Meia-vida: quetiapina ~7 h; norquetiapina ~12 h (valores aproximados reportados).",
        ],
      },
      {
        title: "6) Efeitos adversos e segurança",
        paragraphs: ["6.1 Efeitos comuns (práticos)"],
        bullets: [
          "Para Seroquel (IR), eventos comuns relatados incluem sonolência, boca seca, tontura, constipação, fraqueza e dor abdominal.",
        ],
      },
      {
        title: "6.2 Alertas relevantes (classe/medicamento)",
        bullets: [
          "Aumento de mortalidade em idosos com psicose relacionada à demência (não aprovado para essa indicação).",
          "Pensamentos e comportamentos suicidas: alerta de antidepressivos em crianças/adolescentes/jovens adultos, com recomendação de monitorar piora clínica e surgimento de sintomas.",
          "Metabólico: risco de hiperglicemia, dislipidemia e ganho de peso (monitorização é parte importante do uso seguro).",
        ],
      },
      {
        title: "7) Interações medicamentosas (principais)",
        bullets: ["O ponto “rei” aqui é CYP3A4:", "Inibidores/indutores de CYP3A4 podem exigir ajuste de dose/reavaliação clínica conforme rótulo."],
      },
      {
        title: "8) Um resumo “em uma frase”",
        paragraphs: [
          "A quetiapina combina antagonismo 5-HT2A/D2 com forte componente H1/α1 (sedação/autonômico) e um metabólito (norquetiapina) com ação em NET/5-HT1A, sustentando seu uso aprovado em esquizofrenia e bipolaridade e, na formulação XR, como adjuvante no TDM — com atenção especial a efeitos metabólicos e interações via CYP3A4.",
        ],
      },
      {
        title: "9) Curiosidade (para deixar o texto “vivo” no site)",
        paragraphs: [
          "Por que a quetiapina “dá sono” em doses baixas?",
          "Porque, no perfil de receptores, ela tem afinidade muito alta por H1 e α1, que são alvos diretamente ligados a sonolência e tontura/hipotensão — efeitos que podem aparecer antes de qualquer objetivo terapêutico de humor/psicose. Isso ajuda a entender por que o uso “só para dormir” virou comum, mas também por que revisões alertam que a evidência para insônia é limitada e que os riscos metabólicos e a necessidade de monitorização não desaparecem só porque a dose é baixa.",
        ],
      },
    ],
    references: [
      {
        label:
          "U.S. FOOD AND DRUG ADMINISTRATION (FDA). SEROQUEL (quetiapine fumarate) – prescribing information. (Revised 10/2020). Disponível em: Drugs@FDA. Acesso em: 4 fev. 2026.",
      },
      {
        label:
          "U.S. FOOD AND DRUG ADMINISTRATION (FDA). SEROQUEL XR (quetiapine) extended-release tablets – prescribing information. (Revised 03/2020). Disponível em: Drugs@FDA. Acesso em: 4 fev. 2026.",
      },
      {
        label:
          "DEVANE, C. L.; NEMEROFF, C. B. Clinical pharmacokinetics of quetiapine: an atypical antipsychotic. CNS Drugs, 2001. Disponível em: PubMed. Acesso em: 4 fev. 2026.",
      },
      {
        label:
          "CROSS, A. J. et al. Quetiapine and its metabolite norquetiapine: translation from in vitro pharmacology to in vivo efficacy in rodent models. (Artigo em acesso livre). Disponível em: PubMed Central. Acesso em: 4 fev. 2026.",
      },
      {
        label:
          "MODESTO-LOWE, V. et al. Quetiapine for primary insomnia: Consider the risks. Cleveland Clinic Journal of Medicine, 2021. Disponível em: PubMed. Acesso em: 4 fev. 2026.",
      },
    ],
  },
  {
    id: "desvenlafaxina",
    name: "Desvenlafaxina (Pristiq®, Khedezla®, Ixefo®)",
    className: "Antidepressivos",
    category: "Farmacologia",
    summary:
      "A desvenlafaxina (O-desmetilvenlafaxina; ODV) é um ISRSN desenvolvido para entregar o metabólito ativo da venlafaxina com posologia simplificada e menor dependência do CYP2D6.",
    sections: [
      {
        title: "Desvenlafaxina: farmacologia comparativa e mecanismos de alto impacto na classe ISRS/ISRSN",
        paragraphs: [
          "A desvenlafaxina (O-desmetilvenlafaxina; “ODV”) é um antidepressivo da classe dos inibidores da recaptação de serotonina e noradrenalina (ISRSN/SNRI). Ela foi desenvolvida para entregar, de forma mais direta e previsível, o principal metabólito ativo da venlafaxina, com regime posológico simplificado (comumente 50 mg 1x/dia) e menor dependência de variabilidade farmacogenética associada ao CYP2D6.",
        ],
      },
      {
        title: "Dados da molécula (substância ativa)",
        bullets: [
          "Nome (DCI): Desvenlafaxina",
          "Nomes comerciais: Pristiq®, Khedezla®, Ixefo® (e outros, conforme país)",
          "Classe: ISRSN (SNRI)",
          "Nome químico: (+)-4-[2-Dimetilamino-1-(1-hidroxiciclo-hexil)etil]fenol",
          "Fórmula molecular: C16H25NO2",
          "Massa molecular: 263,38 g/mol (base); ~279,38 g/mol (succinato monoidratado – forma de dosagem comum)",
          "Ligação a proteínas plasmáticas: ~30% (baixa)",
          "pKa: ~9,7 (amina) e ~11,2 (fenol)",
        ],
      },
      {
        title: "2) Indicação terapêutica, efeito esperado e “prazo para funcionar”",
        paragraphs: ["2.1 Indicações aprovadas (variam por país/bula)"],
        bullets: [
          "Transtorno Depressivo Maior (TDM): tratamento agudo e, em algumas bulas, manutenção em adultos.",
          "Transtorno de Ansiedade Generalizada (TAG): aprovado em alguns países; em outros, o uso pode ser off-label.",
        ],
      },
      {
        title: "2.2 Efeito terapêutico esperado",
        bullets: [
          "Melhora do humor e redução do sofrimento afetivo.",
          "Redução da anedonia (maior capacidade de sentir prazer e interesse).",
          "Ganho gradual de energia, motivação e desempenho atencional (em parte, pelo componente noradrenérgico).",
          "Melhora do sono e do apetite quando a depressão os desorganiza (variável entre indivíduos).",
          "Redução de sintomas ansiosos associados à depressão (ruminação, tensão, hiperalerta).",
        ],
      },
      {
        title: "2.3 Em quanto tempo começa a fazer efeito?",
        bullets: [
          "Primeiras 1–2 semanas: alguns pacientes percebem melhora inicial em ansiedade somática, sono, energia ou “clareza” mental.",
          "4–8 semanas: intervalo típico para resposta antidepressiva mais robusta e estável.",
          "Observação prática: a eficácia máxima exige uso contínuo conforme prescrito, com reavaliações clínicas periódicas.",
        ],
      },
      {
        title: "2.4 Por que “estilo de vida” importa aqui (medicação como parte do tratamento)",
        paragraphs: [
          "A desvenlafaxina trata sintomas biológicos relevantes, mas a recuperação plena costuma ser biopsicossocial:",
        ],
        bullets: [
          "Psicoterapia: frequentemente potencializa resposta e reduz recaída (TCC e outras abordagens).",
          "Exercício físico: adjuvante com impacto em sono, neuroplasticidade e humor.",
          "Sono e rotina: depressão bagunça o relógio biológico; a organização potencializa o tratamento.",
          "Alimentação: não “cura” depressão, mas ajuda energia, sono e tolerabilidade.",
          "Álcool: tende a piorar sono, humor e pode aumentar efeitos adversos; evitar ou minimizar.",
        ],
      },
      {
        title: "3) Mecanismo de ação fundamental e implicações clínicas (alto impacto)",
        paragraphs: ["3.1 Ação primária (transportadores)", "A desvenlafaxina atua principalmente nos transportadores pré-sinápticos:"],
        bullets: [
          "SERT: transportador de serotonina → aumenta 5-HT na fenda sináptica.",
          "NET: transportador de noradrenalina → aumenta NA na fenda sináptica (em menor grau que SERT, mas clinicamente relevante em muitos pacientes).",
          "Importante: não há atividade agonista/antagonista significativa em sistemas receptoriais como muscarínicos, histamínicos H1 ou alfa-1 (o que contribui para menor sedação e menor carga anticolinérgica quando comparada a classes como tricíclicos).",
        ],
      },
      {
        title: "3.2 Fisiologia de alto impacto (por que “dupla via” pode mudar o quadro)",
        bullets: [
          "Noradrenalina: projeções do locus coeruleus para córtex e sistema límbico modulam atenção, vigília, prontidão ao estresse e regulação emocional. Clinicamente, a via noradrenérgica se relaciona a energia, foco, drive motivacional e retardo psicomotor.",
          "Serotonina: projeções dos núcleos da rafe modulam humor, ansiedade, impulsividade e funções neurovegetativas (sono, apetite, dor, sexualidade).",
          "Implicação clínica: a ação combinada tende a ser útil quando a depressão vem com anedonia, fadiga, retardo psicomotor e dificuldade de concentração — sintomas em que a dimensão noradrenérgica frequentemente pesa — sem perder o “controle” sobre domínios tipicamente serotoninérgicos, como ansiedade e ruminação.",
        ],
      },
      {
        title: "4) Farmacocinética (ADME) e o que muda na prática",
        paragraphs: ["4.1 Absorção"],
        bullets: [
          "Absorção rápida e quase completa.",
          "Tmax: aproximadamente 7,5 horas após a dose oral (forma de liberação prolongada).",
          "Alimentos: não alteram de forma clinicamente relevante → pode ser tomada com ou sem alimento.",
        ],
      },
      {
        title: "4.2 Distribuição",
        bullets: [
          "Volume de distribuição moderado (~3,4 L/kg).",
          "Baixa ligação proteica (~30%) → reduz risco de interações por deslocamento.",
        ],
      },
      {
        title: "4.3 Metabolismo",
        bullets: [
          "Predominantemente por conjugação (glucuronidação via UGT; principais isoformas descritas incluem UGT1A1, 2B4, 2B15).",
          "Oxidação em menor extensão (CYP3A4).",
          "Ponto crítico: não é substrato primário do CYP2D6 → menor variabilidade interindividual e menor vulnerabilidade a interações típicas desse eixo (diferença importante em relação à venlafaxina).",
        ],
      },
      {
        title: "4.4 Eliminação",
        bullets: [
          "Principalmente renal (parte importante excretada inalterada).",
          "Aproximadamente: ~45% excretada inalterada na urina; porções adicionais como conjugados.",
          "Depuração depende da função renal (atenção especial em insuficiência renal).",
        ],
      },
      {
        title: "4.5 Meia-vida e posologia",
        bullets: [
          "Meia-vida: ~11 horas.",
          "Regra prática: 1 vez ao dia.",
          "Importante: não interromper abruptamente (risco de síndrome de descontinuação).",
        ],
      },
      {
        title: "5) Efeitos adversos e segurança (o que mais impacta no dia a dia)",
        paragraphs: ["5.1 Efeitos adversos comuns (geralmente no início; muitos reduzem com semanas)"],
        bullets: [
          "Gastrointestinais: Náusea (muito comum no início), boca seca, constipação, anorexia/redução do apetite.",
          "Sistema nervoso central: Tontura, cefaleia, insônia ou sonolência (variável), fadiga.",
          "Autonômicos: Sudorese aumentada.",
          "Sexuais (classe): Redução de libido, retardo ejaculatório/anorgasmia.",
        ],
      },
      {
        title: "5.2 Alertas e eventos importantes",
        bullets: [
          "Pressão arterial e frequência cardíaca: pode causar aumentos sustentados de PA (especialmente diastólica) e FC → monitorar, sobretudo em hipertensos.",
          "Síndrome serotoninérgica: rara, mas potencialmente grave, especialmente em combinações serotoninérgicas.",
          "Síndrome de descontinuação: mais provável se suspender abruptamente (tontura, parestesias tipo “choques”, irritabilidade, náusea, ansiedade).",
          "Alerta em jovens: como antidepressivos em geral, há aviso em alguns países sobre possível piora de pensamentos autolesivos em crianças/adolescentes e adultos jovens (especialmente no início do tratamento e em mudanças de dose). Na prática: monitorar e acionar o médico se houver piora importante do estado mental.",
        ],
      },
      {
        title: "6) Interações medicamentosas (principais)",
        bullets: [
          "IMAOs: contraindicado. Necessário “washout” antes/depois (tipicamente 14 dias) por risco de toxicidade serotoninérgica.",
          "Outros serotoninérgicos: cautela com triptanos, tramadol, linezolida, buspirona, entre outros (risco aumentado de síndrome serotoninérgica).",
          "Anticoagulantes/antiagregantes: possível aumento de risco de sangramento (efeito em hemostasia plaquetária mediado por serotonina); monitorar quando aplicável.",
          "Fármacos que prolongam QT: desvenlafaxina tem baixo risco isolado, mas atenção a somatório de risco em pacientes predispostos.",
          "Álcool: evitar ou minimizar (piora sono/humor e tolerabilidade).",
        ],
      },
      {
        title: "7) Análise comparativa aprofundada na classe (e com ISRS de referência)",
        paragraphs: ["7.1 Desvenlafaxina vs. Venlafaxina (precursor metabólico)", "A desvenlafaxina representa uma “evolução farmacocinética” da venlafaxina:"],
        bullets: [
          "Venlafaxina: depende de conversão metabólica (com participação relevante do CYP2D6) para formar ODV.",
          "Desvenlafaxina: já é o metabólito ativo administrado diretamente.",
          "Implicação clínica crítica:",
          "Uma parcela de pacientes (especialmente em populações europeias) é metabolizadora pobre do CYP2D6 e/ou usa inibidores do CYP2D6 (ex.: bupropiona, fluoxetina, quinidina). Nesses cenários, a conversão e a exposição podem variar mais com venlafaxina, afetando resposta e tolerabilidade.",
          "A desvenlafaxina reduz essa variabilidade, oferecendo farmacocinética mais previsível.",
          "Perfil dose–resposta:",
          "Venlafaxina: classicamente dose-dependente, com componente mais serotoninérgico em doses menores e maior recrutamento noradrenérgico em doses mais altas.",
          "Desvenlafaxina: tende a manter um perfil SNRI mais direto na faixa usual, sem depender de “subir muito” para começar a ver benefícios ligados ao eixo noradrenérgico (ainda que SERT seja, em geral, mais fortemente inibido que NET).",
          "Síndrome de descontinuação:",
          "Ambas podem causar descontinuação significativa se interrompidas abruptamente.",
          "Na prática, a previsibilidade da desvenlafaxina pode ser percebida como vantagem em alguns pacientes, mas o risco ainda exige desmame gradual.",
        ],
      },
      {
        title: "7.2 Desvenlafaxina vs. Duloxetina (ISRSN com forte “perfil analgésico”)",
        paragraphs: ["Diferencial clínico da duloxetina:"],
        bullets: [
          "Forte evidência e uso em dor crônica, sobretudo dor neuropática (ex.: neuropatia diabética) e fibromialgia, por ação em vias descendentes inibitórias da dor (medulares e supramedulares).",
          "Comparação prática:",
          "Duloxetina: tende a ser preferida quando dor neuropática/fibromialgia domina o quadro, além de depressão/ansiedade.",
          "Desvenlafaxina: foco mais centrado em TDM (e TAG em alguns locais), com evidência menos robusta para dor crônica.",
          "Efeitos adversos e segurança:",
          "Duloxetina costuma causar náusea e sudorese importantes no início em parte dos pacientes e traz alerta mais forte para raros casos de hepatotoxicidade (monitorização clínica é relevante, principalmente em fatores de risco).",
          "Desvenlafaxina: náusea também é comum, mas tende a ter perfil de interações mais “limpo”.",
          "Metabolismo:",
          "Duloxetina: metabolismo importante por CYP1A2 e CYP2D6 → mais suscetível a interações (ex.: inibidores de 1A2, indução por tabagismo, etc.).",
          "Desvenlafaxina: predomínio de UGT e menor dependência de CYP.",
        ],
      },
      {
        title: "7.3 Desvenlafaxina vs. Levomilnaciprano (predomínio noradrenérgico)",
        paragraphs: ["O levomilnaciprano é o ISRSN com maior ênfase noradrenérgica na prática clínica:"],
        bullets: [
          "Ele apresenta maior potência relativa em NET do que em SERT (comumente descrito em torno de 2:1, variando conforme a métrica), o que o posiciona como mais “energizante” em alguns perfis.",
          "Perfil sintomático-alvo:",
          "Levomilnaciprano: útil quando fadiga intensa, lentificação cognitiva e retardo psicomotor são muito dominantes.",
          "Desvenlafaxina: mais equilibrada e frequentemente mais versátil para quadros mistos (depressão com ansiedade/ruminação).",
          "Efeitos adversos diferenciais:",
          "Levomilnaciprano: maior incidência de efeitos autonômicos (aumento de FC, sudorese), midríase e constipação; em alguns casos, pode ter menor impacto sexual que ISRS clássicos, mas isso é variável.",
          "Desvenlafaxina: perfil mais “central” da classe, com atenção a náusea inicial e PA/FC.",
        ],
      },
      {
        title: "7.4 Desvenlafaxina vs. Sertralina (ISRS de referência)",
        paragraphs: ["A sertralina é um ISRS potente e seletivo (com afinidade residual por DAT, de relevância clínica debatida).", "Seletividade e circuitos:"],
        bullets: [
          "Sertralina: excelente para sintomas serotoninérgicos (ansiedade, irritabilidade, ruminação, sintomas obsessivo-compulsivos dependendo do quadro).",
          "Desvenlafaxina: adiciona o eixo noradrenérgico, potencialmente útil para “componentes energéticos/cognitivos” da depressão (energia, foco, drive).",
          "Metabolismo e interações:",
          "Sertralina: metabolizada por múltiplas vias (CYP2B6, CYP2C9, CYP2C19, CYP2D6 e CYP3A4) e é inibidora moderada do CYP2D6.",
          "Desvenlafaxina: metabolismo predominantemente por conjugação e baixo potencial de inibir CYP → perfil de interações frequentemente mais simples, especialmente em polimedicados/idosos.",
          "Efeitos adversos:",
          "Sertralina: maior tendência a desconforto gastrointestinal, especialmente diarreia no início, além de disfunção sexual.",
          "Desvenlafaxina: náusea é o efeito adverso inicial mais típico; GI inferior costuma ser menos proeminente do que em alguns ISRS.",
        ],
      },
      {
        title: "8) Síntese clínica de alto impacto (como escolher na prática)",
        paragraphs: ["Escolha a desvenlafaxina quando:"],
        bullets: [
          "A previsibilidade farmacocinética é prioridade (idosos, polimedicados, preocupação com variabilidade por CYP2D6).",
          "Você busca um perfil SNRI “direto” desde o início, com regime simples e estável.",
          "Há histórico de resposta insuficiente a ISRS puros, especialmente por persistência de falta de energia, anedonia e dificuldade de concentração.",
          "Deseja-se um perfil de interações mais limpo em pacientes com múltiplas medicações.",
          "Considere outras opções quando:",
          "Dor neuropática/fibromialgia domina o quadro: duloxetina tende a ser superior.",
          "Retardo psicomotor/apagamento energético extremos: levomilnaciprano pode ser útil (avaliando tolerabilidade cardiovascular).",
          "Preferência por ISRS clássico com ampla experiência e múltiplas indicações: sertralina é excelente escolha.",
          "Desejo de titulação muito ampla e “ajuste fino” de dose ao longo do tempo: venlafaxina pode ser opção, levando em conta variabilidade/interações.",
        ],
      },
      {
        title: "Nota de classe",
        paragraphs: [
          "ISRSN, como grupo, podem apresentar vantagem modesta em alguns cenários (especialmente depressões moderadas a graves) em comparação a ISRS em certas análises. Na clínica, a decisão costuma ser guiada por fenótipo sintomático, comorbidades, tolerabilidade, histórico de resposta e interações.",
        ],
      },
      {
        title: "9) Quadro comparativo (escrito, sem tabela)",
        paragraphs: ["A seguir, um comparativo textual direto para copiar e colar no site:"],
      },
      {
        title: "A) Desvenlafaxina (Pristiq®, Khedezla®, Ixefo®)",
        bullets: [
          "Forma: metabólito ativo (ODV), administrado pronto.",
          "Perfil: ISRSN, com inibição de SERT mais forte e inibição de NET em menor grau, porém clinicamente relevante em muitos pacientes.",
          "Metabolismo: predominância de conjugação (UGT); pouca dependência de CYP; menor variabilidade por CYP2D6.",
          "Posologia: comumente 50 mg 1x/dia (regime simples).",
          "Vantagens: farmacologia direta, previsível, perfil de interações frequentemente mais limpo.",
          "Desvantagens: náusea inicial, possível elevação de PA/FC, risco de descontinuação se suspender abruptamente.",
        ],
      },
      {
        title: "B) Venlafaxina (Effexor® e outros)",
        bullets: [
          "Forma: precursor que depende mais de conversão metabólica para formar ODV.",
          "Perfil: dose-dependente; mais serotoninérgica em doses menores, com maior recrutamento noradrenérgico em doses mais altas.",
          "Metabolismo: maior relevância de CYP2D6 → variabilidade e interações em alguns cenários.",
          "Posologia: geralmente requer titulação (faixa ampla).",
          "Vantagens: histórico longo, possibilidade de ajuste fino pela dose.",
          "Desvantagens: descontinuação pode ser muito pronunciada; maior variabilidade interindividual em alguns pacientes.",
        ],
      },
      {
        title: "C) Duloxetina (Cymbalta® e outros)",
        bullets: [
          "Forma: ativa.",
          "Perfil: ISRSN com forte utilidade clínica em dor neuropática e fibromialgia, além de depressão/ansiedade, pela modulação de vias descendentes da dor.",
          "Metabolismo: CYP1A2 e CYP2D6 → maior potencial de interações (tabagismo, inibidores/indutores).",
          "Vantagens: excelente quando dor crônica/neuropática é componente central.",
          "Desvantagens: náusea e sudorese iniciais podem ser mais marcantes; atenção a alertas hepáticos conforme contexto clínico.",
        ],
      },
      {
        title: "D) Levomilnaciprano (Fetzima® e outros)",
        bullets: [
          "Forma: ativa.",
          "Perfil: ISRSN com maior ênfase noradrenérgica (NET > SERT), útil para quadros com fadiga intensa, lentificação e baixo drive.",
          "Efeitos adversos diferenciais: maior chance de taquicardia/aumento de FC, sudorese, constipação e outros autonômicos.",
          "Vantagens: pode ser especialmente útil em depressão com predomínio de sintomas “energéticos/cognitivos”.",
          "Desvantagens: tolerabilidade cardiovascular e autonômica pode limitar em alguns perfis.",
        ],
      },
      {
        title: "E) Sertralina (Zoloft® e outros) – ISRS",
        bullets: [
          "Forma: ativa.",
          "Perfil: ISRS potente, predominantemente serotoninérgico; excelente para ansiedade e sintomas relacionados à serotonina (ruminação, irritabilidade).",
          "Metabolismo: múltiplas vias CYP; inibição moderada de CYP2D6.",
          "Vantagens: grande experiência clínica, ampla disponibilidade e versatilidade em transtornos ansiosos/depressivos.",
          "Desvantagens: diarreia e desconforto GI podem ser mais comuns no início; disfunção sexual é frequente na classe.",
        ],
      },
      {
        title: "10) Resumo “em uma frase”",
        paragraphs: [
          "A desvenlafaxina é um ISRSN de ação direta e posologia simples, com metabolismo mais previsível (baixa dependência de CYP2D6), indicado principalmente para TDM, com perfil típico da classe (náusea inicial, sudorese, disfunção sexual) e que exige desmame gradual e monitorização de pressão arterial/frequência cardíaca em pacientes predispostos.",
        ],
      },
    ],
    references: [
      {
        label:
          "PFIZER. Monografia de Produto (Canadá): PRISTIQ® (desvenlafaxine succinate extended-release tablets). Pfizer Canada ULC, 2022.",
      },
      {
        label:
          "SOARES, C. N.; THASE, M. E. Efficacy of antidepressants in the treatment of depression in women: a systematic review. Drugs, v. 68, n. 15, p. 2195-2208, 2008.",
      },
      {
        label:
          "SINGH, D.; SAXENA, K. Desvenlafaxine: A New Serotonin-Norepinephrine Reuptake Inhibitor for the Treatment of Major Depressive Disorder. Pharmacotherapy, v. 29, n. 8, p. 945-956, 2009.",
      },
      {
        label:
          "MONTGOMERY, S. A. et al. Major depressive disorders: clinical efficacy and tolerability of desvenlafaxine in a randomized, double-blind, placebo-controlled study. Journal of Clinical Psychiatry, v. 70, n. 5, p. 677-688, 2009.",
      },
      {
        label:
          "ANVISA. Bula do Paciente: Pristiq® 50 mg (desvenlafaxina). Eurofarma Laboratórios S.A., 2021. Disponível em: Bulário Eletrônico da Anvisa. Acesso em: 05 fev. 2026.",
      },
    ],
  },
  {
    id: "metoprolol-succinato",
    name: "Succinato de Metoprolol (Selozok®, Seloken® ZOK, Toprol-XL®)",
    className: "Betabloqueadores",
    category: "Farmacologia",
    summary:
      "O succinato de metoprolol é um betabloqueador cardiosseletivo (β1) de liberação prolongada, padrão-ouro para proteção cardiovascular contínua.",
    sections: [
      {
        title:
          "Succinato de Metoprolol (Selozok®, Seloken® ZOK, Toprol-XL®)",
        paragraphs: [
          "Classe Terapêutica: Anti-hipertensivo / Antianginoso / Antiarrítmico / Cardioprotetor.",
          "Subclasse: Antagonista seletivo dos receptores adrenérgicos β1 (Betabloqueador de 2ª geração).",
        ],
      },
      {
        title: "1. Dados da Molécula e Tecnologia Farmacêutica",
        paragraphs: [
          "Diferente do Tartarato de Metoprolol (sal convencional), o Succinato foi desenhado para ser um sistema de liberação controlada de ordem zero.",
        ],
        bullets: [
          "Sal: Succinato de metoprolol (mais estável para formulações de liberação lenta).",
          "Fórmula Molecular: (C15H25NO3)2 · C4H6O4",
          "Massa Molecular: 652,8 g/mol.",
          "O Sistema ZOK (Zero Order Kinetics): O comprimido não é apenas uma massa de pó. Ele é composto por centenas de microesferas (grânulos) de succinato de metoprolol, cada uma revestida por uma membrana de polímero que controla a taxa de difusão.",
          "Vantagem: Após a ingestão, o comprimido se desintegra rapidamente e libera as microesferas ao longo do trato gastrointestinal, mantendo a liberação do fármaco constante por 20 a 24 horas, independente do pH ou do peristaltismo.",
        ],
      },
      {
        title: "2. Indicações Terapêuticas (Baseadas em Evidências)",
        paragraphs: [
          "O Succinato de Metoprolol é um dos poucos betabloqueadores aprovados para o tratamento da Insuficiência Cardíaca Congestiva (ICC), devido à sua capacidade de reduzir a mortalidade.",
        ],
        bullets: [
          "Hipertensão Arterial: Como monoterapia ou em combinação.",
          "Angina do Peito: Profilaxia de longo prazo.",
          "Insuficiência Cardíaca Crônica (Classe II-IV NYHA): Estabilizado, para reduzir mortalidade e hospitalização.",
          "Infarto Agudo do Miocárdio (IAM): Tratamento de manutenção após a fase aguda para prevenção de reinfarto.",
          "Arritmias: Especialmente taquicardia supraventricular e controle de resposta ventricular na fibrilação atrial.",
          "Distúrbios Cardíacos Funcionais com Palpitações.",
          "Profilaxia da Enxaqueca: Uso off-label comum devido à sua lipossolubilidade moderada.",
        ],
      },
      {
        title: "3. Farmacodinâmica (Mecanismo de Ação Detalhado)",
        paragraphs: ["3.1 Seletividade β1"],
        bullets: [
          "O metoprolol possui uma afinidade 20 a 50 vezes maior pelos receptores β1 (coração e rins) do que pelos receptores β2 (brônquios, vasos sanguíneos e fígado).",
          "No Coração: Inibe a estimulação simpática (adrenalina/noradrenalina), reduzindo a frequência cardíaca (cronotropismo negativo), a força de contração (inotropismo negativo) e a velocidade de condução do impulso (dromotropismo negativo).",
          "Nos Rins: Inibe a liberação de renina, bloqueando o início do sistema Renina-Angiotensina-Aldosterona (SRAA), o que contribui para a queda da pressão arterial a longo prazo.",
          "3.2 Por que o Succinato é superior na ICC?",
          "Na insuficiência cardíaca, o corpo tenta compensar a falha da bomba aumentando a adrenalina. Isso sobrecarrega o coração e causa “remodelamento cardíaco” (o coração deforma e cresce). O Succinato de Metoprolol bloqueia essa toxicidade adrenérgica de forma constante, permitindo que o ventrículo esquerdo recupere parte de sua função.",
        ],
      },
      {
        title: "4. Farmacocinética (ADME)",
        bullets: [
          "Absorção: Quase 100% absorvido, mas sofre efeito de primeira passagem hepática.",
          "Biodisponibilidade: ~40% a 50%. A formulação em succinato evita os picos excessivos que o tartarato causa.",
          "Tmax (Pico): Ocorre entre 4 a 6 horas após a ingestão (no tartarato ocorre em 1-2h).",
          "Ligação Proteica: Baixa (~12%), principalmente à albumina humana.",
          "Metabolismo: Hepático via CYP2D6 (Primário). Gera metabólitos inativos (α-hidroximetoprolol).",
          "Meia-vida: A meia-vida plasmática é de 3-7 horas, mas o efeito clínico dura 24h devido à liberação controlada.",
          "Excreção: >95% via renal (urina).",
        ],
      },
      {
        title: "5. Posologia e Administração Prática",
        bullets: [
          "Dose única diária: Geralmente pela manhã.",
          "Fracionamento: O comprimido de succinato (tecnologia ZOK) possui um sulco e pode ser partido sem perder a propriedade de liberação prolongada, mas nunca deve ser mastigado ou esmagado.",
          "Relação com Alimentos: A ingestão com alimentos não altera significativamente a AUC (área sob a curva), mas pode aumentar levemente o pico plasmático. Recomenda-se tomar sempre no mesmo horário para manter a constância.",
        ],
      },
      {
        title: "6. Efeitos Adversos e Contraindicações",
        paragraphs: ["6.1 Efeitos Adversos Comuns"],
        bullets: [
          "Geral: Fadiga e tontura (devido à redução do débito cardíaco).",
          "Cardiovascular: Bradicardia (batimentos lentos), hipotensão ortostática, extremidades frias.",
          "SNC: Distúrbios do sono, pesadelos (devido à passagem pela barreira hematoencefálica), depressão leve.",
          "Respiratório: Dispneia de esforço (em doses altas, perde-se a seletividade e pode haver leve broncoconstrição).",
        ],
      },
      {
        title: "6.2 Contraindicações Absolutas",
        bullets: [
          "Bloqueio atrioventricular (BAV) de 2º ou 3º grau.",
          "Bradicardia sinusal severa (FC < 45-50 bpm).",
          "Choque cardiogênico.",
          "Asma brônquica grave ou DPOC descompensada.",
          "Insuficiência cardíaca descompensada (edema agudo de pulmão).",
        ],
      },
      {
        title: "7. Interações Medicamentosas Críticas",
        bullets: [
          "Inibidores da CYP2D6 (Fluoxetina, Paroxetina, Bupropiona, Quinidina): aumentam drasticamente o nível de metoprolol (risco de bradicardia severa).",
          "Bloqueadores de Cálcio (Verapamil, Diltiazem): risco de parada cardíaca ou bloqueio AV grave (efeito aditivo no nó sinusal).",
          "Anti-inflamatórios (AINEs) (Ibuprofeno, Diclofenaco): podem diminuir o efeito anti-hipertensivo (retenção de sódio e inibição de prostaglandinas).",
          "Clonidina: se interromper a clonidina antes do betabloqueador, há risco de crise hipertensiva fatal.",
        ],
      },
      {
        title: "8. Resumo “Super Completo”",
        paragraphs: [
          "O Succinato de Metoprolol é a evolução tecnológica do metoprolol convencional. Enquanto o tartarato é uma “montanha-russa” de níveis sanguíneos, o succinato é uma “linha reta”, proporcionando proteção estável contra arritmias e morte súbita por 24 horas. É seguro para diabéticos (com cautela, pois pode mascarar sintomas de hipoglicemia) e a primeira escolha para pacientes com coração dilatado ou pós-infarto que precisam de controle fino da frequência cardíaca sem as flutuações de picos de dose.",
        ],
      },
    ],
    references: [],
  },
];

const themes = [
  "Todos",
  "Antidepressivos",
  "Anti-histamínicos",
  "Anticoagulantes",
  "Antipsicóticos",
  "Betabloqueadores",
  "Incretínicos",
];

export default function MedicamentosHub() {
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState("Todos");
  const [selectedId, setSelectedId] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts
      .filter((post) => {
        const themeOk = theme === "Todos" ? true : post.className === theme;
        const queryOk =
          !q ||
          post.name.toLowerCase().includes(q) ||
          post.summary.toLowerCase().includes(q) ||
          post.className.toLowerCase().includes(q);
        return themeOk && queryOk;
      })
      .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
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
