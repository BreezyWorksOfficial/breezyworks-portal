import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="px-4 lg:px-20">
      <section className="max-w-[1500px] mx-auto rounded-lg py-20 px-10 relative">
        <div className="absolute h-full w-full top-0 left-0   ">
          <div className="relative z-[2] bg-black opacity-20 w-full h-full"></div>
          <Image
            src={"/planet__1.jpg"}
            alt="Back"
            fill
            objectFit="cover"
            className="absolute"
            style={{ zIndex: 1 }}
          />
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex-1">
            <h5 className="relative z-10 text-4xl font-urbanist text-white">
              Testimonials
            </h5>
          </div>

          <div className="flex-1 z-10 text-white text-xl font-poppins leading-[1.4] opacity-100">
            Breezy Works is a creative digital studio turned freelance agency
            that helps businesses elevate their online presence through tailored
            web solutions. With a focus on clean design, performance, and
            functionality, Breezy Works empowers startups and growing brands to
            launch, scale, and stand out online.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
