"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentPropsWithoutRef, ElementType } from "react";

type NavigateLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  children: React.ReactNode;
  className?: string;
  variants?: "primary" | "secondary" | "default" | "menu";
  icon?: ElementType;
};

const NavigateLink = ({
  children,
  className,
  variants = "menu",
  icon: Icon,
  href,
  ...props
}: NavigateLinkProps) => {
  const path = usePathname();

  // Checking for url string or url object
  const hrefString = typeof href === "string" ? href : href.pathname || "";

  // Checking sub route match
  const isActive = hrefString === path;
  // const isActive = hrefString === "/" ? path === "/" : path.startsWith(hrefString);

  return (
    <Link
      href={href}
      {...props}
      className={cn(
        "duration-200 transition-colors ease-in-out",
        className,
        // Conditional styles based on variants and isActive
        variants === "menu" && isActive && "hover:text-muted font-bold tracking-wider",
        variants === "primary" && "bg-primary text-white rounded-md tracking-wide",
        variants === "default" && "font-medium tracking-wide",
      )}
    >
      {Icon && (
        <div className="inline-flex gap-2">
          <Icon className="text-2xl text-primary" />
          {children}
        </div>
      )}  

      {children }
    </Link>
  );
};

export default NavigateLink;
