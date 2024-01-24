import Image from "next/image";
import { SectionElement } from "./SectionElement";

interface ForYouSectionProps {
  title: string;
  elements: ForYouElement[];
}

export interface ForYouElement {
  title: string;
  description: string;
  imgUrl: string;
  link: string;
}

export const ForYouSection = ({ title, elements }: ForYouSectionProps) => {
  return (
    <div>
      <h1 className="text-xl mt-3  font-bold text-white ">{title}</h1>
      <div className="flex flex-row space-x-6">
        {elements.map((e) => {
          return <SectionElement key={e.title + e.description} e={e} />;
        })}
      </div>
    </div>
  );
};
