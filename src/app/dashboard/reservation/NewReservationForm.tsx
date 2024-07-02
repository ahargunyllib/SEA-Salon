"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	type BranchType,
	dummyBranches,
	dummyServices,
} from "@/lib/placeholder-data";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import React from "react";

export function NewReservationForm({ branches }: { branches: BranchType[] }) {
	const [date, setDate] = React.useState<Date>();

	return (
		<DialogHeader>
			<DialogTitle>Add new reservation</DialogTitle>
			<DialogDescription>
				Fill in the form below to add a new reservation
			</DialogDescription>
			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<Label>Name</Label>
					<Input />
				</div>
				<div className="flex flex-col gap-2">
					<Label>Phone Number</Label>
					<Input type="number" />
				</div>
				<div className="flex flex-col gap-2">
					<Label>Type of Service</Label>
					<Select>
						<SelectTrigger>
							<SelectValue placeholder="Select a service" />
						</SelectTrigger>
						<SelectContent>
							{
								// TODO:
								branches[0].services.map((service) => (
									<SelectItem key={service.id} value={service.id.toString()}>
										{service.name}
									</SelectItem>
								))
							}
						</SelectContent>
					</Select>
				</div>
				<div className="flex flex-col gap-2">
					<Label>Date</Label>
					<Popover>
						<PopoverTrigger asChild>
							<Button
								variant={"outline"}
								className={cn(
									"w-full justify-start text-left font-normal",
									!date && "text-muted-foreground",
								)}
							>
								<CalendarIcon className="mr-2 h-4 w-4" />
								{date ? format(date, "PPP") : <span>Pick a date</span>}
							</Button>
						</PopoverTrigger>
						<PopoverContent className="w-auto p-0">
							<Calendar
								mode="single"
								selected={date}
								onSelect={setDate}
								initialFocus
							/>
						</PopoverContent>
					</Popover>
				</div>
				<div className="flex flex-col gap-2">
					<Label>Time</Label>
					<Input type="time" />
				</div>
				<div className="flex flex-col gap-2">
					<Label>Branch</Label>
					<Select>
						<SelectTrigger>
							<SelectValue placeholder="Select a branch" />
						</SelectTrigger>
						<SelectContent>
							{branches.map((branch) => (
								<SelectItem key={branch.id} value={branch.id.toString()}>
									{branch.name}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
				<Button type="submit">Create</Button>
			</div>
		</DialogHeader>
	);
}
