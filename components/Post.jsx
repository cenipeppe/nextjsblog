import Link from "next/link";
import { HiHome } from "@react-icons/all-files/hi/HiHome";
import moment from "moment";

const Post = ({
  title,
  author,
  date,
  content,
  showHomeButton = false,
  isIndex = false,
}) => {
  return (
    <article>
      {showHomeButton && (
        <div className="flex justify-end">
          <Link href="/">
            <button className="flex justify-center p-1">
              <HiHome />
            </button>
          </Link>
        </div>
      )}
      <div className="flex justify-between mb-2">
        <h2>{title}</h2>
        <i>{moment(date).format("MMM-DD-YYYY")}</i>
      </div>
      <hr />
      <section>
        {!isIndex || content.lenght < 300 ? (
          <p>{content}</p>
        ) : (
          <p>
            {content.substring(0, 300)}{" "}
            <span className="text-blue-600 hover:text-red-600">
              ...show more
            </span>
          </p>
        )}
      </section>
      {author && (
        <footer>
          <i className="text-gray-500">{author}</i>
        </footer>
      )}
    </article>
  );
};

export default Post;
