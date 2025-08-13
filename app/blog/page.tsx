import Link from "next/link";
import { getBlogs } from "../_lib/data-services";
import type { BlogPost } from "../_lib/types";

export default async function Page() {
  const blogs: BlogPost[] | null = await getBlogs();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-6">
        {blogs?.map((blog: BlogPost) => (
          <li key={blog.id} className="border-b pb-4">
            <Link
              href={`/blog/${blog.slug}`}
              className="text-xl font-semibold hover:underline"
            >
              {blog.title}
            </Link>
            {blog.excerpt && (
              <p className="text-gray-600 mt-2">{blog.excerpt}</p>
            )}
            {blog.created_at && (
              <p className="text-sm text-gray-500 mt-1">
                {new Date(blog.created_at).toLocaleDateString()}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
