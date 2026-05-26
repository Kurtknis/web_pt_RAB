export const analyticsEvents = {
  ctaClick: "cta_click",
  inquiryStarted: "inquiry_started",
  inquirySubmitted: "inquiry_submitted",
  whatsappHandoff: "whatsapp_handoff",
  portfolioViewed: "portfolio_viewed",
  insightViewed: "insight_viewed",
} as const;

export type AnalyticsEventName = (typeof analyticsEvents)[keyof typeof analyticsEvents];

export type AnalyticsPayload = {
  event: AnalyticsEventName;
  route?: string;
  label?: string;
  source?: string;
  device?: "mobile" | "desktop" | "tablet";
};
