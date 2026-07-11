import { ElementType } from "react";

type FundingProps = {
  icon: ElementType;
  stepTitle: string;
  description: string;
};

const FundingContent = ({
  icon: Icon,
  stepTitle,
  description,
}: FundingProps) => {
  return (
    <div className="text-center flex items-center flex-col">
      <div className="bg-[#dde8ff] p-6 rounded-full mb-6">
        <Icon className="text-primary md:text-6xl text-3xl" />
      </div>
      <div className="my-4">
        <h3 className="text-primary md:text-2xl text-lg tracking-wide font-bold">
          {stepTitle}
        </h3>
        <p className="md:text-lg md:text-md text-gray-500 tracking-wide md:w-130 lg:w-90 w-auto mx-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FundingContent;
