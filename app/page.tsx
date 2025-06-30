import Hero from "./_components/Sections/Hero";
import About from "./_components/Sections/About";
import Services from "./_components/Sections/Services";
import Gallery from "./_components/Sections/Gallery";
import Testimonials from "./_components/Sections/Testimonials";
import Contact from "./_components/Sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
    </main>
  );
}
