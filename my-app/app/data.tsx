export const navigationItems = [
  {
    label: "About me",
    href: "/pages/about-me",
  },
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
  "about-me": {
    title: "About me",
    subtitle: "Curiosity, ownership, and a competitive streak",
    paragraphs: [
      "My interest in computers started in an unusual place: Counter-Strike. I loved playing, but I was just as fascinated by the console: memorizing commands, tweaking settings, and putting my character’s arms at ridiculously weird angles just because I could. Somewhere along the way, that curiosity about making things behave differently turned into a love for building things myself.",
      "Today, I’m a Computer Engineering student at the University of Florida who enjoys both hardware and software. From autonomous underwater vehicles at UF’s Machine Intelligence Lab to backend systems at Kogna AI, I’m happiest when I’m building something people can actually use and figuring out something I haven’t built before.",
      "The quality I value most in myself is ownership. When I take responsibility for something, I care about the outcome, beyond simply finishing my part. I want to understand the problem, see it through, and be someone my teammates can count on. That same mindset shapes how I build: start with the people who will use it, understand what they need, and keep improving until it works for them.",
      "Before engineering became my main focus, I seriously considered competitive esports. I reached the top 1,000 in Valorant, the top 300 in CS:GO, and the top 10 in NBA 2K Play Now. That competitive side is still very much part of me, along with the drive to practice, learn, and get better.",
      "Outside of engineering, you’ll usually find me playing guitar with my worship team, serving my community, or at the gym. Whether I’m working on a project or making music with others, I enjoy being part of something that brings people together.",
    ],
  },
  "software-projects": {
    title: "Software Projects",
    subtitle: "Web applications and software systems",
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
      {
        id: 3,
        title: "Palettle",
        image: "/projects/palettle.png",
        startDate: "Oct 2026",
        endDate: "Present",
        description:
          "Palettle is a puzzle game that user needs to guess the each of the RGB value of a Color [Coding Without AI]",
        tags: ["Express", "React", "JavaScript"],
      },
    ],
  },
  "hardware-projects": {
    title: "Hardware Projects",
    subtitle: "Microcontrollers and embedded systems",
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
