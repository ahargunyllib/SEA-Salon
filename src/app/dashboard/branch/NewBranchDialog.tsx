"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { ServiceType } from "@/lib/placeholder-data";
import { NewBranchForm } from "./NewBranchForm";

export function NewBranchDialog({ services }: { services: ServiceType[] }) {
	return (
		<DialogHeader>
			<DialogTitle>Add new branch</DialogTitle>
			<DialogDescription>
				Fill in the form below to add a new branch
			</DialogDescription>
			<NewBranchForm services={services}/>
		</DialogHeader>
	);
}
