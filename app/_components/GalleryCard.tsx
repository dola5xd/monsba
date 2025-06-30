import Image from "next/image";

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
    <div
      className={`relative h-[274px] transition-all rounded-lg duration-500 cursor-pointer ${className}`}
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
        sizes="(max-width: 768px) 80vw, (max-width: 1280px) 33vw, 163px"
        className="object-cover transition-transform duration-300 rounded-lg shadow-lg"
      />
    </div>
  );
}

export default GalleryCard;
