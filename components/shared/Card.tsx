import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className }: CardProps) => {
  return <div className={cn(
    className,
    "border border-[#e9edf2]"
  )}>{children}</div>;
};

export default Card;
