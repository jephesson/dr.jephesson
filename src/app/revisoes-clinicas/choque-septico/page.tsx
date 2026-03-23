import fs from "node:fs/promises";
import path from "node:path";
import Image from "next/image";

async function getReviewHtml() {
  const filePath = path.join(process.cwd(), "src/content/revisoes/choque-septico.html");
  return fs.readFile(filePath, "utf8");
}

export default async function Page() {
  const reviewHtml = await getReviewHtml();

  return (
    <div className="review-article">
      <section className="review-banner">
        <span className="review-banner__eyebrow">Revisão clínica</span>
        <h1>Guia Avançado de Manejo da Sepse e Choque Séptico</h1>
        <p>Material de estudo para graduação, residência e profissionais da saúde.</p>
      </section>

      <section className="review-guide-image-card">
        <Image
          src="/revisoes/unnamed.png"
          alt="Guia de sobrevivência à sepse: das diretrizes iniciais à medicina de precisão"
          width={2752}
          height={1536}
          className="review-guide-image"
          priority
        />
      </section>

      <section className="review-doc-card">
        <div className="review-doc-content" dangerouslySetInnerHTML={{ __html: reviewHtml }} />
      </section>
    </div>
  );
}
