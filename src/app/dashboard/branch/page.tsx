import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { TableCaption, TableFooter } from "@/components/ui/table";
import { fetchBranchesPages, fetchServices } from "@/lib/data";
import React, { Suspense } from "react";
import { CustomPagination } from "../../../components/CustomPagination";
import { BranchTable } from "./BranchTable";
import { BranchTableSkeleton } from "./BranchTableSkeleton";
import { NewBranchForm } from "./NewBranchForm";

export default async function BranchPage({
	searchParams,
}: {
	searchParams?: {
		page?: string;
	};
}) {
	const currentPage = Number(searchParams?.page) || 1;

	const totalPages = await fetchBranchesPages();
	const services = await fetchServices();

	return (
		<div className="flex flex-col gap-4 w-full ">
			<div className="flex flex-row items-center justify-between">
				<div className="flex flex-row gap-2">{/* <Button>asd</Button> */}</div>
				<div className="flex flex-row gap-2">
					<Dialog>
						<DialogTrigger asChild>
							<Button type="button">Add Branch</Button>
						</DialogTrigger>
						<DialogContent className="max-w-sm my-4">
							<NewBranchForm services={services} />
						</DialogContent>
					</Dialog>
				</div>
			</div>
			<Card className="flex-1">
				<CardHeader>
					<CardTitle>Branch</CardTitle>
					<CardDescription>Manage your Branches</CardDescription>
				</CardHeader>
				<CardContent>
					<Suspense key={currentPage} fallback={<BranchTableSkeleton />}>
						<BranchTable currentPage={currentPage} />
					</Suspense>
					<CustomPagination totalPages={totalPages} />
				</CardContent>
			</Card>
		</div>
	);
}
