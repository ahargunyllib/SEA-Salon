import { db } from "@/lib/prisma";
import { jwtVerify } from "jose";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	const data = await db.review.findMany({
		select: {
			id: true,
			comment: true,
			rating: true,
			user: {
				select: {
					fullName: true,
				},
			},
		},
	});

	return new Response(JSON.stringify(data), {
		status: 200,
		headers: {
			"Content-Type": "application/json",
		},
	});
}

export async function POST(request: NextRequest) {
  const { comment, rating } = await request.json();

  const token = request.cookies.get("token")?.value;
  const jwtSecret = "thisisverysecret";

  if (!token) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  const { payload } = await jwtVerify(
    token,
    new TextEncoder().encode("thisisverysecret"),
  );

  if (!payload) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  const userId = payload.userId as string;

  const data = await db.review.create({
    data: {
      comment,
      rating,
      userId
    },
  });

  

  return new Response(JSON.stringify(data), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
