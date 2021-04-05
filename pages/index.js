import Head from "next/head";
import Link from "next/link";
import moment from "moment";
import { blogPosts } from "../lib/data";
import Post from "../components/Post";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My superBlog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto my-7 w-9/12 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-9">
        {blogPosts.map((post) => (
          <Link href={`/blog/${post.slug}`}>
            <article
              className="col-span-1 border border-gray-400 hover:border-yellow-800 rounded shadow
               hover:bg-yellow-200 hover:text-yellow-900 py-1 px-2 cursor-pointer "
              key={post.slug}
            >
              <Post {...post} isIndex />
            </article>
          </Link>
        ))}
      </main>
    </div>
  );
}
