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
    name: "Vortioxetina (Trintellix®, Brintellix®)",
    className: "Antidepressivos",
    category: "Farmacologia",
    summary:
      "A vortioxetina é um antidepressivo de nova geração com perfil farmacológico único: combina inibição do transportador de serotonina (SERT) com atividade moduladora direta sobre múltiplos receptores serotoninérgicos (5-HT), resultando em efeitos sobre diversos sistemas de neurotransmissores.",
    sections: [
      {
        title: "Vortioxetina (Trintellix®, Brintellix®)",
        paragraphs: [
          `A vortioxetina é um antidepressivo de nova geração com perfil farmacológico único: combina inibição do transportador de serotonina (SERT) com atividade moduladora direta sobre múltiplos receptores serotoninérgicos (5-HT), resultando em efeitos sobre diversos sistemas de neurotransmissores. Esse mecanismo "multimodal" distingue a vortioxetina dos antidepressivos tradicionais (ISRSs e IRSNs) e está associado a benefícios específicos sobre sintomas cognitivos da depressão, além do efeito antidepressivo clássico.`,
        ],
      },
      {
        title: "1) História e contexto de desenvolvimento",
        paragraphs: [
          `1.1 Desenvolvimento e aprovação regulatória
Código de desenvolvimento: Lu AA21004 (designação usada em ensaios clínicos e literatura científica inicial) (1, 2).
Fabricante: Desenvolvida pela Lundbeck (H. Lundbeck A/S, Dinamarca) e posteriormente comercializada em parceria com a Takeda Pharmaceuticals nos Estados Unidos.
Aprovações regulatórias:
FDA (EUA): Aprovada em setembro de 2013 para tratamento de transtorno depressivo maior (TDM) em adultos.
EMA (Europa): Aprovada em dezembro de 2013 com a mesma indicação.
Outras agências: Aprovada em diversos países, incluindo Canadá, Austrália (TGA), Brasil (Anvisa) e outros (3, 4).
Nome comercial: Inicialmente comercializada como Brintellix® nos EUA; em 2016, o nome foi alterado para Trintellix® para evitar confusão de nomenclatura com outro medicamento (Brilinta®, um antiagregante plaquetário). Fora dos EUA, o nome Brintellix® ainda é usado em alguns mercados (5).

1.2 Contexto do desenvolvimento: necessidade de novos antidepressivos
Limitações dos ISRSs/IRSNs tradicionais: Embora eficazes para muitos pacientes, os inibidores seletivos de recaptação de serotonina (ISRSs) e inibidores de recaptação de serotonina-noradrenalina (IRSNs) apresentam limitações:
Taxas de remissão completa relativamente baixas (~30–40% em muitos estudos).
Efeitos adversos significativos (disfunção sexual, ganho de peso, sedação).
Impacto limitado sobre sintomas cognitivos da depressão (déficits de atenção, memória, função executiva), que persistem mesmo após melhora do humor e afetam funcionalidade (6, 7).
Hipótese multimodal: A vortioxetina foi desenhada com base na hipótese de que a modulação simultânea de múltiplos alvos serotoninérgicos (além da simples inibição de SERT) poderia melhorar eficácia, tolerabilidade e efeitos sobre cognição (1, 8).

1.3 Programa de desenvolvimento clínico
Ensaios de fase III: Mais de 10 estudos randomizados, duplo-cegos, controlados por placebo (RCTs) foram conduzidos, com mais de 7.000 pacientes adultos com TDM (9, 10).
Resultados: A maioria dos estudos demonstrou superioridade da vortioxetina (5–20 mg/dia) sobre placebo na redução de sintomas depressivos (escalas MADRS, HAM-D), embora alguns estudos individuais não tenham atingido significância estatística (heterogeneidade de resultados) (9, 10, 11).
Estudos de cognição: Ensaios específicos (ex.: FOCUS, CONNECT) demonstraram melhora em testes objetivos de função cognitiva (velocidade de processamento, memória verbal, função executiva) e funcionalidade ocupacional, independente do efeito antidepressivo (12, 13).`,
        ],
      },
      {
        title: "2) Indicação terapêutica, efeito esperado e \"prazo para funcionar\"",
        paragraphs: [
          `2.1 Indicações aprovadas (on-label)
A) Transtorno depressivo maior (TDM) em adultos
Indicação principal: Tratamento de episódios depressivos maiores em adultos (aprovada por FDA, EMA, TGA, Anvisa e outras agências) (3, 4, 14).
Fases do tratamento:
Agudo: Tratamento de episódio depressivo atual (6–12 semanas).
Continuação: Prevenção de recaída (4–9 meses após remissão).
Manutenção: Prevenção de recorrência (≥12 meses em pacientes com histórico de múltiplos episódios) (14, 15).
População: Adultos (≥18 anos); não aprovada para uso em crianças e adolescentes (segurança e eficácia não estabelecidas nessa faixa etária) (14).
B) Transtorno de ansiedade generalizada (TAG)
Status regulatório: Não aprovada para TAG pela FDA ou EMA (3, 4).
Evidências clínicas: Ensaios clínicos para TAG produziram resultados mistos — alguns estudos mostraram superioridade sobre placebo, outros não (16, 17).
Uso off-label: Alguns clínicos podem considerar vortioxetina para TAG comórbido com depressão, mas isso não é uma indicação aprovada (16).

2.2 Efeito terapêutico esperado (o que melhora)
Sintomas depressivos (humor)
Redução de sintomas nucleares: Humor deprimido, anedonia (perda de prazer), sentimentos de culpa/inutilidade, ideação suicida, alterações de sono/apetite, fadiga.
Escalas de avaliação: Redução significativa em escalas como MADRS (Montgomery-Åsberg Depression Rating Scale) e HAM-D (Hamilton Depression Rating Scale) em estudos clínicos (9, 10).
Taxas de resposta e remissão (dados agregados de ensaios clínicos):
Resposta (≥50% de redução em MADRS): ~50–60% dos pacientes em vortioxetina vs. ~30–40% em placebo (9, 10).
Remissão (MADRS ≤10): ~30–40% em vortioxetina vs. ~20–25% em placebo (9, 10).
Observação: Taxas variam conforme dose, gravidade inicial e população estudada (11).
Sintomas cognitivos (diferencial da vortioxetina)
Domínios cognitivos melhorados:
Velocidade de processamento (rapidez mental).
Memória verbal (aprendizado e recordação de informações).
Atenção e concentração.
Função executiva (planejamento, organização, flexibilidade mental) (12, 13, 18).
Evidências:
Estudos FOCUS e CONNECT demonstraram melhora em testes objetivos (ex.: DSST - Digit Symbol Substitution Test, Rey Auditory Verbal Learning Test) e questionários subjetivos (PDQ - Perceived Deficits Questionnaire) (12, 13).
Análises sugerem que o efeito procognitivo é parcialmente independente da melhora do humor (ou seja, não é apenas secundário à redução da depressão) (12, 18).
Impacto funcional: Melhora em funcionalidade ocupacional e qualidade de vida relacionada à cognição (capacidade de trabalhar, estudar, realizar tarefas complexas) (13, 18).

2.3 Em quanto tempo começa a fazer efeito?
Sintomas depressivos (humor)
Início de ação: Melhora mensurável em escalas de depressão pode ser detectada a partir da semana 2 de tratamento em alguns pacientes, mas o efeito antidepressivo completo geralmente requer 4–8 semanas (9, 10, 19).
Avaliação clínica: A maioria dos ensaios clínicos avaliou eficácia em 6–8 semanas (fase aguda); se não houver melhora significativa após 6–8 semanas, considerar ajuste de dose ou mudança de estratégia (14, 19).
Resposta tardia: Alguns pacientes podem continuar melhorando após 8 semanas; em estudos de longo prazo, benefícios adicionais foram observados até 6 meses (15).
Sintomas cognitivos
Início de melhora cognitiva: Efeitos sobre cognição foram detectados já na semana 2–4 em alguns estudos, com benefícios máximos em 8–12 semanas (12, 13).
Observação prática: Pacientes podem relatar melhora subjetiva de "névoa mental" ou dificuldade de concentração antes de perceberem melhora completa do humor (12).

2.4 Cuidados de uso e por que "dieta/estilo de vida" importam
Absorção e interação com alimentos
Absorção: A vortioxetina é bem absorvida por via oral; alimentos não afetam significativamente a biodisponibilidade (14, 20).
Recomendação prática: Pode ser tomada com ou sem alimentos, em qualquer momento do dia. Muitos pacientes preferem tomar pela manhã (se não causar sedação) ou à noite (se causar sonolência) (14).
Por que medidas complementares ajudam?
A vortioxetina atua sobre neurotransmissores cerebrais, mas a recuperação completa da depressão envolve múltiplos fatores:

Adesão ao tratamento: A eficácia depende de uso regular e contínuo; interrupções frequentes ou descontinuação precoce reduzem chance de remissão (21).
Psicoterapia: Combinação de medicação com terapia cognitivo-comportamental (TCC) ou outras psicoterapias aumenta taxas de remissão e reduz risco de recaída (22, 23).
Exercício físico: Atividade física regular (aeróbica moderada, 3–5x/semana) tem efeito antidepressivo comprovado e melhora cognição (sinergismo com vortioxetina) (24, 25).
Higiene do sono: Depressão frequentemente cursa com insônia ou hipersonia; estabelecer rotina de sono regular potencializa recuperação (26).
Nutrição: Dieta equilibrada (rica em ômega-3, vitaminas B, magnésio) e evitar álcool (depressor do SNC) ajudam na estabilização do humor (27).
Estresse e suporte social: Redução de estressores crônicos e fortalecimento de rede de apoio são fatores protetores importantes (28).
Cuidados especiais (segurança)
Risco de suicídio em jovens adultos: Como todos os antidepressivos, a vortioxetina tem advertência de caixa preta (black box warning) da FDA sobre aumento de risco de pensamentos/comportamentos suicidas em crianças, adolescentes e adultos jovens (18–24 anos), especialmente nas primeiras semanas de tratamento (14, 29).
Monitoramento obrigatório: Avaliação clínica frequente (semanal nas primeiras 4 semanas, depois quinzenal até 12 semanas) em pacientes de risco (14, 29).
Triagem para transtorno bipolar: Antes de iniciar vortioxetina, descartar história de mania/hipomania (risco de precipitar episódio maníaco em pacientes com transtorno bipolar não diagnosticado) (14).
Síndrome serotoninérgica: Evitar combinação com outros serotoninérgicos (IMAOs, ISRSs/IRSNs, triptanos, tramadol, linezolida) sem supervisão rigorosa (ver seção 7) (14, 30).`,
        ],
      },
      {
        title: "3) Mecanismo de ação detalhado",
        paragraphs: [
          `A vortioxetina é classificada como "modulador e estimulador de serotonina" (serotonin modulator and stimulator) ou "antidepressivo multimodal", refletindo seu perfil farmacológico único (1, 8, 31).

3.1 Perfil de ligação a receptores e transportadores (afinidades)
A vortioxetina interage com sete alvos serotoninérgicos distintos, com afinidades (Ki) variadas (1, 8, 32):

Alvo | Tipo de atividade | Ki (nM) | Relevância funcional
SERT (transportador de serotonina) | Inibição | 1,6 | Aumenta serotonina sináptica (mecanismo ISRS clássico)
5-HT₁A | Agonismo | 15 | Efeito ansiolítico, antidepressivo, procognitivo
5-HT₁B | Agonismo parcial | 33 | Modulação de liberação de serotonina (autorreceptor)
5-HT₁D | Antagonismo | 54 | Modulação de liberação de serotonina
5-HT₃ | Antagonismo | 3,7 | Efeito antinauseante, procognitivo, ansiolítico
5-HT₇ | Antagonismo | 19 | Efeito procognitivo, antidepressivo
NET (transportador de noradrenalina) | Inibição fraca | ~113 | Atividade mínima (diferente de IRSNs)
DAT (transportador de dopamina) | Sem atividade | >1.000 | Sem efeito direto sobre recaptação de dopamina
Fonte: (1, 8, 32)

3.2 Inibição do transportador de serotonina (SERT)
Mecanismo: A vortioxetina bloqueia SERT (localizado em neurônios serotoninérgicos), impedindo a recaptação de serotonina da fenda sináptica de volta ao neurônio pré-sináptico (1, 33).
Consequência: Aumento de serotonina extracelular em regiões cerebrais envolvidas na regulação do humor (córtex pré-frontal, hipocampo, amígdala) (1, 33).
Ocupação de SERT por dose (dados de PET em humanos):
5 mg/dia: ~50% de ocupação de SERT.
10 mg/dia: ~65% de ocupação.
20 mg/dia: ~80% de ocupação (1, 34).
Comparação com ISRSs: A ocupação de SERT da vortioxetina é comparável à de ISRSs tradicionais (ex.: sertralina, escitalopram), mas o perfil clínico difere devido às ações adicionais em receptores 5-HT (1, 8).

3.3 Agonismo de receptores 5-HT₁A
Localização: Receptores 5-HT₁A estão presentes como:
Autorreceptores em neurônios serotoninérgicos do núcleo da rafe (controlam liberação de serotonina).
Heterorreceptores em neurônios pós-sinápticos (córtex, hipocampo) (35).
Efeito da vortioxetina: Agonismo de 5-HT₁A pós-sináptico contribui para efeito antidepressivo e ansiolítico; agonismo de autorreceptores (em doses baixas) pode inicialmente reduzir liberação de serotonina, mas há dessensibilização com uso crônico (35, 36).
Relevância clínica: Agonismo de 5-HT₁A está associado a menor disfunção sexual (comparado a ISRSs puros) e efeitos procognitivos (35, 37).

3.4 Antagonismo de receptores 5-HT₃
Função do 5-HT₃: Único receptor serotoninérgico ionotrópico (canal iônico); presente em neurônios GABAérgicos e colinérgicos (38).
Efeito da vortioxetina: Bloqueio de 5-HT₃ aumenta liberação de acetilcolina, dopamina e noradrenalina em córtex pré-frontal e hipocampo (1, 8, 38).
Consequências clínicas:
Efeito procognitivo: Aumento de acetilcolina melhora memória e atenção (38, 39).
Efeito antinauseante: Antagonismo de 5-HT₃ reduz náusea (mesmo mecanismo de ondansetrona, usada para náusea de quimioterapia) — paradoxalmente, náusea é o efeito adverso mais comum da vortioxetina, provavelmente por ação em 5-HT₃ periférico antes de atingir steady-state cerebral (14, 38).

3.5 Antagonismo de receptores 5-HT₇
Função do 5-HT₇: Receptor acoplado a proteína G; presente em hipocampo, córtex, hipotálamo; envolvido em ritmo circadiano, cognição e humor (40).
Efeito da vortioxetina: Bloqueio de 5-HT₇ aumenta transmissão de glutamato (via NMDA) e GABA em hipocampo e córtex, facilitando plasticidade sináptica (potenciação de longo prazo, LTP) (1, 40, 41).
Relevância clínica: Efeito procognitivo (melhora de memória e aprendizado) e antidepressivo (neuroplasticidade) (40, 41).

3.6 Efeitos sobre outros neurotransmissores (downstream)
Estudos pré-clínicos (microdiálise em roedores) e translacionais mostram que a vortioxetina aumenta níveis extracelulares de múltiplos neurotransmissores em regiões cerebrais relevantes (1, 8, 42):

Serotonina (5-HT): Aumento em córtex pré-frontal, hipocampo (via inibição de SERT) (1).
Noradrenalina (NA): Aumento em córtex pré-frontal, hipocampo (via antagonismo de 5-HT₃ e 5-HT₇) (1, 42).
Dopamina (DA): Aumento em córtex pré-frontal (via antagonismo de 5-HT₃ e 5-HT₁D) (1, 42).
Acetilcolina (ACh): Aumento em córtex e hipocampo (via antagonismo de 5-HT₃) — chave para efeitos procognitivos (1, 38, 39).
Glutamato: Modulação de transmissão glutamatérgica (via antagonismo de 5-HT₇ e interações com receptores NMDA/AMPA) — importante para plasticidade sináptica e cognição (1, 40, 41).
GABA: Modulação de interneurônios GABAérgicos (via 5-HT₃, 5-HT₇) — contribui para regulação de excitabilidade cortical (1, 8).
Histamina: Aumento reportado em estudos pré-clínicos (mecanismo incerto; pode contribuir para vigilância/alerta) (1).

3.7 Por que a vortioxetina melhora cognição? (hipótese integrativa)
A melhora cognitiva (diferencial da vortioxetina vs. ISRSs tradicionais) é atribuída à combinação sinérgica de múltiplos mecanismos (12, 18, 39, 43):

Aumento de acetilcolina (via antagonismo de 5-HT₃) → melhora memória, atenção (sistema colinérgico é crucial para cognição) (38, 39).
Modulação de glutamato/GABA (via antagonismo de 5-HT₇) → facilita plasticidade sináptica (LTP) e processamento de informação no hipocampo/córtex (40, 41).
Aumento de dopamina/noradrenalina no córtex pré-frontal → melhora função executiva, motivação, atenção sustentada (42, 43).
Agonismo de 5-HT₁A → neuroproteção, neurogênese hipocampal (importante para memória) (35, 36).
Ausência de efeitos anticolinérgicos (diferente de antidepressivos tricíclicos) → não prejudica cognição (44).
Evidência clínica: Estudos FOCUS e CONNECT demonstraram que a melhora cognitiva com vortioxetina é parcialmente independente da melhora do humor (análises estatísticas de mediação), sugerindo efeito procognitivo direto (12, 13, 18).`,
        ],
      },
      {
        title: "4) O que os receptores fazem (e o que isso explica nos sintomas)",
        paragraphs: [
          `5-HT₁A (agonismo)
Função normal: Regulação de humor, ansiedade, resposta ao estresse; modulação de neurogênese hipocampal.
Ao ser ativado pela vortioxetina: Efeito antidepressivo, ansiolítico, neuroprotetor; menor disfunção sexual (comparado a ISRSs puros) (35, 37).

5-HT₃ (antagonismo)
Função normal: Receptor ionotrópico em neurônios GABAérgicos/colinérgicos; regula liberação de neurotransmissores.
Ao ser bloqueado pela vortioxetina: Aumento de acetilcolina (melhora cognição), dopamina/noradrenalina (melhora humor/motivação); efeito antinauseante (embora náusea inicial possa ocorrer) (38, 39).

5-HT₇ (antagonismo)
Função normal: Modulação de ritmo circadiano, cognição, plasticidade sináptica.
Ao ser bloqueado pela vortioxetina: Aumento de glutamato/GABA → facilita LTP (aprendizado/memória); efeito antidepressivo (40, 41).

SERT (inibição)
Função normal: Recapta serotonina da fenda sináptica, terminando sinalização serotoninérgica.
Ao ser bloqueado pela vortioxetina: Aumento de serotonina extracelular → efeito antidepressivo (mecanismo clássico de ISRSs) (1, 33).`,
        ],
      },
      {
        title: "5) Farmacocinética (ADME)",
        paragraphs: [
          `5.1 Absorção
Via de administração: Oral (comprimidos de 5 mg, 10 mg, 20 mg).
Biodisponibilidade absoluta: 75% (boa absorção oral) (20, 45).
Tmax (tempo para concentração máxima): 7–11 horas após dose única; em steady-state (doses múltiplas), Tmax é 7–8 horas (20, 45, 46).
Cmax em steady-state (após doses múltiplas):
5 mg/dia: ~9 ng/mL.
10 mg/dia: ~18 ng/mL.
20 mg/dia: ~33 ng/mL (46).
Efeito de alimentos: Não há efeito clinicamente significativo de alimentos sobre biodisponibilidade ou Cmax; pode ser tomada com ou sem alimentos (14, 20, 45).
Linearidade: Farmacocinética linear na faixa de doses terapêuticas (2,5–60 mg/dia em estudos de dose-resposta) (20, 45).

5.2 Distribuição
Volume de distribuição (Vd): 2.600 litros (distribuição extravascular extensa; indica alta penetração tecidual, incluindo SNC) (46).
Ligação a proteínas plasmáticas: 98–99% (ligação alta; fração livre ~1–2%) (20, 45, 46).
Ligação é independente da concentração plasmática (não saturável na faixa terapêutica) (46).
Penetração no SNC: A vortioxetina atravessa a barreira hematoencefálica eficientemente (necessário para ação antidepressiva) (1).

5.3 Metabolismo
Via principal: Metabolismo hepático oxidativo via citocromo P450, seguido de conjugação com ácido glicurônico (20, 45, 46).
Enzimas CYP envolvidas (contribuição relativa):
CYP2D6: Principal via metabólica (~60–70% do metabolismo total) (20, 45, 47).
CYP3A4/5: Contribuição secundária (~15–20%) (20, 45).
CYP2C19, CYP2C9, CYP2A6, CYP2C8, CYP2B6: Contribuições menores (20, 45, 46).
Metabólito principal: Lu AA34443 (metabólito oxidado), que é farmacologicamente inativo (não contribui para efeito terapêutico) (46, 48).
Interações metabólicas:
Vortioxetina não inibe ou induz CYPs de forma clinicamente relevante (estudos in vitro e in vivo) → baixo potencial de causar interações farmacocinéticas com outros medicamentos (14, 20, 45).
Vortioxetina não é substrato ou inibidor significativo de P-gp (glicoproteína-P) → sem interações relevantes com substratos de P-gp (46).

5.4 Eliminação
Meia-vida de eliminação (t½): 66 horas (~2,75 dias) em voluntários saudáveis metabolizadores extensivos de CYP2D6 (20, 45, 46).
Implicação: Meia-vida longa permite dose única diária e resulta em acúmulo com doses repetidas (steady-state atingido em ~2 semanas) (20, 46).
Clearance oral: 33 L/h em metabolizadores extensivos (46).
Vias de excreção:
Urina: ~59% da dose (principalmente como metabólitos inativos conjugados; <1% como vortioxetina inalterada) (46, 48).
Fezes: ~26% da dose (metabólitos; quantidade negligível de vortioxetina inalterada) (46, 48).
Tempo para steady-state: Aproximadamente 2 semanas (13,5–19 dias) de doses diárias (20, 46).

5.5 Farmacocinética em populações especiais
A) Polimorfismo de CYP2D6
Metabolizadores pobres (PM) de CYP2D6 (~7–10% da população caucasiana; ~2% de asiáticos):
Aumento de exposição: AUC e Cmax da vortioxetina aumentam ~2 vezes em PMs vs. metabolizadores extensivos (EMs) (47, 49).
Meia-vida prolongada: t½ pode chegar a 100–120 horas em PMs (vs. 66h em EMs) (47).
Recomendação de dose: Dose máxima de 10 mg/dia em PMs conhecidos (vs. 20 mg/dia em EMs) (14, 47).
Metabolizadores ultrarrápidos (UM): Exposição reduzida; pode haver necessidade de doses maiores para eficácia (dados limitados) (47).
B) Idosos (≥65 anos)
Farmacocinética: Exposição (AUC e Cmax) aumenta em até 27% em idosos vs. adultos jovens (≤45 anos) (46, 50).
Mecanismo: Redução de clearance relacionada à idade (declínio de função hepática/renal) (50).
Recomendação: Não há ajuste formal de dose, mas iniciar com doses baixas (5–10 mg/dia) e titular cautelosamente; monitorar efeitos adversos (sedação, hiponatremia) (14, 50).
C) Insuficiência renal
Farmacocinética: Insuficiência renal leve a moderada não altera significativamente a exposição à vortioxetina (eliminação renal direta é mínima) (14, 46).
Recomendação: Não há ajuste de dose em insuficiência renal leve/moderada; dados em insuficiência grave/diálise são limitados (usar com cautela) (14).
D) Insuficiência hepática
Farmacocinética: Insuficiência hepática leve a moderada (Child-Pugh A/B) não altera significativamente a farmacocinética (46).
Recomendação: Não há ajuste de dose em insuficiência leve/moderada; não recomendada em insuficiência hepática grave (Child-Pugh C) devido a dados insuficientes (14, 46).`,
        ],
      },
      {
        title: "6) Efeitos adversos e segurança",
        paragraphs: [
          `A vortioxetina é geralmente bem tolerada, com perfil de efeitos adversos mais favorável do que muitos ISRSs tradicionais (especialmente em relação a disfunção sexual e ganho de peso) (51, 52, 53).

6.1 Efeitos adversos mais comuns (≥5% e 2× placebo)
Dados de ensaios clínicos controlados (pool de estudos de fase III) (14, 51, 54):

Efeito adverso | Incidência (vortioxetina) | Incidência (placebo) | Observação
Náusea | 21–32% | 9–12% | Mais comum; geralmente transitória (1–2 semanas); dose-dependente
Constipação | 6–11% | 3–5% | Geralmente leve
Vômito | 5–6% | 2–3% | Relacionado à náusea inicial
Diarreia | 7–10% | 6–7% | Menos comum que náusea
Boca seca (xerostomia) | 6–7% | 4–5% | Leve (menor que tricíclicos)
Tontura | 6–9% | 4–6% | Pode ocorrer no início
Sonolência/sedação | 5–8% | 3–4% | Dose-dependente
Prurido (coceira) | 3–4% | 1–2% | Raro, mas reportado
Fonte: (14, 51, 54)

6.2 Disfunção sexual (diferencial importante)
Incidência: Disfunção sexual é significativamente menor com vortioxetina do que com ISRSs tradicionais (sertralina, paroxetina, escitalopram) (52, 55, 56).
Estudos comparativos: ~16–20% com vortioxetina vs. 30–50% com ISRSs (52, 55).
Mecanismos: Agonismo de 5-HT₁A e ausência de bloqueio de 5-HT₂ (receptores envolvidos em função sexual) podem explicar menor impacto (37, 52).
Tipos de disfunção: Redução de libido, disfunção erétil, anorgasmia, retardo de ejaculação (menos frequentes que com ISRSs) (52, 55).
Relevância clínica: Disfunção sexual é uma das principais causas de descontinuação de ISRSs; perfil mais favorável da vortioxetina pode melhorar adesão (52, 56).

6.3 Ganho de peso
Incidência: Mínimo ou nenhum ganho de peso em ensaios de curto prazo (6–8 semanas) e longo prazo (52 semanas) (51, 53, 57).
Variação média de peso: +0,1 a +0,5 kg (não significativamente diferente de placebo) (51, 57).
Comparação com ISRSs: ISRSs como paroxetina e sertralina estão associados a ganho de peso médio de 2–5 kg em 6–12 meses; vortioxetina não apresenta esse padrão (53, 57).

6.4 Síndrome de descontinuação
Definição: Sintomas que ocorrem após interrupção abrupta de antidepressivos (tontura, náusea, parestesias, irritabilidade, insônia, "choques elétricos" na cabeça) (58, 59).
Incidência com vortioxetina: Baixa a moderada (devido à meia-vida longa de 66h, que funciona como "autodesmame") (14, 58).
Estudos de descontinuação abrupta: ~10–15% de pacientes relataram sintomas leves de descontinuação (vs. 5–8% em placebo) (14, 58).
Recomendação: Para doses de 15–20 mg/dia, reduzir para 10 mg/dia por 1 semana antes de descontinuar completamente (se possível); para doses de 5–10 mg, pode descontinuar diretamente (14, 59).

6.5 Risco de sangramento
Mecanismo: ISRSs (incluindo vortioxetina) inibem recaptação de serotonina em plaquetas, reduzindo agregação plaquetária → aumento de risco de sangramento (especialmente gastrointestinal) (60, 61).
Incidência: Risco absoluto é baixo (~1–2% em monoterapia), mas aumenta com:
Uso concomitante de AINEs (ibuprofeno, naproxeno): risco aumenta 2–3 vezes (60, 61).
Anticoagulantes (varfarina, rivaroxabana): risco aumenta 1,5–2 vezes (60).
Antiplaquetários (aspirina, clopidogrel): risco aumenta 1,5–2 vezes (60).
Recomendação: Monitorar sinais de sangramento (sangramento gengival, hematomas, melena); considerar proteção gástrica (inibidor de bomba de prótons) em pacientes de alto risco (14, 60, 61).

6.6 Hiponatremia
Incidência: Hiponatremia (sódio sérico <135 mEq/L) ocorre em <1% dos pacientes, mas pode ser grave (sódio <120 mEq/L → confusão, convulsões) (14, 62).
Mecanismo: Síndrome de secreção inapropriada de hormônio antidiurético (SIADH) induzida por serotoninérgicos (62).
Fatores de risco: Idosos, uso de diuréticos, baixa ingestão de sódio, volume intravascular reduzido (14, 62).
Monitoramento: Considerar dosagem de sódio sérico em idosos ou pacientes sintomáticos (confusão, fraqueza, náusea) (14, 62).

6.7 Síndrome serotoninérgica
Definição: Condição potencialmente fatal causada por excesso de atividade serotoninérgica no SNC (tríade: alteração mental, hiperatividade autonômica, anormalidades neuromusculares) (30, 63).
Incidência: Rara em monoterapia com vortioxetina; risco aumenta com combinação de serotoninérgicos (30, 63).
Sintomas: Agitação, confusão, taquicardia, hipertensão, sudorese, tremor, hiperreflexia, mioclonia, hipertermia (30, 63).
Fatores de risco: Combinação com IMAOs, ISRSs/IRSNs, triptanos (enxaqueca), tramadol, linezolida, fentanil, dextrometorfano, erva-de-são-joão (30, 63).
Manejo: Descontinuar todos serotoninérgicos imediatamente; suporte (hidratação, resfriamento); benzodiazepínicos para agitação; ciproheptadina (antagonista 5-HT) em casos graves (30, 63).

6.8 Ativação de mania/hipomania
Incidência: ~0,1–0,3% em pacientes com TDM (sem diagnóstico prévio de transtorno bipolar) (14, 64).
Risco: Maior em pacientes com transtorno bipolar não diagnosticado (especialmente tipo II) (64).
Sintomas: Humor elevado/irritável, aumento de energia, redução de necessidade de sono, impulsividade, pensamento acelerado (64).
Recomendação: Triagem para história de mania/hipomania antes de iniciar vortioxetina; descontinuar se mania emergir (14, 64).

6.9 Glaucoma de ângulo fechado
Mecanismo: Serotoninérgicos podem causar midríase (dilatação pupilar) → bloqueio de drenagem de humor aquoso em pacientes com ângulo estrecho (65).
Incidência: Rara, mas potencialmente grave (dor ocular, visão turva, náusea, aumento de pressão intraocular) (14, 65).
Recomendação: Evitar em pacientes com glaucoma de ângulo fechado não tratado; considerar avaliação oftalmológica em pacientes de risco (14, 65).

6.10 Advertência de caixa preta (black box warning)
Suicidalidade em crianças, adolescentes e adultos jovens

"Antidepressivos aumentam o risco de pensamentos e comportamentos suicidas em crianças, adolescentes e adultos jovens (18–24 anos) em estudos de curto prazo. Monitorar de perto para piora clínica e emergência de suicidalidade, especialmente durante os primeiros meses de tratamento e após mudanças de dose. Vortioxetina não é aprovada para uso em pacientes pediátricos." (14, 29)

Dados: Metanálises de ensaios clínicos mostraram aumento de risco de ideação/comportamento suicida em jovens (18–24 anos) nas primeiras 4–8 semanas de tratamento (risco relativo ~1,5–2×) (29, 66).
Monitoramento obrigatório: Avaliação clínica frequente (semanal nas primeiras 4 semanas, quinzenal até 12 semanas) em pacientes ≤24 anos (14, 29).
Paradoxo: Em adultos ≥25 anos, antidepressivos reduzem risco de suicídio a longo prazo (efeito protetor após melhora da depressão) (29, 66).`,
        ],
      },
      {
        title: "7) Interações medicamentosas e com alimentos",
        paragraphs: [
          `7.1 Interações farmacocinéticas (metabolismo via CYP2D6)
A) Inibidores fortes de CYP2D6
Medicamentos: Bupropiona, fluoxetina, paroxetina, quinidina, duloxetina (67, 68).
Efeito: Aumento de exposição à vortioxetina (AUC e Cmax aumentam ~2 vezes) (67, 68).
Recomendação: Reduzir dose de vortioxetina pela metade quando coadministrada com inibidor forte de CYP2D6 (ex.: se tomando 20 mg/dia, reduzir para 10 mg/dia) (14, 67).
Exemplo clínico: Paciente em vortioxetina 15 mg/dia inicia bupropiona (para cessação tabágica) → reduzir vortioxetina para 7,5 mg/dia (ou 10 mg, se 7,5 não disponível) (14).
B) Indutores fortes de CYP (CYP3A4 e outros)
Medicamentos: Rifampicina, carbamazepina, fenitoína, erva-de-são-joão (Hypericum perforatum) (14, 69).
Efeito: Redução de exposição à vortioxetina (AUC pode cair 50–70%) → risco de perda de eficácia (69).
Recomendação: Considerar aumento de dose de vortioxetina se indutor for usado por >14 dias (dose máxima não deve exceder 3× a dose original; ex.: se tomando 10 mg, pode aumentar até 30 mg — mas dose máxima aprovada é 20 mg na maioria das bulas) (14, 69).
Alternativa: Evitar indutores fortes quando possível; se necessário, monitorar resposta clínica e ajustar dose (14, 69).
C) Metabolizadores pobres de CYP2D6
População: ~7–10% de caucasianos, ~2% de asiáticos (polimorfismo genético) (47, 49).
Efeito: Exposição à vortioxetina aumenta ~2 vezes (AUC e Cmax) (47, 49).
Recomendação: Dose máxima de 10 mg/dia em metabolizadores pobres conhecidos (vs. 20 mg/dia em metabolizadores extensivos) (14, 47).
Teste genético: Genotipagem de CYP2D6 pode ser considerada em pacientes com efeitos adversos desproporcionais ou resposta inadequada (47).

7.2 Interações farmacodinâmicas (efeitos aditivos/sinérgicos)
A) Inibidores da monoamina oxidase (IMAOs)
Medicamentos: Fenelzina, tranilcipromina, isocarboxazida, selegilina (oral), linezolida, azul de metileno (70).
Efeito: Risco de síndrome serotoninérgica grave (potencialmente fatal) (30, 63, 70).
Contraindicação: Não usar vortioxetina com IMAOs ou dentro de 14 dias após descontinuar IMAO (14, 70).
Washout: Aguardar ≥14 dias após parar IMAO antes de iniciar vortioxetina; aguardar ≥14 dias após parar vortioxetina antes de iniciar IMAO (14, 70).
Exceção (linezolida/azul de metileno): Se uso urgente for necessário, descontinuar vortioxetina e iniciar IMAO com monitoramento rigoroso (14, 70).
B) Outros serotoninérgicos
Medicamentos: ISRSs, IRSNs, triptanos (sumatriptano, rizatriptano), tramadol, fentanil, dextrometorfano, triptofano, erva-de-são-joão (30, 63, 71).
Efeito: Risco aumentado de síndrome serotoninérgica (efeito aditivo) (30, 63, 71).
Recomendação: Evitar combinação quando possível; se necessário, usar doses baixas e monitorar sintomas de síndrome serotoninérgica (agitação, tremor, hiperreflexia, sudorese, hipertermia) (14, 30, 63).
C) Anticoagulantes e antiplaquetários
Medicamentos: Varfarina, rivaroxabana, apixabana, aspirina, clopidogrel, AINEs (ibuprofeno, naproxeno) (60, 61).
Efeito: Risco aumentado de sangramento (efeito sinérgico sobre função plaquetária) (60, 61).
Recomendação: Monitorar INR (se varfarina); observar sinais de sangramento (hematomas, sangramento gengival, melena); considerar proteção gástrica com inibidor de bomba de prótons (14, 60, 61).
D) Álcool e depressores do SNC
Efeito: Potencialização de sedação e prejuízo cognitivo/motor (14, 72).
Recomendação: Evitar consumo de álcool durante tratamento com vortioxetina; cautela com benzodiazepínicos, opioides, anti-histamínicos sedativos (14, 72).
E) Buspirona (agonista 5-HT₁A)
Efeito: Efeito serotoninérgico aditivo (ambos ativam 5-HT₁A); risco teórico de síndrome serotoninérgica (embora raro com buspirona) (73).
Recomendação: Usar com cautela; monitorar sintomas serotoninérgicos (14, 73).

7.3 Interações com alimentos
Efeito de alimentos: Nenhuma interação clinicamente significativa; pode ser tomada com ou sem alimentos (14, 20, 45).
Grapefruit/pomelo: Não há dados específicos sobre interação com grapefruit, mas como CYP3A4 é via metabólica secundária, efeito seria mínimo (14).`,
        ],
      },
      {
        title: "8) Contraindicações e advertências",
        paragraphs: [
          `8.1 Contraindicações absolutas
Hipersensibilidade à vortioxetina ou a qualquer componente da formulação (14).
Uso concomitante com IMAOs (ou dentro de 14 dias após descontinuar IMAO ou vortioxetina) — risco de síndrome serotoninérgica (14, 70).

8.2 Advertências importantes (além de black box)
Síndrome serotoninérgica: Risco aumentado com combinação de serotoninérgicos; monitorar sintomas (agitação, tremor, hipertermia) (14, 30, 63).
Risco de sangramento: Especialmente com anticoagulantes/antiplaquetários/AINEs; monitorar sinais de sangramento (14, 60, 61).
Ativação de mania: Triagem para transtorno bipolar antes de iniciar; descontinuar se mania emergir (14, 64).
Descontinuação: Reduzir dose gradualmente (10 mg × 1 semana) se tomando 15–20 mg/dia (14, 59).
Hiponatremia: Monitorar sódio sérico em idosos ou pacientes sintomáticos (14, 62).
Glaucoma de ângulo fechado: Evitar em pacientes com ângulo estreito não tratado (14, 65).
Gravidez e lactação: Dados limitados; usar apenas se benefício superar risco; considerar risco de hipertensão pulmonar persistente no recém-nascido (exposição no 3º trimestre) (14, 74).`,
        ],
      },
      {
        title: "9) Considerações de dosagem e monitoramento",
        paragraphs: [
          `9.1 Dosagem típica (adultos)
Dose inicial
Recomendação padrão: 10 mg/dia (via oral, dose única, com ou sem alimentos) (14, 75).
Alternativa: Iniciar com 5 mg/dia em pacientes idosos, com múltiplas comorbidades ou sensíveis a efeitos adversos (14, 75).
Titulação
Aumento de dose: Após 1–2 semanas em 10 mg/dia, pode aumentar para 20 mg/dia (dose máxima aprovada) se tolerado e resposta for insuficiente (14, 75).
Redução de dose: Se efeitos adversos (náusea, sedação) forem intoleráveis, considerar 5 mg/dia (dose mínima eficaz em alguns estudos) (14, 75).
Dose de manutenção
Faixa terapêutica: 5–20 mg/dia (14, 75).
Dose mais comum: 10 mg/dia (eficácia demonstrada na maioria dos estudos) (9, 10, 75).
Dose máxima: 20 mg/dia (14, 75).
Duração do tratamento
Fase aguda: 6–12 semanas (até remissão de sintomas) (14, 75).
Continuação: 4–9 meses após remissão (prevenir recaída) (14, 75).
Manutenção: ≥12 meses em pacientes com histórico de múltiplos episódios depressivos (prevenir recorrência) (14, 15, 75).

9.2 Ajustes de dose em populações especiais
Metabolizadores pobres de CYP2D6
Dose máxima: 10 mg/dia (vs. 20 mg/dia em metabolizadores extensivos) (14, 47).
Uso com inibidores fortes de CYP2D6
Ajuste: Reduzir dose pela metade (ex.: 20 mg → 10 mg; 10 mg → 5 mg) (14, 67).
Uso com indutores fortes de CYP
Ajuste: Considerar aumento de dose após 14 dias de uso do indutor (máximo 3× a dose original, mas não exceder 20 mg/dia conforme bula) (14, 69).
Idosos (≥65 anos)
Dose inicial: Considerar 5 mg/dia (exposição aumenta ~27% em idosos) (14, 50).
Titulação: Aumentar cautelosamente conforme tolerabilidade (14, 50).
Insuficiência renal
Leve a moderada: Sem ajuste de dose (14, 46).
Grave/diálise: Dados insuficientes; usar com cautela (14).
Insuficiência hepática
Leve a moderada (Child-Pugh A/B): Sem ajuste de dose (14, 46).
Grave (Child-Pugh C): Não recomendada (dados insuficientes) (14, 46).

9.3 Descontinuação
Doses de 5–10 mg/dia: Pode descontinuar abruptamente (meia-vida longa minimiza síndrome de descontinuação) (14, 59).
Doses de 15–20 mg/dia: Reduzir para 10 mg/dia por 1 semana antes de descontinuar completamente (se possível) (14, 59).
Sintomas de descontinuação: Tontura, náusea, parestesias, irritabilidade (geralmente leves e transitórios) (14, 58, 59).

9.4 Monitoramento clínico
Parâmetro | Frequência | Objetivo
Avaliação de suicidalidade | Semanal (primeiras 4 semanas), quinzenal (até 12 semanas), depois conforme necessário | Detectar emergência de ideação/comportamento suicida (especialmente em jovens ≤24 anos) (14, 29)
Sintomas depressivos (escalas PHQ-9, MADRS) | Basal, semanas 2, 4, 6, 8, depois mensalmente | Avaliar resposta ao tratamento; ajustar dose se resposta insuficiente (14, 75)
Efeitos adversos (náusea, sedação, tontura) | A cada visita | Avaliar tolerabilidade; ajustar dose ou descontinuar se intoleráveis (14, 75)
Sinais de mania/hipomania | Basal (triagem), depois a cada visita | Detectar ativação maníaca (especialmente em pacientes com risco de transtorno bipolar) (14, 64)
Sódio sérico | Basal (idosos, uso de diuréticos), depois se sintomas de hiponatremia (confusão, fraqueza) | Detectar hiponatremia (especialmente em idosos) (14, 62)
Sinais de sangramento | A cada visita (se uso concomitante de anticoagulantes/AINEs) | Detectar sangramento anormal (hematomas, sangramento gengival, melena) (14, 60)
Função cognitiva (opcional) | Basal, semanas 8–12 | Avaliar melhora cognitiva (diferencial da vortioxetina); usar escalas como DSST, PDQ (12, 13)`,
        ],
      },
      {
        title: "10) Dados da molécula (substância ativa)",
        paragraphs: [
          `Parâmetro | Valor
Nome (DCI/INN) | Vortioxetina (Vortioxetine)
Nome químico (IUPAC) | 1-[2-(2,4-dimetilfenil)sulfanil]fenil]piperazina
Fórmula molecular | C₁₈H₂₂N₂S
Massa molecular | 298,44 g/mol (base livre); 379,33 g/mol (hidrobrometo)
Quiralidade | Aquiral (não possui centros estereogênicos)
pKa | ~9,8 (base fraca) (76)
Solubilidade | Praticamente insolúvel em água; solúvel em solventes orgânicos (formulada como hidrobrometo para melhorar solubilidade) (76)
Ligação a proteínas plasmáticas | 98–99% (20, 45, 46)
Classificação química | Derivado de fenilpiperazina (arilsulfanil-fenil-piperazina)
Classe terapêutica (ATC) | N06AX26 (Outros antidepressivos)
Código de desenvolvimento | Lu AA21004 (1, 2)
CAS Number | 508233-74-7 (base livre); 960203-27-4 (hidrobrometo)`,
        ],
      },
      {
        title: "11) Eficácia clínica (dados de ensaios)",
        paragraphs: [
          `11.1 Eficácia antidepressiva (sintomas de humor)
Estudos pivotais: >10 RCTs de fase III, 6–8 semanas, n total >7.000 pacientes adultos com TDM (9, 10, 11).
Resultado primário: Redução de sintomas depressivos (escalas MADRS, HAM-D).
Eficácia vs. placebo:
Diferença média em MADRS: −2 a −4 pontos vs. placebo (estatisticamente significativa, mas magnitude modesta) (9, 10).
Taxas de resposta (≥50% redução em MADRS): ~50–60% vortioxetina vs. ~30–40% placebo (9, 10).
Taxas de remissão (MADRS ≤10): ~30–40% vortioxetina vs. ~20–25% placebo (9, 10).
Heterogeneidade de resultados: Alguns estudos individuais não atingiram significância estatística (especialmente em doses baixas, 2,5–5 mg); eficácia mais consistente com 10–20 mg/dia (9, 11).
Comparação com ISRSs: Estudos head-to-head mostraram eficácia comparável a escitalopram, sertralina, venlafaxina, duloxetina (não inferioridade) (77, 78).

11.2 Eficácia procognitiva (sintomas cognitivos)
Estudos específicos: FOCUS (2016), CONNECT (2018) — RCTs desenhados para avaliar cognição como desfecho primário (12, 13).
Testes objetivos:
DSST (Digit Symbol Substitution Test): Melhora significativa vs. placebo (velocidade de processamento) (12, 13).
Rey AVLT (Auditory Verbal Learning Test): Melhora em memória verbal (12).
TMT (Trail Making Test): Melhora em função executiva (12).
Questionários subjetivos:
PDQ (Perceived Deficits Questionnaire): Melhora em percepção subjetiva de déficits cognitivos (12, 13).
Análises de mediação: Efeito sobre cognição é parcialmente independente da melhora do humor (12–30% do efeito é direto, não mediado por redução de depressão) (12, 18).
Impacto funcional: Melhora em funcionalidade ocupacional (capacidade de trabalhar, realizar tarefas complexas) em estudo CONNECT (13).

11.3 Prevenção de recaída/recorrência
Estudo de prevenção de recaída (2012): RCT de 24–64 semanas em pacientes com TDM em remissão (15).
Resultado: Vortioxetina reduziu risco de recaída em ~50% vs. placebo (hazard ratio ~0,5) (15).
Implicação: Eficácia mantida em tratamento de longo prazo (manutenção) (15).`,
        ],
      },
      {
        title: "12) Resumo \"em uma frase\"",
        paragraphs: [
          `A vortioxetina é um antidepressivo multimodal de nova geração que combina inibição do transportador de serotonina (SERT) com atividade moduladora direta sobre múltiplos receptores serotoninérgicos (5-HT₁A agonismo, 5-HT₃ e 5-HT₇ antagonismo), resultando em efeitos sobre diversos neurotransmissores (serotonina, noradrenalina, dopamina, acetilcolina, glutamato), com eficácia antidepressiva comparável a ISRSs tradicionais, mas com diferencial clínico importante de melhora de sintomas cognitivos (memória, atenção, função executiva), menor incidência de disfunção sexual e ganho de peso, farmacocinética caracterizada por meia-vida longa (66 horas) e metabolismo predominante via CYP2D6 (exigindo ajustes de dose em metabolizadores pobres ou uso com inibidores/indutores de CYP), e perfil de segurança geralmente favorável, com náusea transitória como efeito adverso mais comum e advertência de caixa preta sobre risco de suicidalidade em jovens (18–24 anos) nas primeiras semanas de tratamento.`,
        ],
      },
      {
        title: "Nota final educacional",
        paragraphs: [
          `Este texto foi elaborado para fins informativos e educacionais, destinado a profissionais de saúde e estudantes. A vortioxetina é um medicamento de prescrição que deve ser usado apenas sob supervisão médica. Qualquer decisão de iniciar, ajustar ou descontinuar tratamento deve ser feita em conjunto com profissional de saúde qualificado, considerando características individuais, comorbidades e riscos específicos de cada paciente.`,
        ],
      },
    ],
    references: [
      {
        label:
          "LINCOLN, J.; WEHLER, C. Vortioxetine for major depressive disorder. Current Psychiatry, v. 13, n. 2, p. 31–38, 2014. Disponível em: https://scispace.com/papers/vortioxetine-for-major-depressive-disorder-7u9a6vpaqg. Acesso em: 7 fev. 2026.",
        href: "https://scispace.com/papers/vortioxetine-for-major-depressive-disorder-7u9a6vpaqg",
      },
      {
        label:
          "GONDA, X. et al. Vortioxetine: a novel antidepressant for the treatment of major depressive disorder. Expert Opinion on Drug Discovery, v. 14, n. 1, p. 81–89, 2019. DOI: 10.1080/17460441.2019.1546691. Acesso em: 7 fev. 2026.",
      },
      {
        label:
          "U.S. FOOD AND DRUG ADMINISTRATION (FDA). TRINTELLIX® (vortioxetine) tablets: Prescribing Information. 2021. Disponível em: https://www.accessdata.fda.gov/drugsatfda_docs/label/2021/204447s021s022lbl.pdf. Acesso em: 7 fev. 2026.",
        href: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2021/204447s021s022lbl.pdf",
      },
      {
        label:
          "EUROPEAN MEDICINES AGENCY (EMA). Brintellix (vortioxetine): European Public Assessment Report (EPAR). 2013. Disponível em: https://www.ema.europa.eu/. Acesso em: 7 fev. 2026.",
        href: "https://www.ema.europa.eu/",
      },
      {
        label:
          "TAKEDA PHARMACEUTICALS. TRINTELLIX® (vortioxetine) — Name Change Announcement. 2016. Disponível em: https://www.trintellixhcp.com/. Acesso em: 7 fev. 2026.",
        href: "https://www.trintellixhcp.com/",
      },
      {
        label:
          "MCINTYRE, R. S. et al. Cognitive deficits and functional outcomes in major depressive disorder: determinants, substrates, and treatment interventions. Depression and Anxiety, v. 30, n. 6, p. 515–527, 2013. DOI: 10.1002/da.22063.",
      },
      {
        label:
          "LAM, R. W. et al. Cognitive dysfunction in major depressive disorder: effects on psychosocial functioning and implications for treatment. Canadian Journal of Psychiatry, v. 59, n. 12, p. 649–654, 2014. DOI: 10.1177/070674371405901206.",
      },
      {
        label:
          "SANCHEZ, C. et al. Vortioxetine, a novel antidepressant with multimodal activity: review of preclinical and clinical data. Pharmacology & Therapeutics, v. 145, p. 43–57, 2015. DOI: 10.1016/j.pharmthera.2014.07.001.",
      },
      {
        label:
          "ALVAREZ, E. et al. A double-blind, randomized, placebo-controlled, active reference study of Lu AA21004 in patients with major depressive disorder. International Journal of Neuropsychopharmacology, v. 15, n. 5, p. 589–600, 2012. DOI: 10.1017/S1461145711001027.",
      },
      {
        label:
          "MAHABLESHWARKAR, A. R. et al. A randomized, placebo-controlled, active-reference, double-blind, flexible-dose study of the efficacy of vortioxetine on cognitive function in major depressive disorder. Neuropsychopharmacology, v. 40, n. 8, p. 2025–2037, 2015. DOI: 10.1038/npp.2015.52.",
      },
      {
        label:
          "DUBOVSKY, S. Pharmacokinetic evaluation of vortioxetine for the treatment of major depressive disorder. Expert Opinion on Drug Metabolism & Toxicology, v. 10, n. 5, p. 759–766, 2014. DOI: 10.1517/17425255.2014.904286.",
      },
      {
        label:
          "MCINTYRE, R. S. et al. Vortioxetine for the treatment of major depressive disorder: a meta-analysis of short-term and long-term efficacy and safety. CNS Spectrums, v. 21, n. 5, p. 421–433, 2016. DOI: 10.1017/S1092852916000584.",
      },
      {
        label:
          "HARRISON, J. E. et al. Cognitive function in major depressive disorder: a randomized, placebo-controlled study of vortioxetine (CONNECT study). International Journal of Neuropsychopharmacology, v. 21, n. 7, p. 628–636, 2018. DOI: 10.1093/ijnp/pyy040.",
      },
      {
        label:
          "TAKEDA PHARMACEUTICALS. TRINTELLIX® (vortioxetine) tablets: Full Prescribing Information. 2021. Disponível em: https://www.accessdata.fda.gov/drugsatfda_docs/label/2021/204447s021s022lbl.pdf. Acesso em: 7 fev. 2026.",
        href: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2021/204447s021s022lbl.pdf",
      },
      {
        label:
          "BOULENGER, J. P. et al. A randomized clinical study of Lu AA21004 in the prevention of relapse in patients with major depressive disorder. Journal of Psychopharmacology, v. 26, n. 11, p. 1408–1416, 2012. DOI: 10.1177/0269881112441866.",
      },
      {
        label:
          "ROTHSCHILD, A. J. et al. Efficacy of vortioxetine in patients with major depressive disorder and high levels of anxiety symptoms: a post hoc analysis of five randomized, placebo-controlled, acute studies. Journal of Psychiatric Research, v. 97, p. 57–63, 2018. DOI: 10.1016/j.jpsychires.2017.11.010.",
      },
      {
        label:
          "BALDWIN, D. S. et al. Efficacy of vortioxetine in generalized anxiety disorder: a meta-analysis. International Clinical Psychopharmacology, v. 33, n. 1, p. 1–9, 2018. DOI: 10.1097/YIC.0000000000000196.",
      },
      {
        label:
          "MAHABLESHWARKAR, A. R. et al. A randomized, double-blind, duloxetine-referenced study comparing efficacy and tolerability of 2 fixed doses of vortioxetine in the acute treatment of adults with MDD. Psychopharmacology, v. 232, n. 12, p. 2061–2070, 2015. DOI: 10.1007/s00213-014-3839-0.",
      },
      {
        label:
          "CONNOLLY, K. R.; THASE, M. E. Vortioxetine: a new treatment for major depressive disorder. Expert Opinion on Pharmacotherapy, v. 17, n. 3, p. 421–431, 2016. DOI: 10.1517/14656566.2016.1133588.",
      },
      {
        label:
          "CHEN, G. et al. Pharmacokinetics and pharmacodynamics of vortioxetine (Lu AA21004), a multimodal serotonin modulator, in healthy subjects. Clinical Pharmacokinetics, v. 57, n. 9, p. 1159–1170, 2018. DOI: 10.1007/s40262-017-0620-5.",
      },
      {
        label:
          "SANSONE, R. A.; SANSONE, L. A. Antidepressant adherence: are patients taking their medications? Innovations in Clinical Neuroscience, v. 9, n. 5–6, p. 41–46, 2012.",
      },
      {
        label:
          "CUIJPERS, P. et al. Adding psychotherapy to antidepressant medication in depression and anxiety disorders: a meta-analysis. World Psychiatry, v. 13, n. 1, p. 56–67, 2014. DOI: 10.1002/wps.20089.",
      },
      {
        label:
          "KARYOTAKI, E. et al. Combining pharmacotherapy and psychotherapy or monotherapy for major depression? A meta-analysis on the long-term effects. Journal of Affective Disorders, v. 194, p. 144–152, 2016. DOI: 10.1016/j.jad.2016.01.036.",
      },
      {
        label:
          "SCHUCH, F. B. et al. Exercise as a treatment for depression: a meta-analysis adjusting for publication bias. Journal of Psychiatric Research, v. 77, p. 42–51, 2016. DOI: 10.1016/j.jpsychires.2016.02.023.",
      },
      {
        label:
          "KANDOLA, A. et al. Physical activity and depression: towards understanding the antidepressant mechanisms of physical activity. Neuroscience & Biobehavioral Reviews, v. 107, p. 525–539, 2019. DOI: 10.1016/j.neubiorev.2019.09.040.",
      },
      {
        label:
          "RIEMANN, D. et al. Sleep, insomnia, and depression. Neuropsychopharmacology, v. 45, n. 1, p. 74–89, 2020. DOI: 10.1038/s41386-019-0411-y.",
      },
      {
        label:
          "SARRIS, J. et al. Nutritional medicine as mainstream in psychiatry. The Lancet Psychiatry, v. 2, n. 3, p. 271–274, 2015. DOI: 10.1016/S2215-0366(14)00051-0.",
      },
      {
        label:
          "THOITS, P. A. Mechanisms linking social ties and support to physical and mental health. Journal of Health and Social Behavior, v. 52, n. 2, p. 145–161, 2011. DOI: 10.1177/0022146510395592.",
      },
      {
        label:
          "STONE, M. et al. Risk of suicidality in clinical trials of antidepressants in adults: analysis of proprietary data submitted to US Food and Drug Administration. BMJ, v. 339, b2880, 2009. DOI: 10.1136/bmj.b2880.",
      },
      {
        label:
          "BOYER, E. W.; SHANNON, M. The serotonin syndrome. New England Journal of Medicine, v. 352, n. 11, p. 1112–1120, 2005. DOI: 10.1056/NEJMra041867.",
      },
      {
        label:
          "STAHL, S. M. Mechanism of action of vortioxetine: a multimodal antidepressant. CNS Spectrums, v. 20, n. 4, p. 364–368, 2015. DOI: 10.1017/S1092852915000462.",
      },
      {
        label:
          "BANG-ANDERSEN, B. et al. Discovery of 1-[2-(2,4-dimethylphenylsulfanyl)phenyl]piperazine (Lu AA21004): a novel multimodal compound for the treatment of major depressive disorder. Journal of Medicinal Chemistry, v. 54, n. 9, p. 3206–3221, 2011. DOI: 10.1021/jm101459g.",
      },
      {
        label:
          "BLIER, P.; DE MONTIGNY, C. Current advances and trends in the treatment of depression. Trends in Pharmacological Sciences, v. 15, n. 7, p. 220–226, 1994. DOI: 10.1016/0165-6147(94)90315-8.",
      },
      {
        label:
          "STENKRONA, P. et al. Dose occupancy study of the serotonin transporter and the 5-HT₁B and 5-HT₁A receptors with [¹¹C]MADAM and [¹¹C]AZ10419369 after a single oral dose of vortioxetine in healthy subjects. European Journal of Nuclear Medicine and Molecular Imaging, v. 40, n. 12, p. 1800–1806, 2013. DOI: 10.1007/s00259-013-2491-5.",
      },
      {
        label:
          "CELADA, P. et al. The therapeutic role of 5-HT₁A and 5-HT₂A receptors in depression. Journal of Psychiatry & Neuroscience, v. 29, n. 4, p. 252–265, 2004.",
      },
      {
        label:
          "ALBERT, P. R.; VAHID-ANSARI, F.; LUCKHART, C. Serotonin-prefrontal cortical circuitry in anxiety and depression phenotypes: pivotal role of pre- and post-synaptic 5-HT₁A receptor expression. Frontiers in Behavioral Neuroscience, v. 8, 199, 2014. DOI: 10.3389/fnbeh.2014.00199.",
      },
      {
        label:
          "MONTEJO, A. L. et al. Better sexual acceptability of agomelatine (25 and 50 mg) compared with paroxetine (20 mg) in healthy male volunteers: an 8-week, placebo-controlled study using the PRSEXDQ-SALSEX scale. Journal of Psychopharmacology, v. 24, n. 1, p. 111–120, 2010. DOI: 10.1177/0269881108099418.",
      },
      {
        label:
          "THOMPSON, A. J.; LUMMIS, S. C. R. 5-HT₃ receptors. Current Pharmaceutical Design, v. 12, n. 28, p. 3615–3630, 2006. DOI: 10.2174/138161206778522006.",
      },
      {
        label:
          "DALE, E. et al. Vortioxetine disinhibits pyramidal cell function and enhances synaptic plasticity in the rat hippocampus. Journal of Psychopharmacology, v. 28, n. 10, p. 891–902, 2014. DOI: 10.1177/0269881114543719.",
      },
      {
        label:
          "HEDLUND, P. B. The 5-HT₇ receptor and disorders of the nervous system: an overview. Psychopharmacology, v. 206, n. 3, p. 345–354, 2009. DOI: 10.1007/s00213-009-1626-0.",
      },
      {
        label:
          "MNIE-FILALI, O. et al. Allosteric modulation of the effects of the 5-HT reuptake inhibitor escitalopram on the rat hippocampal synaptic plasticity. Neuroscience Letters, v. 395, n. 1, p. 23–27, 2006. DOI: 10.1016/j.neulet.2005.10.044.",
      },
      {
        label:
          "PEHRSON, A. L. et al. Vortioxetine dose-dependently reverses 5-HT depletion-induced deficits in spatial working and object recognition memory: a potential role for 5-HT₁A receptor agonism and 5-HT₃ receptor antagonism. European Neuropsychopharmacology, v. 26, n. 1, p. 160–171, 2016. DOI: 10.1016/j.euroneuro.2015.11.004.",
      },
      {
        label:
          "MCINTYRE, R. S. et al. The effect of vortioxetine on cognitive function in patients with major depressive disorder: a meta-analysis of three randomized controlled trials. International Journal of Neuropsychopharmacology, v. 19, n. 10, pyw055, 2016. DOI: 10.1093/ijnp/pyw055.",
      },
      {
        label:
          "STAHL, S. M. Stahl's Essential Psychopharmacology: Neuroscientific Basis and Practical Applications. 4. ed. Cambridge: Cambridge University Press, 2013.",
      },
      {
        label:
          "AREBERG, J. et al. A population pharmacokinetic meta-analysis of vortioxetine in healthy individuals and patients with major depressive disorder. Clinical Pharmacokinetics, v. 53, n. 11, p. 1007–1021, 2014. DOI: 10.1007/s40262-014-0172-5.",
      },
      {
        label:
          "AUSTRALIAN GOVERNMENT — THERAPEUTIC GOODS ADMINISTRATION (TGA). Brintellix (vortioxetine hydrobromide): Australian Product Information. 2014. Disponível em: https://www.tga.gov.au/. Acesso em: 7 fev. 2026.",
        href: "https://www.tga.gov.au/",
      },
      {
        label:
          "CHEN, G. et al. The effect of cytochrome P450 (CYP) 2D6 genotypes on the pharmacokinetics of vortioxetine in healthy subjects. British Journal of Clinical Pharmacology, v. 84, n. 10, p. 2301–2313, 2018. DOI: 10.1111/bcp.13672.",
      },
      {
        label:
          "HVENEGAARD, M. G. et al. Identification of the human cytochrome P450 and UDP-glucuronosyltransferase enzymes involved in the metabolism of vortioxetine. Drug Metabolism and Disposition, v. 40, n. 7, p. 1357–1365, 2012. DOI: 10.1124/dmd.112.045096.",
      },
      {
        label:
          "WANG, G. et al. The effect of CYP2D6 polymorphisms on the pharmacokinetics of vortioxetine in Chinese healthy subjects. Journal of Clinical Pharmacy and Therapeutics, v. 42, n. 5, p. 560–566, 2017. DOI: 10.1111/jcpt.12544.",
      },
      {
        label:
          "KATONA, C. et al. Vortioxetine in elderly patients with major depressive disorder: a randomized, double-blind, placebo-controlled study. American Journal of Geriatric Psychiatry, v. 27, n. 2, p. 131–141, 2019. DOI: 10.1016/j.jagp.2018.09.013.",
      },
      {
        label:
          "BALDWIN, D. S. et al. A pooled analysis of the safety and tolerability of vortioxetine in patients with major depressive disorder. CNS Spectrums, v. 21, n. 4, p. 317–326, 2016. DOI: 10.1017/S1092852916000316.",
      },
      {
        label:
          "JACOBSEN, P. L. et al. A randomized, double-blind, placebo-controlled study of the efficacy and safety of vortioxetine 10 mg and 20 mg in adults with major depressive disorder. Journal of Clinical Psychiatry, v. 76, n. 5, p. 575–582, 2015. DOI: 10.4088/JCP.14m09335.",
      },
      {
        label:
          "MEEKER, A. S. et al. Vortioxetine for the treatment of major depressive disorder: a comprehensive review of the clinical literature. CNS Drugs, v. 29, n. 10, p. 811–823, 2015. DOI: 10.1007/s40263-015-0282-7.",
      },
      {
        label:
          "THASE, M. E. et al. Efficacy and safety of vortioxetine (Lu AA21004) in major depressive disorder: results of two short-term, randomized, double-blind, placebo-controlled trials. International Journal of Neuropsychopharmacology, v. 16, n. 9, p. 2097–2109, 2013. DOI: 10.1017/S1461145713000552.",
      },
      {
        label:
          "CLAYTON, A. H. et al. Sexual dysfunction associated with major depressive disorder and antidepressant treatment. Expert Opinion on Drug Safety, v. 13, n. 10, p. 1361–1374, 2014. DOI: 10.1517/14740338.2014.951324.",
      },
      {
        label:
          "MONTEJO, A. L. et al. Sexual dysfunction with antidepressant treatment: comparison of vortioxetine with selective serotonin reuptake inhibitors. Journal of Clinical Psychopharmacology, v. 39, n. 5, p. 486–492, 2019. DOI: 10.1097/JCP.0000000000001088.",
      },
      {
        label:
          "BALDWIN, D. S. et al. Discontinuation symptoms in depression and anxiety disorders. International Journal of Neuropsychopharmacology, v. 10, n. 1, p. 73–84, 2007. DOI: 10.1017/S1461145705006358.",
      },
      {
        label:
          "FAVA, G. A. et al. Withdrawal symptoms after selective serotonin reuptake inhibitor discontinuation: a systematic review. Psychotherapy and Psychosomatics, v. 84, n. 2, p. 72–81, 2015. DOI: 10.1159/000370338.",
      },
      {
        label:
          "ANGLIN, R. et al. Risk of upper gastrointestinal bleeding with selective serotonin reuptake inhibitors with or without concurrent nonsteroidal anti-inflammatory use: a systematic review and meta-analysis. American Journal of Gastroenterology, v. 109, n. 6, p. 811–819, 2014. DOI: 10.1038/ajg.2014.82.",
      },
      {
        label:
          "ANDRADE, C. et al. Serotonin reuptake inhibitor antidepressants and abnormal bleeding: a review for clinicians and a reconsideration of mechanisms. Journal of Clinical Psychiatry, v. 71, n. 12, p. 1565–1575, 2010. DOI: 10.4088/JCP.09r05786blu.",
      },
      {
        label:
          "DE PICKER, L. et al. Antidepressants and the risk of hyponatremia: a class-by-class review of literature. Psychosomatics, v. 55, n. 6, p. 536–547, 2014. DOI: 10.1016/j.psym.2014.01.010.",
      },
      {
        label:
          "BUCKLEY, N. A. et al. Serotonin syndrome. BMJ, v. 348, g1626, 2014. DOI: 10.1136/bmj.g1626.",
      },
      {
        label:
          "PEET, M. Induction of mania with selective serotonin re-uptake inhibitors and tricyclic antidepressants. British Journal of Psychiatry, v. 164, n. 4, p. 549–550, 1994. DOI: 10.1192/bjp.164.4.549.",
      },
      {
        label:
          "COSTAGLIOLA, C. et al. Selective serotonin reuptake inhibitors: a review of its influence on intraocular pressure. Current Neuropharmacology, v. 6, n. 4, p. 293–310, 2008. DOI: 10.2174/157015908787386104.",
      },
      {
        label:
          "GIBBONS, R. D. et al. Suicidal thoughts and behavior with antidepressant treatment: reanalysis of the randomized placebo-controlled studies of fluoxetine and venlafaxine. Archives of General Psychiatry, v. 69, n. 6, p. 580–587, 2012. DOI: 10.1001/archgenpsychiatry.2011.2048.",
      },
      {
        label:
          "CHEN, G. et al. The effect of bupropion on the pharmacokinetics of vortioxetine: results from a phase I, randomized, crossover study in healthy subjects. Clinical Drug Investigation, v. 34, n. 10, p. 673–679, 2014. DOI: 10.1007/s40261-014-0221-3.",
      },
      {
        label:
          "WANG, S. M. et al. Vortioxetine: a review of efficacy, safety and tolerability with a focus on cognitive symptoms in major depressive disorder. Expert Opinion on Drug Safety, v. 14, n. 8, p. 1261–1271, 2015. DOI: 10.1517/14740338.2015.1046836.",
      },
      {
        label:
          "CHEN, G. et al. The effect of rifampicin on the pharmacokinetics of vortioxetine in healthy male subjects. Clinical Drug Investigation, v. 35, n. 8, p. 493–499, 2015. DOI: 10.1007/s40261-015-0305-9.",
      },
      {
        label:
          "GILLMAN, P. K. Monoamine oxidase inhibitors, opioid analgesics and serotonin toxicity. British Journal of Anaesthesia, v. 95, n. 4, p. 434–441, 2005. DOI: 10.1093/bja/aei210.",
      },
      {
        label:
          "STERNBACH, H. The serotonin syndrome. American Journal of Psychiatry, v. 148, n. 6, p. 705–713, 1991. DOI: 10.1176/ajp.148.6.705.",
      },
      {
        label:
          "WEATHERMON, R.; CRABB, D. W. Alcohol and medication interactions. Alcohol Research & Health, v. 23, n. 1, p. 40–54, 1999.",
      },
      {
        label:
          "CELADA, P. et al. Serotonin 5-HT₁A receptors as targets for agents to treat psychiatric disorders: rationale and current status of research. CNS Drugs, v. 27, n. 9, p. 703–716, 2013. DOI: 10.1007/s40263-013-0071-0.",
      },
      {
        label:
          "COHEN, L. S. et al. Relapse of major depression during pregnancy in women who maintain or discontinue antidepressant treatment. JAMA, v. 295, n. 5, p. 499–507, 2006. DOI: 10.1001/jama.295.5.499.",
      },
      {
        label:
          "AMERICAN PSYCHIATRIC ASSOCIATION. Practice Guideline for the Treatment of Patients with Major Depressive Disorder. 3. ed. Arlington, VA: APA, 2010.",
      },
      {
        label:
          "DRUGBANK. Vortioxetine (DB09068). Disponível em: https://www.drugbank.ca/drugs/DB09068. Acesso em: 7 fev. 2026.",
        href: "https://www.drugbank.ca/drugs/DB09068",
      },
      {
        label:
          "BOULENGER, J. P. et al. Efficacy and safety of vortioxetine versus duloxetine in the acute treatment of major depressive disorder: a randomized, double-blind study. International Clinical Psychopharmacology, v. 29, n. 3, p. 138–144, 2014. DOI: 10.1097/YIC.0000000000000017.",
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
  {
    id: "talidomida",
    name: "Talidomida (Thalomid®)",
    className: "Imunomoduladores",
    category: "Farmacologia",
    summary:
      "A talidomida é um agente imunomodulador e anti-angiogênico com história singular na medicina, que exige rígidos controles de segurança.",
    sections: [
      {
        title: "Talidomida (Thalomid®)",
        paragraphs: [
          "A talidomida é um agente imunomodulador e anti-angiogênico com história singular na medicina: inicialmente comercializada como sedativo nos anos 1950, foi retirada do mercado após causar uma das maiores tragédias farmacêuticas da história (malformações congênitas graves em milhares de crianças), e posteriormente \"redescoberta\" para uso em condições inflamatórias e oncológicas, sob rígidos controles de segurança.",
        ],
      },
      {
        title: "1) História e contexto de desenvolvimento",
        paragraphs: [
          "1.1 A era do sedativo (1957–1961): lançamento e tragédia",
          "Desenvolvimento inicial: A talidomida foi sintetizada em 1954 na Alemanha pela empresa Chemie Grünenthal e lançada em 1957 como sedativo/hipnótico de venda livre, comercializada também como antiemético para náuseas da gravidez.",
          "Uso disseminado: Rapidamente se tornou popular em mais de 40 países por ser considerada \"segura\" (não causava overdose letal como barbitúricos) e foi amplamente prescrita para gestantes.",
          "A catástrofe teratogênica (1957–1962): Entre 1957 e 1962, estima-se que 10.000 a 20.000 crianças nasceram com malformações graves — principalmente focomelia (ausência ou encurtamento severo de membros), além de defeitos em orelhas, olhos, coração, rins e sistema digestivo (1, 2).",
          "Retirada do mercado: Em 1961, após relatórios de médicos alemães e australianos (especialmente William McBride e Widukind Lenz) estabelecerem a ligação causal, a talidomida foi retirada do mercado mundial. Nos EUA, a FDA não havia aprovado o medicamento graças à revisora Frances Oldham Kelsey, que exigiu mais dados de segurança (3).",
          "1.2 Impacto regulatório e científico",
          "Revolução na regulação de medicamentos: A tragédia da talidomida levou à criação de normas rigorosas de teste de teratogenicidade e farmacovigilância, incluindo a emenda Kefauver-Harris nos EUA (1962) e sistemas de monitoramento pós-comercialização em diversos países (2, 3).",
          "Lições sobre diferenças entre espécies: Testes pré-clínicos em roedores não detectaram a teratogenicidade porque camundongos e ratos são muito menos sensíveis à talidomida do que humanos e primatas — uma lição crucial sobre extrapolação de dados animais (4, 5).",
          "1.3 Redescoberta terapêutica (1965–1998)",
          "Eritema nodoso hansênico (ENL): Em 1965, o médico israelense Jacob Sheskin usou talidomida empiricamente em um paciente com ENL (reação inflamatória grave da hanseníase) e observou melhora dramática. Estudos subsequentes confirmaram eficácia, e em 1998 a FDA aprovou a talidomida especificamente para tratamento de ENL moderado a grave (primeira aprovação regulatória pós-tragédia) (6, 7).",
          "Mieloma múltiplo: No final dos anos 1990, pesquisadores (notavelmente Bart Barlogie e colegas) testaram talidomida em mieloma múltiplo refratário, demonstrando respostas clínicas significativas. Em 2006, a FDA aprovou talidomida em combinação com dexametasona para mieloma múltiplo recém-diagnosticado (8, 9).",
          "Outras investigações: A talidomida foi estudada (off-label ou em ensaios clínicos) para diversas condições: síndrome mielodisplásica, caquexia oncológica, lúpus cutâneo, doença de Crohn, entre outras — com resultados variáveis (10).",
          "1.4 Desenvolvimento de análogos (IMiDs)",
          "A compreensão do mecanismo levou ao desenvolvimento de análogos imunomoduladores (IMiDs) de segunda geração: lenalidomida (Revlimid®) e pomalidomida (Pomalyst®), com perfis de eficácia/toxicidade otimizados e amplamente usados em mieloma múltiplo e outras neoplasias hematológicas (11, 12).",
        ],
      },
      {
        title: "2) Indicação terapêutica, efeito esperado e \"prazo para funcionar\"",
        paragraphs: [
          "2.1 Indicações aprovadas (on-label; FDA/EMA e principais agências)",
          "A) Eritema nodoso hansênico (ENL)",
          "Definição: Reação inflamatória aguda e dolorosa que ocorre em pacientes com hanseníase (lepra) multibacilar, caracterizada por nódulos subcutâneos eritematosos, febre, neurite e sintomas sistêmicos.",
          "Indicação: Tratamento agudo de manifestações cutâneas moderadas a graves de ENL; também pode ser usado como terapia de manutenção para prevenção/supressão de recorrências (6, 7).",
          "Dose típica: 100–300 mg/dia (ajustada conforme resposta); em casos graves, até 400 mg/dia podem ser usados inicialmente, com redução gradual após controle dos sintomas.",
          "B) Mieloma múltiplo recém-diagnosticado",
          "Indicação (FDA, 2006): Em combinação com dexametasona para tratamento de pacientes com mieloma múltiplo recém-diagnosticado (8, 9).",
          "Esquema comum: Talidomida 200 mg/dia (via oral, à noite) + dexametasona 40 mg nos dias 1–4, 9–12 e 17–20 de cada ciclo de 28 dias, por 4–6 ciclos, frequentemente seguido de transplante autólogo de células-tronco em pacientes elegíveis.",
          "Observação: Embora aprovada, a talidomida tem sido progressivamente substituída por lenalidomida e pomalidomida em muitos protocolos, devido a melhor perfil de eficácia/toxicidade (especialmente menor neuropatia periférica) (11, 12).",
          "C) Usos off-label investigacionais",
          "Síndrome mielodisplásica com deleção 5q (estudos iniciais; lenalidomida tornou-se o IMiD de escolha).",
          "Lúpus eritematoso cutâneo refratário.",
          "Doença de Crohn refratária (resultados mistos).",
          "Caquexia/perda de peso em câncer avançado ou HIV (efeito sobre TNF-α) (10, 13).",
          "2.2 Efeito terapêutico esperado (o que melhora)",
          "Eritema nodoso hansênico (ENL)",
          "Redução de sintomas inflamatórios: Diminuição rápida de febre, dor e sensibilidade dos nódulos cutâneos; melhora de neurite (dor/fraqueza por inflamação de nervos periféricos).",
          "Prevenção de sequelas: Controle precoce reduz risco de dano neural permanente e deformidades.",
          "Início de ação: Muitos pacientes relatam melhora significativa em 2–5 dias; o efeito máximo pode levar 1–2 semanas (6, 7).",
          "Mieloma múltiplo",
          "Resposta tumoral: Redução de paraproteína sérica (proteína M), melhora de anemia, redução de lesões ósseas e sintomas relacionados (dor óssea, fadiga).",
          "Taxa de resposta: Em estudos pivotais (talidomida + dexametasona), taxas de resposta global de ~60–70% foram observadas, com cerca de 10–15% de respostas completas (8, 9).",
          "Tempo para resposta: A resposta hematológica (queda da proteína M) geralmente é detectada após 1–3 meses de tratamento; a avaliação formal de resposta costuma ser feita a cada 2–3 ciclos (8–12 semanas).",
          "2.3 Em quanto tempo começa a fazer efeito?",
          "ENL: Início rápido — melhora clínica perceptível em 2–5 dias, com controle completo em 1–2 semanas na maioria dos casos.",
          "Mieloma múltiplo: Efeito antitumoral mensurável em 4–12 semanas; benefício clínico (melhora de sintomas como dor/fadiga) pode ser percebido antes da resposta laboratorial completa.",
          "Observação prática: A talidomida não é um medicamento de \"alívio imediato\" para sintomas agudos (como analgésicos); seu efeito é progressivo e depende de ação imunomoduladora/anti-angiogênica acumulada.",
          "2.4 Cuidados de uso e por que \"dieta/estilo de vida\" importam",
          "Absorção e interação com alimentos",
          "Absorção: A talidomida é bem absorvida por via oral; alimentos não afetam significativamente a biodisponibilidade, mas a tomada à noite (horário do sono) é recomendada devido ao efeito sedativo (14, 15).",
          "Não há restrição dietética específica relacionada à absorção (diferente da bilastina, por exemplo).",
          "Por que medidas complementares ajudam?",
          "A talidomida atua em vias inflamatórias e angiogênicas, mas o controle ótimo da doença de base (hanseníase, mieloma) depende de:",
          "Adesão ao tratamento completo: Especialmente em ENL, onde recorrências são comuns se a talidomida for interrompida precocemente.",
          "Monitoramento rigoroso de efeitos adversos: Neuropatia periférica, eventos tromboembólicos e outros (ver seção 6) exigem vigilância clínica e, quando necessário, ajustes de dose ou suspensão.",
          "Suporte nutricional e atividade física: Em mieloma múltiplo, nutrição adequada e exercícios leves (conforme tolerado) ajudam a manter força muscular, densidade óssea e qualidade de vida — mas não substituem o tratamento oncológico (16).",
          "Prevenção de trombose: Pacientes em uso de talidomida (especialmente com dexametasona ou quimioterapia) têm risco aumentado de tromboembolismo venoso (TEV); profilaxia com aspirina ou anticoagulantes pode ser indicada conforme fatores de risco (17, 18).",
          "Cuidados especiais (não negociáveis)",
          "Programa de prevenção de gravidez (REMS): Nos EUA, a prescrição de talidomida está sujeita ao THALOMID REMS® (Risk Evaluation and Mitigation Strategy), que exige:",
          "Registro de prescritores, farmácias e pacientes.",
          "Testes de gravidez obrigatórios antes do início e mensalmente durante o tratamento em mulheres em idade fértil.",
          "Contracepção dupla (dois métodos simultâneos) ou abstinência sexual completa por pelo menos 4 semanas antes, durante e 4 semanas após o tratamento.",
          "Consentimento informado assinado (19, 20).",
          "Outros países: Programas similares existem na Europa (Pregnancy Prevention Programme), Brasil e outros locais, com exigências comparáveis (21).",
        ],
      },
      {
        title: "3) Mecanismo de ação detalhado",
        paragraphs: [
          "A talidomida exerce múltiplos efeitos biológicos por meio de mecanismos moleculares distintos, mas inter-relacionados. A compreensão desses mecanismos evoluiu significativamente nas últimas duas décadas.",
          "3.1 Ligação à cereblon (CRBN) e degradação proteica mediada por ubiquitina",
          "Descoberta do alvo molecular (2010): Pesquisadores japoneses (Ito et al., 2010) identificaram cereblon (CRBN) como o alvo primário da talidomida. CRBN é uma proteína adaptadora do complexo de ubiquitina-ligase E3 CRL4^CRBN (Cullin-4A/DDB1/CRBN/Rbx1) (22, 23).",
          "Mecanismo:",
          "A talidomida se liga diretamente a CRBN, alterando a especificidade de substrato do complexo E3.",
          "Isso leva à ubiquitinação e degradação proteossômica de proteínas específicas que normalmente não seriam alvos de CRBN.",
          "Substratos conhecidos incluem:",
          "IKZF1 (Ikaros) e IKZF3 (Aiolos): Fatores de transcrição essenciais para células B e células plasmáticas; sua degradação explica parte do efeito antitumoral no mieloma múltiplo (24, 25).",
          "SALL4: Fator de transcrição crítico para o desenvolvimento embrionário; sua degradação em embriões humanos está implicada na teratogenicidade (defeitos de membros) (26, 27).",
          "CK1α (caseína quinase 1α): Degradada por lenalidomida em síndrome mielodisplásica 5q- (11).",
          "3.2 Inibição de angiogênese",
          "Efeito anti-angiogênico: A talidomida inibe a formação de novos vasos sanguíneos (neovascularização), um processo essencial para crescimento tumoral e inflamação crônica (28, 29).",
          "Mecanismos propostos:",
          "Redução da expressão de VEGF (fator de crescimento endotelial vascular) e bFGF (fator de crescimento de fibroblastos básico).",
          "Inibição da migração e proliferação de células endoteliais.",
          "Modulação de integrinas e moléculas de adesão endotelial (28, 29).",
          "Relevância clínica: O efeito anti-angiogênico contribui para a eficácia no mieloma múltiplo (tumores altamente vascularizados) e pode explicar parte da ação em outras neoplasias (30).",
          "3.3 Modulação de citocinas e resposta imune",
          "Inibição de TNF-α (fator de necrose tumoral-alfa):",
          "A talidomida reduz a produção de TNF-α por monócitos/macrófagos, um efeito central na ação anti-inflamatória em ENL (31, 32).",
          "O mecanismo envolve degradação acelerada do mRNA de TNF-α (aumento da instabilidade do transcrito) (31).",
          "Efeitos sobre outras citocinas:",
          "Redução: IL-1β, IL-6, IL-12 (citocinas pró-inflamatórias).",
          "Aumento: IL-2, IFN-γ (citocinas Th1, potencialmente imunoestimulatórias) (33, 34).",
          "Modulação de células T:",
          "A talidomida aumenta a proliferação de células T CD8+ e células NK (natural killer), potencialmente contribuindo para efeitos antitumorais (35, 36).",
          "Também modula a função de células T reguladoras (Tregs), com efeitos variáveis conforme contexto (37).",
          "3.4 Efeitos sobre células do estroma da medula óssea",
          "No mieloma múltiplo, a talidomida interfere na interação entre células plasmáticas malignas e células do estroma da medula óssea, reduzindo a secreção de citocinas de suporte tumoral (IL-6, VEGF) e induzindo apoptose de células tumorais (38, 39).",
          "3.5 Por que a talidomida é teratogênica?",
          "Degradação de SALL4: A ligação da talidomida a CRBN em células embrionárias humanas leva à degradação de SALL4, um fator de transcrição essencial para o desenvolvimento de membros, orelhas e outros órgãos. A perda de SALL4 resulta em focomelia (membros rudimentares) e outras malformações (26, 27).",
          "Janela crítica de exposição: A teratogenicidade é máxima entre os dias 20–36 de gestação (período de formação de membros) (40).",
          "Diferenças entre espécies: Roedores têm menor expressão de CRBN e/ou diferenças estruturais que reduzem a afinidade da talidomida, explicando por que camundongos e ratos não desenvolvem focomelia (resistência relativa) (4, 5).",
        ],
      },
      {
        title: "4) O que os alvos moleculares fazem (e o que isso explica nos sintomas)",
        paragraphs: [
          "Cereblon (CRBN)",
          "Função normal: Componente de complexo E3 ubiquitina-ligase envolvido em controle de qualidade proteica e regulação de desenvolvimento.",
          "Ao ser \"sequestrado\" pela talidomida: Passa a degradar proteínas \"erradas\" (IKZF1/3, SALL4), levando a:",
          "Efeito antitumoral (degradação de Ikaros/Aiolos → morte de células plasmáticas no mieloma).",
          "Teratogenicidade (degradação de SALL4 → malformações de membros no embrião).",
          "TNF-α (fator de necrose tumoral-alfa)",
          "Função normal: Citocina pró-inflamatória central em respostas imunes e inflamação.",
          "Ao ser inibido pela talidomida:",
          "Redução de febre, dor e inflamação sistêmica no ENL.",
          "Potencial benefício em outras condições inflamatórias (lúpus cutâneo, doença de Crohn) (31, 32).",
          "VEGF (fator de crescimento endotelial vascular)",
          "Função normal: Estimula formação de novos vasos sanguíneos (angiogênese).",
          "Ao ser inibido pela talidomida:",
          "Redução de vascularização tumoral → menor suprimento de nutrientes/oxigênio ao tumor (mieloma múltiplo).",
          "Redução de inflamação vascular em ENL (28, 29).",
        ],
      },
      {
        title: "5) Farmacocinética (ADME)",
        paragraphs: [
          "5.1 Absorção",
          "Via de administração: Oral (cápsulas de 50 mg, 100 mg, 150 mg, 200 mg).",
          "Biodisponibilidade: Estimada em ~90% (alta absorção oral) (14, 15).",
          "Tmax (tempo para concentração máxima): 2,9–5,7 horas (média ~4 horas) após dose única (14, 41).",
          "Cmax e AUC: Após dose única de 200 mg em voluntários saudáveis, Cmax = 2,0 ± 0,55 mg/L; AUC∞ = 19,8 ± 3,61 mg·h/L (41).",
          "Efeito de alimentos: Alimentos não alteram significativamente a biodisponibilidade, mas podem retardar ligeiramente a absorção (Tmax aumentado) (14, 15).",
          "Recomendação prática: Tomar à noite, com ou sem alimentos, para aproveitar o efeito sedativo e melhorar a adesão.",
          "5.2 Distribuição",
          "Volume de distribuição (Vd): 70–120 litros (distribuição ampla nos tecidos) (14, 41).",
          "Ligação a proteínas plasmáticas: 55–66% (ligação moderada; a fração livre é farmacologicamente ativa) (41).",
          "Ligação varia entre enantiômeros: ~55% para (+)R-talidomida e ~66% para (−)S-talidomida (41).",
          "Quiralidade e racemização: A talidomida é administrada como mistura racêmica (50:50 de enantiômeros R e S). No organismo, ocorre interconversão rápida entre enantiômeros (racemização in vivo), de modo que ambos estão presentes independentemente da forma inicial (42, 43).",
          "Penetração no SNC: A talidomida atravessa a barreira hematoencefálica (efeito sedativo); também atravessa a barreira placentária (causa teratogenicidade) (40).",
          "5.3 Metabolismo",
          "Via principal: hidrólise não enzimática:",
          "A talidomida sofre hidrólise espontânea (não enzimática) no plasma e tecidos, devido à instabilidade das ligações amida em pH fisiológico (14, 44).",
          "Produtos de hidrólise incluem múltiplos metabólitos inativos (ácidos ftálico e glutâmico, entre outros) (44).",
          "Metabolismo enzimático (menor):",
          "Há evidências de hidroxilação mediada por CYP2C19 (formação de 5-hidroxitalidomida), mas essa via é quantitativamente menor em humanos (44, 45).",
          "Estudos in vitro sugerem participação de CYP3A4/5 e CYP2C19, mas estudos in vivo mostram que inibidores de CYP não alteram significativamente a farmacocinética da talidomida, indicando que o metabolismo enzimático não é a via dominante (44, 45).",
          "Diferenças entre espécies: Roedores dependem mais de metabolismo enzimático (CYP) do que humanos, o que contribui para diferenças em sensibilidade e toxicidade (4, 5).",
          "5.4 Eliminação",
          "Vias de eliminação:",
          "Urina: Menos de 1% da dose é excretada inalterada na urina (eliminação renal direta é mínima) (14, 44).",
          "Fezes: A maior parte dos metabólitos é excretada nas fezes (via biliar) (44).",
          "Clearance (depuração oral): 10,5 ± 2,1 L/h (41).",
          "Meia-vida de eliminação (t½): 5–7 horas (média ~6,2 horas) em voluntários saudáveis após dose única (41, 46).",
          "Em uso crônico, a meia-vida pode ser ligeiramente mais longa devido a acúmulo tecidual (14).",
          "Farmacocinética em populações especiais:",
          "Insuficiência renal: Não há recomendação formal de ajuste de dose (eliminação renal direta é mínima), mas cautela é aconselhada devido a risco aumentado de efeitos adversos (neuropatia) (47).",
          "Insuficiência hepática: Dados limitados; cautela recomendada (metabolismo hepático é menor, mas hidrólise plasmática pode ser afetada) (47).",
          "Idosos: Farmacocinética semelhante a adultos jovens, mas maior susceptibilidade a efeitos adversos (sedação, neuropatia) (47).",
        ],
      },
      {
        title: "6) Efeitos adversos e segurança",
        paragraphs: [
          "A talidomida apresenta um perfil de toxicidade significativo, que limita seu uso e exige monitoramento rigoroso.",
          "6.1 Teratogenicidade (efeito adverso mais grave)",
          "Risco: Extremamente alto — exposição fetal resulta em malformações graves em >20% dos casos (estimativas históricas sugerem até 40% de risco) (1, 40).",
          "Malformações típicas:",
          "Focomelia (membros rudimentares ou ausentes).",
          "Amelia (ausência completa de membros).",
          "Defeitos de orelha externa (anotia, microtia).",
          "Defeitos oculares (microftalmia).",
          "Malformações cardíacas, renais, gastrointestinais.",
          "Período crítico: Dias 20–36 de gestação (3–5 semanas após concepção) (40).",
          "Contracepção obrigatória: Programas de prevenção de gravidez (REMS, PPP) exigem:",
          "Teste de gravidez negativo antes do início e mensalmente durante tratamento.",
          "Dois métodos contraceptivos simultâneos (ou abstinência) por ≥4 semanas antes, durante e ≥4 semanas após tratamento (19, 20, 21).",
          "Homens: Devem usar preservativo durante relações sexuais (a talidomida está presente no sêmen, embora o risco seja teórico) (19).",
          "6.2 Neuropatia periférica",
          "Incidência: 20–70% dos pacientes (varia conforme dose, duração e população estudada); em estudos de mieloma, ~30–50% desenvolvem neuropatia de algum grau (48, 49).",
          "Características:",
          "Neuropatia sensorial predominante (dormência, formigamento, queimação em mãos/pés, parestesias).",
          "Início geralmente após 3–6 meses de tratamento, mas pode ocorrer mais cedo com doses altas (48).",
          "Pode ser irreversível em ~50% dos casos, mesmo após descontinuação (49).",
          "Fatores de risco: Dose cumulativa alta (>40 g total), uso prolongado, idade avançada, diabetes, uso concomitante de outros neurotóxicos (vincristina, bortezomibe) (48, 49).",
          "Monitoramento: Avaliação neurológica basal e a cada 1–3 meses (exame clínico, questionários de sintomas); considerar eletroneuromiografia em casos suspeitos (49).",
          "Manejo: Redução de dose ou descontinuação ao primeiro sinal de neuropatia; suporte sintomático (gabapentina, pregabalina, duloxetina para dor neuropática) (49).",
          "6.3 Eventos tromboembólicos (tromboembolismo venoso, TEV)",
          "Incidência: 10–25% em pacientes com mieloma múltiplo tratados com talidomida + dexametasona ou quimioterapia (sem profilaxia antitrombótica) (17, 18, 50).",
          "Manifestações: Trombose venosa profunda (TVP), embolia pulmonar (EP); raramente, trombose arterial (17).",
          "Mecanismo: Não completamente elucidado; envolve ativação endotelial, aumento de fator VIII, resistência à proteína C ativada, e efeitos pró-coagulantes da dexametasona e doença de base (mieloma) (50).",
          "Profilaxia obrigatória (diretrizes atuais):",
          "Baixo risco (≤1 fator de risco): Aspirina 81–325 mg/dia.",
          "Alto risco (≥2 fatores de risco): Heparina de baixo peso molecular (HBPM) ou varfarina (INR 2–3) (17, 18, 50).",
          "Fatores de risco: obesidade, imobilização, trombose prévia, cateter venoso central, uso de eritropoietina, quimioterapia concomitante.",
          "6.4 Sedação e efeitos no sistema nervoso central",
          "Incidência: 30–50% dos pacientes relatam sonolência, fadiga ou sedação (51).",
          "Características: Efeito dose-dependente; geralmente mais pronunciado no início do tratamento e pode melhorar com o tempo (tolerância parcial).",
          "Implicações: Risco de quedas (especialmente em idosos), prejuízo em tarefas que exigem atenção (dirigir, operar máquinas).",
          "Manejo: Tomar à noite; evitar álcool e outros sedativos; considerar redução de dose se sedação for incapacitante (51).",
          "6.5 Constipação",
          "Incidência: 20–40% (52).",
          "Mecanismo: Efeito anticolinérgico leve e redução da motilidade intestinal.",
          "Manejo: Aumento de fibras na dieta, hidratação adequada, laxantes osmóticos (polietilenoglicol) ou estimulantes conforme necessário (52).",
          "6.6 Neutropenia e toxicidade hematológica",
          "Incidência: 10–30% de neutropenia (contagem de neutrófilos <1.500/μL); geralmente leve a moderada (53).",
          "Outras citopenias: Anemia e trombocitopenia podem ocorrer, especialmente em combinação com quimioterapia (53).",
          "Monitoramento: Hemograma completo basal e a cada 2–4 semanas (ou conforme protocolo de tratamento) (53).",
          "Manejo: Redução de dose ou pausa temporária se neutropenia grave (<500/μL); uso de fator estimulante de colônias (G-CSF) em casos selecionados (53).",
          "6.7 Outros efeitos adversos",
          "Rash cutâneo: 5–30% (geralmente leve; raramente síndrome de Stevens-Johnson) (54).",
          "Hipotensão ortostática, bradicardia: 5–10% (54).",
          "Hipotireoidismo: 5–15% (monitorar TSH periodicamente) (55).",
          "Disfunção erétil: Relatada em homens (mecanismo incerto) (56).",
          "Síndrome de lise tumoral: Rara, mas possível em mieloma com alta carga tumoral (57).",
          "6.8 Segurança cardiovascular",
          "Prolongamento de QTc: Não há evidência consistente de prolongamento clinicamente significativo de QTc com talidomida (diferente de alguns IMiDs) (58).",
          "Eventos cardiovasculares: Risco aumentado de eventos tromboembólicos (ver seção 6.3); dados sobre eventos arteriais (infarto, AVC) são limitados e conflitantes (17, 50).",
        ],
      },
      {
        title: "7) Interações medicamentosas e com alimentos",
        paragraphs: [
          "7.1 Interações farmacocinéticas (metabolismo e transporte)",
          "Substratos, inibidores e indutores de CYP: Como a talidomida é metabolizada predominantemente por hidrólise não enzimática, interações com inibidores/indutores de CYP são clinicamente pouco relevantes (44, 45).",
          "Estudos mostram que cetoconazol (inibidor potente de CYP3A4) e rifampicina (indutor de CYP3A4) não alteram significativamente a farmacocinética da talidomida (45).",
          "Alimentos: Não afetam biodisponibilidade; podem retardar absorção (Tmax aumentado), mas sem impacto clínico relevante (14, 15).",
          "7.2 Interações farmacodinâmicas (efeitos aditivos/sinérgicos)",
          "A) Depressores do sistema nervoso central",
          "Medicamentos: Álcool, benzodiazepínicos, opioides, antipsicóticos, anti-histamínicos sedativos.",
          "Efeito: Sedação aditiva, aumento de risco de depressão respiratória, quedas e acidentes (59).",
          "Recomendação: Evitar uso concomitante ou usar com extrema cautela; ajustar doses conforme necessário (59).",
          "B) Medicamentos que aumentam risco de neuropatia periférica",
          "Medicamentos: Vincristina, bortezomibe, cisplatina, oxaliplatina, paclitaxel, isoniazida, metronidazol (uso prolongado).",
          "Efeito: Risco aumentado de neuropatia periférica (efeito cumulativo) (48, 49).",
          "Recomendação: Monitoramento neurológico rigoroso; considerar alternativas ou ajuste de doses (49).",
          "C) Medicamentos que aumentam risco de tromboembolismo",
          "Medicamentos: Dexametasona (e outros corticosteroides), eritropoietina, contraceptivos orais combinados, terapia de reposição hormonal.",
          "Efeito: Risco sinérgico de TEV (17, 50).",
          "Recomendação: Profilaxia antitrombótica obrigatória (aspirina ou anticoagulação) conforme fatores de risco (ver seção 6.3) (17, 18, 50).",
          "D) Doxorrubicina",
          "Interação: Relatos de aumento de toxicidade cutânea (rash, síndrome mão-pé) quando talidomida é combinada com doxorrubicina lipossomal peguilada (60).",
          "Recomendação: Monitoramento de pele; redução de dose de doxorrubicina se necessário (60).",
          "E) Contraceptivos hormonais",
          "Consideração importante: Contraceptivos orais combinados aumentam risco de TEV quando usados com talidomida; portanto, não devem ser usados isoladamente como método contraceptivo (19, 20).",
          "Recomendação: Usar métodos de barreira (preservativo, diafragma) ou DIU como método contraceptivo primário; se contraceptivo hormonal for usado, deve ser combinado com método de barreira + profilaxia antitrombótica (19, 20).",
          "7.3 Interações com álcool",
          "Efeito: Potencialização de sedação e efeitos depressores do SNC; aumento de risco de hipotensão ortostática (59).",
          "Recomendação: Evitar consumo de álcool durante tratamento com talidomida (59).",
        ],
      },
      {
        title: "8) Contraindicações e advertências (caixa preta / black box)",
        paragraphs: [
          "8.1 Contraindicações absolutas",
          "Gravidez (categoria X da FDA — risco fetal comprovado; contraindicada em qualquer situação) (19, 20).",
          "Mulheres em idade fértil que não possam ou não aceitem cumprir rigorosamente os requisitos do programa de prevenção de gravidez (testes, contracepção dupla) (19, 20).",
          "Hipersensibilidade conhecida à talidomida ou a qualquer componente da formulação (19).",
          "Homens que não aceitem usar preservativo durante relações sexuais (se parceira estiver em idade fértil) (19).",
          "8.2 Advertências de caixa preta (black box warnings — FDA)",
          "A bula da talidomida (THALOMID®) nos EUA contém duas advertências em caixa preta:",
          "1. TERATOGENICIDADE (RISCO FETAL GRAVE)",
          "\"THALOMID® (talidomida) pode causar defeitos congênitos graves e potencialmente fatais. A talidomida nunca deve ser usada por mulheres grávidas. Mesmo uma única dose (1 cápsula de 50 mg) tomada por uma mulher grávida durante a gravidez pode causar graves defeitos congênitos.\"",
          "Programa THALOMID REMS® obrigatório para prescrição, dispensação e uso (19, 20).",
          "Requisitos:",
          "Mulheres em idade fértil: Teste de gravidez negativo (sensibilidade ≥50 mIU/mL) dentro de 10–14 dias antes do início e semanalmente durante o primeiro mês, depois mensalmente (ou a cada 4 semanas se ciclos irregulares).",
          "Contracepção: Dois métodos simultâneos (um altamente eficaz + um de barreira) ou abstinência sexual completa, iniciando ≥4 semanas antes, durante e ≥4 semanas após tratamento.",
          "Homens: Usar preservativo (mesmo se vasectomizados) durante relações sexuais com mulheres em idade fértil, durante e ≥4 semanas após tratamento (19, 20).",
          "2. PROGRAMA THALOMID REMS® (RISK EVALUATION AND MITIGATION STRATEGY)",
          "\"Devido ao potencial de teratogenicidade e para reduzir o risco de exposição fetal, a talidomida está disponível apenas através de um programa restrito de distribuição chamado THALOMID REMS®.\"",
          "Componentes do programa:",
          "Prescritores devem ser certificados (treinamento sobre riscos e manejo).",
          "Pacientes devem ser registrados e assinar Termo de Consentimento Informado.",
          "Farmácias devem ser certificadas e dispensar apenas para pacientes registrados.",
          "Dispensação limitada a 28 dias de fornecimento (com nova prescrição e teste de gravidez) (19, 20).",
          "8.3 Outras advertências importantes",
          "Neuropatia periférica: Pode ser irreversível; monitoramento obrigatório (ver seção 6.2) (48, 49).",
          "Tromboembolismo venoso: Profilaxia antitrombótica obrigatória em pacientes de risco (ver seção 6.3) (17, 18, 50).",
          "Reações de hipersensibilidade graves: Síndrome de Stevens-Johnson, necrólise epidérmica tóxica (raras, mas potencialmente fatais) — descontinuar imediatamente se rash grave (54).",
          "Bradicardia e síncope: Monitorar frequência cardíaca; cautela em pacientes com histórico de doença cardíaca (54).",
          "Doação de sangue/sêmen: Proibida durante tratamento e por ≥4 semanas após descontinuação (risco de exposição fetal) (19).",
        ],
      },
      {
        title: "9) Considerações de dosagem e monitoramento",
        paragraphs: [
          "9.1 Dosagem típica (adultos)",
          "Eritema nodoso hansênico (ENL)",
          "Dose inicial: 100–300 mg/dia (via oral, à noite).",
          "Casos graves: Iniciar com 400 mg/dia (ou dividir em 2 doses).",
          "Manutenção: Após controle de sintomas (geralmente 1–2 semanas), reduzir gradualmente a dose em 50 mg a cada 2–4 semanas, até a menor dose eficaz (6, 7).",
          "Duração: Variável; alguns pacientes necessitam terapia de manutenção por meses a anos para prevenir recorrências (6, 7).",
          "Mieloma múltiplo recém-diagnosticado",
          "Dose padrão: 200 mg/dia (via oral, à noite), em combinação com dexametasona (8, 9).",
          "Dexametasona: 40 mg nos dias 1–4, 9–12 e 17–20 de cada ciclo de 28 dias (8, 9).",
          "Duração: Geralmente 4–6 ciclos antes de transplante autólogo de células-tronco (em pacientes elegíveis); ou até progressão/toxicidade inaceitável (em pacientes não elegíveis) (8, 9).",
          "Ajustes:",
          "Neuropatia periférica grau 2: Reduzir para 100 mg/dia; se persistir, descontinuar (49).",
          "Neuropatia grau ≥3: Descontinuar permanentemente (49).",
          "Neutropenia grau 4: Pausar até recuperação; reduzir dose em 50 mg ao reiniciar (53).",
          "9.2 Populações especiais",
          "Idosos: Sem ajuste formal de dose, mas maior risco de efeitos adversos (sedação, neuropatia, quedas) — iniciar com doses baixas e titular cautelosamente (47).",
          "Insuficiência renal: Sem recomendação formal de ajuste (eliminação renal direta é mínima), mas monitorar de perto (47).",
          "Insuficiência hepática: Dados limitados; usar com cautela (47).",
          "Crianças: Segurança e eficácia não estabelecidas; uso off-label em condições pediátricas selecionadas (ex.: ENL em adolescentes) deve ser feito por especialista (61).",
          "9.3 Monitoramento obrigatório",
          "Parâmetro | Frequência | Objetivo",
          "Teste de gravidez (mulheres em idade fértil) | Basal (2 testes com 10–14 dias de intervalo), depois mensalmente (ou a cada 4 semanas) | Detectar gravidez precocemente; descontinuar imediatamente se positivo (19, 20)",
          "Hemograma completo (CBC) | Basal, depois a cada 2–4 semanas (primeiros 3 meses), depois mensalmente | Detectar neutropenia, anemia, trombocitopenia (53)",
          "Avaliação neurológica | Basal, depois mensalmente (ou a cada visita) | Detectar sinais precoces de neuropatia periférica (dormência, parestesias, fraqueza) (49)",
          "Sinais de tromboembolismo | A cada visita (educação do paciente sobre sintomas: dor/inchaço em perna, falta de ar, dor torácica) | Detectar TVP/EP precocemente (17, 18)",
          "Função tireoidiana (TSH) | Basal, depois a cada 2–3 meses (ou se sintomas) | Detectar hipotireoidismo (55)",
          "Sinais vitais (FC, PA) | A cada visita | Detectar bradicardia, hipotensão ortostática (54)",
          "9.4 Descontinuação",
          "Descontinuar imediatamente se:",
          "Teste de gravidez positivo.",
          "Neuropatia periférica grau ≥3.",
          "Reação cutânea grave (síndrome de Stevens-Johnson, necrólise epidérmica tóxica).",
          "Evento tromboembólico grave (considerar reinício com anticoagulação plena após avaliação de risco-benefício).",
          "Redução gradual não é necessária (não há síndrome de abstinência conhecida), mas em ENL a descontinuação abrupta pode levar a recorrência de sintomas (considerar desmame gradual) (6, 7).",
        ],
      },
      {
        title: "10) Dados da molécula (substância ativa)",
        paragraphs: [
          "Parâmetro | Valor",
          "Nome (DCI/INN) | Talidomida (Thalidomide)",
          "Nome químico (IUPAC) | 2-(2,6-dioxopiperidin-3-il)-1H-isoindol-1,3(2H)-diona",
          "Fórmula molecular | C₁₃H₁₀N₂O₄",
          "Massa molecular | 258,23 g/mol",
          "Quiralidade | Mistura racêmica (50:50 de enantiômeros R e S); sofre racemização in vivo",
          "pKa | Não disponível de forma consistente na literatura (composto neutro, sem grupos ionizáveis típicos)",
          "Solubilidade | Praticamente insolúvel em água; solúvel em solventes orgânicos (DMSO, acetona) (62)",
          "Ligação a proteínas plasmáticas | 55–66% (41)",
          "Classificação química | Derivado de ftalimida (glutarimida-ftalimida)",
          "Classe terapêutica (ATC) | L04AX02 (Imunomoduladores — outros)",
        ],
      },
      {
        title: "11) Resumo \"em uma frase\"",
        paragraphs: [
          "A talidomida é um agente imunomodulador e anti-angiogênico que, após causar uma das maiores tragédias farmacêuticas da história (teratogenicidade grave), foi \"redescoberta\" para tratamento de eritema nodoso hansênico e mieloma múltiplo, atuando por ligação à cereblon e degradação proteica mediada por ubiquitina, mas cujo uso exige programas rigorosíssimos de prevenção de gravidez e monitoramento contínuo de neuropatia periférica, tromboembolismo e outras toxicidades significativas.",
        ],
      },
      {
        title: "Nota final educacional",
        paragraphs: [
          "Este texto foi elaborado para fins informativos e educacionais, destinado a profissionais de saúde e estudantes. A talidomida é um medicamento de altíssimo risco, cujo uso exige rigoroso cumprimento de protocolos de segurança (programas REMS/PPP) e supervisão médica especializada. Jamais deve ser usada por mulheres grávidas ou que possam engravidar sem contracepção dupla e monitoramento rigoroso. Qualquer prescrição, dispensação ou uso deve seguir estritamente as normas regulatórias locais.",
        ],
      },
    ],
    references: [
      {
        label:
          "ZHOU, S. et al. Thalidomide—a notorious sedative to a wonder anticancer drug. Current Medicinal Chemistry, v. 20, n. 33, p. 4102–4108, 2013. DOI: 10.2174/09298673113209990198. Disponível em: https://scispace.com/papers/thalidomide-a-notorious-sedative-to-a-wonder-anticancer-drug-24vz60a9l3. Acesso em: 7 fev. 2026.",
      },
      {
        label:
          "SAMPAIO, E. P. et al. Thalidomide: an overview of its pharmacological mechanisms of action. Anti-Inflammatory & Anti-Allergy Agents in Medicinal Chemistry, v. 5, n. 1, p. 77–87, 2006. DOI: 10.2174/187152306775537337. Acesso em: 7 fev. 2026.",
      },
      {
        label:
          "KIM, J. H.; SCIALLI, A. R. Thalidomide: the tragedy of birth defects and the effective treatment of disease. Toxicological Sciences, v. 122, n. 1, p. 1–6, 2011. DOI: 10.1093/toxsci/kfr088. Acesso em: 7 fev. 2026.",
      },
      {
        label:
          "KNOBLOCH, J.; JUNGCK, D.; KOCH, A. The molecular mechanisms of thalidomide teratogenicity and implications for modern medicine. Current Molecular Medicine, v. 17, n. 2, p. 108–117, 2017. DOI: 10.2174/1566524017666170331162315. Acesso em: 7 fev. 2026.",
      },
      {
        label:
          "VARGESSON, N. Chapter 26 – Thalidomide. In: Reproductive and Developmental Toxicology (2nd ed.), p. 471–488, 2017. DOI: 10.1016/B978-0-12-804239-7.00026-3. Acesso em: 7 fev. 2026.",
      },
      {
        label:
          "SHESKIN, J. Thalidomide in the treatment of lepra reactions. Clinical Pharmacology & Therapeutics, v. 6, p. 303–306, 1965.",
      },
      {
        label:
          "JACOBSON, J. M. et al. Thalidomide for the treatment of oral aphthous ulcers in patients with human immunodeficiency virus infection. New England Journal of Medicine, v. 336, n. 21, p. 1487–1493, 1997. DOI: 10.1056/NEJM199705223362103.",
      },
      {
        label:
          "SINGHAL, S. et al. Antitumor activity of thalidomide in refractory multiple myeloma. New England Journal of Medicine, v. 341, n. 21, p. 1565–1571, 1999. DOI: 10.1056/NEJM199911183412102.",
      },
      {
        label:
          "RAJKUMAR, S. V. et al. Combination therapy with lenalidomide plus dexamethasone (Rev/Dex) for newly diagnosed myeloma. Blood, v. 106, n. 13, p. 4050–4053, 2005. DOI: 10.1182/blood-2005-07-2817.",
      },
      {
        label:
          "JOGLEKAR, S.; LEVIN, M. The promise of thalidomide: evolving indications. Drugs of Today, v. 40, n. 3, p. 197–204, 2004. DOI: 10.1358/dot.2004.40.3.820083. Acesso em: 7 fev. 2026.",
      },
      {
        label:
          "KRONKE, J. et al. Lenalidomide causes selective degradation of IKZF1 and IKZF3 in multiple myeloma cells. Science, v. 343, n. 6168, p. 301–305, 2014. DOI: 10.1126/science.1244851.",
      },
      {
        label:
          "GANDHI, A. K. et al. Immunomodulatory agents lenalidomide and pomalidomide co-stimulate T cells by inducing degradation of T cell repressors Ikaros and Aiolos via modulation of the E3 ubiquitin ligase complex CRL4^CRBN. British Journal of Haematology, v. 164, n. 6, p. 811–821, 2014. DOI: 10.1111/bjh.12708.",
      },
      {
        label:
          "GORDON, J. N. et al. Thalidomide in the treatment of cancer cachexia: a randomised placebo controlled trial. Gut, v. 54, n. 4, p. 540–545, 2005. DOI: 10.1136/gut.2004.047563.",
      },
      {
        label:
          "CHEN, T. L. et al. Pharmacokinetics of thalidomide in healthy subjects and across patient populations. Clinical Pharmacokinetics, v. 42, n. 13, p. 1107–1121, 2003. DOI: 10.2165/00003088-200342130-00001.",
      },
      {
        label:
          "THALOMID® (thalidomide) capsules. Prescribing Information. Celgene Corporation, Summit, NJ, 2014. Disponível em: https://packageinserts.bms.com/pi/pi_thalomid.pdf. Acesso em: 7 fev. 2026.",
      },
      {
        label:
          "COLEMAN, E. A. et al. Fatigue, sleep, pain, mood, and performance status in patients with multiple myeloma. Cancer Nursing, v. 34, n. 3, p. 219–227, 2011. DOI: 10.1097/NCC.0b013e3181f9904d.",
      },
      {
        label:
          "PALUMBO, A. et al. Prevention of thalidomide- and lenalidomide-associated thrombosis in myeloma. Leukemia, v. 22, n. 2, p. 414–423, 2008. DOI: 10.1038/sj.leu.2405062.",
      },
      {
        label:
          "CARRIER, M. et al. Apixaban to prevent venous thromboembolism in patients with cancer. New England Journal of Medicine, v. 380, n. 8, p. 711–719, 2019. DOI: 10.1056/NEJMoa1814468.",
      },
      {
        label:
          "U.S. FOOD AND DRUG ADMINISTRATION (FDA). THALOMID REMS® (Risk Evaluation and Mitigation Strategy). Disponível em: https://www.fda.gov/drugs/drug-safety-and-availability/thalomid-thalidomide-rems. Acesso em: 7 fev. 2026.",
      },
      {
        label:
          "CELGENE CORPORATION. THALOMID® (thalidomide) REMS Program — Prescriber Brochure. 2020. Disponível em: https://www.celgeneriskmanagement.com/. Acesso em: 7 fev. 2026.",
      },
      {
        label:
          "EUROPEAN MEDICINES AGENCY (EMA). Thalidomide Celgene — Pregnancy Prevention Programme. Disponível em: https://www.ema.europa.eu/. Acesso em: 7 fev. 2026.",
      },
      {
        label:
          "ITO, T. et al. Identification of a primary target of thalidomide teratogenicity. Science, v. 327, n. 5971, p. 1345–1350, 2010. DOI: 10.1126/science.1177319.",
      },
      {
        label:
          "FISCHER, E. S. et al. Structure of the DDB1–CRBN E3 ubiquitin ligase in complex with thalidomide. Nature, v. 512, n. 7512, p. 49–53, 2014. DOI: 10.1038/nature13527.",
      },
      {
        label:
          "KRONKE, J. et al. Lenalidomide causes selective degradation of IKZF1 and IKZF3 in multiple myeloma cells. Science, v. 343, n. 6168, p. 301–305, 2014. DOI: 10.1126/science.1244851.",
      },
      {
        label:
          "LU, G. et al. The myeloma drug lenalidomide promotes the cereblon-dependent destruction of Ikaros proteins. Science, v. 343, n. 6168, p. 305–309, 2014. DOI: 10.1126/science.1244917.",
      },
      {
        label:
          "DONOVAN, K. A. et al. Thalidomide promotes degradation of SALL4, a transcription factor implicated in Duane radial ray syndrome. eLife, v. 7, e38430, 2018. DOI: 10.7554/eLife.38430.",
      },
      {
        label:
          "MATYSKIELA, M. E. et al. SALL4 mediates teratogenicity as a thalidomide-dependent cereblon substrate. Nature Chemical Biology, v. 14, n. 10, p. 981–987, 2018. DOI: 10.1038/s41589-018-0129-x.",
      },
      {
        label:
          "D'AMATO, R. J. et al. Thalidomide is an inhibitor of angiogenesis. Proceedings of the National Academy of Sciences, v. 91, n. 9, p. 4082–4085, 1994. DOI: 10.1073/pnas.91.9.4082.",
      },
      {
        label:
          "KENYON, B. M. et al. A model of angiogenesis in the mouse cornea. Investigative Ophthalmology & Visual Science, v. 37, n. 8, p. 1625–1632, 1996.",
      },
      {
        label:
          "RAJKUMAR, S. V. et al. Thalidomide in multiple myeloma. Oncology, v. 14, n. 12, p. 1729–1738, 2000.",
      },
      {
        label:
          "MOREIRA, A. L. et al. Thalidomide exerts its inhibitory action on tumor necrosis factor alpha by enhancing mRNA degradation. Journal of Experimental Medicine, v. 177, n. 6, p. 1675–1680, 1993. DOI: 10.1084/jem.177.6.1675.",
      },
      {
        label:
          "SAMPAIO, E. P. et al. Thalidomide selectively inhibits tumor necrosis factor alpha production by stimulated human monocytes. Journal of Experimental Medicine, v. 173, n. 3, p. 699–703, 1991. DOI: 10.1084/jem.173.3.699.",
      },
      {
        label:
          "HASLETT, P. A. et al. Thalidomide costimulates primary human T lymphocytes, preferentially inducing proliferation, cytokine production, and cytotoxic responses in the CD8+ subset. Journal of Experimental Medicine, v. 187, n. 11, p. 1885–1892, 1998. DOI: 10.1084/jem.187.11.1885.",
      },
      {
        label:
          "CORRAL, L. G. et al. Differential cytokine modulation and T cell activation by two distinct classes of thalidomide analogues that are potent inhibitors of TNF-alpha. Journal of Immunology, v. 163, n. 1, p. 380–386, 1999.",
      },
      {
        label:
          "DAVIES, F. E. et al. Thalidomide and immunomodulatory derivatives augment natural killer cell cytotoxicity in multiple myeloma. Blood, v. 98, n. 1, p. 210–216, 2001. DOI: 10.1182/blood.V98.1.210.",
      },
      {
        label:
          "LEBLANC, R. et al. Immunomodulatory drug costimulates T cells via the B7-CD28 pathway. Blood, v. 103, n. 5, p. 1787–1790, 2004. DOI: 10.1182/blood-2003-02-0361.",
      },
      {
        label:
          "GALUSTIAN, C. et al. The anti-cancer agents lenalidomide and pomalidomide inhibit the proliferation and function of T regulatory cells. Cancer Immunology, Immunotherapy, v. 58, n. 7, p. 1033–1045, 2009. DOI: 10.1007/s00262-008-0620-4.",
      },
      {
        label:
          "HIDESHIMA, T. et al. Thalidomide and its analogs overcome drug resistance of human multiple myeloma cells to conventional therapy. Blood, v. 96, n. 9, p. 2943–2950, 2000.",
      },
      {
        label:
          "GUPTA, D. et al. Adherence of multiple myeloma cells to bone marrow stromal cells upregulates vascular endothelial growth factor secretion: therapeutic applications. Leukemia, v. 15, n. 12, p. 1950–1961, 2001. DOI: 10.1038/sj.leu.2402295.",
      },
      {
        label:
          "MILLER, M. T.; STRÖMLAND, K. Teratogen update: thalidomide: a review, with a focus on ocular findings and new potential uses. Teratology, v. 60, n. 5, p. 306–321, 1999. DOI: 10.1002/(SICI)1096-9926(199911)60:5<306::AID-TERA11>3.0.CO;2-Y.",
      },
      {
        label:
          "ERIKSSON, T. et al. Pharmacokinetics of thalidomide in healthy male volunteers. European Journal of Clinical Pharmacology, v. 54, n. 8, p. 627–631, 1998. DOI: 10.1007/s002280050526.",
      },
      {
        label:
          "ERIKSSON, T. et al. Stereospecific determination, chiral inversion in vitro and pharmacokinetics in humans of the enantiomers of thalidomide. Chirality, v. 7, n. 1, p. 44–52, 1995. DOI: 10.1002/chir.530070109.",
      },
      {
        label:
          "REIST, M. et al. Racemization of thalidomide: catalysis by bases and buffer components. Chirality, v. 10, n. 3, p. 251–258, 1998.",
      },
      {
        label:
          "ANDO, Y. et al. Pharmacogenetics of thalidomide metabolism: identification of CYP2C19 as a key enzyme for 5-hydroxythalidomide formation. Pharmacogenetics, v. 12, n. 5, p. 379–387, 2002. DOI: 10.1097/00008571-200207000-00006.",
      },
      {
        label:
          "CHEN, T. L. et al. Effect of ketoconazole and rifampin on the pharmacokinetics of thalidomide in healthy volunteers. Clinical Pharmacology & Therapeutics, v. 75, n. 2, p. P88, 2004.",
      },
      {
        label:
          "THALOMID® (thalidomide) capsules. Prescribing Information. Celgene Corporation, Summit, NJ, 2014.",
      },
      {
        label:
          "BREITKREUTZ, I.; ANDERSON, K. C. Thalidomide in multiple myeloma—clinical trials and aspects of drug metabolism and toxicity. Expert Opinion on Drug Metabolism & Toxicology, v. 4, n. 7, p. 973–985, 2008. DOI: 10.1517/17425255.4.7.973. Acesso em: 7 fev. 2026.",
      },
      {
        label:
          "RICHARDSON, P. G. et al. Frequency, characteristics, and reversibility of peripheral neuropathy during treatment of advanced multiple myeloma with bortezomib. Journal of Clinical Oncology, v. 24, n. 19, p. 3113–3120, 2006. DOI: 10.1200/JCO.2005.04.7779.",
      },
      {
        label:
          "CAVALETTI, G. et al. Thalidomide sensory neurotoxicity: a clinical and neurophysiologic study. Neurology, v. 62, n. 12, p. 2291–2293, 2004. DOI: 10.1212/01.WNL.0000130495.01863.DE.",
      },
      {
        label:
          "ZANGARI, M. et al. Thrombotic events in patients with cancer receiving thalidomide. Journal of Clinical Oncology, v. 19, n. 19, p. 3914–3916, 2001. DOI: 10.1200/JCO.2001.19.19.3914.",
      },
      {
        label:
          "PROMMER, E. Palliative oncology: thalidomide. American Journal of Hospice and Palliative Medicine, v. 27, n. 3, p. 214–219, 2010. DOI: 10.1177/1049909109348981. Acesso em: 7 fev. 2026.",
      },
      {
        label:
          "THALOMID® (thalidomide). Prescribing Information. Celgene, 2014.",
      },
      {
        label:
          "THALOMID® (thalidomide). Prescribing Information. Celgene, 2014.",
      },
      {
        label:
          "THALOMID® (thalidomide). Prescribing Information. Celgene, 2014.",
      },
      {
        label:
          "BADROS, A. et al. Hypothyroidism in patients with multiple myeloma following treatment with thalidomide. American Journal of Medicine, v. 112, n. 5, p. 412–413, 2002. DOI: 10.1016/S0002-9343(01)01130-1.",
      },
      {
        label:
          "SINGHAL, S. et al. Antitumor activity of thalidomide in refractory multiple myeloma. New England Journal of Medicine, v. 341, n. 21, p. 1565–1571, 1999.",
      },
      {
        label:
          "THALOMID® (thalidomide). Prescribing Information. Celgene, 2014.",
      },
      {
        label:
          "THALOMID® (thalidomide). Prescribing Information. Celgene, 2014.",
      },
      {
        label:
          "THALOMID® (thalidomide). Prescribing Information. Celgene, 2014.",
      },
      {
        label:
          "HUSSEIN, M. A. et al. A phase II trial of pegylated liposomal doxorubicin, vincristine, and reduced-dose dexamethasone combination therapy in newly diagnosed multiple myeloma patients. Cancer, v. 95, n. 10, p. 2160–2168, 2002. DOI: 10.1002/cncr.10970.",
      },
      {
        label:
          "THALOMID® (thalidomide). Prescribing Information. Celgene, 2014.",
      },
      {
        label:
          "DRUGBANK. Thalidomide (DB01041). Disponível em: https://go.drugbank.com/drugs/DB01041. Acesso em: 7 fev. 2026.",
      },
    ],
  },
];

const themes = [
  "Todos",
  "Antidepressivos",
  "Anti-histamínicos",
  "Anticoagulantes",
  "Antipsicóticos",
  "Betabloqueadores",
  "Imunomoduladores",
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
                <p key={index} style={{ whiteSpace: "pre-line" }}>
                  {text}
                </p>
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
              {selected.references.map((ref, index) => (
                <li key={`${ref.label}-${index}`}>
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
