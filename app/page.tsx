import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div style={{ display: "grid", gap: 24, gridTemplateColumns: "140px 1fr", alignItems: "center", marginBottom: 24 }}>
        <div style={{ width: 120, height: 120, position: "relative", borderRadius: "50%", overflow: "hidden", border: "1px solid #eee" }}>
          {/* Put public/avatar.png in /public or remove this Image */}
          <Image src="/avatar.png" alt="Avatar" fill sizes="120px" />
        </div>
        <div>
          <h1 style={{ fontSize: 36, margin: 0 }}>Cameron Mount</h1>
          <p style={{ color: "#555", margin: "8px 0 0" }}>
            Frontend developer • Interaction design • Next.js & TypeScript
          </p>
          <div style={{ marginTop: 12, display: "flex", gap: 12 }}>
            <Link href="/projects" style={{ padding: "8px 12px", border: "1px solid #ddd", borderRadius: 8, textDecoration: "none" }}>View Projects</Link>
            <Link href="/about" style={{ padding: "8px 12px", border: "1px solid #ddd", borderRadius: 8, textDecoration: "none" }}>About</Link>
          </div>
        </div>
      </div>

      <h2 style={{ marginTop: 24 }}>Highlights</h2>
      <ul style={{ color: "#555", lineHeight: 1.6 }}>
        <li>Built a color harmony tool (triad/analogous/mono) with HSL controls.</li>
        <li>Created a dynamic project system using static params for blazing-fast pages.</li>
        <li>Accessible, responsive UI with minimal dependencies.</li>
      </ul>

      <div style={{ marginTop: 16 }}>
        <Link href="/projects" style={{ textDecoration: "none" }}>
          → Explore all projects
        </Link>
      </div>
    </section>
  );
}
