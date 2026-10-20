import type { Metadata } from "next";
import { pagesData } from "@/app/data";
import PageHeader from "@/app/components/PageHeader";

const page = pagesData["gallery"];

export const metadata: Metadata = {
  title: `${page.title} | Portfolio`,
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader title={page.title} subtitle={page.subtitle} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {page.items.map((item) => (
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
    </>
  );
}
