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
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import type { Service } from "@/lib/definitions";

const newBranchFormSchema = z.object({
	name: z.string().min(1, "Name is required"),
	location: z.string().min(1, "Location is required"),
	openingTime: z.string().min(1, "Opening time is required"),
	closingTime: z.string().min(1, "Closing time is required"),
	serviceIds: z
		.array(z.string())
		.min(1, "At least one service is required")
		.max(3, "Maximum of 3 services allowed"),
});

type NewBranchValues = z.infer<typeof newBranchFormSchema>;

export function NewBranchForm({
	services,
}: {
	services: Service[];
}) {
	const router = useRouter();

	const form = useForm<NewBranchValues>({
		resolver: zodResolver(newBranchFormSchema),
		defaultValues: {
			name: "",
			location: "",
			openingTime: "",
			closingTime: "",
			serviceIds: [],
		},
	});

	async function onSubmit(data: NewBranchValues) {
		try {
			const response = await fetch("/api/branch", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (response.status === 201) {
				toast.success("Branch created successfully");
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
									<Input placeholder="Enter name" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="location"
						render={({ field }) => (
							<FormItem>
								<Label>Location</Label>
								<FormControl>
									<Input placeholder="Enter location" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="flex flex-row gap-4 justify-between">
					<FormField
						control={form.control}
						name="openingTime"
						render={({ field }) => (
							<FormItem className="flex flex-col gap-2 w-full">
								<Label>Opening Time</Label>
								<FormControl>
									<Input
										type="time"
										placeholder="Enter your opening time"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="closingTime"
						render={({ field }) => (
							<FormItem className="flex flex-col gap-2 w-full">
								<Label>Closing Time</Label>
								<FormControl>
									<Input
										type="time"
										placeholder="Enter your closing time"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					</div>
					<FormField
						control={form.control}
						name="serviceIds"
						render={({ field }) => (
							<FormItem>
								<Label>Services</Label>
								<div className="flex flex-row flex-wrap gap-x-4 gap-y-2">
									{services.map((service) => (
										<FormField
											key={service.id}
											control={form.control}
											name="serviceIds"
											render={({ field }) => (
												<FormItem key={service.id} className="space-y-0 flex flex-row gap-2 justify-center items-center">
													<FormControl>
														<Checkbox
															checked={field.value?.includes(
																service.id.toString(),
															)}
															onCheckedChange={(checked) =>
																checked
																	? field.onChange([
																			...field.value,
																			service.id.toString(),
																		])
																	: field.onChange(
																			field.value?.filter(
																				(id) => id !== service.id.toString(),
																			),
																		)
															}
														/>
													</FormControl>
													<Label>{service.name}</Label>
												</FormItem>
											)}
										/>
									))}
								</div>
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
