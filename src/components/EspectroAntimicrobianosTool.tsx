"use client";

import { useMemo, useState } from "react";

type Entry = {
  bacteria: string;
  antibiotics: string[];
};

const upToDateLinks: Record<string, string> = {
  oxacilina:
    "https://www.uptodate.com/contents/oxacillin-drug-information?search=oxacilina&source=panel_search_result&selectedTitle=1~76&usage_type=panel&kp_tab=drug_general&display_rank=1",
  "oxacilina / flucloxacilina":
    "https://www.uptodate.com/contents/oxacillin-drug-information?search=oxacilina&source=panel_search_result&selectedTitle=1~76&usage_type=panel&kp_tab=drug_general&display_rank=1",
};

const entries: Entry[] = [
  {
    bacteria: "Staphylococcus aureus sensível à meticilina (MSSA)",
    antibiotics: [
      "Oxacilina",
      "Flucloxacilina",
      "Amoxicilina-clavulanato",
      "Ampicilina-sulbactam",
      "Cefazolina",
      "Cefuroxima",
      "Ceftriaxona",
      "Cefepime",
      "Ceftarolina",
      "Clindamicina",
      "Rifampicina (evitar monoterapia)",
      "Ácido fusídico (evitar monoterapia)",
      "Cotrimoxazol",
      "Gentamicina (evitar monoterapia)",
      "Amicacina (evitar monoterapia)",
      "Ciprofloxacino",
      "Levofloxacino",
      "Moxifloxacino",
      "Vancomicina",
      "Teicoplanina",
      "Linezolida",
      "Daptomicina",
      "Tigeciclina",
      "Piperacilina-tazobactam",
      "Meropenem",
      "Imipenem",
      "Ertapenem",
    ],
  },
  {
    bacteria: "Staphylococcus aureus resistente à meticilina (MRSA)",
    antibiotics: [
      "Vancomicina",
      "Teicoplanina",
      "Linezolida",
      "Daptomicina",
      "Cotrimoxazol",
      "Clindamicina",
      "Rifampicina (evitar monoterapia)",
      "Ácido fusídico (evitar monoterapia)",
      "Gentamicina (evitar monoterapia)",
      "Amicacina (evitar monoterapia)",
      "Moxifloxacino",
      "Tigeciclina",
    ],
  },
  {
    bacteria: "Staphylococcus coagulase-negativo",
    antibiotics: [
      "Oxacilina",
      "Flucloxacilina",
      "Amoxicilina-clavulanato",
      "Ampicilina-sulbactam",
      "Cefazolina",
      "Cefuroxima",
      "Ceftriaxona",
      "Cefepime",
      "Clindamicina",
      "Rifampicina (evitar monoterapia)",
      "Ácido fusídico (evitar monoterapia)",
      "Cotrimoxazol",
      "Gentamicina",
      "Amicacina",
      "Ciprofloxacino",
      "Levofloxacino",
      "Moxifloxacino",
      "Vancomicina",
      "Teicoplanina",
      "Linezolida",
      "Daptomicina",
      "Tigeciclina",
    ],
  },
  {
    bacteria: "Streptococcus spp",
    antibiotics: [
      "Penicilina",
      "Amoxicilina",
      "Ampicilina",
      "Amoxicilina-clavulanato",
      "Ampicilina-sulbactam",
      "Cefazolina",
      "Cefuroxima",
      "Ceftriaxona",
      "Cefepime",
      "Clindamicina",
      "Moxifloxacino",
      "Vancomicina",
      "Teicoplanina",
      "Linezolida",
      "Daptomicina",
      "Piperacilina-tazobactam",
      "Meropenem",
      "Imipenem",
      "Ertapenem",
      "Tigeciclina",
    ],
  },
  {
    bacteria: "Enterococcus faecalis",
    antibiotics: [
      "Penicilina",
      "Amoxicilina",
      "Ampicilina",
      "Vancomicina",
      "Teicoplanina",
      "Linezolida",
      "Daptomicina",
      "Gentamicina (sinergia)",
      "Amicacina (sinergia)",
      "Imipenem",
      "Tigeciclina",
    ],
  },
  {
    bacteria: "Enterococcus faecium",
    antibiotics: [
      "Vancomicina (se sensível)",
      "Linezolida",
      "Daptomicina",
      "Tigeciclina",
    ],
  },
  {
    bacteria: "Bacteroides / Fusobacterium",
    antibiotics: [
      "Amoxicilina-clavulanato",
      "Ampicilina-sulbactam",
      "Clindamicina",
      "Metronidazol",
      "Moxifloxacino",
      "Piperacilina-tazobactam",
      "Meropenem",
      "Imipenem",
      "Ertapenem",
      "Tigeciclina",
    ],
  },
  {
    bacteria: "Clostridium spp",
    antibiotics: [
      "Metronidazol",
      "Vancomicina",
      "Amoxicilina-clavulanato",
      "Piperacilina-tazobactam",
      "Meropenem",
      "Imipenem",
      "Ertapenem",
      "Tigeciclina",
    ],
  },
  {
    bacteria: "Haemophilus influenzae",
    antibiotics: [
      "Amoxicilina",
      "Amoxicilina-clavulanato",
      "Ampicilina-sulbactam",
      "Cefuroxima",
      "Ceftriaxona",
      "Azitromicina",
      "Claritromicina",
      "Ciprofloxacino",
      "Levofloxacino",
    ],
  },
  {
    bacteria: "Moraxella",
    antibiotics: [
      "Amoxicilina-clavulanato",
      "Ampicilina-sulbactam",
      "Ceftriaxona",
      "Azitromicina",
      "Claritromicina",
      "Ciprofloxacino",
      "Levofloxacino",
    ],
  },
  {
    bacteria: "Neisseria meningitidis",
    antibiotics: [
      "Penicilina",
      "Ceftriaxona",
      "Cefuroxima",
      "Rifampicina",
    ],
  },
  {
    bacteria: "E. coli / Klebsiella / Proteus mirabilis",
    antibiotics: [
      "Amoxicilina-clavulanato",
      "Ampicilina-sulbactam",
      "Cefazolina",
      "Cefuroxima",
      "Ceftriaxona",
      "Cefepime",
      "Cotrimoxazol",
      "Trimetoprima",
      "Gentamicina",
      "Amicacina",
      "Ciprofloxacino",
      "Levofloxacino",
      "Moxifloxacino",
      "Aztreonam",
      "Piperacilina-tazobactam",
      "Meropenem",
      "Imipenem",
      "Ertapenem",
      "Tigeciclina",
    ],
  },
  {
    bacteria: "ESBL (E. coli/Klebsiella)",
    antibiotics: [
      "Meropenem",
      "Imipenem",
      "Ertapenem",
      "Ciprofloxacino",
      "Levofloxacino",
      "Gentamicina",
      "Amicacina",
      "Cotrimoxazol",
      "Tigeciclina",
    ],
  },
  {
    bacteria: "Grupo CESPPM (AmpC)",
    antibiotics: [
      "Cefepime",
      "Ciprofloxacino",
      "Levofloxacino",
      "Gentamicina",
      "Amicacina",
      "Meropenem",
      "Imipenem",
      "Tigeciclina",
    ],
  },
  {
    bacteria: "Pseudomonas aeruginosa",
    antibiotics: [
      "Gentamicina",
      "Tobramicina",
      "Amicacina",
      "Ciprofloxacino",
      "Levofloxacino",
      "Aztreonam",
      "Ceftazidima",
      "Cefepime",
      "Piperacilina-tazobactam",
      "Meropenem",
      "Imipenem",
      "Polimixina (resgate)",
    ],
  },
  {
    bacteria: "Legionella",
    antibiotics: [
      "Azitromicina",
      "Claritromicina",
      "Ciprofloxacino",
      "Levofloxacino",
      "Moxifloxacino",
      "Cotrimoxazol",
    ],
  },
];

