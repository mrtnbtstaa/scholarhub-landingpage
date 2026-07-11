import StatsContent from "../reusable/StatsContent";

const Stats = () => {
  return (
    <div className="bg-primary w-full mt-16 p-16 md:flex items-center justify-around flex-wrap grid grid-cols-2 grid-rows-1 gap-8">
      <StatsContent count={"10,000"} title="TOTAL SCHOLARSHIPS" />
      <StatsContent count={"45"} title="COUNTRIES" />
      <StatsContent count={"2,500"} title="PROVIDERS" />   
      <StatsContent count={"500K"} title="STUDENTS" />   
    </div>
  );
};

export default Stats;
