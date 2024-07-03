"use client";
import {
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { EditBranchForm } from "./EditBranchForm";
import type { Branch, Service } from "@/lib/definitions";

export function EditBranchDialog({
	oldBranch,
	services,
}: {
	oldBranch: Branch;
	services: Service[];
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
