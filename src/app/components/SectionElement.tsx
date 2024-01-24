import Image from "next/image";

interface SectionElementProps {
  e: {
    title: string;
    description: string;
  };
}

export const SectionElement = ({ e }: SectionElementProps) => {
  return (
    <div className="hover:bg-[#414141] flex flex-col space-y-3 bg-[#181818] p-4 w-fit rounded-md">
      <div className="h-32 w-32 relative">
        <Image src={"/rammstein.jpg"} className="rounded-md" alt="test" fill />
      </div>
      <h1 className="text-lg text-white font-semibold">{e.title}</h1>
      <p className="break-word w-32 text-gray-400  truncate">{e.description}</p>
    </div>
  );
};
