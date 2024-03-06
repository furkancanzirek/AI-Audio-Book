import { NextResponse } from "next/server";
import NextAuth from "next-auth";
import { authConfig } from "./auth";

export default NextAuth(authConfig).auth;

const protectedRoutes = ["/admin", "/dashboard", "/"];

export async function middleware(req) {
  let session = await NextAuth(authConfig).auth();
  if (protectedRoutes.includes(req.nextUrl.pathname)&& !session) {
    return NextResponse.redirect("http://localhost:3000/auth");
  }
}

// See "Matching Paths" below to learn more
//matching paths all routes
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.png).*)"],
};
