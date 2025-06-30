"use client";

import GalleryCard from "./GalleryCard";
import { useState } from "react";
import { div as MotionDiv } from "motion/react-client";

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
    <div className="flex items-center gap-6 px-4 overflow-x-auto">
      {images.map((src, i) => (
        <MotionDiv
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          viewport={{ once: true }}
        >
          <GalleryCard
            src={src}
            alt={`Gallery Image ${i + 1}`}
            setActive={() =>
              setActiveIndex((index) => (index === i ? null : i))
            }
            className={activeIndex === i ? "w-[345px]" : "w-[163px]"}
          />
        </MotionDiv>
      ))}
    </div>
  );
}

export default GallerySlider;
