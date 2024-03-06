import { create } from "zustand";
import { Howl } from "howler";

const secondsToMinutes = (seconds) => {
  let min = Math.floor(seconds / 60);
  let sec = (seconds % 60).toFixed(0);
  return `${min}:${sec < 10 ? "0" + sec : sec}`;
};

const createNewSoundObject = (track, set, get) => {
  const newSoundObject = new Howl({
    src: [track.audioUrl],
    html5: true,
    volume: get().volume,
    onplay: () => {
      set({ isPlaying: true });
    },
    onpause: () => {
      set({ isPlaying: false });
    },
    onend: () => {
      if (get().currentPart < track.parts.length - 1) {
        set({ currentPart: get().currentPart + 1 });
        newSoundObject.seek(track.parts[get().currentPart].startTime);
        newSoundObject.play();
      }
    },
    onload: () => {
      set({
        duration: secondsToMinutes(newSoundObject.duration()),
        currentPart: track.parts[0],
        currentTrack: track,
      });
    },
    onstop: () => {
      set({ isPlaying: false });
    },
  });

  return newSoundObject;
};

export const usePlayerStore = create((set, get) => ({
  currentBook: null,
  isPlaying: false,
  volume: 0.01,
  lastVolume: 0.5,
  soundObject: null, // Başlangıçta null olarak ayarlanır
  duration: 0,
  currentTime: 0,
  currentPart: 0,
  currentTrack: {
    id: "1",
    createdAt: "2024-01-22T17:32:19.000Z",
    updatedAt: "2024-01-22T17:32:21.000Z",
    duration: 675,
    trackNumber: 1,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3",
    bookId: "1",
    parts: [
      {
        id: "1",
        createdAt: "2024-01-22T17:33:00.000Z",
        updatedAt: "2024-01-22T17:33:02.000Z",
        title: "Wizard Guy Chapter 1",
        duration: 120,
        part: 1,
        startTime: 0,
        endTime: 119,
        trackId: "1",
      },
      {
        id: "3",
        createdAt: "2024-01-22T17:34:47.000Z",
        updatedAt: "2024-01-22T17:34:48.000Z",
        title: "Wizard Guy Chapter 3",
        duration: 220,
        part: 3,
        startTime: 220,
        endTime: 439,
        trackId: "1",
      },
      {
        id: "2",
        createdAt: "2024-01-22T17:33:42.000Z",
        updatedAt: "2024-01-22T17:33:45.000Z",
        title: "Wizard Guy Chapter 2",
        duration: 100,
        part: 2,
        startTime: 120,
        endTime: 219,
        trackId: "1",
      },
      {
        id: "4",
        createdAt: "2024-01-22T17:37:09.000Z",
        updatedAt: "2024-01-22T17:37:11.000Z",
        title: "Wizard Guy Chapter 4",
        duration: 235,
        part: 4,
        startTime: 440,
        endTime: 675,
        trackId: "1",
      },
    ],
  },
  tracks: null,
  setCurrentTrack: (currentTrack) => set({ currentTrack }),
  toggleIsPlaying: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setVolume: (volume) => set({ volume }),
  setLastVolume: (lastVolume) => set({ lastVolume }),
  setDuration: (duration) => set({ duration }),
  setCurrentTime: (currentTime) => set({ currentTime }),
  setCurrentPart: (currentPart) => set({ currentPart }),
  setTracks: (tracks) => set({ tracks }),
  handlePlayPause: () => {
    let { soundObject, tracks } = get();
    if (!soundObject && tracks.length > 0) {
      let track = tracks[0];
      soundObject = createNewSoundObject(track, set, get);
      set({ soundObject, currentTrack: track });
    }

    soundObject?.playing() ? soundObject?.pause() : soundObject?.play();
  },
  nextTrack: () => {
    let { soundObject, tracks, currentTrack } = get();
    if (soundObject && currentTrack) {
      let currentPart = 0;
      currentTrack.parts.forEach((part, index) => {
        if (
          soundObject.seek() >= part.startTime &&
          soundObject.seek() <= part.endTime
        ) {
          currentPart = index;
        }
      });
      if (currentTrack.parts.length - 1 > currentPart) {
        console.log(currentTrack.parts[currentPart + 1]);
        soundObject.stop();
        soundObject.seek(currentTrack.parts[currentPart + 1].startTime);
        soundObject.play();
        set({ currentPart: currentTrack.parts[currentPart + 1] });
      }
    }
  },
  prevTrack: () => {
    let { soundObject, tracks, currentTrack } = get();
    if (soundObject && currentTrack) {
      let currentPart = 0;
      currentTrack.parts.forEach((part, index) => {
        if (
          soundObject.seek() >= part.startTime &&
          soundObject.seek() <= part.endTime
        ) {
          currentPart = index;
        }
      });
      if (currentPart > 0) {
        console.log(currentTrack.parts[currentPart - 1]);
        soundObject.stop();
        soundObject.seek(currentTrack.parts[currentPart - 1].startTime);
        soundObject.play();
        set({ currentPart: currentTrack.parts[currentPart - 1] });
      }
    }
  },
  playFromBook: (book) => {
    console.log(book);
    let { handlePlayPause } = get();
    let tracks = book.tracks;
    set({ currentBook: book, tracks });
    handlePlayPause();
  },
}));
