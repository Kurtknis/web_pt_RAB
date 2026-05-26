import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cx } from "@/lib/classnames";

type SurfaceProps = {
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"div">;

export function Surface({ children, className, ...props }: SurfaceProps) {
  return (
    <div className={cx("ui-surface", className)} {...props}>
      {children}
    </div>
  );
}
