"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect } from "react";
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
import type { BranchType } from "@/lib/placeholder-data";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const phoneRegex = new RegExp(
	/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);

const newReservationFormSchema = z.object({
	name: z.string().min(1, "Name is required"),
	phoneNumber: z.string().regex(phoneRegex, "Invalid Number"),
	date: z.string().min(1, "Date is required"),
	time: z.string().min(1, "Time is required"),
	branchId: z.string().min(1, "Branch is required"),
	serviceId: z.string().min(1, "Service is required"),
});

type NewReservationValues = z.infer<typeof newReservationFormSchema>;

export function NewReservationForm({
	branches,
}: {
	branches: BranchType[];
}) {
	const form = useForm<NewReservationValues>({
		resolver: zodResolver(newReservationFormSchema),
		defaultValues: {
			name: "",
			phoneNumber: "",
			date: "",
			time: "",
			branchId: "",
			serviceId: "",
		},
	});

	const branchId = form.watch("branchId");

	function onSubmit(data: NewReservationValues) {
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
									<Input placeholder="Enter your name" {...field} />
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
									<Input placeholder="Enter your phone number" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="date"
						render={({ field }) => (
							<FormItem>
								<Label>Date</Label>
								<FormControl>
									<Input type="date" placeholder="Enter date" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="time"
						render={({ field }) => (
							<FormItem>
								<Label>Time</Label>
								<FormControl>
									<Input type="time" placeholder="Enter time" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="branchId"
						render={({ field }) => (
							<FormItem>
								<Label>Branch</Label>
								<Select onValueChange={field.onChange} defaultValue={field.value}>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select a branch" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{branches.map((branch) => (
											<SelectItem key={branch.id} value={branch.id.toString()}>
												{branch.name}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="serviceId"
						render={({ field }) => (
							<FormItem>
								<Label>Service</Label>
								<Select onValueChange={field.onChange} defaultValue={field.value}>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select a service" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{branches
											.find((branch) => branch.id.toString() === branchId)
											?.services.map((service) => (
												<SelectItem
													key={service.id}
													value={service.id.toString()}
												>
													{service.name}
												</SelectItem>
											))}
									</SelectContent>
								</Select>
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
