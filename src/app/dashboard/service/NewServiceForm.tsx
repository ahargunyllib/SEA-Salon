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
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const newServiceFormSchema = z.object({
	name: z.string().min(1, "Name is required"),
	description: z.string().min(1, "Description is required"),
	duration: z.string().min(1, "Duration is required")
});

type NewServiceValues = z.infer<typeof newServiceFormSchema>;

export function NewServiceForm() {
	const router = useRouter();

	const form = useForm<NewServiceValues>({
		resolver: zodResolver(newServiceFormSchema),
		defaultValues: {
			name: "",
			description: "",
			duration: "0",
		},
	});

	async function onSubmit(data: NewServiceValues) {
		try {
			const response = await fetch("/api/service", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (response.status === 201) {
				toast.success("Service created successfully");
				router.refresh();
				form.reset();
			} else {
				toast.error("An error occurred");
			}
		} catch (error) {
			toast.error("An error occurred");
		}
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
						name="name"
						render={({ field }) => (
							<FormItem>
								<Label>Name</Label>
								<FormControl>
									<Input placeholder="Enter service name" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="description"
						render={({ field }) => (
							<FormItem>
								<Label>Description</Label>
								<FormControl>
									<Input placeholder="Enter service description" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="duration"
						render={({ field }) => (
							<FormItem>
								<Label>Duration (minutes)</Label>
								<FormControl>
									<Input
										type="number"
										placeholder="Enter service duration"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button className="w-full" type="submit">
						Create
					</Button>
				</form>
			</Form>
		</React.Fragment>
	);
}
