const cvFiles = {
  da: "/files/TinaWulff-CV2026.pdf",
  en: null,
};

export default function CVSection() {
  return (
    <section id="cv-download" className="cv-section mx-auto w-[80vw] max-w-7xl px-5 py-20" aria-labelledby="cv-heading">
      <h2 id="cv-heading" className="font-hand text-4xl sm:text-6xl">CV</h2>
      <p className="cv-section__lead">
        Download full CV and choose your preferred language.
      </p>

      <div className="cv-actions" role="group" aria-label="CV language options">
        <a className="cv-button cv-button--primary" href={cvFiles.da} download>
          Download Full CV (Dansk)
        </a>

        {cvFiles.en ? (
          <a className="cv-button" href={cvFiles.en} download>
            Download Full CV (English)
          </a>
        ) : (
          <button className="cv-button cv-button--disabled" type="button" disabled aria-disabled="true">
            English version coming soon
          </button>
        )}
      </div>
    </section>
  );
}
