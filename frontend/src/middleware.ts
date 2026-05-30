import { NextResponse, type NextRequest } from "next/server";

const staleVercelObservabilityScriptPattern = /^\/[a-f0-9]{16}\/script\.js$/;

export function middleware(request: NextRequest) {
  if (staleVercelObservabilityScriptPattern.test(request.nextUrl.pathname)) {
    return new NextResponse("", {
      status: 200,
      headers: {
        "Content-Type": "application/javascript; charset=utf-8",
        "Cache-Control": "no-store, max-age=0",
        "X-Content-Type-Options": "nosniff",
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  }

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
  matcher: ["/admin/:path*", "/:observabilityHash([a-f0-9]{16})/script.js"],
};
