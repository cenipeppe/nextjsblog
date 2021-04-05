import Link from "next/link";
import { HiHome } from "@react-icons/all-files/hi/HiHome";
import moment from "moment";

const Post = ({
  title,
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
        <h1>{title}</h1>
        <i>{moment(date).format("MMM-DD-YYYY")}</i>
      </div>
      <section>
        {!isIndex || content.lenght < 200 ? (
          <p>{content}</p>
        ) : (
          <p>
            {content.substring(0, 200)}{" "}
            <span className="text-blue-600 hover:text-red-600">
              ...show more
            </span>
          </p>
        )}
      </section>
    </article>
  );
};

export default Post;
