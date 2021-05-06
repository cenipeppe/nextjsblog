import moment from "moment";
import Head from "next/head";
import Link from "next/link";
import Post from "../components/Post";
import { getAllPosts } from "../lib/data";
import HeadCover from "../components/HeadCover";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
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
          className="bg-yellow-400 hover:bg-yellow-900 text-yellow-900 hover:text-yellow-400 rounded py-3 px-6 flex items-center justify-between shadow"
          type="button"
          onClick={executeScroll}
        >
          <IoIosArrowDown />
          <strong className="ml-2">Read the blog!</strong>
        </button>
      </HeadCover>

      <main
        className="mx-auto my-7 w-9/12 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6"
        ref={myRef}
      >
        <div className="lg:col-span-3 md:col-span-2 sm:col-span-1 mb-5 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <div
            className="col-span-1 w-full shadow"
            style={{
              background: `url("https://images.unsplash.com/photo-1616149562385-1d84e79478bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80") no-repeat center center`,
              backgroundSize: "cover",
              height: "450px",
              borderRadius: "1rem",
            }}
          />
          <div className="col-span-1 flex flex-col justify-center px-10">
            <h3 className="my-5">About me</h3>
            <p className="mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
              doloremque, est consequatur officia ipsum vitae similique
              reprehenderit. Deserunt odio inventore mollitia ipsam ipsa odit
              quidem non suscipit, laborum enim accusamus.
            </p>
            <div className="w-full flex justify-around items-center">
              <FaFacebook size="3rem"/>
              <AiFillInstagram size="3rem"/>
              <FaLinkedin size="3rem"/>
            </div>
          </div>
        </div>
        <hr className="lg:col-span-3 md:col-span-2 sm:col-span-1" />
        <h2 className="lg:col-span-3 md:col-span-2 sm:col-span-1 mb-5">
          The lastest blog's articles
        </h2>
        {posts.map((post, index) => {
          const content = post.content.slice(0, 150);
          const postProps = { ...post, content };
          return (
            index < 6 ? <Link href={`/blog/${post.slug}`} key={post.slug}>
              <article
                className={`col-span-1 border border-gray-400 hover:border-yellow-800 rounded shadow
              hover:bg-yellow-200 hover:text-yellow-900 py-1 px-2 cursor-pointer `}
              >
                <Post {...postProps} isIndex />
              </article>
            </Link> : <Link href={`/blog/${post.slug}`} key={post.slug}>
              <h3 className="lg:col-span-3 md:col-span-2 sm:col-span-1">{post.title} <i className="font-light text-gray-600">{moment(post.date).format("MMM-DD-YYYY")}</i></h3>
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
