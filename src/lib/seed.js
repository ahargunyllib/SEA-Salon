import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

const db = new PrismaClient();

async function main() {
	const user = await db.user.create({
		data: {
			email: "ahargunyllib@gmail.com",
			password: await bcrypt.hash("password", 10),
			fullName: "Nugraha Billy Viandy",
			phoneNumber: "0812345678",
			isAdmin: false,
		},
	});

	const admin = await db.user.create({
		data: {
			email: "thomas.n@compfest.id",
			password: await bcrypt.hash("Admin123", 10),
			fullName: "Thomas N",
			phoneNumber: "08123456789",
			isAdmin: true,
		},
	});

	const branch = await db.branch.create({
		data: {
			name: "Branch 1",
			location: "Location 1",
			openingTime: new Date(),
			closingTime: new Date(),
		},
	});

	const service = await db.service.create({
		data: {
			name: "Service 1",
			description: "Description 1",
			duration: 30,
		},
	});

	const _branchServices = await db.branchService.create({
		data: {
			branchId: branch.id,
			serviceId: service.id,
		},
	});

	const _reservation = await db.reservation.create({
		data: {
			userId: user.id,
			name: user.fullName,
			phoneNumber: user.phoneNumber,
			serviceId: service.id,
			date: new Date(),
			time: new Date(),
			branchId: branch.id,
		},
	});

	await db.review.create({
		data: {
			userId: user.id,
			rating: 5,
			comment: "Comment 1",
		},
	});
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await db.$disconnect();
	});
