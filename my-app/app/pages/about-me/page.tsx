import type { Metadata } from "next";
import { pagesData } from "@/app/data";
import PageHeader from "@/app/components/PageHeader";
import Link from "next/link";

const page = pagesData["about-me"];

export const metadata: Metadata = {
  title: `${page.title} | Portfolio`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title={page.title} subtitle={page.subtitle} />
      <article
        aria-label="About me"
        className="w-full max-w-3xl mb-16 rounded-lg border border-gray-700 bg-gray-900/50 p-6 sm:p-10"
      >
        <div className="space-y-6 text-base sm:text-lg leading-relaxed text-gray-300">
          {page.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <Link
          href="/pages/experience"
          className="mt-8 inline-block text-gray-100 underline underline-offset-4 hover:text-gray-400 transition-colors"
        >
          Explore my experience →
        </Link>
      </article>
    </>
  );
}
