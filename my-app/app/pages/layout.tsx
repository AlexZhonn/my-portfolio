import type { ReactNode } from "react";
import Link from "next/link";
import SnowBackground from "@/app/components/SnowBackground";

export default function PagesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SnowBackground />
      <main className="relative z-10 min-h-screen flex flex-col justify-start pt-20">
        <Link
          href="/"
          className="mt-3 mb-4 ml-10 text-gray-400 hover:text-gray-200 transition-colors duration-300 inline-block"
        >
          ← Back to Home
        </Link>
        <div className="flex flex-col items-center w-full max-w-4xl mx-auto px-4 gap-8">
          {children}
        </div>
      </main>
    </>
  );
}
