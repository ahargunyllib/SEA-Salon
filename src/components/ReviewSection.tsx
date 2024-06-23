"use client";

import { dummyReviews, type ReviewType } from "@/lib/data";
import { ReviewForm } from "./ReviewForm";
import React from "react";
import { ReviewCard } from "./ReviewCard";

export function ReviewSection() {
	const [reviews, setReviews] = React.useState<ReviewType[]>(dummyReviews);

	return (
		<section id="reviews" className="w-full py-12 md:py-24 lg:py-32">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
							What Our Clients Say
						</h2>
						<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Hear from our satisfied customers about their experiences at SEA
							Salon.
						</p>
					</div>
				</div>
				<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
					{
						// Loop reviews
						reviews.map((review) => (
							<ReviewCard key={review.id} review={review} />
						))
					}
				</div>
				<div className="mx-auto max-w-5xl py-12">
					<ReviewForm setReviews={setReviews} />
				</div>
			</div>
		</section>
	);
}
