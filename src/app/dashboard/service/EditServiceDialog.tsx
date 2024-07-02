"use client";
import { Button } from "@/components/ui/button";
import {
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { ServiceType } from "@/lib/placeholder-data";
import React from "react";
import { EditServiceForm } from "./EditServiceForm";

export function EditServiceDialog({ oldService }: { oldService: ServiceType }) {
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
