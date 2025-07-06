import {
  footer as MotionFooter,
  div as MotionDiv,
  li as MotionLi,
} from "motion/react-client";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { MdOutlineMail, MdPhone } from "react-icons/md";
import Links from "../Links";

function Footer() {
  return (
    <MotionFooter
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      className="flex flex-col gap-10 px-6 py-10 text-white bg-black sm:px-10 lg:px-20"
    >
      <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
        <MotionDiv
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="flex flex-col items-start gap-2 text-center md:text-left"
        >
          <h2 className="flex items-center text-4xl font-bold tracking-tighter uppercase">
            <span className="text-5xl text-primary">M</span>onsba
          </h2>
          <p className="leading-6 text-gray-400 text-start md:max-w-md lato-font">
            We craft unforgettable events with tailored planning, creative
            themes, and stress-free execution – from concept to celebration.
          </p>
        </MotionDiv>

        <MotionDiv
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lato-font md:w-1/3"
        >
          <h3 className="mb-4 text-2xl font-semibold">Quick Links</h3>
          <Links className="flex flex-col gap-2 tracking-wide uppercase" />
        </MotionDiv>

        <MotionDiv
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col w-full gap-6 md:w-1/4"
        >
          <ul className="flex flex-col gap-4 lato-font">
            <li className="flex flex-col gap-2">
              <h4 className="text-xl">Phone</h4>
              <p className="flex items-center gap-2 text-sm text-gray-400 lg:text-base ">
                <MdPhone size={24} className="text-white" />
                +123-456-789-88
              </p>
            </li>
            <li className="flex flex-col gap-2">
              <h4 className="text-xl">Email</h4>
              <p className="flex items-center gap-2 text-gray-400">
                <MdOutlineMail size={24} className="text-white" />
                them@gmail.com
              </p>
            </li>
          </ul>

          <div className="flex flex-col gap-2">
            <h4 className="lato-font">Find Us On:</h4>
            <ul className="flex items-center gap-4 mt-2 *:bg-primary *:p-2.5 *:rounded *:text-xl *:hover:bg-transparent *:outline-1 *:outline-transparent *:cursor-pointer *:hover:outline-primary *:duration-500">
              {[FaFacebookF, FaXTwitter, FaInstagram].map((Icon, i) => (
                <MotionLi
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon />
                </MotionLi>
              ))}
            </ul>
          </div>
        </MotionDiv>
      </div>

      <hr className="h-0.5 w-full bg-black/25" />

      <span className="text-center uppercase lato-font">
        © {new Date().getFullYear()} - Monsba
      </span>
    </MotionFooter>
  );
}

export default Footer;
