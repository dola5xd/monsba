import { IoDocumentTextOutline } from "react-icons/io5";
import { PiMedal, PiPaintBrushBroadDuotone } from "react-icons/pi";
import { CiFaceSmile } from "react-icons/ci";
import {
  div as MotionDiv,
  section as MotionSection,
  h2 as MotionH2,
} from "motion/react-client";
import ServicesCard from "../ServicesCard";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function Services() {
  return (
    <MotionSection
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: "some" }}
      id="services"
      className="flex flex-col items-center justify-center px-4 py-10 sm:px-10 min-h-dvh lg:px-20 gap-y-10 "
    >
      <MotionH2
        variants={item}
        className="flex flex-col items-center text-2xl font-bold text-center sm:text-3xl lg:text-4xl xl:text-5xl"
      >
        <span className="text-sm sm:text-base lg:text-xl text-muted lato-font">
          Why Monsba?
        </span>
        Designed to Impress, Planned to Perfection
      </MotionH2>
      <MotionDiv
        variants={container}
        className="flex flex-col items-center gap-4 md:justify-center md:flex-wrap md:flex-row xl:flex-nowrap"
      >
        <ServicesCard
          Icon={IoDocumentTextOutline}
          title="Professional Planning Team"
          description="Our experienced planners handle every detail with care and precision, ensuring your event runs smoothly from start to finish."
        />
        <ServicesCard
          Icon={PiPaintBrushBroadDuotone}
          title="Unique, Custom Themes"
          description="We craft themes that reflect your vision elegant, playful, or bold perfectly tailored for any occasion."
        />
        <ServicesCard
          Icon={CiFaceSmile}
          title="Stress-Free Experience"
          description="Relax and enjoy your celebration while we manage the logistics, timelines, and vendors to deliver a seamless, worry-free event."
        />
        <ServicesCard
          Icon={PiMedal}
          title="Trusted by Hundreds"
          description="With a proven track record and glowing client reviews, Monsba is the trusted partner for memorable events that exceed expectations."
        />
      </MotionDiv>
    </MotionSection>
  );
}

export default Services;
