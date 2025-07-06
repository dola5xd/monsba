"use client";

import { useLenis } from "lenis/react";
import Link from "next/link";

type LinksProps = {
  className?: string;
};

function Links({ className }: LinksProps) {
  const lenis = useLenis();

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el && lenis) {
      lenis.scrollTo(el, {
        duration: 1.5,
        easing: (t) => 1 - Math.pow(1 - t, 3),
      });
    }
  };
  const links = [
    { label: "About Us", id: "about" },
    { label: "Services", id: "services" },
    { label: "Gallery", id: "gallery" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact Us", id: "contact" },
  ];

  return (
    <ul className={className}>
      {links.map((link) => (
        <li key={link.id}>
          <Link href={"#" + link.id} onClick={() => handleScroll(link.id)}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Links;
