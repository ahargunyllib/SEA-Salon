import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";
import { StarIcon } from "./svg/StarIcon";
import type { Review } from "@/lib/definitions";

export function ReviewCard({ review }: { review: Review }) {
	return (
		<div className="flex flex-col justify-center space-y-4">
			<div className="grid gap-1">
				<div className="flex items-center gap-2">
					<Avatar className="w-8 h-8">
						<AvatarFallback>{getInitials(review.user.fullName)}</AvatarFallback>
					</Avatar>
					<div>
						<p className="text-sm font-medium">{review.user.fullName}</p>
						<div className="flex items-center gap-1 text-yellow-500">
							{
								// Loop yellow rating
								Array.from({ length: review.rating })
									.map((_, i) => (
										// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										<StarIcon key={i} className="w-4 h-4" />
									))

									// Loop gray rating
									.concat(
										Array.from({ length: 5 - review.rating }).map((_, i) => (
											<StarIcon
												// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
												key={i}
												className="w-4 h-4 text-muted-foreground"
											/>
										)),
									)
							}
						</div>
					</div>
				</div>
				<p className="text-muted-foreground">"{review.comment}"</p>
			</div>
		</div>
	);
}
