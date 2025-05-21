"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

const About = () => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const split = new SplitText(textRef.current, {
        type: "lines, words, chars",
      });

      gsap.from(split.words, {
        duration: 0.3,
        opacity: 0,
        y: 20,
        ease: "power1.out",
        stagger: 0.02,

        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

      return () => split.revert(); // cleanup
    },
    { scope: textRef }
  ); // ensures scoped targeting

  return (
    <section className="py-20 md:py-32 flex justify-center">
      <p
        ref={textRef}
        className="font-poppins md:text-center"
        style={{
          maxWidth: "clamp(800px, 50vw, 1000px)",
          fontSize: "clamp(1.2rem, 2vw, 3rem)",
          // lineHeight: "clamp(1.2, 1.6, 1.6)",
        }}
      >
        Breezy Works is a digital studio helping brands grow through custom
        Shopify and WordPress solutions—crafted with clarity, speed, and
        purpose.
      </p>
    </section>
    // <section className="mx-auto py-40 px-4 lg:px-20">
    //   <div className="flex flex-col lg:flex-row gap-4">
    //     <h5 className="flex-1 text-xl font-urbanist font-semibold">
    //       A little bit about us.
    //     </h5>

    //     {/* <h5 className="text-6xl font-urbanist flex-1 ">A little bit about us.</h5> */}
    //     <p
    //       ref={textRef}
    //       className="flex-1 font-poppins"
    //       style={{
    //         fontSize: "clamp(1rem, 4vw, 2rem)",
    //         // lineHeight: "clamp(1.2, 1.6, 1.6)",
    //       }}
    //     >
    //       Breezy Works is a creative digital studio turned freelance agency that
    //       helps businesses elevate their online presence through tailored web
    //       solutions. With a focus on clean design, performance, and
    //       functionality, Breezy Works empowers startups and growing brands to
    //       launch, scale, and stand out online.
    //     </p>
    //   </div>
    // </section>
  );
};

export default About;
