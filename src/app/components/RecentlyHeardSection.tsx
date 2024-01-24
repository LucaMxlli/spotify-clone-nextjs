import { RecentlyHeardItem } from "./RecentlyHeardItem";

export const RecentlyHeardSection = ({}) => {
  return (
    <div className="">
      <div className="flex flex-col space-y-2">
        <h1 className="text-white text-3xl">Guten Abend</h1>
        <div className="grid grid-cols-3 w-full h-32 gap-1">
          <RecentlyHeardItem title="Rammstein" link="/" imageUrl="" />{" "}
          <RecentlyHeardItem title="Rammstein" link="/" imageUrl="" />{" "}
          <RecentlyHeardItem title="Rammstein" link="/" imageUrl="" />{" "}
          <RecentlyHeardItem title="Rammstein" link="/" imageUrl="" />{" "}
          <RecentlyHeardItem title="Rammstein" link="/" imageUrl="" />{" "}
          <RecentlyHeardItem title="Rammstein" link="/" imageUrl="" />{" "}
        </div>
      </div>
    </div>
  );
};
