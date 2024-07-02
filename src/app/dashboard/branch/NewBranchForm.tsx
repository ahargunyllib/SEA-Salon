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
import { type ServiceType } from "@/lib/placeholder-data";

export function NewBranchForm({ services }: { services: ServiceType[] }) {
	return (
		<DialogHeader>
			<DialogTitle>Add new branch</DialogTitle>
			<DialogDescription>
				Fill in the form below to add a new branch
			</DialogDescription>
			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<Label>Name</Label>
					<Input />
				</div>
				<div className="flex flex-col gap-2">
					<Label>Location</Label>
					<Input />
				</div>
				<div className="flex flex-row gap-4 justify-between">
					<div className="flex flex-col gap-2 w-full">
						<Label>Opening Time</Label>
						<Input type="time" />
					</div>
					<div className="flex flex-col gap-2 w-full">
						<Label>Closing Time</Label>
						<Input type="time" />
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
				<Button type="submit">Create</Button>
			</div>
		</DialogHeader>
	);
}
