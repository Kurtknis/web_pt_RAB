import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cx } from "@/lib/classnames";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "light" | "ghost";
  className?: string;
} & ComponentPropsWithoutRef<"button">;

export function Button({ children, href, variant = "light", className, type = "button", ...props }: ButtonProps) {
  const classes = cx("button", `button--${variant}`, className);
  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
}
