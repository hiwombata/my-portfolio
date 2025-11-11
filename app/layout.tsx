export const metadata = {
  title: "Cameron Mount — Portfolio",
  description: "Portfolio built with Next.js App Router",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" }}>
        <header style={{ padding: "16px 24px", borderBottom: "1px solid #eee" }}>
          <nav style={{ display: "flex", gap: 16, alignItems: "center", maxWidth: 960, margin: "0 auto" }}>
            <a href="/" style={{ fontWeight: 700, textDecoration: "none" }}>CM</a>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="/projects">Projects</a>
              <a href="/about">About</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>
        </header>
        <main style={{ maxWidth: 960, margin: "0 auto", padding: "24px" }}>{children}</main>
        <footer id="contact" style={{ padding: 24, borderTop: "1px solid #eee", marginTop: 32, fontSize: 12, textAlign: "center" }}>
          <div style={{ marginBottom: 8 }}>Get in touch: <a href="mailto:you@example.com">you@example.com</a></div>
          <div>© {new Date().getFullYear()} Cameron Mount</div>
        </footer>
      </body>
    </html>
  );
}
