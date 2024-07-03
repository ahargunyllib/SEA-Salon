"use client";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { EditReservationForm } from "./EditReservationForm";
import type { Branch, Reservation } from "@/lib/definitions";

export function EditReservationDialog({
	oldReservation,
	branches,
}: { oldReservation: Reservation; branches: Branch[] }) {
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
