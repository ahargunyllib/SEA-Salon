import { db } from "@/lib/prisma";
import { timeToDate } from "@/lib/utils";
import { jwtVerify } from "jose";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
	const { name, location, openingTime, closingTime, serviceIds } =
		await request.json();

	const userId = request.headers.get("userid");

	if (!userId) {
		return new Response("Unauthorized", {
			status: 401,
		});
	}

	const data = await db.branch.create({
		data: {
			name,
			location,
			openingTime: timeToDate(openingTime),
			closingTime: timeToDate(closingTime),
		},
	});

	for (const id of serviceIds) {
		await db.branchService.create({
			data: {
				branchId: data.id,
				serviceId: Number(id),
			},
		});
	}

	return new Response(JSON.stringify(data), {
		status: 201,
		headers: {
			"Content-Type": "application/json",
		},
	});
}
