export const navigationItems = [
  {
    label: "Projects",
    href: "/pages/projects",
  },
  {
    label: "Blog",
    href: "/pages/blog",
  },
  {
    label: "Gallery",
    href: "/pages/gallery",
  },
  {
    label: "Experience",
    href: "/pages/experience",
  },
];

export const pagesData = {
  projects: {
    title: "Projects",
    subtitle: "Explore my work and creations",
    type: "grid",
    items: [
      {
        id: 1,
        title: "Gainesville Chinese Christian Church Website",
        url: "https://gcccfl.org",
        image: "/projects/gcccfl.png",
        startDate: "June 2026",
        endDate: "Present",
        description:
          "A website for Gainesville Chinese Christian Church using 'Payload' as Content Management System. Its goal is to enable non-developer to control the content of the website easily without even write one line of code",
        tags: [
          "Next.js",
          "React",
          "Payload",
          "Turso",
          "Content Management System",
        ],
      },
      {
        id: 2,
        title: "Cr4ck",
        image: "/projects/cr4ck.jpeg",
        startDate: "Apr 2026",
        endDate: "Present",
        description:
          "Cr4ck is an AI-powered coding challenge platform built for developers who want to go beyond syntax and actually think in systems. Most coding platforms test whether you can solve a problem. Cr4ck asks how well you designed the solution — your object relationships, your abstractions, your architecture.",
        tags: ["Angular", "PostgreSQL", "Supabase", "TypeScript", "Fastapi"],
      },
    ],
  },
  blog: {
    title: "Blog",
    subtitle: "Thoughts, tutorials, and insights",
    type: "list",
    items: [
      {
        id: 1,
        title: "Stop using ai for your own idea or thinking",
        slug: "stop-using-ai-for-your-own-idea-or-thinking",
        date: "Aug 26, 2026",
        excerpt: "A comprehensive guide to building applications with React.",
        content:
          "This is a placeholder for the full blog post. Content coming soon...",
      },
      {
        id: 2,
        title: "Next.js Best Practices",
        slug: "nextjs-best-practices",
        date: "December 15, 2023",
        excerpt:
          "Learn the best practices for building scalable Next.js applications.",
        content:
          "This is a placeholder for the full blog post. Content coming soon...",
      },
    ],
  },
  gallery: {
    title: "Gallery",
    subtitle: "Visual showcase of my work",
    type: "grid",
    items: [
      {
        id: 1,
        title: "Image One",
        category: "Design",
      },
      {
        id: 2,
        title: "Image Two",
        category: "Photography",
      },
    ],
  },
  experience: {
    title: "Experience",
    subtitle: "My professional journey",
    type: "timeline",
    items: [
      {
        id: 1,
        title: "Web Developer",
        company: "Gainesville Chinese Christian Church",
        date: "June 2026 — Present",
        description: [
          "Eliminated 100% of developer dependency for content updates by architecting a Payload CMS headless backend with 10 collections and 9 global singletons, slashing content workflow overhead by an estimated 90%.",
          "Engineered a high-performance, bilingual architecture across 10+ pages, replacing all legacy static data with dynamic CMS rendering to allow instant, non-technical staff updates.",
          "Designed and deployed a scalable production infrastructure by integrating Cloudflare R2 object storage with Payload’s media pipeline, implementing end-to-end testing via Vitest and Playwright to guarantee site stability and rapid asset loading.",
        ],
        tags: ["Next.js", "Payload", "Turso"],
      },
      {
        id: 2,
        title: "Software Team Member",
        company: "Machine Intelligence Lab (UF)",
        date: "2026 — Present",
        description: [
          "Engineered a fault-tolerant process lifecycle management system with magnet-state polling, enabling autonomous detection and recovery from process failures during competition runs.",
          "Built a camera-based pool triangulation tool to estimate real-time positions of competition props, improving localization accuracy for autonomous mission planning.",
          "Developed hardware-free PID tuning infrastructure, including a simulated odometry publisher and pose-trajectory driver, enabling safe controller validation without physical sub testing.",
        ],
        tags: [
          "C++",
          "Python",
          "ROS2",
          "Embedded Systems",
          "Mathworks",
          "Blender",
        ],
      },
      {
        id: 3,
        title: "Software Engineering Intern",
        company: "Kogna AI",
        date: "October 2026 - March 2026",
        description: [
          "Architected a granular RBAC system to enforce permission-based access control, preventing cross-tenant data leakage across multi-level organizations.",
          "Hardened application security by migrating authentication to server-side sessions with HttpOnly cookies, reducing attack surface from client-side token exposure.",
          "Developed modular backend APIs with FastAPI, reducing code duplication by 30% and accelerating feature deployment cycles by 2 weeks.",
        ],
        tags: ["React", "Node.js", "TypeScript"],
      },
    ],
  },
};
