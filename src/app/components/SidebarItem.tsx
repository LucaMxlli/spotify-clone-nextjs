import { link } from "fs";
import Link from "next/link";
import { ReactNode } from "react";

interface SidebarItemProps {
  title: string;
  link: string;
  icon: ReactNode;
}

export const SidebarItem = ({ title, icon, link }: SidebarItemProps) => {
  return (
    <div className="flex flex-col w-full">
      <Link
        className=" font-light hover:text-white flex items-center text-xl pt-3 pb-3 pr-8 pl-4 justify-self-start gap-3"
        href={"/"}
      >
        {icon}
        <p>{title}</p>
      </Link>
    </div>
  );
};
