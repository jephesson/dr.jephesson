"use client";

import { useMemo, useState } from "react";

type Section = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type Reference = {
  label: string;
  href: string;
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
      "Antidepressivo multimodal: inibição do SERT + modulação de receptores 5-HT. Revisão completa de farmacologia, mecanismo, farmacocinética, segurança e interações.",
    sections: [
      {
        title: "1) História e contexto de desenvolvimento",
        paragraphs: [
          "A vortioxetina (código de desenvolvimento Lu AA21004) foi desenvolvida como um antidepressivo com proposta de combinar inibição de recaptação de serotonina com modulação de receptores 5-HT, visando efeitos mais amplos em redes neurais relacionadas a depressão e sintomas associados.",
          "Nos EUA, o medicamento está registrado como TRINTELLIX (vortioxetine) e teve aprovação inicial em 2013 para transtorno depressivo maior em adultos. O documento regulatório disponível indica revisão em 08/2023.",
        ],
      },
      {
        title: "Dados da molécula",
        bullets: [
          "Nome químico: vortioxetine",
          "Fórmula molecular (base livre): C18H22N2S",
          "Massa molecular: ~298,45 g/mol",
          "Forma comercial: geralmente como bromidrato de vortioxetina",
          "Massa molecular do sal: ~379,3 g/mol",
          "pKa aproximado: ~9,1",
          "LogP (lipofilicidade): ~3,5–3,8",
          "Alta permeabilidade através da barreira hematoencefálica",
          "Ligação a proteínas plasmáticas: ≈98%",
        ],
      },
      {
        title: "2) Indicação terapêutica e usos discutidos",
        paragraphs: ["Indicação aprovada (on-label): transtorno depressivo maior (TDM) em adultos."],
        bullets: [
          "Sintomas ansiosos associados ao TDM e, em alguns cenários, TAG (resultados variáveis entre estudos).",
          "Sintomas cognitivos em depressão (atenção, velocidade de processamento, funções executivas).",
          "Disfunção sexual induzida por antidepressivos (estratégia de troca/otimização, conforme avaliação médica).",
        ],
      },
      {
        title: "3) Mecanismo de ação detalhado",
        paragraphs: [
          "A base farmacológica é a inibição do SERT, aumentando a sinalização serotoninérgica no SNC. Estudos de PET mostram ocupação do transportador proporcional à dose.",
          "Além do SERT, o perfil funcional inclui: antagonismo 5-HT3, agonismo 5-HT1A, antagonismo 5-HT7, antagonismo 5-HT1D e agonismo parcial 5-HT1B. A contribuição exata dessas ações para o efeito clínico não é completamente estabelecida.",
        ],
      },
      {
        title: "3.3 Efeitos em rede e sistemas neurotransmissores",
        paragraphs: [
          "A modulação simultânea de múltiplos receptores 5-HT reorganiza redes neurais e altera sistemas como noradrenalina, dopamina, acetilcolina, histamina e glutamato. Esse efeito em rede é frequentemente associado a ganhos em atenção, memória de trabalho e flexibilidade cognitiva.",
          "Essa cadeia “mecanismo molecular → modulação de circuito → benefício clínico” não é linear e depende de gravidade do quadro, variabilidade individual, dose e tempo de tratamento.",
        ],
      },
      {
        title: "4) Receptores e possíveis implicações clínicas",
        bullets: [
          "5-HT3 (antagonismo): modulação de interneurônios, equilíbrio excitatório/inibitório e sintomas somáticos.",
          "5-HT1A (agonismo): efeitos em humor/ansiedade e regulação de circuitos límbicos.",
          "5-HT7 (antagonismo): efeitos em sono, ritmo circadiano e cognição.",
          "5-HT1D (antagonismo): modulação presináptica serotoninérgica; contexto fisiológico em cefaleias.",
          "5-HT1B (agonismo parcial): modulação de liberação de neurotransmissores e estabilidade de rede.",
        ],
      },
      {
        title: "5) Farmacocinética (ADME)",
        bullets: [
          "Absorção: Tmax ~7–11 horas; biodisponibilidade ~75%; alimento sem efeito clinicamente relevante.",
          "Distribuição: alta ligação a proteínas (~98%) e amplo volume de distribuição.",
          "Metabolismo: principalmente CYP2D6, com participação de CYP3A4/5, CYP2C19, CYP2C9, CYP2A6, CYP2C8 e CYP2B6.",
          "Eliminação: meia-vida terminal média ~66 horas; estado de equilíbrio em ~2 semanas.",
        ],
      },
      {
        title: "6) Efeitos adversos e segurança",
        bullets: [
          "Eventos comuns: náusea (muito comum no início), constipação e vômitos.",
          "Disfunção sexual: possível, variável e dependente de dose e contexto clínico.",
          "Alertas: ideação suicida em jovens, síndrome serotoninérgica, sangramento, hiponatremia/SIADH, ativação de mania/hipomania e glaucoma de ângulo fechado em predispostos.",
        ],
      },
      {
        title: "7) Interações medicamentosas",
        bullets: [
          "Inibidores fortes de CYP2D6 (bupropiona, fluoxetina, paroxetina, quinidina) aumentam exposição.",
          "Indutores fortes (rifampicina, carbamazepina, fenitoína) podem reduzir níveis.",
          "Cautela com IMAO e combinações serotoninérgicas por risco de síndrome serotoninérgica.",
        ],
      },
      {
        title: "8) Resumo em uma frase",
        paragraphs: [
          "A vortioxetina combina inibição do SERT com perfil multirreceptor (5-HT3/5-HT7/5-HT1D antagonismo; 5-HT1A agonismo; 5-HT1B agonismo parcial), sustentando a hipótese de modulação mais ampla de redes ligadas a humor, ansiedade, sono e cognição.",
        ],
      },
    ],
    references: [
      {
        label: "TAKEDA. TRINTELLIX (vortioxetine) tablets: prescribing information. FDA, 2023.",
        href: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/204447s026lbl.pdf",
      },
      {
        label: "SÁNCHEZ, C.; ASÍN, K. E.; ARTIGAS, F. Pharmacology & Therapeutics, 2015.",
        href: "https://pubmed.ncbi.nlm.nih.gov/25016186/",
      },
      {
        label: "GARCIA-GARCIA, A.; NEWMAN-TANCREDI, A.; LEONARDO, E. D. Psychopharmacology, 2014.",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3927969/",
      },
      {
        label: "TIGER, M. et al. Psychopharmacology, 2018.",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5919989/",
      },
      {
        label: "NIKIFORUK, A.; POPIK, P. 5-HT7 receptor. 2015.",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4555343/",
      },
      {
        label: "BHATT, S. et al. Current Neuropharmacology, 2021.",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8762176/",
      },
      {
        label: "BÉTRY, C. et al. Pharmaceuticals, 2011.",
        href: "https://www.mdpi.com/1424-8247/4/4/603",
      },
      {
        label: "TEPPER, S. J. et al. 5-HT1B/1D receptor agonists. 2002.",
        href: "https://pubmed.ncbi.nlm.nih.gov/12117355/",
      },
    ],
  },
];

const themes = ["Todos", "Antidepressivos"];

export default function MedicamentosHub() {
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState("Todos");
  const [selectedId, setSelectedId] = useState(posts[0]?.id ?? "");

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

  const selected = posts.find((post) => post.id === selectedId) ?? filtered[0] ?? posts[0];

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

      <div className="meds-grid">
        <div className="meds-list">
          {filtered.map((post) => (
            <button
              key={post.id}
              type="button"
              className={post.id === selected?.id ? "meds-card meds-card--active" : "meds-card"}
              onClick={() => setSelectedId(post.id)}
            >
              <div className="meds-card__header">
                <span>{post.category}</span>
                <span className="meds-card__tag">{post.className}</span>
              </div>
              <h3>{post.name}</h3>
              <p>{post.summary}</p>
              <div className="meds-card__cta">Abrir</div>
            </button>
          ))}
        </div>

        {selected ? (
          <article className="meds-article">
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
                  <li key={ref.href}>
                    <a href={ref.href} target="_blank" rel="noreferrer">
                      {ref.label}
                    </a>
                  </li>
                ))}
              </ol>
            </section>
          </article>
        ) : null}
      </div>
    </div>
  );
}
