export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "image"; src: string; alt?: string; caption?: string };

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: BlogBlock[];
}

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
      {
        id: 3,
        title: "Atxmega128A1U Labs",
        image: "/projects/microp.png",
        startDate: "May 2026",
        endDate: "August 2026",
        description:
          "Completed Several Labs work including DMA, USART, DAC, ADC, Timer, and General Purpose I/O for Atxmega128A1U Microcontroller. The labs are designed to provide hands-on experience with the microcontroller's features and capabilities.",
        tags: ["C", "Embedded Systems", "AVR"],
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
        title: "Stop Using AI for Your Own Idea or Thinking",
        slug: "stop-using-ai-for-your-own-idea-or-thinking",
        date: "Aug 26, 2026",
        excerpt: "Human thinking is very sacred",
        content: [
          {
            type: "paragraph",
            // text: "Recently, I have been playing with my mind for a bit. I just found that it is not a very bad place to play with. It is so powerful that you can control what you think and hence control what you do.",
            text: "still writing it",
          },
        ],
      },
    ] as BlogPost[],
  },
  gallery: {
    title: "Gallery",
    subtitle: "Visual Pictures of My Life",
    type: "grid",
    items: [
      {
        id: 1,
        title: "CSA NSW Worship Subtle Voice & Holy Forever",
        description:
          "First time playing guitar and sharing God’s grace in front of 100+ people with my buddy! So grateful for this opportunity to serve God through music, and excited to see what He has in store next. 🙌🎸",
        category: "Design",
        path: "/gallery/CSA_NSW_GUITAR.JPG",
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
