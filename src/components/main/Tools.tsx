import type { Tool } from "../../data/tools";
import ToolCard from "../ui/ToolCard";
import "./Tools.css";
type ToolsProps = {
  filteredTools: Tool[];
  activeCategory: string;
};

const Tools = ({ filteredTools, activeCategory }: ToolsProps) => {
  const categoriesToDisplay =
    activeCategory === "All"
      ? Array.from(new Set(filteredTools.map((t) => t.category)))
      : [activeCategory];
  if (filteredTools.length === 0) {
    return (
      <section className="tools-container">
        <div className="no-results">
          <p className="no-result-text">No tools found matching your search.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="tools-container">
      {categoriesToDisplay.map((cat) => {
        const categoryTools = filteredTools.filter((t) => t.category === cat);
        if (categoryTools.length === 0) return null;
        return (
          <div key={cat} className="category-group">
            <h2 className="category-title">
              {cat} <span className="count-badge">{categoryTools.length}</span>
            </h2>
            <div className="tools-grid">
              {categoryTools.map((tool) => (
                <ToolCard tool={tool} key={tool.id} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Tools;
