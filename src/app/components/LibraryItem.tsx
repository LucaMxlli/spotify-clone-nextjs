import Image from "next/image";

interface LibraryItem {
  title: string;
  playlistTitle: string;
  playlistName: string;
  playlistImageUrl: string;
}

export const LibraryItem = ({
  title,
  playlistTitle,
  playlistName,
  playlistImageUrl,
}: LibraryItem) => {
  return (
    <div className="flex pl-2 pr-2 rounded-md">
      <div className="flex  space-x-3 hover:bg-[#232323] rounded-md p-2 w-full">
        <div className="w-12 h-12 relative">
          <Image
            src={"/rammstein.jpg"}
            className="rounded-md"
            fill
            alt="cover"
          />
        </div>

        <div className="flex flex-col">
          <h1>{title}</h1>
          <div className="flex flex-row">
            <h1>
              {playlistTitle} • {playlistName}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
