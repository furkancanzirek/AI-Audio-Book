"use client";
import Player from "./Player";
import PlayerContent from "./PlayerContent";
import SoundSettings from "./SoundSettings";
import { usePlayerStore } from "@/src/store/PlayerStore";
import { useEffect } from "react";
import { Howl } from "howler";
const FooterPlayer = () => {
  const { currentBook, tracks } = usePlayerStore();
  const getTracksUrl = () => {
    return tracks.map((track) => track.url);
  };
  return (
    currentBook && (
      <div className="container fixed bottom-0 flex py-4 border-b-2 bg-background border-b-primary gap-x-12">
        <div className="flex items-center flex-1 gap-x-6">
          <PlayerContent className="max-w-xs" />
        </div>
        <div className="flex-1">
          <Player className="" />
        </div>
        <div className="flex-1">
          <SoundSettings />
        </div>
      </div>
    )
  );
};

export default FooterPlayer;
