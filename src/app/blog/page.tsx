import { getAllPosts } from "@/lib/blog";
import PostCard from "@/components/blog/PostCard";

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tighter text-slate-900 sm:text-5xl">
            The CrystalView Blog
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Insights on AI, finance, and technology.
          </p>
        </header>

        <div className="grid gap-12">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
