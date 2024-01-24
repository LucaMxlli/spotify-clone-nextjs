import Image from "next/image";

interface RecentlyHeardItemProps {
  title: string;
  imageUrl: string;
  link: string;
}

export const RecentlyHeardItem = ({
  title,
  imageUrl,
  link,
}: RecentlyHeardItemProps) => {
  return (
    <div className="flex items-center bg-[#232323] hover:bg-[#414141] rounded-lg w-full">
      <div className=" relative h-full w-1/5">
        <Image src="/rammstein.jpg" className="rounded-l-lg" alt="tset" fill />
      </div>
      <div className="ml-5">{title}</div>
    </div>
  );
};
