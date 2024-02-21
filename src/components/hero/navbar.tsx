import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import NavbarItem from "./navbar-item";

const Navbar = () => {
  return (
    <div className="flex gap-2 justify-between items-center">
      <div className="flex gap-3">
        <div>
          <Image
            src="/b/kiit-logo.svg"
            alt="hero-kiit-logo"
            width={61}
            height={45}
            className=" w-12 h-9 md:w-14 md:h-11"
          />
        </div>
        <div className="text-[8px] md:text-xs flex flex-col justify-between">
          <p className="leading-3 text-white">
            <span className="text-[#4BB559] uppercase">
              KALINGA INSTITUTE OF INDUSTRIAL TECHNOLOGY
              <br />
            </span>
            Deemed to be University U/S of the UGC Act, 1956
          </p>
          <h1 className="uppercase font-bold text-[#C8C8C8]">
            school of management
          </h1>
        </div>
      </div>
      <div className="gap-1 hidden md:flex">
        <NavbarItem path="/" item="Home" />
        <NavbarItem path="/" item="Components" />
        <NavbarItem path="/" item="Why kSOM" />
        <NavbarItem path="/" item="Alumni" />
        <NavbarItem path="/" item="Speaker" />
        <NavbarItem path="/" item="Faculty" />
      </div>
      <div className="bg-[#2E604F] w-11 h-11 rounded-full p-2 flex-shrink-0">
        <div className="bg-[#4BB559] w-full h-full rounded-full flex justify-center items-center">
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
