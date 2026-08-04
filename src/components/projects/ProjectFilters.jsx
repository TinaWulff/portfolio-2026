export default function ProjectFilters({ activeCategory, categories, onChange }) {
  return (
    <div className="project-filters" aria-label="Project filters" role="tablist">
      {categories.map((category) => (
        <button
          aria-selected={activeCategory === category.id}
          className="sketch-tab project-filters__tab"
          data-category={category.id}
          key={category.id}
          onClick={() => onChange(category.id)}
          role="tab"
          type="button"
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
