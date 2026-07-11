import { ElementType } from "react";

const FooterIcon = ({ icon: Icon }: { icon: ElementType }) => {
  return (
    <div className="bg-[#1b3658] rounded-full p-4">
      <Icon className="md:text-2xl text-lg text-white" />
    </div>
  );
};

export default FooterIcon;
