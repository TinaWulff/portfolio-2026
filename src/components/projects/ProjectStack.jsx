import { useEffect, useMemo, useState } from "react";

import ProjectCard from "./ProjectCard.jsx";

export default function ProjectStack({ activeCategory, projects }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [projects]);

  const stackProjects = useMemo(() => {
    if (projects.length === 0) {
      return [];
    }

    return projects.map((_, index) => projects[(activeIndex + index) % projects.length]);
  }, [activeIndex, projects]);

  if (projects.length === 0) {
    return (
      <div className="project-empty">
        <p className="font-hand text-3xl">More projects are on the way.</p>
        <p>Visual Art cases can be added here when the first selected pieces are ready.</p>
      </div>
    );
  }

  const activeProject = stackProjects[0];
  const stackedBehindProjects = stackProjects.slice(1, 4);
  const hasMultipleProjects = projects.length > 1;

  function showNextProject() {
    setActiveIndex((currentIndex) => (currentIndex + 1) % projects.length);
  }

  return (
    <div className="project-stack" data-category={activeCategory}>
      <div className="project-stack__cards" aria-live="polite">
        {stackedBehindProjects.map((project, index) => (
          <div
            aria-hidden="true"
            className="project-card project-card--back"
            data-category={activeCategory}
            key={project.id}
            style={{ "--stack-offset": index + 1 }}
          >
            <div className="project-card__body" />
          </div>
        ))}
        <ProjectCard activeCategory={activeCategory} key={activeProject.id} project={activeProject} />
      </div>

      {hasMultipleProjects && (
        <button
          aria-label={`Show next project. Current project: ${activeProject.title}`}
          className="project-stack__next"
          onClick={showNextProject}
          type="button"
        >
          <span aria-hidden="true">‹</span>
          <span aria-hidden="true">›</span>
        </button>
      )}
    </div>
  );
}
