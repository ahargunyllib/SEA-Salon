"use client";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent, AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisIcon } from "lucide-react";
import React from "react";
import { EditBranchDialog } from "./EditBranchDialog";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import type { Branch, Service } from "@/lib/definitions";

export async function BranchDropdown({
	oldBranch,
	services,
}: { oldBranch: Branch; services: Service[] }) {
	const [isEditDialogOpen, setIsEditDialogOpen] = React.useState(false);
	const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);

	const router = useRouter();

	async function onClick() {
		try {
			const response = await fetch(`/api/branch/${oldBranch.id}`, {
				method: "DELETE",
			});

			if (response.status === 200) {
				toast.success("Branch deleted successfully");
				router.refresh();
			} else {
				toast.error("An error occurred");
			}
		} catch (error) {
			toast.error("An error occurred");
		}
	}

	return (
		<React.Fragment>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" size="icon" className="h-7 w-7">
						<EllipsisIcon className="h-5 w-5" strokeWidth={1} />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem onClick={() => setIsEditDialogOpen(true)}>
						Edit
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => setIsDeleteDialogOpen(true)}>
						Delete
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>

			<Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
				<DialogContent>
					<EditBranchDialog oldBranch={oldBranch} services={services} />
				</DialogContent>
			</Dialog>

			<AlertDialog
				open={isDeleteDialogOpen}
				onOpenChange={setIsDeleteDialogOpen}
			>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
						<AlertDialogAction
							className="bg-destructive"
							onClick={() => onClick()}
						>
							Yes
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</React.Fragment>
	);
}
