"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { navigationItems } from "./data";

const SnowText = dynamic(() => import("./components/SnowText"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center select-none relative">
      {/* Snow-dropping "Alex" background */}
      <div className="fixed inset-0 z-0 w-screen h-screen">
        <SnowText />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 pointer-events-none">
        {/* Name with Signature Background */}
        <div className="relative">
          {/* Signature Background Layer */}
          <div className="flex items-center justify-center">
            <img
              src="/signature.png"
              alt="Zhuen Zhong signature"
              className="w-300 h-auto pointer-events-none select-none"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex gap-8 md:gap-12 -mt-8">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-6 py-3 text-lg font-medium text-gray-400 hover:text-gray-200 transition-all duration-300 group pointer-events-auto"
            >
              <span className="relative z-10">{item.label}</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-500 to-gray-600 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>
        <div className="text-gray-600 text-center max-w-xl font-stretch-50%">
          A Computer Engineering Student that prioritizes Ownership and
          Innovation
        </div>
      </div>
    </main>
  );
}
