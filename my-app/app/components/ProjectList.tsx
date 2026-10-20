import type { ComponentProps } from "react";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
  items: ComponentProps<typeof ProjectCard>["project"][];
}

export default function ProjectList({ items }: ProjectListProps) {
  return (
    <div className="flex flex-col w-full gap-4 pb-16">
      {items.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
