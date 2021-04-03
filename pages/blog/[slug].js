import Head from "next/head";
import Link from "next/link";
import { blogPosts } from "../../lib/data";

export default function BlogPage({ title, date, content }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Link href="/">
                    <a>{`<- Back to home`}</a>
                </Link>
                <h1>{title}</h1>
                <h3>{date}</h3>
                <p>{content}</p>
            </main>
        </div>
    );
}

export async function getStaticProps(context) {
    const { params } = context;

    return {
        props: blogPosts.find(item => item.slug === params.slug), // will be passed to the page component as props
    }
}
export async function getStaticPaths() {
    return {
        paths: blogPosts.map((item) => ({ params: { ...item } })),
        fallback: false
    };
}