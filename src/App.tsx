import Landing from "./components/Landing";
import { useState } from "react";
import { tools } from "./data/tools";
import Tools from "./components/main/Tools";
import Search from "./components/main/Search";
import Footer from "./components/Footer";
const App = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const categories = ["All", ...new Set(tools.map((t) => t.category))];
  const filteredTools = tools.filter((tool) => {
    const matshesCategory =
      activeCategory === "All" || tool.category === activeCategory;
    const matshesName = tool.name.toLowerCase().includes(query.toLowerCase());
    return matshesCategory && matshesName;
  });
  const onCategoryChange = (category: string) => {
    setActiveCategory(category);
  };
  const onInputChange = (inputValue: string) => {
    setQuery(inputValue);
  };

  return (
    <div>
      <Landing />
      <Search
        activeCategory={activeCategory}
        categories={categories}
        onCategoryChange={onCategoryChange}
        onInputChange={onInputChange}
      ></Search>
      <Tools filteredTools={filteredTools} activeCategory={activeCategory} />
      <Footer />
    </div>
  );
};
export default App;
