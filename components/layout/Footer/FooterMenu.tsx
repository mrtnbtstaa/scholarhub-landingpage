import NavigateLink from "@/components/ui/NavigateLink/NavigateLink";
import { MenuItem } from "@/types/footer.menu";

interface MenuProps<T extends MenuItem> {
  title: string;
  items: T[];
}

const FooterMenu = <T extends MenuItem>({ title, items }: MenuProps<T>) => {
  return (
    <div className="flex flex-col w-full flex-wrap">
      <h2 className="font-semibold tracking-wide text-green-300 text-md">
        {title}
      </h2>
      {items.length &&
        items.map((item) => (
          <NavigateLink
            variants="default"
            key={item.label}
            href={item.href}
            className="my-2 text-gray-300 md:text-md"
          >
            {item.label}
          </NavigateLink>
        ))}
    </div>
  );
};

export default FooterMenu;
