import { BellIcon, ClockIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { BsBell, BsPeople } from "react-icons/bs";

interface SettingsSectionProps {}

export const SettingsSection = ({}) => {
  return (
    <div className="flex space-x-2 mt-0 items-center">
      <div className="bg-black  h-8 w-8 rounded-full hover:scale-110">
        <BsBell className="p-2 w-full h-full" />
      </div>
      <div className="bg-black  h-8 w-8 rounded-full hover:scale-110">
        <BsPeople className="p-2 w-full h-full" />
      </div>
      <div className="bg-black relative  h-8 w-8 rounded-full hover:scale-110">
        <Image
          src="/rammstein.jpg"
          className="rounded-full p-1"
          alt="test"
          fill
        />
      </div>
    </div>
  );
};
