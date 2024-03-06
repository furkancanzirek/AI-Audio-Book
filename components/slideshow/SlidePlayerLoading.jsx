import React from "react";
import SlideShowStyle from "./SlideShow.module.css";
import { cn } from "@/app/lib/utils";
const SlidePlayerLoading = () => {
   
  return (

      <div className={SlideShowStyle.slidePlayerContainer}>
        <div className={cn(SlideShowStyle.slidePlayer, SlideShowStyle.slidePlayer1)}></div>
        <div className={cn(SlideShowStyle.slidePlayer, SlideShowStyle.slidePlayer2)}></div>
        <div className={cn(SlideShowStyle.slidePlayer, SlideShowStyle.slidePlayer3)}></div>
        <div className={cn(SlideShowStyle.slidePlayer, SlideShowStyle.slidePlayer4)}></div>
        <div className={cn(SlideShowStyle.slidePlayer, SlideShowStyle.slidePlayer5)}></div>
      </div>
   
  );
};

export default SlidePlayerLoading;
