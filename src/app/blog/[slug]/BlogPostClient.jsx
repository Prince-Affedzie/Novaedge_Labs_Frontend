"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost } from "@/lib/api";

export default function BlogPostClient({ slug }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getPost(slug)
      .then((data) => {
        if (!data) {
          setError(true);
        } else {
          setPost(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch post:", err);
        setError(true);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="section text-center text-slate-500 py-20">
        Loading article...
      </div>
    );
  }

  if (error || !post) {
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
        <div className="mt-8 whitespace-pre-line leading-relaxed text-slate-700">
          {post.content}
        </div>
      </div>
    </article>
  );
}