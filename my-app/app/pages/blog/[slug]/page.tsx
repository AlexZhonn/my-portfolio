import Link from "next/link";
import { pagesData } from "@/app/data";
import { notFound } from "next/navigation";
import SnowBackground from "@/app/components/SnowBackground";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return pagesData.blog.items.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = pagesData.blog.items.find((p) => p.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Blog | Portfolio`,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = pagesData.blog.items.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <SnowBackground />
      <main className="relative z-10 min-h-screen flex flex-col justify-start pt-20">
        <Link
          href="/pages/blog"
          className="mt-3 mb-4 ml-10 text-gray-400 hover:text-gray-200 transition-colors duration-300"
        >
          ← Back to Blog
        </Link>

        <article className="flex flex-col w-full max-w-3xl mx-auto px-4 gap-6">
          <header className="flex flex-col gap-3">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-100">
              {post.title}
            </h1>
            <p className="text-gray-500 text-sm">Published on {post.date}</p>
          </header>

          <div className="text-gray-300 leading-relaxed">
            <p>{post.content}</p>
          </div>
        </article>
      </main>
    </>
  );
}
