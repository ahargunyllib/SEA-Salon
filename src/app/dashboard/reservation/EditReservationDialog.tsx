"use client";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { BranchType, ReservationType } from "@/lib/placeholder-data";
import { EditReservationForm } from "./EditReservationForm";

export function EditReservationDialog({
	oldReservation,
	branches,
}: { oldReservation: ReservationType; branches: BranchType[] }) {
	return (
		<DialogHeader>
			<DialogTitle>Edit reservation</DialogTitle>
			<DialogDescription>
				Fill in the form below to edit the reservation
			</DialogDescription>
			<EditReservationForm
				oldReservation={oldReservation}
				branches={branches}
			/>
		</DialogHeader>
	);
}
