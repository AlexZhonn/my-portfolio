"use client";

import { useState } from "react";
import Image from "next/image";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    image?: string;
    startDate: string;
    endDate: string;
    description: string;
    tags: string[];
    url?: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full overflow-hidden">
      {/* Card */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-6 cursor-pointer text-left transition-all duration-300 border border-gray-800 hover:border-gray-600 ${
          isOpen ? "rounded-t-lg" : "rounded-lg"
        }`}
        style={{
          background: "linear-gradient(135deg, #111114, #18181f)",
        }}
      >
        <div className="flex items-start gap-6">
          {/* Left Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-gray-100 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-500 text-sm mb-4">
              {project.startDate} → {project.endDate}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 max-h-12 overflow-y-auto pr-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 text-xs font-medium text-gray-400 bg-white/5 border border-white/10 rounded-full whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Image */}
          {project.image && (
            <div className="shrink-0 w-48 rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-auto object-contain"
              />
            </div>
          )}
        </div>
      </button>

      {/* Drawer */}
      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
        }}
      >
        <div className="overflow-hidden">
        <div
          className="w-full rounded-b-lg border border-t-0 border-gray-800 px-5 py-3"
          style={{
            background: "linear-gradient(180deg, #0e0e12, #0a0a0e)",
          }}
        >
          <div className="flex items-center gap-4">
            <p className="text-gray-500 text-sm flex-1">
              {project.description}
            </p>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-3 py-1.5 text-sm font-medium rounded text-gray-400 border border-gray-700 hover:text-gray-200 hover:border-gray-500 transition-colors duration-200"
              >
                Visit Project →
              </a>
            )}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
