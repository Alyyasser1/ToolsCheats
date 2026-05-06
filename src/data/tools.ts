export type Tool = {
  id: number;
  name: string;
  description: string;
  category: string;
  pricing: "free" | "paid" | "freemium";
  url: string;
  recommended?:boolean
};

export const tools: Tool[] = [
  {
    id: 1,
    name: "Excalidraw",
    description: "A go-to whiteboard for system architecture and rapid wireframing. It offers a very low learning curve while providing high MCP compatibility, allowing AI agents to easily interpret or generate your hand-drawn logic flows.",
    category: "🎨 Design",
    pricing: "free",
    url: "https://excalidraw.com",
    recommended: true
  },
  {
    id: 2,
    name: "Draw.io (Diagrams.net)",
    description: "The gold standard for professional flowcharts and database ERDs. While it has a medium complexity level, its ability to store diagrams as XML makes it moderately compatible with AI agents via MCP file-system bridges.",
    category: "🎨 Design",
    pricing: "free",
    url: "https://app.diagrams.net",
    recommended: true
  },
  {
    id: 3,
    name: "Figma",
    description: "The industry leader for high-fidelity UI/UX design. It is a high-complexity tool used by professional teams, now offering moderate MCP integration that lets AI inspect layers and styles directly via specialized API servers.",
    category: "🎨 Design",
    pricing: "freemium",
    url: "https://www.figma.com",
    recommended: true
  },
  {
    id: 4,
    name: "Canva",
    description: "An accessible platform for student presentations and quick brand assets. It prioritizes a low-complexity, drag-and-drop experience, though it remains a closed ecosystem with limited direct MCP or AI agent manipulation.",
    category: "🎨 Design",
    pricing: "freemium",
    url: "https://www.canva.com"
  },
  {
    id: 5,
    name: "tldraw",
    description: "A remarkably fast, infinite canvas for instant whiteboarding. Its very low complexity makes it a favorite for 'Make it Real' AI prototyping, pairing naturally with local AI agent environments and web-based canvases.",
    category: "🎨 Design",
    pricing: "free",
    url: "https://www.tldraw.com"
  },
  {
    id: 6,
    name: "Miro",
    description: "A collaborative workspace designed for group mind-mapping and project roadmaps. It offers medium complexity and moderate MCP support, enabling AI agents to bridge into the platform for real-time board updates via its robust API.",
    category: "🎨 Design",
    pricing: "freemium",
    url: "https://www.miro.com"
  },
  {
    id: 7,
    name: "Adobe Express",
    description: "Adobe’s AI-powered answer for fast content creation and generative image editing. While the complexity is low, it relies primarily on internal Adobe Firefly models rather than external agent control via MCP.",
    category: "🎨 Design",
    pricing: "freemium",
    url: "https://www.adobe.com/express"
  },
  {
    id: 8,
    name: "Shots.so",
    description: "A specialized tool for creating beautiful product mockups and device-framed screenshots. It features very low complexity and serves as a high-quality final step in the design workflow, with minimal need for MCP integration.",
    category: "🎨 Design",
    pricing: "free",
    url: "https://shots.so"
  },
  {
    id: 9,
    name: "VS Code",
    description: "The industry-standard extensible code editor. It serves as the primary base for most modern development workflows, offering a low complexity start with infinite depth through its massive extension ecosystem.",
    category: "💻 Coding",
    pricing: "free",
    url: "https://code.visualstudio.com",
    recommended: true
  },
  {
    id: 10,
    name: "Claude Code",
    description: "A terminal-based agent optimized for the 'architect' phase. It excels at high-level planning, system design, and complex refactoring where deep reasoning and multi-file context are required.",
    category: "💻 Coding",
    pricing: "paid",
    url: "https://claude.ai",
    recommended: true
  },
  {
    id: 11,
    name: "Git / GitHub",
    description: "The essential foundation for version control and collaborative engineering. It integrates seamlessly with almost all AI agents through MCP, allowing them to read history and submit pull requests directly.",
    category: "💻 Coding",
    pricing: "free",
    url: "https://github.com",
    recommended: true
  },
  {
    id: 12,
    name: "Supabase",
    description: "A full-stack backend platform offering Postgres databases, Authentication, and Edge Functions. It is highly recommended for developers who want to move from idea to production without managing complex server infrastructure.",
    category: "💻 Coding",
    pricing: "freemium",
    url: "https://supabase.com",
    recommended: true
  },
  {
    id: 13,
    name: "OpenAI Codex",
    description: "The heavy-lifter for implementation and writing. Now evolved into a full-scale agent, it is most commonly used for rapid code generation, bug fixing, and completing well-defined features in existing repositories.",
    category: "💻 Coding",
    pricing: "paid",
    url: "https://openai.com/blog/codex"
  },
  {
    id: 14,
    name: "OpenCode",
    description: "A leading open-source local agent that allows you to run coding assistants entirely offline via Ollama. Ideal for developers prioritizing security and deep integration with their local file system.",
    category: "💻 Coding",
    pricing: "free",
    url: "ttps://github.com/sst/opencode"
  },
  {
    id: 15,
    name: "Postman",
    description: "A comprehensive platform for API development and testing. While it has medium complexity, its sophisticated environment management makes it the standard for teams building and documenting large-scale APIs.",
    category: "💻 Coding",
    pricing: "freemium",
    url: "https://www.postman.com"
  },
  {
    id: 16,
    name: "Bruno",
    description: "A lightweight, local-first alternative to traditional API clients. Because it stores collections as plain files, it is perfectly suited for Git versioning and allows AI agents to easily read your API definitions.",
    category: "💻 Coding",
    pricing: "free",
    url: "https://www.usebruno.com"
  },
  {
    id: 17,
    name: "Wolfram|Alpha",
    description: "An omniscient computational engine for mathematical facts and physical constants. It offers medium complexity but provides unparalleled accuracy in solving advanced STEM queries and generating precise plots.",
    category: "⚛️ Math & Physics",
    pricing: "freemium",
    url: "https://www.wolframalpha.com",
    recommended: true
  },
  {
    id: 18,
    name: "Gemini Deep Think",
    description: "A specialized AI reasoning agent optimized for professional research and complex scientific proofs. It features high complexity and excellent MCP potential for executing multi-step mathematical derivations autonomously.",
    category: "⚛️ Math & Physics",
    pricing: "freemium",
    url: "https://gemini.google.com",
    recommended: true
  },
  {
    id: 19,
    name: "Symbolab",
    description: "A meticulous study partner that focuses on providing detailed, line-by-line rule-based reasoning for math problems. Its very low complexity makes it ideal for learning the 'how' behind algebraic and calculus identities.",
    category: "⚛️ Math & Physics",
    pricing: "freemium",
    url: "https://www.symbolab.com"
  },
  {
    id: 20,
    name: "arXiv",
    description: "The primary open-access repository for cutting-edge physics and math research. While the content has high complexity, it serves as the ultimate source of truth for students and researchers mapping out a specific scientific field.",
    category: "⚛️ Math & Physics",
    pricing: "free",
    url: "https://arxiv.org"
  },
  {
    id: 21,
    name: "GeoGebra",
    description: "A dynamic visual environment for exploring geometry, vectors, and 3D calculus. It offers medium complexity and is highly recommended for building visual intuition through interactive, manipulatable geometric models.",
    category: "⚛️ Math & Physics",
    pricing: "free",
    url: "https://www.geogebra.org"
  },
  {
    id: 22,
    name: "Autodesk Revit",
    description: "The primary engine for Building Information Modeling (BIM). It is a high-complexity tool that allows architects and engineers to collaborate on a single data-rich 3D model, ensuring that structural and architectural elements align perfectly before construction.",
    category: "⚙️ Engineering",
    pricing: "paid",
    url: "[https://www.autodesk.com/revit](https://www.autodesk.com/revit)",
    recommended: true
  },
  {
    id: 23,
    name: "AutoCAD",
    description: "The universal gold standard for 2D and 3D technical drafting. While it has a high complexity, its new AI-powered 'Smart Blocks' feature in 2026 automates repetitive placements, making it essential for precise engineering documentation.",
    category: "⚙️ Engineering",
    pricing: "paid",
    url: "[https://www.autodesk.com/products/autocad](https://www.autodesk.com/products/autocad)",
    recommended: true
  },
  {
    id: 24,
    name: "Snaptrude",
    description: "A modern, cloud-native design tool that acts like a collaborative 'Google Docs' for 3D modeling. It offers medium complexity and utilizes AI agents to automate floor planning and site compliance, significantly speeding up the schematic phase.",
    category: "⚙️ Engineering",
    pricing: "freemium",
    url: "[https://www.snaptrude.com](https://www.snaptrude.com)",
    recommended: true
  },
  {
    id: 25,
    name: "Civil 3D",
    description: "The essential platform for horizontal engineering projects like roads, highways, and land development. It features high complexity and provides intelligent, dynamic models that automatically update drainage and grading as the design changes.",
    category: "⚙️ Engineering",
    pricing: "paid",
    url: "[https://www.autodesk.com/products/civil-3d](https://www.autodesk.com/products/civil-3d)"
  },
  {
    id: 26,
    name: "Rhino 3D",
    description: "A versatile 3D modeler favored for complex, non-rectilinear geometry. With medium complexity, it is highly valued by engineers who use the 'Grasshopper' plugin for computational design to generate intricate patterns via visual programming.",
    category: "⚙️ Engineering",
    pricing: "paid",
    url: "[https://www.rhino3d.com](https://www.rhino3d.com)"
  },
  {
    id: 27,
    name: "Tekla Structures",
    description: "A high-complexity powerhouse focused on structural steel and concrete detailing. It is built for 'constructibility,' ensuring that every nut, bolt, and piece of rebar in a model is accurate enough for direct fabrication.",
    category: "⚙️ Engineering",
    pricing: "paid",
    url: "[https://www.tekla.com](https://www.tekla.com)"
  },
  {
    id: 28,
    name: "SolidWorks",
    description: "A leading parametric CAD tool for mechanical and product engineering. It offers high complexity, allowing engineers to build assembly models where parts are logically linked, ensuring they fit and function together in simulated environments.",
    category: "⚙️ Engineering",
    pricing: "paid",
    url: "[https://www.solidworks.com](https://www.solidworks.com)"
  },
  {
    id: 29,
    name: "FreeCAD",
    description: "A robust, open-source parametric 3D modeler that serves as the best free alternative to professional suites. It features medium complexity and supports everything from mechanical design to building models through its modular workbench system.",
    category: "⚙️ Engineering",
    pricing: "free",
    url: "[https://www.freecad.org](https://www.freecad.org)"
  },
  {
    id: 30,
    name: "VOKA 3D Anatomy",
    description: "A comprehensive 3D atlas that uniquely integrates normal anatomy with gross pathology. It offers medium complexity and is highly recommended for students who need to visualize how clinical diseases physically alter human structures.",
    category: "🩺 Medical",
    pricing: "freemium",
    url: "https://voka.io",
    recommended: true
  },
  {
    id: 31,
    name: "BioRender",
    description: "The premier tool for creating scientifically accurate medical illustrations and research figures. It features low complexity and a massive library of icons, making it the standard for academic posters and medical presentations.",
    category: "🩺 Medical",
    pricing: "freemium",
    url: "https://biorender.com",
    recommended: true
  },
  {
    id: 32,
    name: "OpenEvidence",
    description: "An AI-powered medical search engine that provides evidence-based answers exclusively from peer-reviewed journals. It offers high complexity and serves as a reliable AI agent for clinical research and protocol verification.",
    category: "🩺 Medical",
    pricing: "free",
    url: "https://www.openevidence.com",
    recommended: true
  },
  {
    id: 33,
    name: "Complete Anatomy",
    description: "A high-fidelity 3D anatomy platform featuring advanced simulations of living systems and virtual dissection. While it has high complexity, its realism makes it the top choice for deep anatomical and biomechanical study.",
    category: "🩺 Medical",
    pricing: "paid",
    url: "https://3d4medical.com"
  },
  {
    id: 34,
    name: "DxGPT",
    description: "A specialized diagnostic AI agent designed to help clinicians explore differential diagnoses for complex or rare cases. It offers medium complexity and is an excellent tool for widening the diagnostic net during clinical practice.",
    category: "🩺 Medical",
    pricing: "free",
    url: "https://dxgpt.app"
  },
  {
    id: 35,
    name: "LinkedIn",
    description: "The premier global network for professional branding and white-collar job hunting. It features high complexity due to the need for profile SEO and networking, but offers high AI integration for personalized job matching and automated InMail reaching.",
    category: "💼 Hiring",
    pricing: "freemium",
    url: "https://www.linkedin.com",
    recommended: true
  },
  {
    id: 36,
    name: "Wuzzuf",
    description: "Egypt's leading job platform, tailored specifically for the local corporate and tech market. It offers medium complexity and uses an efficient AI-matching engine to rank your profile for recruiters, making it a staple for anyone seeking full-time roles in Cairo or Alexandria.",
    category: "💼 Hiring",
    pricing: "free",
    url: "https://wuzzuf.net",
    recommended: true
  },
  {
    id: 37,
    name: "Mostaql",
    description: "The largest freelancing marketplace in the Arab world, ranked as the most visited job site in Egypt for 2026. It has high complexity due to its competitive bidding system, but remains the top choice for developers and designers looking for professional Arabic-speaking clients.",
    category: "💼 Hiring",
    pricing: "free",
    url: "https://mostaql.com",
    recommended: true
  },
  {
    id: 38,
    name: "Upwork",
    description: "The global giant for international freelancing and remote contracts. It carries high complexity for newcomers trying to build a reputation, yet offers excellent potential for those seeking high-paying USD-based roles in tech and creative fields.",
    category: "💼 Hiring",
    pricing: "freemium",
    url: "https://www.upwork.com"
  },
  {
    id: 39,
    name: "Qureos",
    description: "An emerging AI-powered recruitment platform that has become a favorite in Egypt this year. It features low complexity as its AI agent handles the heavy lifting of shortlisting and screening, effectively 'selling' your skills to employers automatically.",
    category: "💼 Hiring",
    pricing: "free",
    url: "https://www.qureos.com"
  },
  {
    id: 40,
    name: "Glassdoor",
    description: "A critical research tool for analyzing company cultures, interview processes, and salary benchmarks in Egypt. It has low complexity and is primarily used to gain 'inside' information before committing to an application or offer.",
    category: "💼 Hiring",
    pricing: "free",
    url: "https://www.glassdoor.com"
  },
  {
    id: 41,
    name: "WellFound (AngelList)",
    description: "The best place to find high-growth startup roles and remote tech opportunities. It offers medium complexity and a more direct 'founder-to-candidate' communication style, bypassing the traditional, slower HR hurdles found on larger sites.",
    category: "💼 Hiring",
    pricing: "free",
    url: "https://wellfound.com"
  },
  {
    id: 42,
    name: "Indeed Egypt",
    description: "A high-volume job aggregator that pulls listings from all over the web into one searchable database. It features very low complexity and is best used for a broad, wide-reaching search across multiple industries and experience levels.",
    category: "💼 Hiring",
    pricing: "free",
    url: "https://eg.indeed.com"
  },
  {
    id: 43,
    name: "Gamma",
    description: "An AI-powered design partner that generates full presentations from simple text prompts. It offers very low complexity and is highly recommended for students who need to transform research notes into polished, web-native decks instantly.",
    category: "📊 Presentations",
    pricing: "freemium",
    url: "https://gamma.app",
    recommended: true
  },
  {
    id: 44,
    name: "Microsoft 365 tools",
    description: "The global industry standard for presentations, now enhanced with 'Agent Mode' as the default experience. It offers high complexity but provides unmatched features like Copilot for AI-drafting, real-time web grounding, and seamless MCP integration that allows external AI agents to read and write to your slide decks.",
    category: "📊 Presentations",
    pricing: "paid",
    url: "https://www.microsoft.com/microsoft-365/",
    recommended: true
  },
  {
    id: 45,
    name: "Beautiful.ai",
    description: "A professional presentation tool that uses 'Smart Slides' to maintain perfect design alignment automatically. It features low complexity and is the top choice for lecturers who want a premium look with zero manual formatting effort.",
    category: "📊 Presentations",
    pricing: "freemium",
    url: "[https://www.beautiful.ai](https://www.beautiful.ai)",
    recommended: true
  },
  {
    id: 46,
    name: "Mentimeter",
    description: "An interactive presentation platform designed to increase audience engagement through live polls and real-time feedback. It offers medium complexity and is an essential tool for lecturers who want to create a two-way dialogue during presentations.",
    category: "📊 Presentations",
    pricing: "freemium",
    url: "[https://www.mentimeter.com](https://www.mentimeter.com)",
    recommended: true
  },
  {
    id: 47,
    name: "Canva",
    description: "A versatile visual platform known for its massive template library and intuitive AI design tools. It features low complexity and is ideal for both students and educators who need to create visually stunning, asset-rich slides quickly.",
    category: "📊 Presentations",
    pricing: "freemium",
    url: "[https://www.canva.com](https://www.canva.com)"
  },
  {
    id: 48,
    name: "Prezi",
    description: "A unique zooming presentation tool that emphasizes the relationships between ideas rather than a linear slide flow. It offers medium complexity and includes specialized video features that overlay content onto the presenter's camera feed.",
    category: "📊 Presentations",
    pricing: "freemium",
    url: "[https://prezi.com](https://prezi.com)"
  }
];
