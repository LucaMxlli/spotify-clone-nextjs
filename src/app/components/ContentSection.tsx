import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SidebarItem } from "./SidebarItem";
import { FaBook, FaHouse } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { LibraryItem } from "./LibraryItem";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RecentlyHeardSection } from "./RecentlyHeardSection";
import { ForYouElement, ForYouSection } from "./ForYouSection";
import { SettingsSection } from "./SettingsSection";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

const elements: ForYouElement[] = [
  {
    title: "Test",
    description:
      "testtitel mit testbeschreibung testbeschreibung testbeschreibung testbeschreibung testbeschreibung  testbeschreibung testbeschreibung",
    link: "/",
    imgUrl: "/",
  },
  {
    title: "Test",
    description:
      "testtitel mit testbeschreibung testbeschreibung testbeschreibung testbeschreibung testbeschreibung  testbeschreibung testbeschreibung",
    link: "/",
    imgUrl: "/",
  },
  {
    title: "Test",
    description:
      "testtitel mit testbeschreibung testbeschreibung testbeschreibung testbeschreibung testbeschreibung  testbeschreibung testbeschreibung",
    link: "/",
    imgUrl: "/",
  },
  {
    title: "Test",
    description:
      "testtitel mit testbeschreibung testbeschreibung testbeschreibung testbeschreibung testbeschreibung  testbeschreibung testbeschreibung",
    link: "/",
    imgUrl: "/",
  },
  {
    title: "Test",
    description:
      "testtitel mit testbeschreibung testbeschreibung testbeschreibung testbeschreibung testbeschreibung  testbeschreibung testbeschreibung",
    link: "/",
    imgUrl: "/",
  },
  {
    title: "Test",
    description:
      "testtitel mit testbeschreibung testbeschreibung testbeschreibung testbeschreibung testbeschreibung  testbeschreibung testbeschreibung",
    link: "/",
    imgUrl: "/",
  },
  {
    title: "Test",
    description:
      "testtitel mit testbeschreibung testbeschreibung testbeschreibung testbeschreibung testbeschreibung  testbeschreibung testbeschreibung",
    link: "/",
    imgUrl: "/",
  },
];

export const ContentSection = ({}) => {
  return (
    <div className="w-full  bg-[#121212] space-y-16 rounded-md h-full flex flex-col text-gray-200 space-y-3 overflow-scroll ">
      <div>
        <div className="bg-gradient-to-b from-orange-800 via-black to-black  ">
          <div className="flex justify-between pl-6 pr-12 pt-6">
            <div className="flex gap-4">
              <ArrowLeftIcon className="bg-black w-8 h-8 rounded-full" />
              <ArrowRightIcon className="bg-black w-8 h-8 rounded-full" />
            </div>
            <SettingsSection />
          </div>

          <div className="pl-12 pr-12 pt-8 space-y-8">
            <RecentlyHeardSection />
            <ForYouSection title={"Für Luca"} elements={elements} />
            <ForYouSection title={"Deine Top-Mixtapes"} elements={elements} />
            <ForYouSection title={"Zuletzt gehört"} elements={elements} />
            <ForYouSection title={"Rammstein"} elements={elements} />
          </div>
        </div>{" "}
      </div>
    </div>
  );
};
