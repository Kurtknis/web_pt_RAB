import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { WebVitalsReporter } from "@/components/providers/WebVitalsReporter";

const observabilityEnabled =
  process.env.NODE_ENV === "production" || process.env.NEXT_PUBLIC_ENABLE_OBSERVABILITY === "true";

const vercelAnalyticsScriptSrc = "https://va.vercel-scripts.com/v1/script.js";
const vercelSpeedInsightsScriptSrc = "https://va.vercel-scripts.com/v1/speed-insights/script.js";

export function Observability() {
  if (!observabilityEnabled) {
    return null;
  }

  return (
    <>
      <Analytics scriptSrc={vercelAnalyticsScriptSrc} />
      <SpeedInsights scriptSrc={vercelSpeedInsightsScriptSrc} />
      <WebVitalsReporter />
    </>
  );
}
