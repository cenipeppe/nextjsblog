import Head from "next/head";
import Post from "../../components/Post";
import { blogPosts } from "../../lib/data";

export default function BlogPage({ title, date, content }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto my-7 w-9/12">
        <Post title={title} date={date} content={content} />
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;

  return {
    props: blogPosts.find((item) => item.slug === params.slug), // will be passed to the page component as props
  };
}
export async function getStaticPaths() {
  return {
    paths: blogPosts.map((item) => ({ params: { ...item } })),
    fallback: false,
  };
}