function normalize(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function uniqueSorted(list: string[]) {
  return Array.from(new Set(list)).sort((a, b) => a.localeCompare(b, "pt-BR"));
}

function getUpToDateLink(name: string) {
  return upToDateLinks[normalize(name)];
}

function renderAntibioticLabel(name: string) {
  const link = getUpToDateLink(name);
  if (!link) return name;
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="espectro-tag espectro-tag--ok espectro-tag--link"
      title="Link no UpToDate"
    >
      {name}
    </a>
  );
}

export default function EspectroAntimicrobianosTool() {
  const [query, setQuery] = useState("");

  const bacteriaList = useMemo(() => uniqueSorted(entries.map((e) => e.bacteria)), []);
  const antibioticList = useMemo(
    () => uniqueSorted(entries.flatMap((e) => e.antibiotics)),
    []
  );

  const result = useMemo(() => {
    const q = normalize(query);
    if (!q) return null;

    const bacteriaMatch = entries.find((entry) => normalize(entry.bacteria) === q);
    if (bacteriaMatch) {
      return {
        type: "bacteria" as const,
        title: bacteriaMatch.bacteria,
        items: bacteriaMatch.antibiotics,
      };
    }

    const antibioticMatch = antibioticList.find((name) => normalize(name) === q);
    if (antibioticMatch) {
      const covers = entries
        .filter((entry) => entry.antibiotics.some((name) => normalize(name) === q))
        .map((entry) => entry.bacteria);
      return {
        type: "antibiotic" as const,
        title: antibioticMatch,
        items: covers,
      };
    }

    const bacteriaSuggestions = entries
      .filter((entry) => normalize(entry.bacteria).includes(q))
      .map((entry) => entry.bacteria);

    const antibioticSuggestions = antibioticList.filter((name) => normalize(name).includes(q));

    return {
      type: "suggestions" as const,
      bacteria: bacteriaSuggestions,
      antibiotics: antibioticSuggestions,
    };
  }, [query, antibioticList]);

  return (
    <div className="espectro-tool">
      <div className="espectro-search">
        <label htmlFor="espectro-input">Buscar bactéria ou antimicrobiano</label>
        <input
          id="espectro-input"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Ex.: Staphylococcus aureus resistente à meticilina (MRSA)"
        />
      </div>

      {!query ? (
        <div className="espectro-lists">
          <div>
            <h4>Bactérias disponíveis</h4>
            <ul>
              {bacteriaList.map((item) => (
                <li key={item}>
                  <button type="button" onClick={() => setQuery(item)}>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}

      <div className="espectro-result">
        {!query ? (
          <p>Digite ou selecione uma bactéria ou antimicrobiano para ver o espectro.</p>
        ) : null}

        {result?.type === "bacteria" ? (
          <div className="espectro-tree">
            <div className="espectro-node espectro-node--bacteria">{result.title}</div>
            <div className="espectro-branch">
              <span className="espectro-branch__label">Cobre:</span>
              <div className="espectro-tags">
                {result.items.map((item) => (
                  <span key={item}>
                    {getUpToDateLink(item) ? (
                      renderAntibioticLabel(item)
                    ) : (
                      <span className="espectro-tag espectro-tag--ok">{item}</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {result?.type === "antibiotic" ? (
          <div className="espectro-tree">
            <div className="espectro-node espectro-node--antibiotic">
              {getUpToDateLink(result.title) ? (
                <a
                  href={getUpToDateLink(result.title)}
                  target="_blank"
                  rel="noreferrer"
                  className="espectro-tag espectro-tag--ok espectro-tag--link"
                  title="Link no UpToDate"
                >
                  {result.title}
                </a>
              ) : (
                result.title
              )}
            </div>
            <div className="espectro-branch">
              <span className="espectro-branch__label">Cobre:</span>
              <div className="espectro-tags">
                {result.items.map((item) => (
                  <span key={item} className="espectro-tag espectro-tag--ok">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {result?.type === "suggestions" ? (
          <div>
            <h3>Resultados encontrados</h3>
            <div className="espectro-suggestions">
              <div>
                <h5>Bactérias</h5>
                <ul>
                  {result.bacteria.length === 0 ? <li>Nenhuma encontrada.</li> : null}
                  {result.bacteria.map((item) => (
                    <li key={item}>
                      <button type="button" onClick={() => setQuery(item)}>
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5>Antimicrobianos</h5>
                <ul>
                  {result.antibiotics.length === 0 ? <li>Nenhum encontrado.</li> : null}
                  {result.antibiotics.map((item) => (
                    <li key={item}>
                      <button type="button" onClick={() => setQuery(item)}>
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : null}

        {(result?.type === "bacteria" || result?.type === "antibiotic") && (
          <p className="espectro-note">
            Ao clicar no nome do medicamento, você será redirecionado ao UpToDate.
            É necessário ter assinatura ativa ou login institucional.
          </p>
        )}
      </div>
    </div>
  );
}
