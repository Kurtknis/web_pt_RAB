import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cx } from "@/lib/classnames";

type GridProps = {
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"div">;

export function Grid({ children, className, ...props }: GridProps) {
  return (
    <div className={cx("ui-grid", className)} {...props}>
      {children}
    </div>
  );
}
