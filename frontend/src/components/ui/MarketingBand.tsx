import type { ReactNode } from "react";
import { cx } from "@/lib/classnames";

export function MarketingBand({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={cx("marketing-band section", className)}>{children}</section>;
}
