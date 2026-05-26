import { NextResponse } from "next/server";
import { z } from "zod";

const metricSchema = z.object({
  id: z.string().max(128),
  name: z.string().max(32),
  value: z.number(),
  rating: z.enum(["good", "needs-improvement", "poor"]).optional(),
});

export async function POST(request: Request) {
  const body = await request.text();
  let payload: unknown;

  try {
    payload = JSON.parse(body || "{}");
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const parsed = metricSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
