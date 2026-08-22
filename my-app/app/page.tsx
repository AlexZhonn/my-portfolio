"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Tech/Mechanical Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(100, 150, 255, 0.15) 25%, rgba(100, 150, 255, 0.15) 26%, transparent 27%, transparent 74%, rgba(100, 150, 255, 0.15) 75%, rgba(100, 150, 255, 0.15) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(100, 150, 255, 0.15) 25%, rgba(100, 150, 255, 0.15) 26%, transparent 27%, transparent 74%, rgba(100, 150, 255, 0.15) 75%, rgba(100, 150, 255, 0.15) 76%, transparent 77%, transparent)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Animated circles/orbs */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-60 h-60 bg-purple-600/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-48 h-48 bg-cyan-600/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Hexagon patterns - subtle */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-3"
          viewBox="0 0 1000 1000"
        >
          <defs>
            <pattern
              id="hex"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 100 25 L 100 75 L 50 100 L 0 75 L 0 25 Z"
                fill="none"
                stroke="rgba(100, 150, 255, 0.5)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="1000" height="1000" fill="url(#hex)" />
        </svg>

        {/* Tech lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 1000 1000"
        >
          <line
            x1="0"
            y1="500"
            x2="1000"
            y2="500"
            stroke="rgba(100, 150, 255, 0.3)"
            strokeWidth="2"
          />
          <line
            x1="500"
            y1="0"
            x2="500"
            y2="1000"
            stroke="rgba(100, 150, 255, 0.3)"
            strokeWidth="2"
          />
          <line
            x1="100"
            y1="100"
            x2="900"
            y2="900"
            stroke="rgba(150, 100, 255, 0.2)"
            strokeWidth="1"
          />
          <line
            x1="900"
            y1="100"
            x2="100"
            y2="900"
            stroke="rgba(150, 100, 255, 0.2)"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Name with Signature Background */}
        <div className="relative">
          {/* Signature Background Layer */}
          <div className="flex items-center justify-center">
            <img
              src="/signature.png"
              alt="Zhuen Zhong signature"
              className="w-300 h-auto"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex gap-8 md:gap-12 -mt-8">
          <Link
            href="/projects"
            className="relative px-6 py-3 text-lg font-medium text-gray-400 hover:text-gray-200 transition-all duration-300 group"
          >
            <span className="relative z-10">Projects</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-500 to-gray-600 group-hover:w-full transition-all duration-300" />
          </Link>

          <Link
            href="/blog"
            className="relative px-6 py-3 text-lg font-medium text-gray-400 hover:text-gray-200 transition-all duration-300 group"
          >
            <span className="relative z-10">Blog</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-500 to-gray-600 group-hover:w-full transition-all duration-300" />
          </Link>
        </nav>
      </div>
    </main>
  );
}
