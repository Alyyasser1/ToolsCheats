# 🧰 [Project Name]

A curated directory of the best tools for students, developers, designers, engineers, and more — organized by category and built to help you find the right tool fast.

> **Live at:** [your-url-here.com](https://your-url-here.com)

---

## 📖 About

This project is a community-maintained list of tools across categories like Design, Coding, Math & Physics, Engineering, Medical, Hiring, and Presentations. Every tool includes a description, pricing model, and a recommended flag for standout picks.

The goal is simple: save people the time of discovering what's worth using.

---

## 🗂️ Categories

| Emoji | Category       |
| ----- | -------------- |
| 🎨    | Design         |
| 💻    | Coding         |
| ⚛️    | Math & Physics |
| ⚙️    | Engineering    |
| 🩺    | Medical        |
| 💼    | Hiring         |
| 📊    | Presentations  |

---

## 🤝 How to Contribute

Contributions are very welcome — whether you're a developer or not.

---

### 🧑‍💻 If you're a developer

1. **Fork** this repository
2. **Clone** your fork locally
   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```
3. **Create a branch** for your change
   ```bash
   git checkout -b add-tool-name
   ```
4. **Edit `tools.ts`** and add your tool following this structure:
   ```ts
   {
     id: 49,                        // next available number
     name: "Tool Name",
     description: "A clear, one to two sentence description of what the tool does and who it's for.",
     category: "💻 Coding",         // must match an existing category
     pricing: "free",               // "free" | "paid" | "freemium"
     url: "https://tool-url.com",
     recommended: true              // optional — only for standout tools
   }
   ```
5. **Commit and push**
   ```bash
   git commit -m "add: Tool Name to Coding category"
   git push origin add-tool-name
   ```
6. **Open a Pull Request** — I'll review and merge it

#### Guidelines

- Keep descriptions concise and factual, not promotional
- Use a plain `https://` URL — no Markdown link syntax inside the string
- Don't duplicate a tool that already exists in the same category
- `recommended` is optional — use it sparingly for genuinely standout tools

---

### 🙋 If you're not a developer

No problem — just **open an Issue** using the tool suggestion template:

👉 [Suggest a Tool](https://github.com/your-org/your-repo/issues/new?template=suggest_a_tool.md)

Fill in the tool name, URL, category, pricing, and a short description — I'll take care of adding it.

---

## 🐛 Reporting Issues

Found a broken link, wrong pricing info, or outdated description?

👉 [Open an Issue](https://github.com/your-org/your-repo/issues/new)

---

## 📄 License

MIT — do whatever you want with it.
