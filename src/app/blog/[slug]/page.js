import BlogPostClient from "./BlogPostClient";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return { title: `Blog | ${slug}` };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  return <BlogPostClient slug={slug} />;
}