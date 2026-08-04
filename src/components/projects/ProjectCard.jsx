import { useEffect, useState } from "react";

const categoryLabels = {
  "web-development": "Web Development",
  "ux-ui-design": "UX/UI & Design",
  "visual-art": "Visual Art",
};

export default function ProjectCard({ activeCategory, project }) {
  const galleryImages = project.media?.images?.length ? project.media.images : [project.media?.image].filter(Boolean);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project.id]);

  useEffect(() => {
    if (galleryImages.length < 2) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveImageIndex((currentIndex) => (currentIndex + 1) % galleryImages.length);
    }, 3600);

    return () => window.clearInterval(intervalId);
  }, [galleryImages.length, project.id]);

  const links = [
    project.links.live && {
      href: project.links.live,
      label: "Live",
    },
    project.links.github && {
      href: project.links.github,
      label: "GitHub",
    },
  ].filter(Boolean);

  const categoryText = project.categories
    .map((category) => categoryLabels[category] ?? category)
    .join(" / ");

  return (
    <article className="project-card project-card--active" data-category={activeCategory}>
      {/* <img aria-hidden="true" className="project-card__border" src={cardBorder} alt="" /> */}
      <div className="project-card__body">
        <div className="project-card__content">
          <h3 className="font-hand">{project.title}</h3>
            <ul className="project-card__tags" aria-label={`${project.title} technologies`}>
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
          <p>{project.summary}</p>
          {links.length > 0 && (
            <div className="project-card__links">
              {links.map((link) => (
                <a href={link.href} key={link.href} rel="noreferrer" target="_blank">
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {galleryImages.length > 0 && (
          <figure className="project-card__media">
            <img
              key={galleryImages[activeImageIndex]}
              src={galleryImages[activeImageIndex]}
              alt={`${project.title} project preview ${activeImageIndex + 1}`}
            />
            {galleryImages.length > 1 && (
              <div className="project-card__dots" aria-label={`${project.title} image gallery`}>
                {galleryImages.map((image, index) => (
                  <button
                    aria-label={`Show image ${index + 1} of ${galleryImages.length}`}
                    aria-pressed={activeImageIndex === index}
                    key={image}
                    onClick={() => setActiveImageIndex(index)}
                    type="button"
                  />
                ))}
              </div>
            )}
          </figure>
        )}

        <p className="project-card__category col-2">{categoryText}</p>
      </div>
    </article>
  );
}
