import { db } from "@/lib/prisma";
import { timeToDate } from "@/lib/utils";
import type { NextRequest } from "next/server";

export async function PUT(
	request: NextRequest,
	{ params }: { params: { id: string } },
) {
	const id = Number(params.id);
	const { name, location, openingTime, closingTime, serviceIds } =
		await request.json();

	const userId = request.headers.get("userid");

	if (!userId) {
		return new Response("Unauthorized", {
			status: 401,
		});
	}

	const data = await db.branch.update({
		where: {
			id,
		},
		data: {
			name,
			location,
			openingTime: timeToDate(openingTime),
			closingTime: timeToDate(closingTime),
		},
	});

	const branchServices = await db.branchService.findMany({
		where: {
			branchId: id,
		},
	});

	// check if serviceIds includes all branchService.serviceId
	for (const branchService of branchServices) {
		if (!serviceIds.includes(branchService.serviceId.toString())) {
			await db.branchService.delete({
				where: {
					id: branchService.id,
				},
			});
		}
	}

	// check if branchService.serviceId includes all serviceIds
	for (const serviceId of serviceIds) {
		if (
			!branchServices.find(
				(branchService) => branchService.serviceId === Number(serviceId),
			)
		) {
			await db.branchService.create({
				data: {
					branchId: id,
					serviceId: Number(serviceId),
				},
			});
		}
	}

	return new Response("Branch updated successfully.", {
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

	await db.branchService.deleteMany({
		where: {
			branchId: id,
		},
	});

	await db.reservation.deleteMany({
		where: {
			branchId: id,
		},
	});

	await db.branch.delete({
		where: {
			id,
		},
	});

	return new Response("Service deleted successfully.", {
		status: 200,
	});
}
