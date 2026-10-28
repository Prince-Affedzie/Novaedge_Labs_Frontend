"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { getPosts } from "@/lib/api";

export default function BlogClient() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then((data) => {
        setPosts(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch posts:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading eyebrow="Blog" title="Insights for Ghanaian businesses" />
        {loading ? (
          <p className="mt-12 text-center text-slate-500">Loading posts...</p>
        ) : posts.length === 0 ? (
          <p className="mt-12 text-center text-slate-500">No posts yet. Check back soon.</p>
        ) : (
          <div className="mx-auto mt-12 grid max-w-3xl gap-6">
            {posts.map((p) => (
              <Link key={p._id} href={`/blog/${p.slug}`} className="rounded-2xl border border-slate-200 p-6 transition hover:shadow-md">
                <p className="text-xs text-slate-500">{new Date(p.createdAt).toLocaleDateString("en-GB", { dateStyle: "long" })}</p>
                <h2 className="mt-1 text-xl font-semibold text-slate-900">{p.title}</h2>
                {p.excerpt && <p className="mt-2 text-sm text-slate-600">{p.excerpt}</p>}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}