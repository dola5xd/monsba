import { Variants } from "motion";
import { div as MotionDiv } from "motion/react-client";

const variants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1 },
};

function ServicesCard({
  Icon,
  title,
  description,
}: {
  Icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <MotionDiv
      variants={variants}
      transition={{
        ease: "easeOut",
      }}
      className="flex flex-col gap-y-2 min-h-[300px] items-center text-center outline-1 outline-borders rounded-2xl py-8 px-4 shadow-lg shadow-borders min-w-[calc(25%-1rem)] hover:scale-105 transition-transform duration-500 *:cursor-default"
    >
      <span className="p-4 mb-4 text-5xl rounded-full bg-icons-circle text-muted">
        <Icon />
      </span>
      <h3 className="text-xl lato-font">{title}</h3>
      <p className="text-muted lato-font">{description}</p>
    </MotionDiv>
  );
}

export default ServicesCard;
