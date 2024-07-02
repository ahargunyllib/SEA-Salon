import { type NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { redirect } from "next/navigation";

export async function middleware(request: NextRequest) {
	const token = request.cookies.get("token")?.value;
	const jwtSecret = "thisisverysecret";

	if (!token) {
		return NextResponse.redirect(new URL("/auth/login", request.nextUrl.origin));
	}

	try {
		const { payload } = await jwtVerify(
			token,
			new TextEncoder().encode(jwtSecret),
		);

		const headers = new Headers(request.headers);
		headers.set("userId", `${payload.userId}`);

		const isAdmin = payload.isAdmin;
		const { pathname } = request.nextUrl;

		if (isAdmin || (!isAdmin && pathname === "/dashboard/reservation")) {
			return NextResponse.next({
				request: {
					headers,
				},
			});
		}

		return NextResponse.redirect("/");
	} catch (error) {
    return NextResponse.redirect(new URL("/auth/login", request.nextUrl.origin));
	}
}

export const config = {
  matcher: [
      '/dashboard/:path*'
  ],
};

