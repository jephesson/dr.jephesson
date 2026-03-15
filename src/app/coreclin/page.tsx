const whatsappUrl =
  "https://wa.me/5551983474413?text=Tenho%20interesse%20em%20conhecer%20o%20useCoreClin.";

export default function Page() {
  return (
    <div className="coreclin-page">
      <section className="coreclin-hero">
        <div className="coreclin-hero__content">
          <span className="coreclin-eyebrow">Sistema de apoio à decisão clínica</span>
          <h1>CoreClin</h1>
          <p>
            O useCoreClin é uma plataforma assistencial para apoiar decisões terapêuticas, validação de prescrições,
            reconciliação medicamentosa, registro de intervenções e organização do fluxo clínico hospitalar.
          </p>
          <p>
            A proposta é concentrar o trabalho assistencial em um sistema objetivo, com rastreabilidade das condutas,
            visão do paciente internado e apoio operacional para a equipe farmacêutica e multiprofissional.
          </p>

          <div className="coreclin-actions">
            <a href="https://usecoreclin.com.br" target="_blank" rel="noreferrer" className="coreclin-btn coreclin-btn--primary">
              Acessar useCoreClin
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="coreclin-btn coreclin-btn--ghost">
              Tenho interesse em conhecer o useCoreClin
            </a>
          </div>
        </div>

        <div className="coreclin-summary">
          <div className="coreclin-summary__card">
            <strong>Foco assistencial</strong>
            <p>Reconciliação, validação de medicamentos, intervenções e rastreio clínico em um único fluxo.</p>
          </div>
          <div className="coreclin-summary__card">
            <strong>Aplicação prática</strong>
            <p>Estruturado para rotina hospitalar, com visão operacional do paciente e das pendências clínicas.</p>
          </div>
          <div className="coreclin-summary__card">
            <strong>Contato comercial</strong>
            <p>Se houver interesse, o encaminhamento é direto por WhatsApp para apresentação da ferramenta.</p>
          </div>
        </div>
      </section>

      <section className="coreclin-section">
        <div className="coreclin-section__head">
          <h2>Visão do sistema</h2>
          <p>Resumo dos módulos e do fluxo assistencial observados nas telas do CoreClin.</p>
        </div>

        <div className="coreclin-feature-grid">
          <article className="coreclin-feature">
            <h3>Painel assistencial</h3>
            <p>Controle central da operação com acesso a profissionais, equipe, pacientes, medicamentos e relatórios.</p>
          </article>
          <article className="coreclin-feature">
            <h3>Validação de prescrições</h3>
            <p>Lista estruturada de medicamentos prescritos com flags, observações e ações de intervenção.</p>
          </article>
          <article className="coreclin-feature">
            <h3>Rastreabilidade</h3>
            <p>Registro de intervenções, conciliação e histórico de validação por paciente e por prescrição.</p>
          </article>
          <article className="coreclin-feature">
            <h3>Decisão clínica</h3>
            <p>Apoio direto à tomada de decisão terapêutica com foco em segurança, priorização e documentação.</p>
          </article>
        </div>
      </section>

      <section className="coreclin-section">
        <div className="coreclin-section__head">
          <h2>Prévia do CoreClin</h2>
          <p>Representação visual baseada nas telas compartilhadas do sistema.</p>
        </div>

        <div className="coreclin-shots">
          <article className="coreclin-shot">
            <div className="coreclin-shot__bar" />
            <div className="coreclin-shot__body">
              <aside className="coreclin-shot__sidebar">
                <h3>Menu</h3>
                <span>Profissionais</span>
                <button>Cadastrar profissional</button>
                <span>Equipe</span>
                <button>Cadastrar equipe</button>
                <span>Paciente</span>
                <button>Cadastrar pacientes</button>
                <span>Medicamentos</span>
                <button>Cadastrar medicamentos</button>
                <span>Relatórios</span>
                <button>Intervenções</button>
                <button>Medicamentos validados</button>
              </aside>

              <div className="coreclin-shot__content">
                <div className="coreclin-shot__notice">
                  <strong>Painel Assistencial CoreClin</strong>
                  <p>Login ativo e profissional responsável vinculados ao ambiente seguro.</p>
                </div>

                <div className="coreclin-shot__hero">
                  <div className="coreclin-logo">CoreClin</div>
                  <p>A sua ferramenta de auxílio à decisão terapêutica.</p>
                </div>
              </div>
            </div>
          </article>

          <article className="coreclin-shot">
            <div className="coreclin-shot__bar" />
            <div className="coreclin-shot__table">
              <div className="coreclin-shot__row coreclin-shot__row--head">
                <span>Medicamentos</span>
                <span>Dose</span>
                <span>Via</span>
                <span>Frequência</span>
                <span>Flag</span>
                <span>Ações</span>
              </div>
              <div className="coreclin-shot__row">
                <span>Enoxaparina 40 mg</span>
                <span>40 mg</span>
                <span>SC</span>
                <span>1x/dia</span>
                <span className="coreclin-flag">FR</span>
                <span className="coreclin-action">Intervir</span>
              </div>
              <div className="coreclin-shot__row">
                <span>Ondansetrona 2 mg/mL</span>
                <span>1 amp</span>
                <span>EV</span>
                <span>6/6 h</span>
                <span>-</span>
                <span className="coreclin-action">Intervir</span>
              </div>
              <div className="coreclin-shot__row">
                <span>Tramadol 50 mg/mL</span>
                <span>1 amp</span>
                <span>EV</span>
                <span>6/6 h</span>
                <span className="coreclin-flag">FR</span>
                <span className="coreclin-action">Intervir</span>
              </div>
              <div className="coreclin-shot__legend">
                <strong>Legenda:</strong> A = alergia • FR = função renal • HT = hepatotóxico
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="coreclin-cta">
        <div>
          <h2>Interesse em conhecer o CoreClin</h2>
          <p>
            Se quiser ver a ferramenta em uso, entender os módulos assistenciais ou discutir implantação, o contato é
            direto pelo WhatsApp.
          </p>
        </div>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="coreclin-btn coreclin-btn--primary">
          Tenho interesse em conhecer o useCoreClin
        </a>
      </section>
    </div>
  );
}
