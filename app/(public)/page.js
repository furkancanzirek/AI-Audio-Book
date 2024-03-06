// next js 14 page.js

import SlideShow from "@/components/slideshow/SlideShow";
import SlideShowText from "@/components/slideshow/SlideShowText";
import { Providers } from "../providers";
//import prisma and get user table
import prisma from "@/app/lib/prisma";
export default async function Page() {
  //get user and what he has subscriptionPackage


  return (
    <div>
      <div>
        <SlideShow />
        <SlideShowText />
      </div>
    </div>
  );
}
