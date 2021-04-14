import moment from "moment";
import Head from "next/head";
import Link from "next/link";
import Post from "../components/Post";
import { getAllPosts } from "../lib/data";
import HeadCover from "../components/HeadCover";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";
import { useRef } from "react";

export default function Home({ posts }) {
  posts.sort(
    (a, b) =>
      moment(b.date).format("MMDDYYYY") - moment(a.date).format("MMDDYYYY")
  );
  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();

  return (
    <div>
      <Head>
        <title>My superBlog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeadCover>
        {/* <h2 className="bg-white mb-10 py-2 px-4 text-5xl shadow"> */}
        <h1 className="text-white mb-10 shadow">
          A wonderful blog made by me!
        </h1>
        <button
          className="bg-yellow-400 rounded py-3 px-6 flex items-center justify-between shadow"
          type="button"
          onClick={executeScroll}
        >
          <IoIosArrowDown className="text-yellow-900" />
          <strong className="ml-2 text-yellow-900">Read the blog!</strong>
        </button>
      </HeadCover>

      <main
        className="mx-auto my-7 w-9/12 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6"
        ref={myRef}
      >
        <h2 className="lg:col-span-3 md:col-span-2 sm:col-span-1 mb-5">
          The lastest articles of blog
        </h2>
        {posts.map((post) => {
          const content = post.content.slice(0, 150);
          const postProps = { ...post, content };
          return (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <article
                className={`col-span-1 border border-gray-400 hover:border-yellow-800 rounded shadow
              hover:bg-yellow-200 hover:text-yellow-900 py-1 px-2 cursor-pointer `}
              >
                <Post {...postProps} isIndex />
              </article>
            </Link>
          );
        })}
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  let allPosts = getAllPosts();
  allPosts = allPosts.map((post) => {
    const { data, slug } = post;
    const date = data.date.toString();
    return {
      ...data,
      date,
      content: data.description,
      slug,
    };
  });

  return {
    props: {
      posts: allPosts,
    }, // will be passed to the page component as props
  };
}
