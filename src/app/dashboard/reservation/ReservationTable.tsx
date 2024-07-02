import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { fetchBranches, fetchFilteredReservations } from "@/lib/data";
import { dummyReservations } from "@/lib/placeholder-data";
import { getDate, getTime } from "@/lib/utils";
import { ReservationDropdown } from "./ReservationDropdown";

export async function ReservationTable({
	currentPage,
}: {
	currentPage: number;
}) {
	const reservations = await fetchFilteredReservations(currentPage);
	const branches = await fetchBranches();

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
				{reservations.map((reservation) => (
					<TableRow key={reservation.id}>
						<TableCell>{reservation.name}</TableCell>
						<TableCell>{reservation.phoneNumber}</TableCell>
						<TableCell>{reservation.service.name}</TableCell>
						<TableCell>{getDate(reservation.date)}</TableCell>
						<TableCell>{getTime(reservation.time)}</TableCell>
						<TableCell>{reservation.branch.name}</TableCell>
						<TableCell className="w-12">
							<ReservationDropdown
								oldReservation={reservation}
								branches={branches}
							/>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
