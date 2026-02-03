import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Dr. Jephesson | Farmacêutico",
  description: "Conteúdo prático sobre medicamentos — aulas, e-books e ferramentas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>

        <footer className="site-footer" style={{ borderTop: "1px solid var(--stroke)" }}>
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm" style={{ color: "var(--muted)" }}>
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <p>© {new Date().getFullYear()} Dr. Jephesson</p>
              <p>Conteúdo educativo. Não substitui avaliação individual.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
