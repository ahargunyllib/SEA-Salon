"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";

const loginFormSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

export function LoginForm() {
	const form = useForm<LoginFormValues>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	function onSubmit(data: LoginFormValues) {
		console.log(data);
	}

	return (
		<React.Fragment>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<Label>Email</Label>
								<FormControl>
									<Input
										type="email"
										placeholder="Enter your email"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<Label>Password</Label>
								<FormControl>
									<Input
										type="password"
										placeholder="Enter your password"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button className="w-full" type="submit">
						Sign in
					</Button>
				</form>
			</Form>
		</React.Fragment>
	);
}
