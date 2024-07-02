"use client";

import {
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import type { BranchType } from "@/lib/placeholder-data";
import { NewReservationForm } from "./NewReservationForm";

export function NewReservationDialog({ branches }: { branches: BranchType[] }) {
	return (
		<DialogHeader>
			<DialogTitle>Add new reservation</DialogTitle>
			<DialogDescription>
				Fill in the form below to add a new reservation
			</DialogDescription>
			<NewReservationForm branches={branches} />
		</DialogHeader>
	);
}
