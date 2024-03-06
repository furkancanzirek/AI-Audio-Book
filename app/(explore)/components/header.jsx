"use client"
import Logo from "./Logo";
import Player from "./Player";
import PlayerContent from "./PlayerContent";
import SearchBox from "./SearchBox";
import ProfileDropdown from "@/components/ProfileDropdown";
const header = () => {
  return (
    <div className="bg-background border-b-primary border-b-2 py-2 flex gap-x-12 container">
      <div className="flex gap-x-6 items-center flex-1 ">
        <Logo />
        <SearchBox />
      </div>
      {/* <Player className="col-span-1" />
      <div className="flex items-center flex-1">
        <PlayerContent />
      </div> */}
      <ProfileDropdown />
    </div>
  );
};

export default header;
