import { routes } from "./route.constants";

interface Menu {
  title: string;
  href: string;
}

export const MenuList: Menu[] = [
  {
    title: "Home",
    href: routes.home,
  },
  {
    title: "Scholarships",
    href: routes.scholarships,
  },
  {
    title: "About",
    href: routes.about,
  },
  {
    title: "Contact",
    href: routes.contact,
  },
];
