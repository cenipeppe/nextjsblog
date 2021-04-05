import Head from "next/head";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { HiOutlinePhone } from "@react-icons/all-files/hi/HiOutlinePhone";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { SiTiktok } from "@react-icons/all-files/si/SiTiktok";

export default function About() {
  return (
    <div>
      <Head>
        <title>Contact me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto my-20 w-9/12 grid grid-cols-12 gap-5">
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
      </main>
    </div>
  );
}
