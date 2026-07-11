import { FaGraduationCap } from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";
import FooterIcon from "./FooterIcon";
import { BsMegaphone, BsShare } from "react-icons/bs";
import FooterMenu from "./FooterMenu";
import {
  legalMenu,
  productMenu,
  supportMenu,
} from "@/constants/footer.menu.constants";

const Footer = () => {
  return (
    <footer className="bg-primary w-full flex flex-col flex-wrap items-center justify-between overflow-hidden">
      <div className="flex items-start md:flex-row flex-col justify-between w-full p-8">
        <div className="w-full">
          <div className="inline-flex items-center gap-1">
            <FaGraduationCap className="text-4xl text-green-300" />
            <h1 className="font-bold text-white tracking-wide text-2xl">
              ScholarHub
            </h1>
          </div>
          <p className="text-gray-500 text-md tracking-wide font-medium mt-4 md:w-[40%] w-full">
            The world&lsquo;s leading scholarship management platform for
            ambitious students worldwide.
          </p>
          <div className="inline-flex items-center gap-4 mt-4 mb-8">
            <FooterIcon icon={IoMdGlobe} />
            <FooterIcon icon={BsMegaphone} />
            <FooterIcon icon={BsShare} />
          </div>
        </div>
        <div className="lg:w-[55%] md:w-[60%] w-full md:flex items-start md:gap-24 gap-8 grid grid-cols-2 grid-rows-1">
          <FooterMenu title="PRODUCT" items={productMenu} />
          <FooterMenu title="SUPPORT" items={supportMenu} />
          <FooterMenu title="LEGAL" items={legalMenu} />
        </div>
      </div>
      <hr className="bg-white/30 w-full h-0.5 mb-8" />
      <div className="text-center mb-8">
        <p className="text-gray-400 tracking-wide md:text-md text-sm">
          @ 2024 ScholarHub. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
