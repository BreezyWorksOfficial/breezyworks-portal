import Image from "next/image";

const Card = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <div
      className={`flex flex-col ${
        index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
      } gap-4`}
    >
      <div className="flex-1 flex flex-col justify-end items-start">
        <h4 className="text-5xl font-urbanist mt-3">{title}</h4>
        <p className="font-poppins mt-1">{description}</p>
      </div>
      {/* <div className="flex-1">
        {index === 0 && <h5 className="text-2xl">Featured products</h5>}
      </div> */}
      <div className="flex-1">
        <Image src={"/filler.webp"} alt="" width={1000} height={1000} />
      </div>
    </div>
  );
};

const FeaturedWorks = () => {
  return (
    <section className="px-4 py-32 lg:px-10">
      <h5 className="text-[4vw] font-urbanist font-semibold">Our Works</h5>
      <div className="flex flex-col gap-32 mt-10">
        <Card title="AgriCorner" description="Design, Development" index={0} />
        <Card title="AgriCorner" description="Design, Development" index={1} />
      </div>
    </section>
  );
};

export default FeaturedWorks;
