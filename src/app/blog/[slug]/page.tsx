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
  params: { slug: string };
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
  params: { slug: string };
}) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    return notFound();
  }

  return (
    <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <article className="prose prose-slate mx-auto max-w-3xl lg:prose-lg">
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
          <div className="relative aspect-video overflow-hidden rounded-lg border border-slate-200">
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
    </main>
  );
}
