import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cx } from "@/lib/classnames";

type SectionProps = {
  children: ReactNode;
  tone?: "ivory" | "charcoal" | "plain";
  className?: string;
} & ComponentPropsWithoutRef<"section">;

export function Section({ children, tone = "plain", className, ...props }: SectionProps) {
  const toneClass = tone === "plain" ? undefined : `section--${tone}`;
  return (
    <section className={cx("section", toneClass, className)} {...props}>
      {children}
    </section>
  );
}
