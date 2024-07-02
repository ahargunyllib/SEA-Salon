"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { ReviewType } from "@/lib/placeholder-data";
import { cn } from "@/lib/utils";
import React from "react";
import { StarIcon } from "./svg/StarIcon";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form";

const reviewFormSchema = z.object({
	name: z.string(),
	rating: z.number().int().min(1).max(5),
	review: z.string(),
});

export function ReviewForm({
	setReviews,
}: { setReviews: React.Dispatch<React.SetStateAction<ReviewType[]>> }) {
	const form = useForm<z.infer<typeof reviewFormSchema>>({
		resolver: zodResolver(reviewFormSchema),
	});

	function onSubmit(values: z.infer<typeof reviewFormSchema>) {
		const review: ReviewType = { ...values, id: Date.now() };

		setReviews((prevReviews) => [review, ...prevReviews]);
	}

	const [rating, setRating] = React.useState(0);

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input placeholder="Enter your name" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="rating"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Rating</FormLabel>
							<FormControl>
								<div className="flex flex-row gap-2">
									{Array.from({ length: 5 }).map((_, i) => (
										<button
											// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
											key={i}
											type="button"
											onClick={() => {
												setRating(i + 1);
												field.onChange(i + 1);
											}}
											className={cn(
												"h-4 w-4",
												i < rating
													? "text-yellow-500"
													: "text-muted-foreground",
											)}
										>
											<StarIcon />
										</button>
									))}
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="review"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Review</FormLabel>
							<FormControl>
								<Textarea placeholder="Share your thoughts" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit Review</Button>
			</form>
		</Form>
	);
}
