import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  variants?: "primary" | "secondary"
};

const Card = ({ children, className, variants = "primary" }: CardProps) => {
  return <div className={cn(
    className,
    variants === "primary" && "bg-white hover:border-gray-300 border-4 transition-colors duration-150",
    
    "border border-[#e9edf2]"
  )}>{children}</div>;
};

export default Card;
