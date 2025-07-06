"use client";

import dynamic from "next/dynamic";
const TestimonialsSlider = dynamic(() => import("../TestimonialsSlider"), {
  ssr: false,
});
import {
  section as MotionSection,
  div as MotionDiv,
  span as MotionSpan,
} from "motion/react-client";

const sentence = "Real stories from our happy clients".split(" ");

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

function Testimonials() {
  return (
    <MotionSection
      id="testimonials"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: "some" }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
      className="relative flex flex-col items-center justify-between px-4 py-10 sm:p-10 lg:py-20 xl:p-20 lg:flex-row gap-y-10"
    >
      <MotionDiv className="flex flex-col items-start gap-y-1.5 md:gap-y-4 text-3xl font-bold lg:text-5xl lg:max-w-sm xl:max-w-lg xl:text-6xl lg:w-1/2 px-6 sm:px-0">
        <MotionSpan
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-base md:text-xl text-muted lato-font"
        >
          Testimonial
        </MotionSpan>

        <MotionDiv
          className="flex flex-wrap gap-x-2"
          variants={container}
          initial="hidden"
          whileInView="show"
        >
          {sentence.map((word, index) => (
            <MotionSpan key={index} variants={wordVariant}>
              {word}
            </MotionSpan>
          ))}
        </MotionDiv>
      </MotionDiv>

      <TestimonialsSlider />
    </MotionSection>
  );
}

export default Testimonials;
