import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogBySlug } from "@/app/_lib/data-services";

interface BlogPageProps {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const blog = await getBlogBySlug(params.slug);
  if (!blog) notFound();
  const isHtml =
    typeof blog.content === "string" && blog.content.trim().startsWith("<");

  function convertMarkdownToHtml(markdown: string): string {
    const escapeHtml = (str: string) =>
      str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#039;");

    const paragraphs = markdown.trim().split(/\r?\n\s*\r?\n/);
    const htmlParagraphs = paragraphs.map((para) => {
      const withLineBreaks = escapeHtml(para).replace(/\r?\n/g, "<br/>");
      return `<p>${withLineBreaks}</p>`;
    });
    return htmlParagraphs.join("\n");
  }

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
      {blog.content &&
        (isHtml ? (
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        ) : (
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{
              __html: convertMarkdownToHtml(blog.content),
            }}
          />
        ))}
    </article>
  );
}

export async function generateMetadata({ params }: BlogPageProps) {
  const blog = await getBlogBySlug(params.slug);
  if (!blog) return {};
  return {
    title: blog.title,
    description: blog.excerpt ?? undefined,
  };
}
