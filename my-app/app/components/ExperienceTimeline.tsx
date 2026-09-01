"use client";

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  date: string;
  description: string[];
  tags: string[];
}

interface Props {
  items: ExperienceItem[];
}

export default function ExperienceTimeline({ items }: Props) {
  return (
    <div className="relative w-full py-8">
      {/* Vertical line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gray-700 md:-translate-x-px" />

      <div className="flex flex-col gap-12">
        {items.map((item, i) => {
          const isLeft = i % 2 === 0;

          return (
            <div
              key={item.id}
              className="relative flex items-start md:items-center"
            >
              {/* Dot on the line */}
              <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-gray-400 rounded-full -translate-x-1/2 mt-2 md:mt-0 z-10 ring-4 ring-black" />

              {/* Card */}
              <div
                className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                  isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <div className="group p-6 rounded-lg border border-gray-700 hover:border-gray-500 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-900/70">
                  <p className="text-sm text-gray-500 mb-1 font-mono">
                    {item.date}
                  </p>
                  <h3 className="text-xl font-semibold text-gray-100 mb-1 group-hover:text-gray-50 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3 italic">
                    {item.company}
                  </p>
                  <ul className="text-gray-400 mb-4 text-sm leading-relaxed list-disc list-inside space-y-1">
                    {item.description.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-3 py-1 text-xs text-gray-400 bg-gray-800/80 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
