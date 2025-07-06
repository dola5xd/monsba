import Image from "next/image";
import { div as MotionDiv } from "motion/react-client";

function GalleryCard({
  src,
  alt,
  setActive,
  className = "",
}: {
  src: string;
  alt: string;
  setActive: () => void;
  className?: string;
}) {
  return (
    <MotionDiv
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`aspect-video md:aspect-auto relative h-[274px] transition-all rounded-lg duration-500 md:cursor-pointer ${className}`}
      onClick={setActive}
      role="button"
      aria-label={alt}
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" ? setActive() : null)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        className="object-cover transition-transform duration-300 rounded-lg shadow-lg"
      />
    </MotionDiv>
  );
}

export default GalleryCard;
