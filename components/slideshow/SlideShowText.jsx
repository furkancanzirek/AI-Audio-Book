"use client";
import { Button } from "../ui/button";
import WaveSurfer from "./WaveSurfer"
import { useSession } from "next-auth/react";
const SlideShowText = () => {

  const { data: session } = useSession();
 
  return (
    
    <div className="grid grid-cols-12 justify-between items-center xl:pt-8 2xl:pt-16 container">
      <div className="inline-flex  flex-col col-span-12 lg:col-span-6">
        <h2 className="text-5xl lg:text-8xl my-2 lg:mb-6 block text-primary leading-[3.5rem] lg:leading-[5.5rem] tracking-tight">
          Audio Book For Everyone
        </h2>
        <p className="text-lg mb-12">
          {session ? (
             "Welcome " + session?.user?.name):(
              "Sign in to get started"
             )}
        </p>
        <div>
          <Button
            size="xl"
            className="bg-background md:bg-primary hidden lg:inline uppercase font-bold text-lg rounded-full"
          >
            Explore
          </Button>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-6">
        
        <WaveSurfer />
      </div>
    </div>
  );
};

export default SlideShowText;
