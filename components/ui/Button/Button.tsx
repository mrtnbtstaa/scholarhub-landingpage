import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  className?: string;
  children: React.ReactNode;
  variants?: "primary" | "secondary" | "default";
}

const Button = ({
  className,
  children,
  variants = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button {...props} className={cn(className)}>
      {
        children
      }
    </button>
  );
};

export default Button;
