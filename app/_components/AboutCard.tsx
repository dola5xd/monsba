import { BsArrowRight } from "react-icons/bs";
import Button from "./Button";
import Image from "next/image";
import { div as MotionDiv } from "motion/react-client";
type AboutCardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonText: string;
  imageAspect?: string;
};

function AboutCard({
  imageSrc,
  imageAlt,
  title,
  description,
  buttonText,
  imageAspect = "aspect-[560/424]",
}: AboutCardProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5, ease: "easeInOut", scale: { delay: 0.5 } }}
      className="flex flex-col items-center justify-center gap-y-4 md:odd:flex-row md:not-odd:flex-row-reverse"
    >
      <div
        className={`relative w-full md:w-1/2 aspect-video md:aspect-square lg:${imageAspect} overflow-hidden`}
      >
        <Image src={imageSrc} alt={imageAlt} fill className="object-contain" />
      </div>
      <div className="flex flex-col items-start w-full md:px-2 xl:px-20 md:w-1/2 gap-y-4">
        <h3 className="text-2xl font-bold sm:text-3xl">{title}</h3>
        <p className="sm:text-xl text-muted lato-font">{description}</p>
        <Button
          variants="secondary"
          className="flex items-center justify-center mt-4 outline-1 outline-primary hover:[&>svg]:translate-x-2 "
        >
          {buttonText} <BsArrowRight className="ml-2 duration-500" />
        </Button>
      </div>
    </MotionDiv>
  );
}

export default AboutCard;
