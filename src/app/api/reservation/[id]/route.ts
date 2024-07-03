import { db } from "@/lib/prisma";
import { dateToDate, timeToDate } from "@/lib/utils";
import type { NextRequest } from "next/server";

export async function PUT(
	request: NextRequest,
	{ params }: { params: { id: string } },
) {
	const { name, phoneNumber, date, time, branchId, serviceId } =
		await request.json();

	const userId = request.headers.get("userid");

	if (!userId) {
		return new Response("Unauthorized", {
			status: 401,
		});
	}

	await db.reservation.update({
		where: {
			id: Number(params.id),
		},
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

	return new Response("Reservation updated successfully.", {
		status: 200,
	});
}

export async function DELETE(
	request: NextRequest,
	{ params }: { params: { id: string } },
) {
	const id = Number(params.id);

	const userId = request.headers.get("userid");

	if (!userId) {
		return new Response("Unauthorized", {
			status: 401,
		});
	}

	await db.reservation.delete({
		where: {
			id,
		},
	});

	return new Response("Reservation deleted successfully.", {
		status: 200,
	});
}
