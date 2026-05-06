import type { Tool } from "../../data/tools";
import "./ToolCard.css";
type ToolCardProps = {
  tool: Tool;
};

const ToolCard = ({ tool }: ToolCardProps) => {
  return (
    <div className="tool-card">
      <div className="tool-name-desc">
        <div className="tools-header">
          <h3 className="tools-name">{tool.name}</h3>
          {tool.recommended && <p className="recommended">Recommended</p>}
        </div>
        <p className="tool-description">{tool.description}</p>
      </div>
      <div className="tool-info">
        <span className={`tool-pricing ${tool.pricing}`}>
          {tool.pricing === "freemium" ? "Free limit" : `${tool.pricing}`}
        </span>
        <a href={`${tool.url}`} className="tool-url">
          Open
        </a>
      </div>
    </div>
  );
};

export default ToolCard;
