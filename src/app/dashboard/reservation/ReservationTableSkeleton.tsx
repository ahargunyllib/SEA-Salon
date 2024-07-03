import { Skeleton } from "@/components/ui/skeleton";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export async function ReservationTableSkeleton() {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Name</TableHead>
					<TableHead>Active Phone Number</TableHead>
					<TableHead>Type of service</TableHead>
					<TableHead>Date</TableHead>
					<TableHead>Time</TableHead>
					<TableHead>Branch</TableHead>
					<TableHead />
				</TableRow>
			</TableHeader>
			<TableBody>
				{Array.from({ length: 5 }).map((_, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<TableRow key={index}>
						<TableCell>
							<Skeleton className="w-full h-6" />
						</TableCell>
						<TableCell>
							<Skeleton className="w-full h-6" />
						</TableCell>
						<TableCell>
							<Skeleton className="w-full h-6" />
						</TableCell>
						<TableCell>
							<Skeleton className="w-full h-6" />
						</TableCell>
						<TableCell>
							<Skeleton className="w-full h-6" />
						</TableCell>
						<TableCell>
							<Skeleton className="w-full h-6" />
						</TableCell>
						<TableCell>
							<Skeleton className="w-12 h-6" />
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
