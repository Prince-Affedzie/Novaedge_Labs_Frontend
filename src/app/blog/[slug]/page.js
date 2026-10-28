import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost } from "@/lib/api";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  return post
    ? { title: post.title, description: post.excerpt }
    : { title: "Post not found" };
}

export default function PostPage({ params }) {
  return (
    <Suspense fallback={<p className="section text-center text-slate-500">Loading article…</p>}>
      <Post params={params} />
    </Suspense>
  );
}

async function Post({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

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
        <div className="mt-8 whitespace-pre-line leading-relaxed text-slate-700">{post.content}</div>
      </div>
    </article>
  );
}