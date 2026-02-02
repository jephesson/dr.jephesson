"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const items = [
  { href: "/quem-sou-eu", label: "Quem sou eu" },
  { href: "/medicamentos", label: "Medicamentos" },
  { href: "/ferramentas", label: "Ferramentas" },
  { href: "/aulas", label: "Aulas" },
  { href: "/ebooks", label: "E-books" },
  { href: "/contato", label: "Contato" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname?.startsWith(href);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50 }}>
      {/* Faixa da marca */}
      <div style={{ background: "var(--brand)" }}>
        <div
          style={{
            maxWidth: 1152,
            margin: "0 auto",
            padding: "12px 16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link href="/" aria-label="Página inicial">
            <Image
              src="/brand/logo-horizontal.png"
              alt="Dr. Jephesson Santos"
              width={260}
              height={52}
              priority
              style={{ height: "auto", width: "auto", maxWidth: "100%" }}
            />
          </Link>
        </div>
      </div>

      {/* Menu branco — guias separadas */}
      <div style={{ background: "#fff", borderBottom: "1px solid var(--stroke)" }}>
        <nav
          style={{
            maxWidth: 1152,
            margin: "0 auto",
            padding: "10px 16px",
          }}
          aria-label="Navegação"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 12,
              flexWrap: "wrap",
              rowGap: 10,
            }}
          >
            {items.map((it) => {
              const on = isActive(it.href);

              return (
                <Link
                  key={it.href}
                  href={it.href}
                  style={{
                    background: "#fff",
                    color: "#0b1422",
                    border: on ? "2px solid #0b1422" : "2px solid rgba(11,20,34,.35)",
                    borderRadius: 999,
                    padding: "8px 14px",
                    fontSize: 14,
                    fontWeight: 700,
                    lineHeight: "14px",
                    letterSpacing: 0.2,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {it.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
