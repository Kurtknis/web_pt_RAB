import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const adminToken = process.env.ADMIN_PREVIEW_TOKEN;

  if (!adminToken || request.headers.get("x-admin-preview") !== adminToken) {
    return new NextResponse(null, {
      status: 404,
      headers: {
        "x-robots-tag": "noindex, nofollow",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
