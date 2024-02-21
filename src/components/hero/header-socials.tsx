import Link from "next/link";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";

const HeaderSocials = () => {
  return (
    <div className="flex gap-2 items-center py-2 justify-end text-white">
      <Link href="">
        <IoLogoFacebook />
      </Link>
      <Link href="">
        <FaLinkedin />
      </Link>
      <Link href="">
        <FaYoutube />
      </Link>
      <Link href="">
        <FaInstagram />
      </Link>
    </div>
  );
};

export default HeaderSocials;
