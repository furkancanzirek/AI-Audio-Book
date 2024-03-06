"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { HiClock } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import getImageGradient from "@/app/hooks/getImageGradient";
import { secondsToMinutesString } from "@/app/lib/utils";
import useBooksStore from "@/src/store/BooksStore";
import { usePlayerStore } from "@/src/store/PlayerStore";

const gradientToBody = (gradient) => {
  if (!gradient) {
    /* document.body.style.backgroundImage = null; */
    return;
  }
  let { leftColor, rightColor, topColor, bottomColor } = gradient;
  //add body before gradient
  leftColor = leftColor.replace("rgb", "rgba").replace(")", ",0.4)");
  rightColor = rightColor.replace("rgb", "rgba").replace(")", ",0.4)");
  topColor = topColor.replace("rgb", "rgba").replace(")", ",0.4)");
  bottomColor = bottomColor.replace("rgb", "rgba").replace(")", ",0.4)");
  /*   document.body.style.backgroundImage = `linear-gradient(180deg, ${leftColor} 0%, ${rightColor} 100%)`; */

  document.documentElement.style.setProperty(
    "--gradient-color-left",
    leftColor
  );
  document.documentElement.style.setProperty(
    "--gradient-color-right",
    rightColor
  );
  document.documentElement.style.setProperty("--gradient-color-top", topColor);
  document.documentElement.style.setProperty(
    "--gradient-color-bottom",
    bottomColor
  );
};
const BooksSliderElement = ({ book }) => {
  const { playFromBook, currentBook } = usePlayerStore();
  const bookSliderElementImageRef = useRef(null);
  const [gradient, setGradient] = useState(null);
  useEffect(() => {
    if (bookSliderElementImageRef.current) {
      //check if image is loaded
      //if image is loaded then get the gradient
      bookSliderElementImageRef.current.onload = () => {
        let colors = getImageGradient(bookSliderElementImageRef.current);
        setGradient(colors);
      };
    }
  }, [bookSliderElementImageRef.current]);
  return (
    book && (
      <div
        onMouseEnter={() => gradientToBody(gradient)}
        onMouseLeave={() => gradientToBody(null)}
        className="flex flex-col h-full gap-3 p-3 transition-all rounded-lg lg:flex-row "
      >
        <div className="relative">
          <Image
            ref={bookSliderElementImageRef}
            src={book.coverUrl}
            height={200}
            width={150}
          />
        </div>
        {/*    <div
          className="absolute inset-0 rounded-l"
          style={{
            backgroundImage: `linear-gradient(180deg, ${gradient?.leftColor} 60%, ${gradient?.rightColor} 100%)`,
            opacity: "0.6",
            height: "100%",
            width: "100%",
            zIndex: -1,
          }}
        ></div> */}
        <div className="absolute w-full h-full rounded-l opacity-40 blur-lg -z-10">
          <Image
            ref={bookSliderElementImageRef}
            src={book.coverUrl}
            objectFit="cover"
            layout="fill"
            className="max-w-full max-h-full scale-[4] !h-auto !w-auto"
          />
        </div>
        <div className="relative flex flex-col justify-center flex-1 group">
          <div className="flex mb-3">
            {Array(5)
              .fill()
              .map((_, i) => (
                <FaStar
                  className={`w-4 h-4 
                    ${i < book.rating ? "fill-yellow-400" : "fill-gray-300"}
                  `}
                />
              ))}
          </div>
          <h4 className="mb-2 text-sm font-semibold text-white">{book.name}</h4>
          <p className="mb-2 text-xs text-gray-300">{book.author}</p>
          <p className="flex items-center mb-2 text-xs text-gray-300">
            <HiClock className="inline-block mr-1" />
            {secondsToMinutesString(book.duration)}
          </p>
          <Button
            onClick={() => playFromBook(book)}
            className="absolute bottom-0 right-0 flex items-center justify-center w-12 h-12 p-2 transition-all duration-300 ease-in-out translate-y-1 rounded-full shadow-2xl opacity-0 group-hover:translate-y-0 bg-primary group-hover:opacity-100"
          >
            <FaPlay className="w-4 h-4 fill-white" />
          </Button>
        </div>
      </div>
    )
  );
};

export default BooksSliderElement;
