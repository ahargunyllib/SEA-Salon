import { db } from "@/lib/prisma";
import type { NextRequest } from "next/server";

export async function PUT(
	request: NextRequest,
	{ params }: { params: { id: string } },
) {
	const id = Number(params.id);
	const { name, description, duration } = await request.json();

	const userId = request.headers.get("userid");

	if (!userId) {
		return new Response("Unauthorized", {
			status: 401,
		});
	}

	await db.service.update({
		where: {
			id,
		},
		data: {
			name,
			description,
			duration: Number(duration),
		},
	});

	return new Response("Service updated successfully.", {
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

	await db.service.delete({
		where: {
			id,
		},
	});

	return new Response("Service deleted successfully.", {
		status: 200,
	});
}
