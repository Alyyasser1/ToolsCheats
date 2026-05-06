import "./Search.css";
type SearchProps = {
  activeCategory: string;
  categories: string[];
  onCategoryChange: (category: string) => void;
  onInputChange: (inputValue: string) => void;
};

const Search = ({
  activeCategory,
  categories,
  onCategoryChange,
  onInputChange,
}: SearchProps) => {
  return (
    <section className="search-section">
      <div className="input-section">
        <input
          type="text"
          className="search-bar"
          name="search"
          placeholder="Enter tool name"
          onChange={(e) => onInputChange(e.target.value)}
        />
      </div>
      <div className="buttons-section">
        {categories.map((category) => (
          <button
            key={category}
            className={
              category === activeCategory
                ? "search-button active"
                : "search-button"
            }
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Search;
