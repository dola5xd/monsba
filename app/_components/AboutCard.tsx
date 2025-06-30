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
      className="flex items-center justify-between"
    >
      <div className={`relative w-1/2 ${imageAspect} overflow-hidden`}>
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
      </div>
      <div className="w-1/2 flex flex-col gap-y-4 items-start px-20">
        <h3 className="font-bold text-3xl">{title}</h3>
        <p className="text-xl text-muted lato-font">{description}</p>
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
