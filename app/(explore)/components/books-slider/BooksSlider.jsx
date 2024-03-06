"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PauseIcon,
  PlayIcon,
} from "@radix-ui/react-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import BooksSliderElement from "./BooksSliderElement";
import { FaSpinner } from "react-icons/fa";
import useBooksStore from "@/src/store/BooksStore";
const BooksSlider = () => {
  const swiperRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { books } = useBooksStore();

  return (
    
    <div>
      <div className="flex justify-between mb-8">
        <h3 className="text-3xl">N.Y Times Bestsellers</h3>
        <div className="flex items-center gap-3">
          <Button
            onClick={() => {
              isPlaying
                ? swiperRef.current.autoplay.stop()
                : swiperRef.current.autoplay.start();
              setIsPlaying(!isPlaying);
            }}
            className="px-8 py-4 rounded-full "
          >
            {isPlaying ? (
              <PauseIcon className="w-4 h-4 mr-3" />
            ) : (
              <PlayIcon className="w-4 h-4 mr-3" />
            )}
            {isPlaying ? "Pause" : "Play"}
          </Button>

          <button
            onClick={() => swiperRef.current.slidePrev()}
            className="p-2 ml-3 border border-white rounded-full"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => swiperRef.current.slideNext()}
            className="p-2 border border-white rounded-full"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      <Swiper
        spaceBetween={12}
        slidesPerView={2}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onAutoplayStart={() => setIsPlaying(true)}
        onAutoplayStop={() => setIsPlaying(false)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Autoplay]}
        breakpoints={{
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1600: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {swiperRef.current ? (
          books?.map((book) => (
            <SwiperSlide className="!h-auto">
              <BooksSliderElement book={book} />
            </SwiperSlide>
          ))
        ) : (
          <div className="flex items-center justify-center">
            <FaSpinner className="w-6 h-6 animate-spin" />
          </div>
        )}
      </Swiper>
    </div>
  );
};

export default BooksSlider;
