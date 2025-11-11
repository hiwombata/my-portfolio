import { notFound } from "next/navigation";
import { projects } from "/data/projects";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Params }) {
  const project = projects.find((p) => p.slug === params.slug);
  return { title: project ? `${project.title} — Project` : "Project" };
}

export default function ProjectPage({ params }: { params: Params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <article>
      <a href="/projects" style={{ textDecoration: "none" }}>← Back to Projects</a>
      <h1 style={{ marginTop: 12 }}>{project.title}</h1>
      <p style={{ color: "#555" }}>{project.excerpt}</p>

      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "1fr", marginTop: 16 }}>
        <section style={{ border: "1px solid #eee", padding: 16, borderRadius: 12 }}>
          <h3 style={{ marginTop: 0 }}>Overview</h3>
          <p style={{ color: "#555" }}>{project.content}</p>
        </section>

        {project.links?.length ? (
          <section style={{ border: "1px solid #eee", padding: 16, borderRadius: 12 }}>
            <h3 style={{ marginTop: 0 }}>Links</h3>
            <ul>
              {project.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>

      <p style={{ marginTop: 12, fontSize: 12, color: "#888" }}>
        Tags: {project.tags.join(" • ")}
      </p>
    </article>
  );
}

