import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import About from "@/components/About";
import FeaturedWorks from "@/components/FeaturedWorks";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <OurServices />
      <FeaturedWorks />
      <Testimonials />
    </>
  );
}
