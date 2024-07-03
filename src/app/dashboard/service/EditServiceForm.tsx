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
import type { Service } from "@/lib/definitions";

const editServiceFormSchema = z.object({
	name: z.string().min(1, "Name is required"),
	description: z.string().min(1, "Description is required"),
	duration: z.string().min(1, "Duration is required"),
});

type EditServiceValues = z.infer<typeof editServiceFormSchema>;

export function EditServiceForm({ oldService }: { oldService: Service }) {
	const router = useRouter();
	
	const form = useForm<EditServiceValues>({
		resolver: zodResolver(editServiceFormSchema),
		defaultValues: {
			name: oldService.name,
			description: oldService.description,
			duration: oldService.duration.toString(),
		},
	});

	async function onSubmit(data: EditServiceValues) {
		try {
			const response = await fetch(`/api/service/${oldService.id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (response.status === 200) {
				toast.success("Service edited successfully");
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
						Edit
					</Button>
				</form>
			</Form>
		</React.Fragment>
	);
}
