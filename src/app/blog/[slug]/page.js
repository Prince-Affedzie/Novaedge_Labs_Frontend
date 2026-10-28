import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getPosts } from "@/lib/api";

// 1. Allow fallback to dynamic rendering on demand for routes not generated at build time
export const dynamicParams = true;

// 2. Prevent build failures if backend is offline during Vercel's prerender phase
export async function generateStaticParams() {
  try {
    const posts = await getPosts();
    if (!posts || !Array.isArray(posts)) return [];
    return posts.map((p) => ({ slug: p.slug }));
  } catch (error) {
    console.warn("Skipping static page generation during build step:", error.message);
    return []; // Return empty array so Vercel build succeeds cleanly
  }
}

// 3. Gracefully handle metadata generation
export async function generateMetadata({ params }) {
  try {
    const { slug } = await params;
    const post = await getPost(slug);
    return post ? { title: post.title, description: post.excerpt } : { title: "Post not found" };
  } catch {
    return { title: "Blog" };
  }
}

// 4. Main Page Component
export default async function PostPage({ params }) {
  const { slug } = await params;

  let post = null;
  try {
    post = await getPost(slug);
  } catch (error) {
    console.error("Failed to fetch blog post:", error);
  }

  if (!post) {
    notFound();
  }

  return (
    <article className="section">
      <div className="container-x max-w-3xl">
        <Link href="/blog" className="text-sm font-medium text-indigo-600 hover:underline">
          ← Back to blog
        </Link>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          {new Date(post.createdAt).toLocaleDateString("en-GB", { dateStyle: "long" })}
        </p>
        {/* Plain text for now. Swap for a markdown renderer later. */}
        <div className="mt-8 whitespace-pre-line leading-relaxed text-slate-700">
          {post.content}
        </div>
      </div>
    </article>
  );
}