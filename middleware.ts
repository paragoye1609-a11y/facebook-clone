// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { searchParams, pathname } = request.nextUrl;

  const title = searchParams.get("title") ?? "none";
  const desc = searchParams.get("desc") ?? "none";
  const cover = searchParams.get("cover") ?? "none";

  if (pathname === "/" && title && desc && cover) {
    const newUrl = request.nextUrl.clone();
    newUrl.pathname = `/meta/${encodeURIComponent(title)}/${encodeURIComponent(
      desc
    )}/${encodeURIComponent(cover)}`;
    return NextResponse.rewrite(newUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
