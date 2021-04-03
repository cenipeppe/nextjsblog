import Head from "next/head";
import Link from "next/link";
import { blogPosts } from "../lib/data";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rambling Polyglot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Rambling Polyglot</h1>

        <section>
          {blogPosts.map((post) => (
            <div key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <a>
                  <h3>{post.title}</h3>
                </a>
              </Link>
              <i>{post.date}</i>
              <p>{post.content}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
