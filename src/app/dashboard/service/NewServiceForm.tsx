"use client";

import { Button } from "@/components/ui/button";
import {
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function NewServiceForm() {
	return (
		<DialogHeader>
			<DialogTitle>Add new service</DialogTitle>
			<DialogDescription>
				Fill in the form below to add a new service
			</DialogDescription>
			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<Label>Name</Label>
					<Input />
				</div>
				<div className="flex flex-col gap-2">
					<Label>Description</Label>
					<Input />
				</div>
				<div className="flex flex-col gap-2">
					<Label>Duration (minutes)</Label>
					<Input type="number" />
				</div>
				<Button type="submit">Create</Button>
			</div>
		</DialogHeader>
	);
}
