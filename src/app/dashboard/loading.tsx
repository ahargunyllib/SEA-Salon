import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
	return (
		<div className="flex flex-col gap-4 w-full ">
			<div className="flex flex-row items-center justify-between">
				<div className="flex flex-row gap-2">{/* <Button>asd</Button> */}</div>
				<div className="flex flex-row gap-2">
					<Skeleton className="w-16 h-10" />
				</div>
			</div>
			<Card className="flex-1">
				<CardHeader>
					<CardTitle>
						<Skeleton className="w-32 h-10" />
					</CardTitle>
					<CardDescription>
						<Skeleton className="w-32 h-4" />
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col gap-2">
						{Array.from({ length: 5 }).map((_, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<Skeleton key={index} className="w-full h-10" />
						))}
					</div>
					<div className="flex justify-center items-center">
						<Skeleton className="w-32 h-10 mt-2" />
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
