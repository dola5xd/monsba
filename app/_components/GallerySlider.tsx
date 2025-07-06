"use client";

import GalleryCard from "./GalleryCard";
import { useState } from "react";

const images = [
  "/assets/gallery/gallery-1.webp",
  "/assets/gallery/gallery-2.webp",
  "/assets/gallery/gallery-3.webp",
  "/assets/gallery/gallery-4.webp",
  "/assets/gallery/gallery-5.webp",
  "/assets/gallery/gallery-6.webp",
];

function GallerySlider() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col items-center gap-4 px-4 overflow-x-hidden md:flex-row md:flex-wrap lg:flex-nowrap lg:gap-6 md:justify-center lg:justify-normal rounded-xl">
      {images.map((src, i) => (
        <GalleryCard
          key={i}
          src={src}
          alt={`Gallery Image ${i + 1}`}
          setActive={() => setActiveIndex((index) => (index === i ? null : i))}
          className={
            activeIndex === i
              ? "md:w-[163px] lg:w-[345px]"
              : "md:w-[163px] lg:w-[163px]"
          }
        />
      ))}
    </div>
  );
}

export default GallerySlider;
