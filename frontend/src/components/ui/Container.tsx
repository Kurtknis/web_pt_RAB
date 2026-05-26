import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cx } from "@/lib/classnames";

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Container<T extends ElementType = "div">({ as, children, className, ...props }: ContainerProps<T>) {
  const Component = as ?? "div";
  return (
    <Component className={cx("luxury-container", className)} {...props}>
      {children}
    </Component>
  );
}
