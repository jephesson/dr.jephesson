export default function Page() {
  return (
    <div className="rounded-2xl p-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold" style={{ color: "#0b1422" }}>
          Contato
        </h2>
        <p className="text-sm" style={{ color: "rgba(11,20,34,0.65)" }}>
          Canais oficiais do Dr. Jephesson Santos.
        </p>
      </div>

      <div className="contact-grid">
        <a className="contact-card" href="mailto:dr.jephesson@gmail.com">
          <span className="contact-icon" aria-hidden="true">
            ✉️
          </span>
          <div>
            <p className="contact-label">E-mail</p>
            <p className="contact-value">dr.jephesson@gmail.com</p>
          </div>
        </a>

        <a className="contact-card" href="https://www.instagram.com/dr.jephesson" target="_blank" rel="noreferrer">
          <span className="contact-icon" aria-hidden="true">
            📸
          </span>
          <div>
            <p className="contact-label">Instagram</p>
            <p className="contact-value">@dr.jephesson</p>
          </div>
        </a>

        <a className="contact-card" href="https://www.youtube.com/@dr.jephessonsantos" target="_blank" rel="noreferrer">
          <span className="contact-icon" aria-hidden="true">
            ▶️
          </span>
          <div>
            <p className="contact-label">YouTube</p>
            <p className="contact-value">@dr.jephessonsantos</p>
          </div>
        </a>
      </div>
    </div>
  );
}
