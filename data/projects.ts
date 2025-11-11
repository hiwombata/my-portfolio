export type Project = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "color-harmony",
    title: "Color Harmony Tool",
    excerpt: "Explore triad, analogous, and monochrome palettes with HSL.",
    content:
      "A tiny tool for palette exploration. It demonstrates client components and simple state logic. Built with Next.js App Router.",
    tags: ["Next.js", "Interactions", "HSL"],
    links: [{ label: "Live Demo", href: "/" }],
  },
  {
    slug: "route-magic",
    title: "Route Magic",
    excerpt: "Dynamic routes generated at build time using generateStaticParams.",
    content:
      "This project shows how to map data to routes without creating a file per project.",
    tags: ["Next.js", "App Router", "SSG"],
  },
  {
    slug: "clean-ui",
    title: "Clean UI Kit",
    excerpt: "Minimal, accessible components with zero dependencies.",
    content:
      "A small set of layout and typography patterns used across the site.",
    tags: ["Design", "Accessibility"],
  },
];
