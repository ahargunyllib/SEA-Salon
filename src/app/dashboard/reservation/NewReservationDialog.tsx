"use client";

import {
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { NewReservationForm } from "./NewReservationForm";
import type { Branch } from "@/lib/definitions";

export function NewReservationDialog({ branches }: { branches: Branch[] }) {
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
