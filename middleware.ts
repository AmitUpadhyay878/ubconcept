import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";


export async function middleware(request: NextRequest) {

   const session = getSessionCookie(request); 
   const { pathname } = request.nextUrl;
   
   if (!session) {
       if (pathname.startsWith("/admin")) {
           return NextResponse.redirect(new URL("/admin/signin/", request.url));
       }
       if (pathname.startsWith("/admin/dashboard") 
        // || pathname.startsWith("/withdraw") || pathname.startsWith("/earnings")
    ) {
           return NextResponse.redirect(new URL("/admin/signin/", request.url));
       }
   }

   return NextResponse.next();
}
export const config = {
   matcher: [
       "/admin/dashboard",
        "/admin/blog-management/:path*",
        "/admin/category-management/:path*",
        "/admin/user-management",
        "/admin/jobs-management",
   ],
};