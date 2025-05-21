"use client";

import { useState, useEffect } from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Accordian = ({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) => {
  const crossRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (index == 0) {
      setIsOpen(true);
    }
  }, [index]);

  useGSAP(() => {
    if (isOpen) {
      gsap.to(crossRef.current, {
        rotate: 45,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(crossRef.current, {
        rotate: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  }, [isOpen]);

  return (
    <li
      className="flex flex-col gap-2 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="h-px w-full opacity-10 bg-black my-2 text-xl"></div>

      <div
        className="text-[2.3vw] select-none relative font-medium font-urbanist flex items-center"
        style={{
          gridTemplateColumns: "",
        }}
      >
        <span className="relative block w-[16vw]">0{index + 1}</span>
        <h4 className="text-2xl">{title}</h4>
        <div className="cross" ref={crossRef}></div>
      </div>

      <div
        className={`${
          isOpen ? "" : "hidden"
        } text-xl pl-[16vw] gap-10 mt-4 max-w-[52vw]`}
      >
        <p className="min-w-[52vw]">{description}</p>
        {/* <p className="w-full font-bold">{"Technologies"}</p> */}
      </div>
    </li>
  );
};

export default function OurServices() {
  const services = [
    {
      title: "Designing",
      description: `We craft buetiful, responsive websites that blend aesthetics with
          functionality. From custom wordpress builds to shopify storefronts, we
          ensure your website doesn't just look great - it performs.`,
    },
    {
      title: "Development",
      description: `We craft buetiful, responsive websites that blend aesthetics with
            functionality. From custom wordpress builds to shopify storefronts, we
            ensure your website doesn't just look great - it performs.`,
    },
    {
      title: "Branding",
      description: `We craft buetiful, responsive websites that blend aesthetics with
            functionality. From custom wordpress builds to shopify storefronts, we
            ensure your website doesn't just look great - it performs.`,
    },
    {
      title: "SEO",
      description: `We craft buetiful, responsive websites that blend aesthetics with
            functionality. From custom wordpress builds to shopify storefronts, we
            ensure your website doesn't just look great - it performs.`,
    },
  ];

  return (
    <section className="py-32 items-center justify-center">
      <div className="m-auto gap-4  px-4 lg:px-10">
        <div className="basis-1/2">
          <h5 className="text-[4vw] font-urbanist font-semibold">
            Our Services
          </h5>
        </div>

        <div className="mt-10">
          <ul className="flex flex-col gap-4">
            {services.map((service, index) => (
              <Accordian
                key={service.title}
                index={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
