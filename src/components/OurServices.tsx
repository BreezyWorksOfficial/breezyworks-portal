"use client";

import { useState, useEffect } from "react";

const Accordian = ({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (index == 0) {
      setIsOpen(true);
    }
  }, [index]);

  return (
    <li className="flex flex-col gap-2" onClick={() => setIsOpen(!isOpen)}>
      <h4 className="text-3xl font-urbanist font-medium">{title}</h4>
      <p className={`${isOpen ? "" : "hidden"} text-xl`}>{description}</p>
      {index != 3 && <div className="h-px w-full bg-black my-2 text-xl"></div>}
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
    <section className="py-32 items-center justify-center bg-[#F6F8FF]">
      <div className="flex flex-col lg:flex-row m-auto gap-4  px-4 lg:px-20">
        <div className="basis-1/2">
          <h5 className="text-[5vw] font-urbanist font-semibold">
            Our Services
          </h5>
          {/* <h3 className="text-3xl">Our Services</h3>
          <p className="text-xl">
            We craft buetiful, responsive websites that blend aesthetics with
            functionality. From custom wordpress builds to shopify storefronts,
            we ensure your website doesn't just look great - it performs.
          </p> */}
        </div>

        <div className="basis-1/2">
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
