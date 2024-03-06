import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { HiPlay, HiPause } from "react-icons/hi";
import SlidePlayerLoading from "./SlidePlayerLoading";

const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: "#eee",
  progressColor: "hsl(20.5 90.2% 48.2%)",
  cursorColor: "OrangeRed",
  barWidth: 3,
  barRadius: 3,
  responsive: true,
  height: 150,
  normalize: true,
  partialRender: true,
});

export default function IndexPage() {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const url =
    "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3";

  useEffect(() => {
    create();

    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
      }
    };
  }, []);

  const create = async () => {
    setLoading(true);
    const WaveSurfer = (await import("wavesurfer.js")).default;

    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.load(url);
    setLoading(false);
  };

  const handlePlayPause = () => {
    setPlaying(!playing);
    wavesurfer.current.playPause();
  };

  return (
    <div className="flex items-center w-full gap-2">
      {!loading && (
        <div className="controls">
          <div
            className="bg-white rounded-full cursor-pointer hover:text-primary hover:bg-primary group"
            onClick={handlePlayPause}
          >
            {!playing ? (
              <HiPlay className="fill-black group-hover:fill-white" size="70" />
            ) : (
              <HiPause
                className="fill-black group-hover:fill-white"
                size="70"
              />
            )}
          </div>
        </div>
      )}

      {loading && (
        <div className="flex justify-center flex-1 gap-3">
          <SlidePlayerLoading /> <SlidePlayerLoading /> <SlidePlayerLoading />{" "}
          <SlidePlayerLoading />{" "}
        </div>
      )}
      <div className="flex-1" id="waveform" ref={waveformRef} />
    </div>
  );
}
