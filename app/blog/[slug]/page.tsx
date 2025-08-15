import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogBySlug } from "@/app/_lib/data-services";
import ReactMarkdown from "react-markdown";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) notFound();

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <Link
        href="/blog"
        className="inline-flex items-center text-sm mb-6 px-3 py-1.5 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-1 transition"
      >
        Back to all blogs
      </Link>
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      {blog.created_at && (
        <p className="text-sm text-gray-500 mb-6">
          {new Date(blog.created_at).toLocaleDateString()}
        </p>
      )}
      {blog.cover_image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={blog.cover_image}
          alt={blog.title}
          className="w-full h-auto rounded mb-6"
        />
      )}
      {blog.content && (
        <div className="prose max-w-none">
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </div>
      )}
    </article>
  );
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) return {};
  return {
    title: blog.title,
    description: blog.excerpt ?? undefined,
  };
}
