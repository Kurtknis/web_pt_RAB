import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { WebVitalsReporter } from "@/components/providers/WebVitalsReporter";

const observabilityEnabled =
  process.env.NODE_ENV === "production" || process.env.NEXT_PUBLIC_ENABLE_OBSERVABILITY === "true";

export function Observability() {
  if (!observabilityEnabled) {
    return null;
  }

  return (
    <>
      <Analytics />
      <SpeedInsights />
      <WebVitalsReporter />
    </>
  );
}
