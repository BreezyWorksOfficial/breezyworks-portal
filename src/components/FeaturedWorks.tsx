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
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } gap-4`}
    >
      <div className="flex-1">
        {index === 0 && <h5 className="text-2xl">Featured products</h5>}
      </div>
      <div className="flex-1">
        <Image src={"/filler.webp"} alt="" width={1000} height={1000} />
        <h4 className="text-4xl font-urbanist mt-3">{title}</h4>
        <p className="font-poppins mt-1">{description}</p>
      </div>
    </div>
  );
};

const FeaturedWorks = () => {
  return (
    <section className="max-w-[1500px] mx-auto px-4 py-32 lg:px-20">
      <div className="flex flex-col gap-32">
        <Card title="AgriCorner" description="Design, Development" index={0} />
        <Card title="AgriCorner" description="Design, Development" index={1} />
      </div>
    </section>
  );
};

export default FeaturedWorks;
