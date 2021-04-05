import Link from "next/link";
import { HiHome } from "@react-icons/all-files/hi/HiHome";

const Post = ({ title, date, content }) => {
  return (
    <article className="grid grid-cols-12 gap-2">
      <div className="col-span-11" />
      <Link href="/">
        <button className="col-span-1 flex justify-center">
          <HiHome />
        </button>
      </Link>
      <div className="col-span-10 mb-2">
        <h1>{title}</h1>
      </div>
      <div className="col-span-2 flex justify-end mb-2">
        <i>{date}</i>
      </div>
      <section className="col-span-12 mb-2">
        <p>{content}</p>
      </section>
    </article>
  );
};

export default Post;
