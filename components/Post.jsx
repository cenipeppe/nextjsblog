import Link from "next/link";
import { HiHome } from "@react-icons/all-files/hi/HiHome";

const Post = ({ title, date, content }) => {
  return (
    <article>
      <div className="flex justify-end">
        <Link href="/">
          <button className="flex justify-center p-1">
            <HiHome />
          </button>
        </Link>
      </div>
      <div className="flex justify-between mb-2">
        <h1>{title}</h1>
        <i>{date}</i>
      </div>
      <section>
        <p>{content}</p>
      </section>
    </article>
  );
};

export default Post;
