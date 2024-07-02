"use client";
import {
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import type { BranchType, ServiceType } from "@/lib/placeholder-data";
import { EditBranchForm } from "./EditBranchForm";

export function EditBranchDialog({
	oldBranch,
	services,
}: {
	oldBranch: BranchType;
	services: ServiceType[];
}) {
	return (
		<DialogHeader>
			<DialogTitle>Edit branch</DialogTitle>
			<DialogDescription>
				Fill in the form below to edit the branch
			</DialogDescription>
			<EditBranchForm oldBranch={oldBranch} services={services} />
		</DialogHeader>
	);
}
