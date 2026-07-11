import NavigateLink from "../ui/NavigateLink/NavigateLink";
import Button from "../ui/Button/Button";
import { MdMenu } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { MenuList } from "@/constants/menu.constants";
import { routes } from "@/constants/route.constants";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-6 w-full shadow-xs shadow-gray-200 sticky top-0 z-100 bg-[#f8f9ff]">
      <div className="inline-flex items-center gap-1">
        <FaGraduationCap className="text-4xl" />
        <h1 className="font-bold tracking-wide text-2xl">ScholarHub</h1>
      </div>
      <nav className="md:flex hidden">
        <ul className="flex">
          {MenuList &&
            MenuList.map((menu) => (
              <li key={menu.title} className="mx-2 text-md">
                <NavigateLink href={menu.href}>{menu.title}</NavigateLink>
              </li>
            ))}
        </ul>
      </nav>
      <div className="md:block hidden">
        <NavigateLink
          href={routes.login}
          variants="default"
          className="mx-4 p-2 text-primary"
        >
          Login
        </NavigateLink>
        <NavigateLink href={routes.register} variants="primary" className="p-2">
          Register
        </NavigateLink>
      </div>
      <Button variants="default" className="md:hidden block cursor-pointer">
        <MdMenu className="text-3xl" />
      </Button>
    </header>
  );
};

export default Header;
