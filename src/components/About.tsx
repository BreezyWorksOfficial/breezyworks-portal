const About = () => {
  return (
    <section className="max-w-[1400px] mx-auto py-40 px-4">
      <div className="flex flex-col lg:flex-row gap-4">
        <h5 className="flex-1 text-2xl font-urbanist font-semibold">
          A little bit about us.
        </h5>

        {/* <h5 className="text-6xl font-urbanist flex-1 ">A little bit about us.</h5> */}
        <p
          className="flex-1 font-poppins"
          style={{
            fontSize: "clamp(1rem, 6vw, 1.8rem)",
            lineHeight: "clamp(1.2, 1.6, 1.6)",
          }}
        >
          Breezy Works is a creative digital studio turned freelance agency that
          helps businesses elevate their online presence through tailored web
          solutions. With a focus on clean design, performance, and
          functionality, Breezy Works empowers startups and growing brands to
          launch, scale, and stand out online.
        </p>
      </div>
    </section>
  );
};

export default About;
