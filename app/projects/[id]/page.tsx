export default function ProjectsPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#333" }}>Projects</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ margin: "1rem 0", borderBottom: "1px solid #ddd", paddingBottom: "0.5rem" }}>
          <h3>✨ Interactive Portfolio</h3>
          <p>A minimalist web portfolio built with Next.js and custom styling.</p>
        </li>
        <li style={{ margin: "1rem 0", borderBottom: "1px solid #ddd", paddingBottom: "0.5rem" }}>
          <h3>🧠 AI Design Assistant</h3>
          <p>A concept for a creative AI that helps designers explore new ideas.</p>
        </li>
      </ul>
    </main>
  );
}
