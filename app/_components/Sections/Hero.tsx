import Image from "next/image";
import Button from "../Button";
import {
  div as MotionDiv,
  section as MotionSection,
  h1 as MotionH1,
  p as MotionP,
} from "motion/react-client";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function Hero() {
  return (
    <MotionSection
      variants={container}
      initial="hidden"
      whileInView="show"
      id="hero"
      className="flex items-center justify-between px-20 py-10 gap-x-20"
    >
      <MotionDiv
        variants={container}
        className="flex flex-col items-start justify-center gap-y-7 max-w-1/2"
      >
        <MotionH1 variants={item} className="text-6xl font-bold">
          Unforgettable Parties Seamlessly Organized
        </MotionH1>
        <MotionP variants={item} className="text-xl text-muted lato-font">
          Monsba transforms your ideas into seamless, stylish celebrations —
          birthdays, weddings, or corporate events.
        </MotionP>
        <MotionDiv variants={item} className="flex items-center gap-x-4">
          <Button className="outline-1 outline-primary">
            Get a Free Quote
          </Button>
          <Button
            variants="secondary"
            className="outline-1 outline-transparent hover:outline-primary"
          >
            See Our Work
          </Button>
        </MotionDiv>
      </MotionDiv>

      <MotionDiv
        variants={container}
        className="grid w-full grid-cols-6 grid-rows-6 gap-4 p-4 mx-auto max-w-2/5"
      >
        <MotionDiv
          variants={item}
          className="relative col-span-2 row-span-2 aspect-square"
        >
          <Image
            src="/assets/hero/hero-1.webp"
            alt="Party celebration"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 163px"
            className="object-cover rounded-xl"
            priority
            fetchPriority="high"
          />
        </MotionDiv>
        <MotionDiv
          variants={item}
          className="relative col-span-2 col-start-3 row-span-2 aspect-square"
        >
          <Image
            src="/assets/hero/hero-2.webp"
            alt="Party celebration"
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 163px"
            className="object-cover rounded-xl"
          />
        </MotionDiv>
        <MotionDiv
          variants={item}
          className="relative col-span-2 col-start-5 row-span-2 aspect-square"
        >
          <Image
            src="/assets/hero/hero-3.webp"
            alt="Party celebration"
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 163px"
            className="object-cover rounded-xl"
          />
        </MotionDiv>
        <MotionDiv
          variants={item}
          className="relative col-span-2 row-span-4 row-start-3"
        >
          <Image
            src="/assets/hero/hero-4.webp"
            alt="Party celebration"
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 163px"
            className="object-cover rounded-xl"
          />
        </MotionDiv>
        <MotionDiv
          variants={item}
          className="relative col-span-4 col-start-3 row-span-2 row-start-3"
        >
          <Image
            src="/assets/hero/hero-5.webp"
            alt="Party celebration"
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 340px"
            className="object-cover rounded-xl"
          />
        </MotionDiv>
        <MotionDiv
          variants={item}
          className="relative col-span-4 col-start-3 row-span-2 row-start-5"
        >
          <Image
            src="/assets/hero/hero-6.webp"
            alt="Party celebration"
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 340px"
            className="object-cover rounded-xl"
          />
        </MotionDiv>
      </MotionDiv>
    </MotionSection>
  );
}

export default Hero;
