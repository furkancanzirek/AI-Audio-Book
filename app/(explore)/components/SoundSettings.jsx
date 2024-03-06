"use client";
import { usePlayerStore } from "@/src/store/PlayerStore";
import { BsVolumeMute, BsVolumeUp } from "react-icons/bs";
const SoundSettings = () => {
  const {
    volume,
    setVolume,
    lastVolume,
    setLastVolume,
  } = usePlayerStore();
  const {} = usePlayerStore();

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100;
    setVolume(newVolume);
  };

  // Toggle mute/unmute on icon click
  const toggleMute = () => {
    setLastVolume(volume);
    setVolume(volume > 0 ? 0 : lastVolume);
  };

  return (
    <div className="flex ml-auto gap-x-3 items-center justify-end text-gray-400 h-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        fill="currentColor"
        className="w-4 h-4 transition text-primary"
      >
        <path d="M200.3 142.4C193.3 135.9 183.1 134.2 174.4 138C165.7 141.8 160 150.5 160 159.1v192C160 361.5 165.7 370.2 174.4 374c8.719 3.812 18.91 2.094 25.91-4.375l104-96C309.2 269.1 312 262.7 312 256s-2.812-13.09-7.719-17.62L200.3 142.4zM384 32H64C28.66 32 0 60.66 0 96v320c0 35.34 28.66 64 64 64h320c35.34 0 64-28.66 64-64V96C448 60.66 419.3 32 384 32zM400 416c0 8.82-7.18 16-16 16H64c-8.82 0-16-7.18-16-16V96c0-8.82 7.18-16 16-16h320c8.82 0 16 7.18 16 16V416z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="currentColor"
        className="w-4 h-4 transition hover:text-white"
      >
        <path d="M476.4 35.63c-47.5-47.5-124.5-47.5-172.1 0l-28.62 28.62c-22.62 22.62-35.37 53.25-35.5 85.12l-228.1 257.5c-16.75 18.1-15.87 47.75 1.1 65.62l25.44 25.5c17.87 17.87 46.69 18.75 65.69 2.002l126.9-112.7v100.7c0 13.25 10.74 24 23.1 24c13.25 0 24-10.75 24-24v-143.1l82.62-72.1c31.87-.125 62.5-12.87 85.12-35.5l28.62-28.62C523.9 160.1 523.9 83.13 476.4 35.63zM73.38 463.1l-25.37-25.37l213.1-240.6l52.87 52.87L73.38 463.1zM361.6 224c-2.5-.125-4.875-.375-7.375-.75l-65.5-65.5c-2.125-20.62 4.5-41.25 18.5-56.62l103.6 103.6C397.4 217.1 379.9 224 361.6 224zM444.8 170.9L341.1 67.25c28.1-26.5 73.62-25.5 101.2 2.375C470.3 97.38 470.9 142 444.8 170.9z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="currentColor"
        className="w-4 h-4 transition hover:text-white"
      >
        <path d="M24 95.97h240c13.25 0 24-10.75 24-24s-10.75-24-24-24h-240c-13.25 0-24 10.75-24 24S10.75 95.97 24 95.97zM498.8 6.162c-8.25-6.125-18.69-7.699-28.44-4.699l-112 35.38C345.1 41.09 336 53.34 336 67.34v299.1c-18.12-9.125-40.13-14.5-64-14.5c-61.88 0-112 35.88-112 80C160 476.1 210.1 512 272 512s112-35.88 112-80V195.4l105.6-33.38C503 157.7 512 145.5 512 131.5V31.96C512 21.71 507.1 12.16 498.8 6.162zM272 463.1c-39.75 0-64-20.75-64-31.1c0-11.25 24.25-32 64-32s64 20.75 64 32C336 443.2 311.8 463.1 272 463.1zM464 119.7L384 144.1V79.09l80-25.25V119.7zM24 223.1h240c13.25 0 24-10.75 24-24s-10.75-24-24-24h-240c-13.25 0-24 10.74-24 24S10.75 223.1 24 223.1zM136 303.1h-112c-13.25 0-24 10.75-24 24s10.75 24 24 24h112c13.25 0 24-10.75 24-24S149.3 303.1 136 303.1z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        fill="currentColor"
        className="w-4 h-4 transition hover:text-white"
      >
        <path d="M320 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V64C384 28.65 355.3 0 320 0zM336 448c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V64c0-8.822 7.178-16 16-16h256c8.822 0 16 7.178 16 16V448zM192 160c22.09 0 40-17.91 40-40S214.1 80 192 80S152 97.91 152 120S169.9 160 192 160zM192 224c-57.44 0-104 46.56-104 104S134.6 432 192 432s104-46.56 104-104S249.4 224 192 224zM192 384c-30.88 0-56-25.12-56-56C136 297.1 161.1 272 192 272s56 25.12 56 56C248 358.9 222.9 384 192 384z" />
      </svg>
      {volume === 0 ? (
        <BsVolumeMute
          onClick={toggleMute}
          className="w-6 h-6 transition cursor-pointer hover:text-white"
        />
      ) : (
        <BsVolumeUp
          onClick={toggleMute}
          className="w-6 h-6 transition cursor-pointer hover:text-white"
        />
      )}

      {/* Volume slider */}
      <div className="w-24 relative h-1 rounded-full">
        <input
          type="range"
          min="0"
          max="100"
          value={Math.round(volume * 100)} // Convert volume back to 0-100 range for the slider
          onChange={handleVolumeChange}
          className="absolute w-full h-full opacity-0 cursor-pointer z-1"
        />
        <div className="absolute w-full bg-white/50 h-1 rounded-full"></div>
        <div
          className="absolute bg-white h-1 rounded-full"
          style={{ width: `${Math.round(volume * 100)}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SoundSettings;
