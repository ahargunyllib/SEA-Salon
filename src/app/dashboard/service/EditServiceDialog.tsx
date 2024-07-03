"use client";
import {
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { EditServiceForm } from "./EditServiceForm";
import type { Service } from "@/lib/definitions";

export function EditServiceDialog({ oldService }: { oldService: Service }) {
	return (
		<DialogHeader>
			<DialogTitle>Edit service</DialogTitle>
			<DialogDescription>
				Fill in the form below to edit the service
			</DialogDescription>
			<EditServiceForm oldService={oldService} />
		</DialogHeader>
	);
}
