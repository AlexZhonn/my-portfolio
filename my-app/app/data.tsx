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
        startDate: "Jan 2023",
        endDate: "Mar 2023",
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
        title: "Project Two",
        image: "/projects/project2.png",
        startDate: "Apr 2023",
        endDate: "Jun 2023",
        description: "Another great project with innovative features",
        tags: ["Next.js", "Tailwind"],
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
        title: "Getting Started with React",
        date: "January 1, 2024",
        excerpt: "A comprehensive guide to building applications with React.",
      },
      {
        id: 2,
        title: "Next.js Best Practices",
        date: "December 15, 2023",
        excerpt:
          "Learn the best practices for building scalable Next.js applications.",
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
};
