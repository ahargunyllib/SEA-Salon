import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { LoginForm } from "./LoginForm";

export default function LoginPage() {
	return (
		<Card className="w-full max-w-sm">
			<CardHeader>
				<CardTitle className="text-2xl">Login</CardTitle>
				<CardDescription>
					Enter your email below to login to your account.
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">
				<LoginForm />
				<div className="mt-4 text-center text-sm">
					Doesn't have an account?{" "}
					<Link href="/auth/register" className="underline">
						Register
					</Link>
				</div>
			</CardContent>
		</Card>
	);
}
