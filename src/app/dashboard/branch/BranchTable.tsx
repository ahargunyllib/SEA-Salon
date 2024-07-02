import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { fetchFilteredBranches, fetchServices } from "@/lib/data";
import { getTime } from "@/lib/utils";
import { DialogTrigger } from "@radix-ui/react-dialog";
import React from "react";
import { BranchDropdown } from "./BranchDropdown";

export async function BranchTable({
	currentPage,
}: {
	currentPage: number;
}) {
	const branches = await fetchFilteredBranches(currentPage);
	const services = await fetchServices();

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Name</TableHead>
					<TableHead>Location</TableHead>
					<TableHead>Opening Time</TableHead>
					<TableHead>Closing Time</TableHead>
					<TableHead>Service</TableHead>
					<TableHead />
				</TableRow>
			</TableHeader>
			<TableBody>
				{branches.map((branch) => (
					<TableRow key={branch.id}>
						<TableCell>{branch.name}</TableCell>
						<TableCell>{branch.location}</TableCell>
						<TableCell>{getTime(branch.openingTime)}</TableCell>
						<TableCell>{getTime(branch.closingTime)}</TableCell>
						<TableCell>
							{branch.services.map((service, index) => (
								<React.Fragment key={service.id}>
									{index === 0
										? branch.services[index].name
										: `, ${branch.services[index].name}`}
								</React.Fragment>
							))}
						</TableCell>
						<TableCell className="w-12">
							<BranchDropdown oldBranch={branch} services={services} />
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
