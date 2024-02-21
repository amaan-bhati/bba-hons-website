'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarItem = ({ item, path }: { item: string; path: string }) => {
    const urlPath = usePathname()
  return (
    <Link href={path}>
      <span className={`pb-1 text-white text-xs md:text-sm ${urlPath === path && "border-b border-[#4BB559]" }`}>{item}</span>
    </Link>
  );
};

export default NavbarItem;
