import Head from "next/head";
import Post from "../../components/Post";
import { getAllPosts } from "../../lib/data";

export default function BlogPage(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto my-7 w-9/12">
        <Post {...props} showHomeButton />
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const allPosts = getAllPosts();
  const { data, content } = allPosts.find((post) => post.slug === params.slug)
  
  return {
    props: {
      ...data,
      date: data.date.toString(),
      content,
    }, // will be passed to the page component as props
  };
}
export async function getStaticPaths() {
  const allPosts = getAllPosts();
  return {
    paths: allPosts.map((post) => ({ params: { ...post } })),
    fallback: false,
  };
}
