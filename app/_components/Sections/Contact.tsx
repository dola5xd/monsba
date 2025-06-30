"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { IoIosMail } from "react-icons/io";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import {
  section as MotionSection,
  div as MotionDiv,
  h2 as MotionH2,
} from "motion/react-client";
const ContactForm = dynamic(() => import("../ContactForm"), {
  ssr: false,
});

function Contact() {
  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <MotionSection
      id="contact"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.3 } },
      }}
      className="flex flex-col items-center justify-center min-h-screen px-4 py-10 bg-white"
    >
      <MotionH2
        variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
        className="text-5xl font-bold text-center mb-10"
      >
        Ready to Party?
      </MotionH2>

      <MotionDiv
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        className="flex flex-col md:flex-row items-stretch justify-center w-full max-w-6xl rounded-3xl overflow-hidden bg-gray-50 shadow-lg"
      >
        <MotionDiv className="bg-foreground text-white w-full md:w-1/2 px-16 py-10 flex flex-col justify-center gap-7 bg-[url('/assets/Shape.png')] bg-no-repeat bg-[120%_-20%]">
          <h2 className="text-4xl font-bold">Get in touch</h2>
          <ul className="flex flex-col gap-7 lato-font">
            <li className="flex items-center gap-4">
              <span className="bg-white/20 h-16 w-16 flex items-center justify-center rounded-full">
                <IoIosMail size={32} />
              </span>
              <p>
                <span className="font-semibold text-lg">Email Us</span>
                <br />
                <Link href="mailto:info@golio.com">info@golio.com</Link>
              </p>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-white/20 h-16 w-16 flex items-center justify-center rounded-full">
                <MdOutlinePhoneInTalk size={32} />
              </span>
              <p>
                <span className="font-semibold text-lg">Phone</span>
                <br />
                <Link href="tel:+1-202-555-0138">+1-202-555-0138</Link>
              </p>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-white/20 h-16 w-16 flex items-center justify-center rounded-full">
                <HiOutlineLocationMarker size={32} />
              </span>
              <p>
                <span className="font-semibold text-lg">
                  901 N Pitt Str., Suite 170
                </span>
                <br />
                Alexandria, VA 22314, USA
              </p>
            </li>
          </ul>

          <div className="mt-6">
            <h3 className="mb-3 lato-font">Find Us On:</h3>
            <ul className="flex gap-4 *:bg-primary *:p-3 *:rounded *:text-xl *:hover:bg-transparent *:outline-1 *:outline-transparent *:cursor-pointer *:hover:outline-primary *:duration-500">
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
        </MotionDiv>

        {isSubmit ? (
          <MotionDiv className="w-full md:w-1/2 flex items-center justify-center p-10 text-center text-primary lato-font">
            <p className="text-2xl font-semibold">
              Thank you for contacting us! We will get back to you soon.
            </p>
          </MotionDiv>
        ) : (
          <ContactForm onSubmitSuccess={() => setIsSubmit(true)} />
        )}
      </MotionDiv>
    </MotionSection>
  );
}

export default Contact;
