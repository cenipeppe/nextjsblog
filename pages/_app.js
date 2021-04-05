import Link from "next/link";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { SiNextDotJs } from "@react-icons/all-files/si/SiNextDotJs";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <header className="w-full bg-blue-600">
        <div className="flex gap-5 justify-center items-center">
          <SiNextDotJs />
          <h1 className="text-5xl font-bold text-center text-white py-7">
            My superBlog
          </h1>
          <FaReact />
        </div>
        <nav className="pb-5 flex justify-center gap-10">
          <Link href="/">
            <a className="text-white hover:text-yellow-300">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-white hover:text-yellow-300">About</a>
          </Link>
          <Link href="/contactme">
            <a className="text-white hover:text-yellow-300">Contact me!</a>
          </Link>
        </nav>
      </header>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
