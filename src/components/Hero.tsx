const Hero = () => {
  return (
    <section
      className="p-4 overflow-hidden relative flex flex-col items-center justify-center"
      style={{
        height: "clamp(100px, 100vh, 1600px)",
      }}
    >
      <video
        src={"/videos/blurry_1.mp4"}
        autoPlay
        loop
        className="absolute w-screen h-screen object-cover"
      ></video>
      <div className="absolute top-0 left-0 w-screen h-screen bg-black opacity-10"></div>

      <div className="z-10 text-white flex flex-col items-start md:text-center md:items-center">
        <h1
          className="font-urbanist font-medium"
          style={{
            fontSize: "clamp(2.6rem, 5vw, 12rem)",
            lineHeight: "1.2",
          }}
        >
          We Design what Clicks. <br className="hidden sm:inline" />
          We Build what Sticks.
        </h1>

        <p
          className="text mt-4 font-poppins"
          style={{
            maxWidth: "clamp(600px, 40vw, 800px)",
            fontSize: "clamp(1rem, 3vw, 1.5rem)",
            lineHeight: "1.2",
          }}
        >
          Partner with us to design smooth user journeys and develop fast,
          reliable digital solutions.
        </p>
      </div>
    </section>
  );
};

export default Hero;
