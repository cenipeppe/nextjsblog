import moment from "moment";
import Head from "next/head";
import Link from "next/link";
import Post from "../components/Post";
import { getAllPosts } from "../lib/data";
import HomeCover from "../components/HomeCover";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";
import { useRef } from "react";

export default function Home({ posts }) {
  const srcImg =
    "https://images.unsplash.com/photo-1617641199643-ad24e3c12744?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80";
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

      <HomeCover src={srcImg} className="flex flex-col justify-center items-center p-5">
        {/* <h2 className="bg-white mb-10 py-2 px-4 text-5xl shadow"> */}
        <h2 className="text-white mb-10 text-5xl shadow">
          A wonderful blog made by me!
        </h2>
        <button
          className="bg-yellow-400 rounded py-3 px-6 flex items-center justify-between shadow"
          type="button"
          onClick={executeScroll}
        >
          <IoIosArrowDown className="text-yellow-900"/>
          <span className="ml-2 text-yellow-900">Read the blog!</span>
        </button>
      </HomeCover>

      <main
        className="mx-auto my-7 w-9/12 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6"
        ref={myRef}
      >
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
