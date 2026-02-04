import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
});

const displayFont = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Dr. Jephesson | Farmacêutico",
  description: "Conteúdo prático sobre medicamentos — aulas, e-books e ferramentas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${bodyFont.variable} ${displayFont.variable}`}>
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
        <GoogleAnalytics gaId="G-EPHKSR03J3" />
      </body>
    </html>
  );
}
