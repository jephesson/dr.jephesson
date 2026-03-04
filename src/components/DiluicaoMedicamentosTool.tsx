"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export type DiluicaoSection = {
  title: string;
  lines: string[];
};

export type DiluicaoItem = {
  id: string;
  name: string;
  sections: DiluicaoSection[];
};

type Props = {
  items: DiluicaoItem[];
};

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export default function DiluicaoMedicamentosTool({ items }: Props) {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(items[0]?.id ?? "");

  const filtered = useMemo(() => {
    const q = normalize(query);
    if (!q) return items;
    return items.filter((item) => normalize(item.name).includes(q));
  }, [items, query]);

  const activeId = filtered.some((item) => item.id === selectedId) ? selectedId : (filtered[0]?.id ?? "");
  const selected = filtered.find((item) => item.id === activeId) ?? null;

  return (
    <div className="diluicao-tool">
      <aside className="diluicao-sidebar">
        <label htmlFor="diluicao-search">Buscar medicamento</label>
        <input
          id="diluicao-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Ex.: Meropenem"
        />

        <div className="diluicao-list">
          {filtered.length === 0 ? (
            <p>Nenhum medicamento encontrado.</p>
          ) : (
            filtered.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedId(item.id)}
                className={item.id === activeId ? "diluicao-item diluicao-item--active" : "diluicao-item"}
              >
                {item.name}
              </button>
            ))
          )}
        </div>
      </aside>

      <section className="diluicao-content">
        {!selected ? (
          <p>Selecione um medicamento para visualizar orientações de diluição e preparo.</p>
        ) : (
          <>
            <div className="diluicao-header">
              <h3>{selected.name}</h3>
              <Link href={`/medicamentos?id=${selected.id}`}>Abrir ficha completa</Link>
            </div>

            {selected.sections.map((section) => (
              <article key={`${selected.id}-${section.title}`} className="diluicao-section">
                <h4>{section.title}</h4>
                <ul>
                  {section.lines.map((line, index) => (
                    <li key={`${selected.id}-${section.title}-${index}`}>{line}</li>
                  ))}
                </ul>
              </article>
            ))}
          </>
        )}
      </section>
    </div>
  );
}
