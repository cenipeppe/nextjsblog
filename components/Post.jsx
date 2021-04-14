import Link from "next/link";
import Image from "next/image";
import { HiHome } from "@react-icons/all-files/hi/HiHome";
import moment from "moment";
import hydrate from "next-mdx-remote/hydrate";

const Post = ({
  title,
  author,
  date,
  content,
  showHomeButton = false,
  isIndex = false,
}) => {
  let hydratedContent;
  if (content && !isIndex) {
    hydratedContent = hydrate(content);
  } else {
    hydratedContent = content;
  }

  return (
    <>
      <article className="my-10">
        {!isIndex && (
          <div className="flex justify-end">
            <Link href="/">
              <button className="flex justify-center p-1">
                <HiHome />
              </button>
            </Link>
          </div>
        )}
        <div className={`mb-${isIndex ? "2" : "5"}`}>
          {isIndex ? <h3>{title}</h3> : <h1>{title}</h1>}
        </div>
          <i className="text-sm text-gray-500">{moment(date).format("MMM-DD-YYYY")}</i>
        <hr />
        <section>
          {hydratedContent}
          {isIndex && (
            <i className="text-yellow-600 hover:text-yellow-900">
              ...show more
            </i>
          )}
        </section>
      </article>
      {author && (
        <footer className="w-full flex justify-end">
          <i className="text-gray-500">{author}</i>
        </footer>
      )}
    </>
  );
};

export default Post;
