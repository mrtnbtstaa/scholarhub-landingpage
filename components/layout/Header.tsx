import { MenuList } from "@/lib/constants/menu.constants";
import NavigateLink from "../ui/NavigateLink/NavigateLink";
import { routes } from "@/lib/constants/route.constants";
import Button from "../ui/Button/Button";
import { MdMenu } from "react-icons/md";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-6 w-full shadow-xs shadow-gray-200">
      <h1 className="font-bold tracking-wide text-2xl">ScholarHub</h1>
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
          className="mx-4 p-2"
        >
          Login
        </NavigateLink>
        <NavigateLink href={routes.register} variants="primary" className="p-2">
          Register
        </NavigateLink>
      </div>
      <Button className="md:hidden block cursor-pointer">
        <MdMenu className="text-3xl" />
      </Button>
    </header>
  );
};

export default Header;
