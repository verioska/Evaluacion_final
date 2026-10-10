function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="filter-toolbar d-flex flex-wrap align-items-center gap-2 my-4">
      <span className="fw-semibold me-2">Filtrar por categoria:</span>
      {categories.map((category) => (
        <button
          className={`btn ${selectedCategory === category ? 'btn-info' : 'btn-outline-dark'}`}
          key={category}
          type="button"
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
