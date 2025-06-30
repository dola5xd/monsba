import AboutCard from "../AboutCard";
import {
  div as MotionDiv,
  section as MotionSection,
} from "motion/react-client";

function About() {
  return (
    <MotionSection
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ staggerChildren: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      id="about"
      className="flex flex-col items-center min-h-screen p-20"
    >
      <h2 className="flex flex-col items-center text-5xl font-bold">
        <span className="text-xl text-muted lato-font">What We Do</span>
        Expert Event Planning, Every Step of the Way
      </h2>
      <MotionDiv
        transition={{ staggerChildren: 0.5 }}
        className="flex flex-col gap-y-10 mt-10 *:odd:flex-row *:not-odd:flex-row-reverse px-20"
      >
        <AboutCard
          imageSrc="/assets/About/Birthday parties.svg"
          imageAlt="man and woman celebrate birthday"
          title="Birthday Parties"
          description="From intimate gatherings to grand celebrations, we craft unforgettable birthday experiences tailored to your theme and style"
          buttonText="Get a Free Quote"
        />
        <AboutCard
          imageSrc="/assets/About/Wedding.svg"
          imageAlt="man and woman celebrate Weddings party"
          title="Weddings Parties"
          description="Your dream day, flawlessly executed. We handle every detail with elegance to create a magical and stress-free wedding celebration."
          buttonText="Get a Free Quote"
          imageAspect="aspect-[560/387.73]"
        />
        <AboutCard
          imageSrc="/assets/About/Corporate events.svg"
          imageAlt="man and woman works in corporate events"
          title="Corporate Events"
          description="Impress clients and engage your team with professional event planning, branding, and seamless execution for any business occasion."
          buttonText="Get a Free Quote"
        />
        <AboutCard
          imageSrc="/assets/About/outdoor events.svg"
          imageAlt="man and 2 woman in beach events"
          title="Outdoor & Beach Events"
          description="Celebrate under the sky or by the sea. We design vibrant, outdoor experiences with the perfect atmosphere and setup."
          buttonText="Get a Free Quote"
          imageAspect="aspect-[560/335.84]"
        />
        <AboutCard
          imageSrc="/assets/About/Kids parties.svg"
          imageAlt="2 clowns make kids happy in kids parties"
          title="Kids’ Parties"
          description="Make your child’s special day unforgettable. Easily discover and book party venues, entertainers, and fun-filled packages all in one place."
          buttonText="Get a Free Quote"
          imageAspect="aspect-[485/368]"
        />
      </MotionDiv>
    </MotionSection>
  );
}

export default About;
