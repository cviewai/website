import Link from "next/link";
import Image from "next/image";
import { Post } from "@/lib/blog";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="group flex flex-col space-y-4">
      {post.coverImage && (
        <Link href={`/blog/${post.slug}`}>
          <div className="aspect-video overflow-hidden rounded-lg border border-slate-200">
            <Image
              src={post.coverImage}
              alt={`Cover image for ${post.title}`}
              width={800}
              height={450}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Link>
      )}
      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl font-bold leading-tight tracking-tighter text-slate-800 transition-colors group-hover:text-sky-500">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <div className="flex items-center space-x-2 text-sm text-slate-500">
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
        <p className="text-slate-600">{post.excerpt}</p>
      </div>
    </article>
  );
}
