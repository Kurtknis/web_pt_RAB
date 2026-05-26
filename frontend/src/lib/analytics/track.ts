"use client";

import { analyticsEvents, type AnalyticsPayload } from "./events";

const analyticsEnabled =
  process.env.NODE_ENV === "production" || process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(payload: AnalyticsPayload) {
  if (!analyticsEnabled) return;

  window.gtag?.("event", payload.event, payload);

  if (payload.event === analyticsEvents.whatsappHandoff || payload.event === analyticsEvents.inquirySubmitted) {
    window.fbq?.("track", "Lead", payload);
  }
}
