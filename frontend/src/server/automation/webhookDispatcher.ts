import type { BusinessEvent } from "./events";

export async function dispatchBusinessEvent(event: BusinessEvent) {
  const endpoint = process.env.BUSINESS_EVENTS_WEBHOOK_URL;
  if (!endpoint) return { dispatched: false as const };

  await fetch(endpoint, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(event),
  });

  return { dispatched: true as const };
}
