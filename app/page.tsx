import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header>
        <h1>Yunqing Yang</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects/1">Projects</Link>
        </nav>
      </header>

      <section>
        <h2>Hello, I'm Yunqing 👋</h2>
        <p>
          I’m a cognitive science student passionate about design, human-computer
          interaction, and emerging technologies. I love creating thoughtful,
          intuitive digital experiences that connect people and technology.
        </p>
        <Link href="/projects/1" className="button">View My Work</Link>
      </section>
    </main>
  );
}
