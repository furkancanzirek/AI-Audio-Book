import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const secondsToMinutes = (seconds) => {
  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;
  return `${min}:${sec < 10 ? "0" + sec : sec}`;
};

export const secondsToMinutesString = (seconds) => {
  let hours = Math.floor(seconds / 3600);
  let min = Math.floor((seconds % 3600) / 60);
  let sec = seconds % 60;

  return `${hours > 0 ? hours + " hours" : ""}${min > 0 ? min + " min" : ""}`;
  
}
