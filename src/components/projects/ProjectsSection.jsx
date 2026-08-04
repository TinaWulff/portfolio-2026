import { useMemo, useState } from "react";

import { categories } from "../../data/categories.js";
import { projects } from "../../data/projects.js";
import ProjectFilters from "./ProjectFilters.jsx";
import ProjectStack from "./ProjectStack.jsx";

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("web-development");

  const visibleProjects = useMemo(() => {
    return projects.filter((project) => project.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <section id="projects" className="projects-section mx-auto w-full max-w-7xl px-4 py-35 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[80vw]">
        <h2 className="font-hand text-4xl sm:text-6xl">Projects</h2>
        <ProjectFilters
          activeCategory={activeCategory}
          categories={categories}
          onChange={setActiveCategory}
        />
        <ProjectStack activeCategory={activeCategory} projects={visibleProjects} />
      </div>
    </section>
  );
}
