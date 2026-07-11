import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

type InputProps = {
  className?: string;
} & ComponentPropsWithoutRef<"input">;

const Input = ({ className, ...props }: InputProps) => {
  return (
    <div
      className={cn(
        className,
        "bg-[#fefffe] rounded-md border border-[#c5c7cf] p-4",
      )}
    >
      <input
        className="border-none outline-none w-full"
        {...props}
        placeholder="Enter your email address"
      />
    </div>
  );
};

export default Input;
