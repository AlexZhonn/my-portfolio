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
    <div
      className={`w-full overflow-hidden p-px ${isOpen ? "rounded-t-lg" : "rounded-lg"}`}
      style={{
        background:
          "linear-gradient(var(--border-angle, 0deg), #7B2FFE, #2AFADF, #FF6FD8, #7B2FFE)",
        backgroundSize: "300% 300%",
        animation: "border-rotate 4s linear infinite",
      }}
    >
      {/* Card */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-full p-6 cursor-pointer text-left transition-all duration-300 ${
          isOpen ? "rounded-t-[calc(0.5rem-1px)]" : "rounded-[calc(0.5rem-1px)]"
        }`}
        style={{
          background: "linear-gradient(135deg, #1F1030, #0A1931)",
        }}
      >
        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 rounded-[inherit] pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "128px 128px",
          }}
        />

        <div className="relative flex items-start gap-6">
          {/* Left Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              {project.startDate} → {project.endDate}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 max-h-12 overflow-y-auto pr-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 text-xs font-medium text-gray-300 bg-white/6 border border-white/10 rounded-full whitespace-nowrap"
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
            className="w-full px-5 py-3 border-t border-white/6"
            style={{
              background: "linear-gradient(180deg, #150D20, #07101F)",
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
