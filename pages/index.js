import Head from "next/head";
import Link from "next/link";
import Post from "../components/Post";
import { getAllPosts } from "../lib/data";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>My superBlog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto my-7 w-9/12 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <article
                className="col-span-1 border border-gray-400 hover:border-yellow-800 rounded shadow
              hover:bg-yellow-200 hover:text-yellow-900 py-1 px-2 cursor-pointer "
              >
                <Post {...post} isIndex />
              </article>
            </Link>
          )
        )}
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts.map((post) => {
        const { data, content, slug } = post;
        const date = data.date.toString();
        return {
          ...data,
          date,
          content,
          slug,
        };
      }),
    }, // will be passed to the page component as props
  };
}
