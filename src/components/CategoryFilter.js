function CategoryFilter({ onFilter }) {
  const handleFilterChange = (e) => {
    onFilter(e.target.value);
  };

  return (
    <div className="category-filter">
      <select onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Shopping">Shopping</option>
      </select>
    </div>
  );
}

export default CategoryFilter;
