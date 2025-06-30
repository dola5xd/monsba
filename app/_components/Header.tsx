import Link from "next/link";
import Button from "./Button";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Header() {
  return (
    <header>
      <div className="flex items-center justify-between px-20 py-8 ">
        <nav className="flex items-center justify-between w-1/2">
          <h1 className="flex items-center text-4xl font-bold tracking-tighter uppercase">
            <span className="text-5xl text-primary">M</span>onsba
          </h1>
          <ul className="flex space-x-4 text-xl *:font-semibold [&>li]:before:content-[''] [&>li]:before:absolute [&>li]:before:bottom-0 [&>li]:before:left-0 [&>li]:before:duration-500 [&>li]:before:w-0 [&>li]:before:h-[2px] [&>li]:before:bg-primary [&>li]:hover:before:w-full [&>li]:relative">
            <li>
              <Link href="#about">About Us</Link>
            </li>
            <li>
              <Link href="#services">Services</Link>
            </li>
            <li>
              <Link href="#">Gallery</Link>
            </li>
            <li>
              <Link href="#">Testimonial</Link>
            </li>
            <li>
              <Link href="#">Contact us</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variants="secondary" className="outline-1 outline-primary">
            Book Now
          </Button>
          <ul className="flex items-center space-x-4">
            <li>
              <Link href="#" aria-label="facebook">
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link href="#" aria-label="twitter">
                <FaXTwitter />
              </Link>
            </li>
            <li>
              <Link href="#" aria-label="instagram">
                <FaInstagram />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
