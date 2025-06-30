import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { MdOutlineMail, MdPhone } from "react-icons/md";

function Footer() {
  return (
    <footer className="px-20 py-10 bg-black text-white flex flex-col gap-10">
      <div className="flex items-center justify-between gap-x-10">
        <div className="flex flex-col items-start gap-2 ">
          <h2 className="flex items-center text-4xl font-bold tracking-tighter uppercase">
            <span className="text-5xl text-primary">M</span>onsba
          </h2>
          <p className="lato-font leading-6 text-gray-400">
            We craft unforgettable events with tailored planning, creative
            themes, and stress-free execution – from concept to celebration.
          </p>
        </div>
        <div className="lato-font min-w-1/3">
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul className="uppercase leading-[100%] tracking-[1%] flex flex-col gap-y-2">
            <li className="mb-2">
              <a href="#home" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#about" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#services" className="text-gray-400 hover:text-white">
                Services
              </a>
            </li>
            <li className="mb-2">
              <a href="#services" className="text-gray-400 hover:text-white">
                Gallery
              </a>
            </li>
            <li className="mb-2">
              <a href="#contact" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="min-w-1/4 flex flex-col gap-4">
          <ul className="flex items-start lato-font justify-between [&>li>h4]:text-xl [&>li>h4]:self-start [&>li]:flex [&>li]:items-center [&>li]:flex-col [&>li]:gap-2 [&>li>p]:flex [&>li>p]:items-center [&>li>p]:gap-x-2 [&>li>p]:text-gray-400 [&>li>p>span]:text-white">
            <li>
              <h4>Phone</h4>
              <p>
                <span>
                  <MdPhone size={30} />
                </span>
                +123-456-789-88
              </p>
            </li>
            <li>
              <h4>Email</h4>
              <p>
                <span>
                  <MdOutlineMail size={30} />
                </span>
                them@gmail.com
              </p>
            </li>
          </ul>

          <div className="flex flex-col gap-1.5">
            <h4 className="lato-font flex items-center gap-2">Find Us On:</h4>
            <ul className="flex items-center gap-4 mt-3 *:bg-primary *:p-3 *:rounded *:text-xl *:hover:bg-transparent *:outline-1 *:outline-transparent *:cursor-pointer *:hover:outline-primary *:duration-500">
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaXTwitter />
              </li>
              <li>
                <FaInstagram />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="h-0.25 w-full bg-gray-400" />
      <span className="lato-font uppercase">
        @ {new Date().getFullYear()} - Monsba
      </span>
    </footer>
  );
}

export default Footer;
