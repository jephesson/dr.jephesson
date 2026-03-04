"use client";

import { useMemo, useState } from "react";

export type DiluicaoItem = {
  id: string;
  name: string;
  principioAtivo: string;
  apresentacaoComercial: string;
  volumeReconstituicao: string;
  estabilidadeReconstituido: string;
  solucaoInfusao: string;
  volumeDiluicao: string;
  estabilidadeDiluido: string;
  concentracaoMaximaAdm: string;
  velocidadeTempoInfusao: string;
  observacoes: string;
  fotossensivel: string;
  flebite: string;
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
    return items.filter(
      (item) =>
        normalize(item.name).includes(q) ||
        normalize(item.principioAtivo).includes(q) ||
        normalize(item.apresentacaoComercial).includes(q)
    );
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
            </div>

            <article className="diluicao-section">
              <h4>Descrição de diluição</h4>
              <ul className="diluicao-details">
                <li>
                  <strong>Princípio ativo:</strong> {selected.principioAtivo}
                </li>
                <li>
                  <strong>Apresentação comercial:</strong> {selected.apresentacaoComercial}
                </li>
                <li>
                  <strong>Volume de reconstituição:</strong> {selected.volumeReconstituicao}
                </li>
                <li>
                  <strong>Estabilidade reconstituído:</strong> {selected.estabilidadeReconstituido}
                </li>
                <li>
                  <strong>Solução para infusão:</strong> {selected.solucaoInfusao}
                </li>
                <li>
                  <strong>Volume de diluição:</strong> {selected.volumeDiluicao}
                </li>
                <li>
                  <strong>Estabilidade diluído:</strong> {selected.estabilidadeDiluido}
                </li>
                <li>
                  <strong>Concentração máxima para administração:</strong> {selected.concentracaoMaximaAdm}
                </li>
                <li>
                  <strong>Velocidade / tempo de infusão:</strong> {selected.velocidadeTempoInfusao}
                </li>
                <li>
                  <strong>Observações:</strong> {selected.observacoes}
                </li>
                <li>
                  <strong>Fotossensível:</strong> {selected.fotossensivel}
                </li>
                <li>
                  <strong>Flebite:</strong> {selected.flebite}
                </li>
              </ul>
            </article>
          </>
        )}
      </section>
    </div>
  );
}
