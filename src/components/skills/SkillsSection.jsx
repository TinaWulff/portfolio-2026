import { useEffect, useMemo, useRef, useState } from "react";

import { skillCategories, skills } from "../../data/skills.js";

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoverCategory, setHoverCategory] = useState(null);
  const [canHoverFilter, setCanHoverFilter] = useState(false);
  const categoryListRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine)");

    function updateCanHover() {
      setCanHoverFilter(mediaQuery.matches);
      if (!mediaQuery.matches) {
        setHoverCategory(null);
      }
    }

    updateCanHover();
    mediaQuery.addEventListener("change", updateCanHover);

    return () => mediaQuery.removeEventListener("change", updateCanHover);
  }, []);

  useEffect(() => {
    function handleDocumentPointerDown(event) {
      if (!categoryListRef.current) {
        return;
      }

      if (categoryListRef.current.contains(event.target)) {
        return;
      }

      setSelectedCategory(null);
      setHoverCategory(null);
    }

    document.addEventListener("pointerdown", handleDocumentPointerDown);

    return () => document.removeEventListener("pointerdown", handleDocumentPointerDown);
  }, []);

  const activeCategory = hoverCategory ?? selectedCategory;

  const visibleSkillLabels = useMemo(() => {
    if (!activeCategory) {
      return new Set(skills.map((skill) => skill.label));
    }

    return new Set(
      skills.filter((skill) => skill.categories.includes(activeCategory)).map((skill) => skill.label)
    );
  }, [activeCategory]);

  function handleCategoryClick(categoryId) {
    setSelectedCategory((currentCategory) => (currentCategory === categoryId ? null : categoryId));
  }

  function handleCategoryMouseEnter(categoryId) {
    if (!canHoverFilter) {
      return;
    }

    setHoverCategory(categoryId);
  }

  function handleCategoryMouseLeave() {
    if (!canHoverFilter) {
      return;
    }

    setHoverCategory(null);
  }

  return (
    <section id="skills" className="skills-section mx-auto w-[80vw] max-w-6xl px-5 py-18">
      <h2 className="font-hand text-5xl">Stack & Competencies</h2>
      <div
        className="skill-category-list"
        aria-label="Skill categories"
        onMouseLeave={handleCategoryMouseLeave}
        ref={categoryListRef}
      >
        {skillCategories.map((category) => (
          <button
            aria-pressed={activeCategory === category.id}
            className={`skill-category-pill${activeCategory === category.id ? " skill-category-pill--active" : ""}`}
            data-category={category.id}
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            onMouseEnter={() => handleCategoryMouseEnter(category.id)}
            type="button"
          >
            {category.label}
          </button>
        ))}
      </div>
      <div className="skill-chip-list">
        {skills.map((skill) => (
          <span
            className={`skill-chip${visibleSkillLabels.has(skill.label) ? "" : " skill-chip--hidden"}`}
            data-category={skill.primaryCategory ?? skill.categories[0]}
            key={skill.label}
            title={skill.categories.join(", ")}
          >
            {skill.label}
          </span>
        ))}
      </div>
    </section>
  );
}
