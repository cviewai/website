import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    return notFound();
  }

  return {
    title: `${post.title} | CrystalView`,
    description: post.excerpt,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <article className="prose prose-slate mx-auto lg:prose-lg">
          <header className="mb-8">
            <h1 className="text-4xl font-bold tracking-tighter text-slate-900 sm:text-5xl">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center space-x-2 text-slate-500">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>·</span>
              <span>{post.author}</span>
            </div>
          </header>

          {post.coverImage && (
            <div className="relative aspect-video overflow-hidden rounded-lg border border-slate-200 mb-8">
              <Image
                src={post.coverImage}
                alt={`Cover image for ${post.title}`}
                fill
                className="object-cover"
              />
            </div>
          )}

          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
