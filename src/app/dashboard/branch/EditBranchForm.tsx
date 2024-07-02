"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	DialogDescription,
	DialogHeader,
	DialogTitle
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	type BranchType,
	type ServiceType
} from "@/lib/placeholder-data";
import { getTime } from "@/lib/utils";
import React from "react";

export function EditBranchForm({
	oldBranch, services,
}: {
	oldBranch: BranchType;
	services: ServiceType[];
}) {
	return <DialogHeader>
		<DialogTitle>Edit branch</DialogTitle>
		<DialogDescription>
			Fill in the form below to edit the branch
		</DialogDescription>
		<div className="flex flex-col gap-4">
			<div className="flex flex-col gap-2">
				<Label>Name</Label>
				<Input placeholder={oldBranch.name} />
			</div>
			<div className="flex flex-col gap-2">
				<Label>Location</Label>
				<Input placeholder={oldBranch.location} />
			</div>
			<div className="flex flex-row gap-4 justify-between">
				<div className="flex flex-col gap-2 w-full">
					<Label>Opening Time</Label>
					<Input
						type="time"
						placeholder={getTime(oldBranch.openingTime)} />
				</div>
				<div className="flex flex-col gap-2 w-full">
					<Label>Closing Time</Label>
					<Input
						type="time"
						placeholder={getTime(oldBranch.closingTime)} />
				</div>
			</div>
			<div className="flex flex-col gap-2">
				<Label>Services</Label>
				<div className="flex flex-row flex-wrap gap-4">
					{services.map((service) => (
						<div key={service.id} className="flex flex-row gap-2">
							<Checkbox />
							<Label>{service.name}</Label>
						</div>
					))}
				</div>
			</div>
			<Button type="submit">Edit</Button>
		</div>
	</DialogHeader>;
}
