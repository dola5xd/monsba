import Link from "next/link";
import Button from "./Button";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Links from "./Links";

function Header() {
  return (
    <header>
      <div className="flex items-center justify-between py-4 lg:gap-x-4 lg:px-20 lg:py-8">
        <nav className="flex flex-col items-center justify-center w-full lg:justify-between lg:flex-row gap-x-4 gap-y-3 lg:gap-y-0">
          <h1 className="flex items-center text-3xl font-bold tracking-tighter uppercase xl:text-4xl">
            <span className="text-5xl text-primary">M</span>onsba
          </h1>
          <Links className="px-2 sm:px-0 space-x-1.5 sm:space-x-2 flex flex-wrap lg:flex-nowrap lg:space-x-4 text-xs sm:text-base lg:text-xl *:font-semibold [&>li]:before:content-[''] [&>li]:before:absolute [&>li]:before:bottom-0 [&>li]:before:left-0 [&>li]:before:duration-500 [&>li]:before:w-0 [&>li]:before:h-[2px] [&>li]:before:bg-primary [&>li]:hover:before:w-full [&>li]:relative" />
        </nav>
        <div className="items-center justify-end hidden space-x-4 lg:flex lg:w-1/3">
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
