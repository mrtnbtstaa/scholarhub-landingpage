import { MdSearch, MdStar } from "react-icons/md";
import { BiTrendingUp } from "react-icons/bi";
import FundingContent from "../reusable/FundingContent";

const Funding = () => {
  return (
    <div className="mt-16 bg-[#f1f3fa] w-full flex items-center justify-center flex-col p-4">
      <h2 className="text-primary font-bold md:text-4xl text-2xl tracking-wide md:text-start text-center mt-16">
        Three Simple Steps to Funding
      </h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 grid-rows-1 w-full mt-8">
        <FundingContent
          icon={MdSearch}
          stepTitle="1. Search"
          description="Complete your profile to discover scholarships matched specifically to
          your background and achievements."
        />
        <FundingContent
          icon={MdStar}
          stepTitle="2. Save & Apply"
          description="Bookmark your favorites and follow our guided application checklists for each funding opportunity."
        />
        <FundingContent
          icon={BiTrendingUp}
          stepTitle="3. Track"
          description="Manage your submissions, track status updates, and stay on top of deadlines with your personalized dashboard."
        />
      </div>
    </div>
  );
};

export default Funding;
