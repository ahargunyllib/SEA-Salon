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
import type { ServiceType } from "@/lib/placeholder-data";

const editServiceFormSchema = z.object({
	name: z.string().min(1, "Name is required"),
	description: z.string().min(1, "Description is required"),
	duration: z.number().int().min(1, "Duration must be at least 1 minute"),
});

type EditServiceValues = z.infer<typeof editServiceFormSchema>;

export function EditServiceForm({ oldService }: { oldService: ServiceType }) {
	const form = useForm<EditServiceValues>({
		resolver: zodResolver(editServiceFormSchema),
		defaultValues: {
			name: oldService.name,
			description: oldService.description,
			duration: oldService.duration,
		},
	});

	function onSubmit(data: EditServiceValues) {
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
