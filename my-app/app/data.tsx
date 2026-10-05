export const navigationItems = [
  {
    label: "Software Projects",
    href: "/pages/software-projects",
  },
  {
    label: "Hardware Projects",
    href: "/pages/hardware-projects",
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
  "software-projects": {
    title: "Software Projects",
    subtitle: "Web applications and software systems",
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
          "A website for Gainesville Chinese Christian Church built with Next.js and Payload CMS, enabling non-technical staff to update content without writing code.",
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
        startDate: "April 2026",
        endDate: "Present",
        description:
          "Cr4ck is an AI-powered coding challenge platform built for developers who want to go beyond syntax and actually think in systems. Most coding platforms test whether you can solve a problem. Cr4ck asks how well you designed the solution — your object relationships, your abstractions, your architecture.",
        tags: ["Angular", "PostgreSQL", "Supabase", "TypeScript", "FastAPI"],
      },
    ],
  },
  "hardware-projects": {
    title: "Hardware Projects",
    subtitle: "Microcontrollers and embedded systems",
    type: "grid",
    items: [
      {
        id: 3,
        title: "ATxmega128A1U Labs",
        image: "/projects/microp.png",
        startDate: "May 2026",
        endDate: "August 2026",
        description:
          "Hands-on labs using the ATxmega128A1U microcontroller, covering DMA, USART, DAC, ADC, timers, and general-purpose I/O. Developed embedded C programs to explore peripheral control and hardware interfaces.",
        tags: ["C", "Embedded Systems", "AVR"],
      },
    ],
  },
  gallery: {
    title: "Gallery",
    subtitle: "Snapshots of my life",
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
          "ROS 2",
          "Embedded Systems",
          "MathWorks",
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
