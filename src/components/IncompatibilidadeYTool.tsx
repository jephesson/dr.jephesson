"use client";

import { useEffect, useMemo, useState } from "react";
import { parseCsv } from "@/lib/csv";

type MatrixData = {
  meds: string[];
  matrix: Record<string, Record<string, string>>;
};

type PairCell = "C" | "I" | "D" | "";

function normalize(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function cleanCell(value: string | undefined): string {
  if (!value) return "";
  return value.trim();
}

function buildMatrix(rows: string[][]): MatrixData {
  const header = rows[0] ?? [];
  const colNames = header.slice(1).map(cleanCell).filter(Boolean);
  const matrix: Record<string, Record<string, string>> = {};
  const meds: string[] = [];

  for (let i = 1; i < rows.length; i += 1) {
    const row = rows[i] ?? [];
    const rowName = cleanCell(row[0]);
    if (!rowName) continue;
    meds.push(rowName);
    const rowKey = normalize(rowName);
    matrix[rowKey] = matrix[rowKey] ?? {};
    for (let c = 0; c < colNames.length; c += 1) {
      const colKey = normalize(colNames[c]);
      const raw = cleanCell(row[c + 1]);
      const value = raw ? raw.toUpperCase() : "";
      if (value) {
        matrix[rowKey][colKey] = value;
      }
    }
  }

  return { meds, matrix };
}

function getCellValue(matrix: Record<string, Record<string, string>>, a: string, b: string): PairCell {
  const aKey = normalize(a);
  const bKey = normalize(b);
  const direct = matrix[aKey]?.[bKey];
  if (direct) return direct as PairCell;
  const reverse = matrix[bKey]?.[aKey];
  if (reverse) return reverse as PairCell;
  return "";
}

function formatDateTime() {
  const now = new Date();
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(now);
}

export default function IncompatibilidadeYTool() {
  const [data, setData] = useState<MatrixData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [institution, setInstitution] = useState("");
  const [professional, setProfessional] = useState("");
  const [council, setCouncil] = useState("");
  const [patient, setPatient] = useState("");
  const [record, setRecord] = useState("");

  useEffect(() => {
    let mounted = true;
    fetch("/incompatibilidade.csv")
      .then((res) => {
        if (!res.ok) {
          throw new Error("missing");
        }
        return res.text();
      })
      .then((text) => {
        const rows = parseCsv(text);
        if (!rows.length) {
          throw new Error("empty");
        }
        const matrixData = buildMatrix(rows);
        if (mounted) {
          setData(matrixData);
          setError(null);
        }
      })
      .catch(() => {
        if (mounted) {
          setError("Não foi possível carregar o arquivo incompatibilidade.csv.");
        }
      });
    return () => {
      mounted = false;
    };
  }, []);

  const suggestions = useMemo(() => {
    if (!data) return [];
    const q = normalize(query);
    if (q.length < 2) return [];
    return data.meds
      .filter((name) => normalize(name).includes(q))
      .filter((name) => !selected.includes(name))
      .slice(0, 20);
  }, [data, query, selected]);

  const dateTime = useMemo(() => formatDateTime(), []);

  function addMedication(name: string) {
    setSelected((prev) => (prev.includes(name) ? prev : [...prev, name]));
    setQuery("");
  }

  function removeMedication(name: string) {
    setSelected((prev) => prev.filter((item) => item !== name));
  }

  function handlePrint() {
    window.print();
  }

  return (
    <div className="y-tool">
      <div className="no-print y-tool__grid">
        <div className="y-tool__panel">
          <h3>Dados para o relatório</h3>
          <div className="y-tool__fields">
            <label>
              Cabeçalho da instituição
              <input value={institution} onChange={(e) => setInstitution(e.target.value)} placeholder="Ex.: Hospital X" />
            </label>
            <label>
              Nome do profissional
              <input value={professional} onChange={(e) => setProfessional(e.target.value)} placeholder="Ex.: Dr. Jephesson" />
            </label>
            <label>
              Conselho
              <input value={council} onChange={(e) => setCouncil(e.target.value)} placeholder="Ex.: CRF/CRM" />
            </label>
            <label>
              Nome do paciente
              <input value={patient} onChange={(e) => setPatient(e.target.value)} placeholder="Ex.: Nome do paciente" />
            </label>
            <label>
              Prontuário
              <input value={record} onChange={(e) => setRecord(e.target.value)} placeholder="Ex.: 000000" />
            </label>
          </div>
          <p className="y-tool__note">Os dados preenchidos aqui não são armazenados.</p>
        </div>

        <div className="y-tool__panel">
          <h3>Selecionar medicamentos</h3>
          {error ? (
            <div className="y-tool__error">
              {error} Coloque o arquivo em `public/incompatibilidade.csv` e tente novamente.
            </div>
          ) : null}
          <div className="y-tool__search">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Digite o nome do medicamento"
            />
            {suggestions.length > 0 ? (
              <div className="y-tool__dropdown">
                {suggestions.map((name) => (
                  <button key={name} type="button" onClick={() => addMedication(name)}>
                    {name}
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <div className="y-tool__chips">
            {selected.length === 0 ? (
              <p className="y-tool__hint">Adicione dois ou mais medicamentos para comparar.</p>
            ) : (
              selected.map((name) => (
                <span key={name} className="y-tool__chip">
                  {name}
                  <button type="button" onClick={() => removeMedication(name)} aria-label={`Remover ${name}`}>
                    ×
                  </button>
                </span>
              ))
            )}
          </div>

          <div className="y-tool__actions">
            <button type="button" onClick={() => setSelected([])} className="y-tool__btn y-tool__btn--ghost">
              Limpar
            </button>
            <button type="button" onClick={handlePrint} className="y-tool__btn">
              Gerar PDF
            </button>
          </div>
        </div>
      </div>

      <div className="print-area y-report">
        <header className="y-report__header">
          <div>
            <h2>{institution || "Instituição"}</h2>
            <p>Relatório de incompatibilidade em Y</p>
          </div>
          <div className="y-report__meta">
            <span>Data/Hora: {dateTime}</span>
          </div>
        </header>

        <div className="y-report__info">
          <div>
            <strong>Profissional:</strong> {professional || "—"}
          </div>
          <div>
            <strong>Conselho:</strong> {council || "—"}
          </div>
          <div>
            <strong>Paciente:</strong> {patient || "—"}
          </div>
          <div>
            <strong>Prontuário:</strong> {record || "—"}
          </div>
        </div>

        <div className="y-report__legend">
          <span className="y-badge y-badge--c">C = Compatível</span>
          <span className="y-badge y-badge--i">I = Incompatível</span>
          <span className="y-badge y-badge--d">D = Duvidoso</span>
          <span className="y-badge y-badge--n">Sem dados</span>
        </div>

        {selected.length >= 2 ? (
          <div className="y-report__table">
            <table>
              <thead>
                <tr>
                  <th>Medicamento</th>
                  {selected.map((name) => (
                    <th key={name}>{name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {selected.map((row) => (
                  <tr key={row}>
                    <th>{row}</th>
                    {selected.map((col) => {
                      const value = data ? getCellValue(data.matrix, row, col) : "";
                      const cellClass = value ? `y-cell y-cell--${value}` : "y-cell y-cell--n";
                      return (
                        <td key={`${row}-${col}`} className={cellClass}>
                          {value || "—"}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="y-report__empty">Selecione ao menos dois medicamentos para gerar o relatório.</p>
        )}

        <p className="y-report__disclaimer">Os dados informados não são armazenados neste site.</p>
      </div>
    </div>
  );
}
