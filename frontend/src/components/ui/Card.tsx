import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cx } from "@/lib/classnames";

type CardProps = {
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"article">;

export function Card({ children, className, ...props }: CardProps) {
  return (
    <article className={cx("ui-card", className)} {...props}>
      {children}
    </article>
  );
}
