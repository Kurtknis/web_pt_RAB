import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cx } from "@/lib/classnames";

type StackProps = {
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"div">;

export function Stack({ children, className, ...props }: StackProps) {
  return (
    <div className={cx("ui-stack", className)} {...props}>
      {children}
    </div>
  );
}
