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

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const registerFormSchema = z.object({
	fullName: z.string().min(1, "Full name is required"),
	email: z.string().email().min(1, "Email is required"),
	phoneNumber: z.string().regex(phoneRegex, 'Invalid Number'),
	password: z.string().min(6, "Password must be at least 6 characters"),
});

type RegisterFormValues = z.infer<typeof registerFormSchema>;

export function RegisterForm() {
	const form = useForm<RegisterFormValues>({
		resolver: zodResolver(registerFormSchema),
		defaultValues: {
			fullName: "",
			email: "",
			phoneNumber: "",
			password: "",
		},
	});

	function onSubmit(data: RegisterFormValues) {
		console.log(data);
	}

	return (
		<React.Fragment>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex flex-col gap-4"
				>
					<FormField
						control={form.control}
						name="fullName"
						render={({ field }) => (
							<FormItem>
								<Label>Full Name</Label>
								<FormControl>
									<Input
										type="text"
										placeholder="Enter your full name"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
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
						name="phoneNumber"
						render={({ field }) => (
							<FormItem>
								<Label>Phone Number</Label>
								<FormControl>
									<Input
										type="tel"
										placeholder="Enter your phone number"
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
						Sign up
					</Button>
				</form>
			</Form>
		</React.Fragment>
	);
}
