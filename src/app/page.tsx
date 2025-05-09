import Image from "next/image";

import OurServices from "@/components/OurServices";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <section className="p-4 overflow-hidden relative flex flex-col min-h-[100vh] items-center justify-center">
        <video
          src={"/videos/blurry_1.mp4"}
          autoPlay
          loop
          className="absolute w-screen h-screen object-cover"
        ></video>
        <div className="absolute top-0 left-0 w-screen h-screen bg-black opacity-15"></div>

        <div className="z-10 text-white">
          <h1
            className="font-sans font-medium text-center"
            style={{
              fontSize: "clamp(2.4rem, 6.5vw, 5rem)",
              lineHeight: "1.2",
            }}
          >
            We Design what Clicks. <br />
            We Build what Sticks.
          </h1>

          <p
            className="text-center mt-4"
            style={{
              maxWidth: "clamp(600px, 40vw, 800px)",
              fontSize: "clamp(1rem, 4vw, 1.5rem)",
              lineHeight: "1.2",
            }}
          >
            Partner with us to design smooth user journeys and develop fast,
            reliable digital solutions.
          </p>
        </div>
      </section>
      <About />
      {/* <OurServices />  */}
    </>
  );
}
