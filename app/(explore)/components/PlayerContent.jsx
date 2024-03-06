"use client"
import Image from "next/image";
import { usePlayerStore } from "@/src/store/PlayerStore";
import useBooksStore from "@/src/store/BooksStore";


const PlayerContent = ({
  className = "",
}) => {

  const { currentPart ,currentBook} = usePlayerStore();

  return (
    
    <div className={`h-full py-2 px-4  w-full flex items-center ${className}`}>
      
      <div className="flex w-full gap-4">
        <div className="relative">
          <Image
            src={currentBook?.coverUrl}
            height={59.5}
            width={39.25}
          />
        </div>
        <div className="flex flex-col justify-center flex-1 w-full space-y-2">
          <h4 className="text-sm font-semibold text-white">Live with you</h4>
          <p className="text-xs text-gray-300 line-clamp-2">
            The Neighbourhood - Chip Chrome & The Mono-Tones
          </p>
          <p className="text-xs text-gray-300">{currentPart.title}</p>
         {/*  <div className="w-full">
            <div className="relative w-full h-1 bg-secondary-foreground/40">
              <div className="absolute flex items-center justify-end w-1/3 h-full bg-primary">
                <div className="w-3 h-3 bg-white rounded-full shadow"></div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PlayerContent;
