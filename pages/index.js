import Head from "next/head";
import Link from "next/link";
import { blogPosts } from "../lib/data";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My superBlog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto my-7 w-9/12 space-y-4">
        {blogPosts.map((post) => (
          <article
            className="border border-gray-400 hover:border-yellow-800 rounded shadow hover:bg-yellow-200 hover:text-yellow-900 py-1 px-2"
            key={post.slug}
          >
            <Link href={`/blog/${post.slug}`}>
              <a>
                <h2>{post.title}</h2>
              </a>
            </Link>
            <i>{post.date}</i>
            <p>{post.content}</p>
          </article>
        ))}
      </main>
    </div>
  );
}
