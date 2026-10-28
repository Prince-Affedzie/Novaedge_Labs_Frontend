import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { getPosts } from "@/lib/api";

export default async function BlogClient() {
  const posts = await getPosts();

  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading eyebrow="Blog" title="Insights for Ghanaian businesses" />
        {posts.length === 0 ? (
          <p className="mt-12 text-center text-slate-500">No posts yet. Check back soon.</p>
        ) : (
          <div className="mx-auto mt-12 grid max-w-3xl gap-6">
            {posts.map((p) => (
              <Link
                key={p._id}
                href={`/blog/${p.slug}`}
                className="rounded-2xl border border-slate-200 p-6 transition hover:shadow-md"
              >
                <p className="text-xs text-slate-500">
                  {new Date(p.createdAt).toLocaleDateString("en-GB", { dateStyle: "long" })}
                </p>
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