import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { fetchFilteredServices } from "@/lib/data";
import { ServiceDropdown } from "./ServiceDropdown";

export async function ServiceTable({
	currentPage,
}: {
	currentPage: number;
}) {
	const services = await fetchFilteredServices(currentPage);

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Name</TableHead>
					<TableHead>Description</TableHead>
					<TableHead>Duration</TableHead>
					<TableHead />
				</TableRow>
			</TableHeader>
			<TableBody>
				{services.map((service) => (
					<TableRow key={service.id}>
						<TableCell>{service.name}</TableCell>
						<TableCell>{service.description}</TableCell>
						<TableCell>{service.duration} minutes</TableCell>
						<TableCell className="w-12">
							<ServiceDropdown oldService={service} />
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
