"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Logout() {
	const router = useRouter();

	async function logout() {
		await fetch("/api/auth/logout", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
		});

		router.push("/");
	}

	return (
		<Button
			onClick={() => {
				logout();
			}}
      variant="ghost"
		>
			Logout
		</Button>
	);
}
