export type BusinessEvent =
  | { type: "lead.created"; leadId: string; createdAt: string }
  | { type: "lead.followup_due"; leadId: string; dueAt: string }
  | { type: "quotation.requested"; leadId: string; createdAt: string }
  | { type: "analytics.conversion"; event: string; createdAt: string };

export function createBusinessEvent(event: BusinessEvent) {
  return event;
}
