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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { getDate, getTime } from "@/lib/utils";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import type { Branch, Reservation } from "@/lib/definitions";

const phoneRegex = new RegExp(
	/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);

const editReservationFormSchema = z.object({
	name: z.string().min(1, "Name is required"),
	phoneNumber: z.string().regex(phoneRegex, "Invalid Number"),
	date: z.string().min(1, "Date is required"),
	time: z.string().min(1, "Time is required"),
	branchId: z.string().min(1, "Branch is required"),
	serviceId: z.string().min(1, "Service is required"),
});

type EditReservationValues = z.infer<typeof editReservationFormSchema>;

export function EditReservationForm({
	oldReservation,
	branches,
}: {
	oldReservation: Reservation;
	branches: Branch[];
}) {
	const router = useRouter();

	const form = useForm<EditReservationValues>({
		resolver: zodResolver(editReservationFormSchema),
		defaultValues: {
			name: oldReservation.name,
			phoneNumber: oldReservation.phoneNumber,
			date: "",
			time: getTime(oldReservation.time),
			branchId: oldReservation.branch.id.toString(),
			serviceId: oldReservation.service.id.toString(),
		},
	});

	const branchId = form.watch("branchId");

	async function onSubmit(data: EditReservationValues) {
		try {
			const response = await fetch(`/api/reservation/${oldReservation.id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (response.status === 200) {
				toast.success("Reservation created successfully");
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
						Edit
					</Button>
				</form>
			</Form>
		</React.Fragment>
	);
}
