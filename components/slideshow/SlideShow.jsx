"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import SlideShowStyle from "./SlideShow.module.css";
import { cn } from "@/app/lib/utils";

const SlideShow = () => {
  const images = [
    {
      url: "/assets/images/slideshow/1.jpeg",
      alt: "image1",
    },
    {
      url: "/assets/images/slideshow/2.jpeg",
      alt: "image2",
    },
    {
      url: "/assets/images/slideshow/1.jpeg",
      alt: "image1",
    },
    {
      url: "/assets/images/slideshow/2.jpeg",
      alt: "image2",
    },
    {
      url: "/assets/images/slideshow/1.jpeg",
      alt: "image1",
    },
    {
      url: "/assets/images/slideshow/2.jpeg",
      alt: "image2",
    },
    {
      url: "/assets/images/slideshow/1.jpeg",
      alt: "image1",
    },
    {
      url: "/assets/images/slideshow/2.jpeg",
      alt: "image2",
    },
    {
      url: "/assets/images/slideshow/1.jpeg",
      alt: "image1",
    },
    {
      url: "/assets/images/slideshow/2.jpeg",
      alt: "image2",
    },
    {
      url: "/assets/images/slideshow/1.jpeg",
      alt: "image1",
    },
    {
      url: "/assets/images/slideshow/2.jpeg",
      alt: "image2",
    },
    {
      url: "/assets/images/slideshow/2.jpeg",
      alt: "image2",
    },
    {
      url: "/assets/images/slideshow/1.jpeg",
      alt: "image1",
    },
    {
      url: "/assets/images/slideshow/2.jpeg",
      alt: "image2",
    },
    {
      url: "/assets/images/slideshow/1.jpeg",
      alt: "image1",
    },
    {
      url: "/assets/images/slideshow/2.jpeg",
      alt: "image2",
    },
    {
      url: "/assets/images/slideshow/1.jpeg",
      alt: "image1",
    },
    {
      url: "/assets/images/slideshow/2.jpeg",
      alt: "image2",
    },
    {
      url: "/assets/images/slideshow/1.jpeg",
      alt: "image1",
    },
    {
      url: "/assets/images/slideshow/2.jpeg",
      alt: "image2",
    },
    {
      url: "/assets/images/slideshow/1.jpeg",
      alt: "image1",
    },
    {
      url: "/assets/images/slideshow/2.jpeg",
      alt: "image2",
    },
    {
      url: "/assets/images/slideshow/2.jpeg",
      alt: "image2",
    },
    {
      url: "/assets/images/slideshow/1.jpeg",
      alt: "image1",
    },
    {
      url: "/assets/images/slideshow/2.jpeg",
      alt: "image2",
    },
    {
      url: "/assets/images/slideshow/1.jpeg",
      alt: "image1",
    },
    {
      url: "/assets/images/slideshow/2.jpeg",
      alt: "image2",
    },
    {
      url: "/assets/images/slideshow/1.jpeg",
      alt: "image1",
    },
    {
      url: "/assets/images/slideshow/2.jpeg",
      alt: "image2",
    },
    {
      url: "/assets/images/slideshow/1.jpeg",
      alt: "image1",
    },
    {
      url: "/assets/images/slideshow/2.jpeg",
      alt: "image2",
    },
    {
      url: "/assets/images/slideshow/1.jpeg",
      alt: "image1",
    },
    {
      url: "/assets/images/slideshow/2.jpeg",
      alt: "image2",
    },
  ];
  const images2 = [
    {
      url: "/assets/images/slideshow/1.jpeg",
      alt: "image1",
    },
    {
      url: "/assets/images/slideshow/2.jpeg",
      alt: "image2",
    },
    {
      url: "/assets/images/slideshow/1.jpeg",
      alt: "image1",
    },
    {
      url: "/assets/images/slideshow/2.jpeg",
      alt: "image2",
    },
    {
      url: "/assets/images/slideshow/1.jpeg",
      alt: "image1",
    },
    {
      url: "/assets/images/slideshow/2.jpeg",
      alt: "image2",
    },
    {
      url: "/assets/images/slideshow/1.jpeg",
      alt: "image1",
    },
    {
      url: "/assets/images/slideshow/2.jpeg",
      alt: "image2",
    },
    {
      url: "/assets/images/slideshow/1.jpeg",
      alt: "image1",
    },
    {
      url: "/assets/images/slideshow/2.jpeg",
      alt: "image2",
    },
    {
      url: "/assets/images/slideshow/1.jpeg",
      alt: "image1",
    },
    {
      url: "/assets/images/slideshow/2.jpeg",
      alt: "image2",
    },
    {
      url: "/assets/images/slideshow/1.jpeg",
      alt: "image1",
    },
    {
      url: "/assets/images/slideshow/2.jpeg",
      alt: "image2",
    },
  ];

  // Duplicate the images array for a seamless loop
  const loopedImages = [...images, ...images, ...images, ...images, ...images];
  const loopedImages2 = [
    ...images2,
    ...images2,
    ...images2,
    ...images2,
    ...images2,
  ];

  const [currImageWidth, setCurrImageWidth] = useState(260);

  useEffect(() => {
    const updateWindowDimensions = () => {
      if (window.innerWidth < 768) {
        setCurrImageWidth(120);
      } else {
        setCurrImageWidth(260);
      }
    };
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <div className={SlideShowStyle.wrapper}>
      <div className={cn("flex gap-6", SlideShowStyle["right-to-left"])}>
        {loopedImages2.map((image, index) => (
          <div
            key={index}
            className="relative "
            style={{ minHeight: currImageWidth, minWidth: currImageWidth }}
          >
            <Image
              src={image.url}
              alt={image.alt}
              style={{ objectFit: "cover" }}
              fill
            />
          </div>
        ))}
      </div>
  {/*     <div className={cn("flex gap-6", SlideShowStyle["left-to-right"])}>
        {loopedImages.map((image, index) => (
          <div
            key={index}
            className="relative "
            style={{ minHeight: currImageWidth, minWidth: currImageWidth }}
          >
            <Image
              src={image.url}
              alt={image.alt}
              style={{ objectFit: "cover" }}
              fill
            />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default SlideShow;
