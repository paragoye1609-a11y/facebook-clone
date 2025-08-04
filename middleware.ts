// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { searchParams, pathname } = request.nextUrl;

  const title = searchParams.get("title");
  const desc = searchParams.get("desc");
  const cover = searchParams.get("cover");

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
