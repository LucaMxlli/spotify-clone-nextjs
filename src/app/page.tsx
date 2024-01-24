import Image from "next/image";
import { Sidebar } from "./components/Sidebar";
import { LibraryItem } from "./components/LibraryItem";
import { ContentSection } from "./components/ContentSection";

export default function Home() {
  return (
    <main className="flex max-h-screen overflow-y-hidden bg-black w-full pl-4 pr-4">
      <div className="flex w-full pt-3  gap-4 ">
        <div className=" w-3/12">
          <Sidebar />
        </div>
        <div className=" w-9/12">
          <ContentSection />
        </div>

        {/* <div className="w-3/12">
          <Sidebar />  
        </div>*/}
      </div>
    </main>
  );
}
