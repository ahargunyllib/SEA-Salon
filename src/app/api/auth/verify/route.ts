import type { NextRequest } from "next/server";

export async function GET(request: NextRequest){
  const token = request.cookies.get("token")?.value;
  
  if (!token) {
    return new Response("Unauthorized", { status: 401 });
  }

  return new Response("Authorized", { status: 200 });
}