import NavigateLink from "@/components/ui/NavigateLink/NavigateLink";
import { routes } from "@/lib/constants/route.constants";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse justify-evenly items-center w-full p-4 mt-8">
      <div className="md:text-left text-center">
        <div>
          <h2 className="text-primary font-bold text-4xl tracking-wide">
            Find ScholarShips.
          </h2>
          <h2 className="text-primary font-bold text-4xl tracking-wide">
            Track Applications.
          </h2>
          <h2 className="font-bold text-4xl tracking-wide text-green-600">
            Achieve Your Dreams.
          </h2>
        </div>  
        <p className="tracking-wide text-lg mt-6 mb-6 lg:w-200 w-full">
          The all-in one platform for students to discover thounsands of funding
          opportunities, manage complex application deadlines, and secure their
          academic future with confidence.
        </p>
        <NavigateLink
          href={routes.scholarships}
          variants="primary"
          className="p-4 w-full"
        >
          Browse Scholarships
        </NavigateLink>
      </div>
        <Image
          src={"/assets/hero.jpg"}
          alt="hero bg"
          width={1200}
          height={1600}
          loading="eager"
          className="rounded-md mb-8"
        />
        </div>
  );
};

export default Hero;
