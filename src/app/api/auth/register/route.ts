import { db } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
	const { email, password, fullName, phoneNumber } = await request.json();

	console.log(email, password, fullName, phoneNumber);

	const hashedPassword = await bcrypt.hash(password, 10);

	try {
		const user = await db.user.findFirst({
			where: {
				email,
			},
		});

		if (user) {
			return new Response("User already exists.", {
				status: 400,
			});
		}

		await db.user.create({
			data: {
				email,
				password: hashedPassword,
				fullName,
				phoneNumber,
				isAdmin: false,
			},
		});

		return new Response("User registered successfully.", {
			status: 201,
		});
	} catch (error) {
		return new Response("Database Error: Failed to Register.", {
			status: 500,
		});
	}
}
