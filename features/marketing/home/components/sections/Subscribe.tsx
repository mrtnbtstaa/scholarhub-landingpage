import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";

const Subscribe = () => {
  return (
    <div className="bg-[#f0f2fa] w-full flex items-center justify-center flex-col p-4 gap-4 mb-16">
      <div className="text-center flex flex-col items-center">
        <h2 className="text-primary font-bold md:text-4xl text-2xl tracking-wide md:text-start text-center mt-16">
          Never Miss a Deadline
        </h2>
        <p className="text-gray-500 tracking-wide text-lg md:text-start text-center   ">
          Join 50,000+ students receiving weekly curated scholarships and
          application tips.
        </p>
      </div>
      <div className="md:min-w-190 min-w-105 inline-flex gap-2 items-center">
        <Input className="w-full" />
        <Button className="whitespace-nowrap">Subscribe Now</Button>
      </div>
    </div>
  );
};

export default Subscribe;
