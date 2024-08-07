import { db } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { SignJWT } from "jose";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const { email, password } = await request.json();
	const jwtSecret = "thisisverysecret";

	try {
		const user = await db.user.findUnique({
			where: { email },
		});

		if (!user) {
			return new Response("Invalid email or password", { status: 401 });
		}

		const passwordMatch = await bcrypt.compare(password, user.password);
		if (!passwordMatch) {
			return new Response("Invalid email or password", { status: 401 });
		}

		const iat = Math.floor(Date.now() / 100);
		const exp = iat + 60 * 60;
		const token = await new SignJWT({ userId: user.id, isAdmin: user.isAdmin })
			.setProtectedHeader({ alg: "HS256", typ: "JWT" })
			.setExpirationTime(exp)
			.setIssuedAt(iat)
			.setNotBefore(Math.floor(Date.now() / 1000))
			.sign(new TextEncoder().encode(jwtSecret));

		const cookieOptions = {
			name: "token",
			value: token,
			httpOnly: true,
			path: "/",
			secure: process.env.NODE_ENV !== "development",
			maxAge: exp,
		};

		const response = new NextResponse(
			JSON.stringify({
				status: "success",
				token,
			}),
			{
				status: 200,
				headers: { "Content-Type": "application/json" },
			},
		);

		await Promise.all([
			response.cookies.set(cookieOptions),
			response.cookies.set({
				name: "logged-in",
				value: "true",
				maxAge: exp,
			}),
		]);

		return response;
	} catch (error) {
		return new Response("Internal server error", { status: 500 });
	}
}
