import Link from "next/link";
import { pagesData } from "@/app/data";
import { notFound } from "next/navigation";
import ProjectCard from "@/app/components/ProjectCard";
import ExperienceTimeline from "@/app/components/ExperienceTimeline";
import SnowBackground from "@/app/components/SnowBackground";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(pagesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = pagesData[slug as keyof typeof pagesData];

  if (!page) {
    return {};
  }

  return {
    title: `${page.title} | Portfolio`,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const page = pagesData[slug as keyof typeof pagesData];

  if (!page) {
    notFound();
  }

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
          {/* Header */}
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl text-center sm:text-6xl font-impact uppercase text-gray-100">
              {page.title}
            </h1>
            <p className="text-gray-400 text-lg italic">{page.subtitle}</p>
          </div>

          {/* Dynamic Content Based on Page Type */}
          {slug === "experience" && (
            <ExperienceTimeline items={pagesData.experience.items} />
          )}

          {(slug === "software-projects" || slug === "hardware-projects") && (
            <div className="flex flex-col w-full gap-4 pb-16">
              {pagesData[slug].items.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}

          {page.type === "grid" && slug === "gallery" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {pagesData.gallery.items.map((item) => (
                <div
                  key={item.id}
                  className="group relative p-6 rounded-lg border border-gray-700 hover:border-gray-500 transition-all duration-300 bg-gray-900/30 hover:bg-gray-900/50"
                >
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {item.description || item.category}
                  </p>
                  {item.path && <img src={item.path} alt="" />}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
