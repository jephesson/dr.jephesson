import DiluicaoMedicamentosTool, { type DiluicaoItem, type DiluicaoSection } from "@/components/DiluicaoMedicamentosTool";
import bibliotecaPostsData from "@/data/bibliotecaMedicamentos.json";

type BibliotecaSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type BibliotecaPost = {
  id: string;
  name: string;
  sections: BibliotecaSection[];
};

const sectionTitleRegex = /(6\.4|8\.|administra|compatibil|estabil|preparo|infus[aã]o|dilu|reconstitu)/i;
const lineRegex = /(dilu|diluente|reconstitu|infus[aã]o|compatibil|estabil|bolus|iv push|tempo de infus|concentra|flush)/i;

function uniqueLines(lines: string[]) {
  const seen = new Set<string>();
  const output: string[] = [];

  for (const line of lines) {
    const value = line.trim();
    if (!value) continue;
    if (seen.has(value)) continue;
    seen.add(value);
    output.push(value);
  }

  return output;
}

function extractDiluicaoItems(posts: BibliotecaPost[]): DiluicaoItem[] {
  const mapped: DiluicaoItem[] = [];

  for (const post of posts) {
    const sections: DiluicaoSection[] = [];

    for (const section of post.sections ?? []) {
      const lines = [...(section.paragraphs ?? []), ...(section.bullets ?? [])];
      const sectionMatches = sectionTitleRegex.test(section.title);
      const filtered = sectionMatches ? lines : lines.filter((line) => lineRegex.test(line));
      const unique = uniqueLines(filtered).slice(0, 16);

      if (unique.length > 0) {
        sections.push({
          title: section.title,
          lines: unique,
        });
      }
    }

    if (sections.length > 0) {
      mapped.push({
        id: post.id,
        name: post.name,
        sections,
      });
    }
  }

  return mapped.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
}

export default function Page() {
  const items = extractDiluicaoItems(bibliotecaPostsData as BibliotecaPost[]);

  return (
    <div className="rounded-2xl p-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold" style={{ color: "#0b1422" }}>
          Diluição de medicamentos
        </h2>
        <p className="text-sm" style={{ color: "rgba(11,20,34,0.68)" }}>
          Consulta rápida de preparo, diluição, infusão e compatibilidade com base nas fichas técnicas.
        </p>
      </div>

      <DiluicaoMedicamentosTool items={items} />
    </div>
  );
}
