import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RegisterForm } from "./RegisterForm";

export default function RegisterPage() {
	return (
		<Card className="w-full max-w-sm">
			<CardHeader>
				<CardTitle className="text-2xl">Sign Up</CardTitle>
				<CardDescription>
					Enter your information to create an account
				</CardDescription>
			</CardHeader>
			<CardContent>
				<RegisterForm />
				<div className="mt-4 text-center text-sm">
					Already have an account?{" "}
					<Link href="/auth/login" className="underline">
						Login
					</Link>
				</div>
			</CardContent>
		</Card>
	);
}
