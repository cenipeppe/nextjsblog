import Link from "next/link";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { SiNextDotJs } from "@react-icons/all-files/si/SiNextDotJs";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { HiOutlinePhone } from "@react-icons/all-files/hi/HiOutlinePhone";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { SiTiktok } from "@react-icons/all-files/si/SiTiktok";
import { FaRegCopyright } from "@react-icons/all-files/fa/FaRegCopyright";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <header className="w-full bg-blue-600 px-3 shadow">
        <div className="flex justify-center items-center space-x-5">
          <SiNextDotJs />
          <h2 className="text-5xl font-bold text-center text-white py-7">
            My superBlog
          </h2>
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
      <footer className="w-full px-5 py-10 grid grid-cols-12 gap-5 bg-gray-700 text-white">
        <div className="col-span-6 flex gap-3 items-center mb-10">
          <MdEmail />
          <span>E-mail: info@email.com</span>
        </div>
        <div className="col-span-6 flex gap-3 items-center mb-10">
          <HiOutlinePhone />
          <span>+123 456 789</span>
        </div>
        <div className="col-span-6 flex gap-3 items-center mb-10">
          <FaFacebook />
          <span>MyName MySurname</span>
        </div>
        <div className="col-span-6 flex gap-3 items-center mb-10">
          <FaInstagram />
          <span>MyName MySurname</span>
        </div>
        <div className="col-span-6 flex gap-3 items-center mb-10">
          <FaLinkedin />
          <span>MyName MySurname</span>
        </div>
        <div className="col-span-6 flex gap-3 items-center mb-10">
          <SiTiktok />
          <span>MyName MySurname</span>
        </div>
        <div className="col-span-12 flex gap-3 justify-center items-center">
          <FaRegCopyright />
          <span>Copyleft - 2021 Cenipeppe</span>
        </div>
      </footer>
    </div>
  );
}

export default MyApp;
