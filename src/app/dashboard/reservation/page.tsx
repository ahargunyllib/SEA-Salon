import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { TableCaption, TableFooter } from "@/components/ui/table";
import { fetchBranches, fetchReservationsPages } from "@/lib/data";
import { Suspense } from "react";
import { CustomPagination } from "../../../components/CustomPagination";
import { NewReservationForm } from "./NewReservationForm";
import { ReservationTable } from "./ReservationTable";
import { ReservationTableSkeleton } from "./ReservationTableSkeleton";

export default async function ReservationPage({
	searchParams,
}: {
	searchParams?: {
		page?: string;
	};
}) {
	const currentPage = Number(searchParams?.page) || 1;

	const totalPages = await fetchReservationsPages();
	const branches = await fetchBranches();

	return (
		<div className="flex flex-col gap-4 w-full ">
			<div className="flex flex-row items-center justify-between">
				<div className="flex flex-row gap-2">{/* <Button>asd</Button> */}</div>
				<div className="flex flex-row gap-2">
					<Dialog>
						<DialogTrigger asChild>
							<Button type="button">Add Reservation</Button>
						</DialogTrigger>
						<DialogContent className="max-w-sm my-4">
							<NewReservationForm branches={branches} />
						</DialogContent>
					</Dialog>
				</div>
			</div>
			<Card className="flex-1">
				<CardHeader>
					<CardTitle>Reservation</CardTitle>
					<CardDescription>Manage your reservation</CardDescription>
				</CardHeader>
				<CardContent>
					<Suspense key={currentPage} fallback={<ReservationTableSkeleton />}>
						<ReservationTable currentPage={currentPage} />
					</Suspense>
					<CustomPagination totalPages={totalPages} />
				</CardContent>
			</Card>
		</div>
	);
}
