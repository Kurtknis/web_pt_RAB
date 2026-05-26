import { NextResponse } from "next/server";
import { z } from "zod";
import { analyticsEvents } from "@/lib/analytics/events";

const eventSchema = z.object({
  event: z.enum(Object.values(analyticsEvents) as [string, ...string[]]),
  route: z.string().max(240).optional(),
  label: z.string().max(160).optional(),
  source: z.string().max(80).optional(),
  device: z.enum(["mobile", "desktop", "tablet"]).optional(),
});

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const parsed = eventSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
