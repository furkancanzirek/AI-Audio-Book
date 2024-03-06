"use client";
import React, { useEffect, useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { usePlayerStore } from "@/src/store/PlayerStore";

const Player = () => {
  const [durationWidth, setDurationWidth] = useState(0);
  const {
    volume,
    soundObject,
    currentTime,
    setCurrentTime,
    duration,
    isPlaying,
    handlePlayPause,
    nextTrack,
    prevTrack,
  } = usePlayerStore();
  const musicBarRef = useRef(null);

  // Helper function to convert seconds to a minutes:seconds format
  const secondsToMinutes = (seconds) => {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;
    return `${min}:${sec < 10 ? "0" + sec : sec}`;
  };

  // useEffect for updating the music bar while playing
  useEffect(() => {
    let animationFrameId;

    const updateProgress = () => {
      if (soundObject.playing()) {
        let curTime = Math.floor(soundObject.seek());
        setCurrentTime(secondsToMinutes(curTime));
        let dur = Math.floor(soundObject.duration());
        let durWidth = (curTime / dur) * 100;
        setDurationWidth(durWidth);
        animationFrameId = requestAnimationFrame(updateProgress);
      }
    };

    // Event listener'ları temizleme fonksiyonu
    const cleanUpListeners = () => {
   /*    soundObject.off("play");
      soundObject.off("pause");
      soundObject.off("end");
      soundObject.off("stop"); */
    };

    if (soundObject) {
      cleanUpListeners(); // Mevcut listener'ları temizle

      soundObject.on("play", () => {
        animationFrameId = requestAnimationFrame(updateProgress);
      });

      soundObject.on("pause", () => {
        cancelAnimationFrame(animationFrameId);
      });
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (soundObject) {
        cleanUpListeners(); // Component unmount edildiğinde listener'ları temizle
      }
    };

  }, [soundObject, handlePlayPause]);

  // Function to handle music bar clicks
  const handleProgressClick = (e) => {
    const progressContainer = musicBarRef.current;
    const clickX = e.clientX - progressContainer.getBoundingClientRect().left;
    const width = progressContainer.clientWidth;
    const duration = soundObject.duration();
    const clickTime = (clickX / width) * duration;
    soundObject.seek(clickTime);

  };

  // Mouse event handlers for the music bar
  const [isDragging, setIsDragging] = useState(false);
  const handleMouseDown = (e) => {
    setIsDragging(true);
    handlePlayPause(false);
    handleProgressClick(e);
  };
  const handleMouseMove = (e) => {
    if (isDragging) {
      handleProgressClick(e);
    }
  };
  const handleMouseUp = () => {
    setIsDragging(false);
    handlePlayPause(true);
  };

  // Update the volume when it changes
  useEffect(() => {
    if (soundObject) {
      soundObject.volume(volume);
    }
  }, [volume]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center p-2 mb-2 space-x-5">
        <button
        onClick={prevTrack}
        className="focus:outline-none">
          <svg
            className="w-5 h-5 fill-white stroke-white"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="19 20 9 12 19 4 19 20"></polygon>
            <line x1="5" y1="19" x2="5" y2="5"></line>
          </svg>
        </button>
        <button
          onClick={() => handlePlayPause(!isPlaying)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-primary focus:outline-none"
        >
          {isPlaying ? (
            <FaPause className="fill-white" size="15" />
          ) : (
            <FaPlay className="fill-white pl-0.5" size="15" />
          )}
        </button>
        <button onClick={nextTrack} className="focus:outline-none">
          <svg
            className="w-5 h-5 stroke-current fill-secondary-foreground"
            viewBox="0 0 24 24"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="5 4 15 12 5 20 5 4"></polygon>
            <line x1="19" y1="5" x2="19" y2="19"></line>
          </svg>
        </button>
      </div>
      <div className="flex items-center w-full gap-3">
        <span className="w-3 pr-6 text-xs text-secondary-foreground">
          {currentTime}
        </span>
        <div
          className="relative flex-1 w-full h-1 my-2 cursor-pointer bg-secondary-foreground/40 hover:bg-secondary-foreground/50 "
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          ref={musicBarRef}
        >
          <div
            className="absolute flex items-center justify-end h-full transition-all duration-300 ease-in-out bg-primary"
            style={{ width: durationWidth + "%" }}
          >
            <div className="rounded-full bg-white shadow min-w-[10px] min-h-[10px]"></div>
          </div>
        </div>
        <span className="w-3 text-xs text-secondary-foreground">
          {duration}
        </span>
      </div>
    </div>
  );
};

export default Player;
