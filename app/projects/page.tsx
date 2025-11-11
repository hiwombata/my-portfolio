import Link from "next/link";
import { projects } from "../../data/projects";

export const metadata = { title: "Projects — Cameron Mount" };

export default function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      <p style={{ color: "#555" }}>Selected work. Click any project for details.</p>

      <div style={{
        display: "grid",
        gap: 16,
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        marginTop: 16
      }}>
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            style={{ border: "1px solid #eee", padding: 16, borderRadius: 12, textDecoration: "none" }}
          >
            <h3 style={{ marginBottom: 6 }}>{p.title} →</h3>
            <p style={{ color: "#666", margin: 0 }}>{p.excerpt}</p>
            <div style={{ marginTop: 8, fontSize: 12, color: "#888" }}>{p.tags.join(" • ")}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
