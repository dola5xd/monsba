import { BsArrowRight } from "react-icons/bs";
import Button from "../Button";
import GallerySlider from "../GallerySlider";
import {
  section as MotionSection,
  h2 as MotionH2,
  span as MotionSpan,
  div as MotionDiv,
} from "motion/react-client";

function Gallery() {
  return (
    <MotionSection
      id="gallery"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.5,
          },
        },
      }}
      className="relative flex flex-col items-center p-10 bg-center bg-cover lg:p-20 gap-y-10 gallery-bg"
    >
      <MotionH2
        variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
        className="flex flex-col items-center text-4xl font-bold text-center md:text-5xl md:text-start"
      >
        <MotionSpan className="text-base md:text-xl text-muted lato-font">
          Monsba Gallery
        </MotionSpan>
        Moments That Matter
      </MotionH2>

      <MotionDiv
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        className="w-full"
      >
        <GallerySlider />
      </MotionDiv>

      <MotionSpan
        variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
      >
        <Button className="flex items-center gap-2">
          View All Gallery <BsArrowRight />
        </Button>
      </MotionSpan>
    </MotionSection>
  );
}

export default Gallery;
