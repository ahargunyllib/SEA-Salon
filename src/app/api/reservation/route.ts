import { db } from "@/lib/prisma";
import { dateToDate, timeToDate } from "@/lib/utils";
import { jwtVerify } from "jose";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
	const { name, phoneNumber, date, time, branchId, serviceId } =
		await request.json();

	const userId = request.headers.get("userid");

	if (!userId) {
		return new Response("Unauthorized", {
			status: 401,
		});
	}

	const data = await db.reservation.create({
		data: {
			name,
			phoneNumber,
			date: dateToDate(date),
			time: timeToDate(time),
			branchId: Number(branchId),
			serviceId: Number(serviceId),
			userId,
		},
	});

	return new Response(JSON.stringify(data), {
		status: 201,
		headers: {
			"Content-Type": "application/json",
		},
	});
}
