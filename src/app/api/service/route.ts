import { db } from "@/lib/prisma";
import { jwtVerify } from "jose";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
	const { name, description, duration } = await request.json();

	const userId = request.headers.get("userid");

	if (!userId) {
		return new Response("Unauthorized", {
			status: 401,
		});
	}

	const data = await db.service.create({
		data: {
			name,
			description,
			duration: Number(duration)
		},
	});

	return new Response(JSON.stringify(data), {
		status: 201,
		headers: {
			"Content-Type": "application/json",
		},
	});
}
