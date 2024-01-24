
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SidebarItem } from "./SidebarItem";
import { FaBook, FaHouse } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { LibraryItem } from "./LibraryItem";
import { ScrollArea } from "@/components/ui/scroll-area";


export const Sidebar = ({}) => {
  return (
    <div className="w-full h-full flex flex-col text-gray-200 space-y-3">
      <div className="bg-[#121212] rounded-md flex-shrink-0">
        <SidebarItem
          icon={<FaHouse className="h-8 w-8" />}
          title={"Start"}
          link={""}
        />
        <SidebarItem
          icon={<FaSearch className="h-8 w-8" />}
          title={"Suchen"}
          link={""}
        />
      </div>
      <div className="bg-[#121212] rounded flex-grow overflow-hidden">
        <SidebarItem
          icon={<FaBook className="h-8 w-8" />}
          title={"Bibliothek"}
          link={""}
        />
        <ScrollArea className="bg-[#121212] h-full pb-20">
          <LibraryItem
            title={"Rammstein"}
            playlistTitle={"Album"}
            playlistName={"Rammstein"}
            playlistImageUrl={""}
          />{" "}
          <LibraryItem
            title={"Rammstein"}
            playlistTitle={"Album"}
            playlistName={"Rammstein"}
            playlistImageUrl={""}
          />{" "}
          <LibraryItem
            title={"Rammstein"}
            playlistTitle={"Album"}
            playlistName={"Rammstein"}
            playlistImageUrl={""}
          />{" "}
          <LibraryItem
            title={"Rammstein"}
            playlistTitle={"Album"}
            playlistName={"Rammstein"}
            playlistImageUrl={""}
          />{" "}
          <LibraryItem
            title={"Rammstein"}
            playlistTitle={"Album"}
            playlistName={"Rammstein"}
            playlistImageUrl={""}
          />{" "}
          <LibraryItem
            title={"Rammstein"}
            playlistTitle={"Album"}
            playlistName={"Rammstein"}
            playlistImageUrl={""}
          />{" "}
          <LibraryItem
            title={"Rammstein"}
            playlistTitle={"Album"}
            playlistName={"Rammstein"}
            playlistImageUrl={""}
          />{" "}
          <LibraryItem
            title={"Rammstein"}
            playlistTitle={"Album"}
            playlistName={"Rammstein"}
            playlistImageUrl={""}
          />{" "}
          <LibraryItem
            title={"Rammstein"}
            playlistTitle={"Album"}
            playlistName={"Rammstein"}
            playlistImageUrl={""}
          />{" "}
          <LibraryItem
            title={"Rammstein"}
            playlistTitle={"Album"}
            playlistName={"Rammstein"}
            playlistImageUrl={""}
          />{" "}
          <LibraryItem
            title={"Rammstein"}
            playlistTitle={"Album"}
            playlistName={"Rammstein"}
            playlistImageUrl={""}
          />
          <LibraryItem
            title={"Rammstein"}
            playlistTitle={"Album"}
            playlistName={"Rammstein"}
            playlistImageUrl={""}
          />
          <LibraryItem
            title={"Rammstein"}
            playlistTitle={"Album"}
            playlistName={"Rammstein"}
            playlistImageUrl={""}
          />{" "}
          <LibraryItem
            title={"Rammstein"}
            playlistTitle={"Album"}
            playlistName={"Rammstein"}
            playlistImageUrl={""}
          />{" "}
          <LibraryItem
            title={"Rammstein"}
            playlistTitle={"Album"}
            playlistName={"Rammstein"}
            playlistImageUrl={""}
          />
          <LibraryItem
            title={"Rammstein"}
            playlistTitle={"Album"}
            playlistName={"Rammstein"}
            playlistImageUrl={""}
          />{" "}
          <LibraryItem
            title={"Rammstein"}
            playlistTitle={"Album"}
            playlistName={"Rammstein"}
            playlistImageUrl={""}
          />{" "}
          <LibraryItem
            title={"Rammstein"}
            playlistTitle={"Album"}
            playlistName={"Rammstein"}
            playlistImageUrl={""}
          />{" "}
          <LibraryItem
            title={"Rammstein"}
            playlistTitle={"Album"}
            playlistName={"Rammstein"}
            playlistImageUrl={""}
          />{" "}
          <LibraryItem
            title={"Rammstein"}
            playlistTitle={"Album"}
            playlistName={"Rammstein"}
            playlistImageUrl={""}
          />{" "}
          <LibraryItem
            title={"Rammstein"}
            playlistTitle={"Album"}
            playlistName={"Rammstein"}
            playlistImageUrl={""}
          />{" "}
          <LibraryItem
            title={"Rammstein"}
            playlistTitle={"Album"}
            playlistName={"Rammstein"}
            playlistImageUrl={""}
          />{" "}
          <LibraryItem
            title={"Rammstein"}
            playlistTitle={"Album"}
            playlistName={"Rammstein"}
            playlistImageUrl={""}
          />{" "}
          <LibraryItem
            title={"sdfds"}
            playlistTitle={"Album"}
            playlistName={"Rammstein"}
            playlistImageUrl={""}
          />
        </ScrollArea>
      </div>
    </div>
  );
};
