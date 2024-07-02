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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { TableCaption, TableFooter } from "@/components/ui/table";
import { fetchServicesPages } from "@/lib/data";
import { Suspense } from "react";
import { CustomPagination } from "../../../components/CustomPagination";
import { NewServiceDialog } from "./NewServiceDialog";
import { ServiceTable } from "./ServiceTable";
import { ServiceTableSkeleton } from "./ServiceTableSkeleton";

export default async function ServicePage({
	searchParams,
}: {
	searchParams?: {
		page?: string;
	};
}) {
	const currentPage = Number(searchParams?.page) || 1;

	const totalPages = await fetchServicesPages();

	return (
		<div className="flex flex-col gap-4 w-full ">
			<div className="flex flex-row items-center justify-between">
				<div className="flex flex-row gap-2">{/* <Button>asd</Button> */}</div>
				<div className="flex flex-row gap-2">
					<Dialog>
						<DialogTrigger asChild>
							<Button type="button">Add Service</Button>
						</DialogTrigger>
						<DialogContent className="max-w-sm my-4">
							<NewServiceDialog />
						</DialogContent>
					</Dialog>
				</div>
			</div>
			<Card className="flex-1">
				<CardHeader>
					<CardTitle>Service</CardTitle>
					<CardDescription>Manage your services</CardDescription>
				</CardHeader>
				<CardContent>
					<Suspense key={currentPage} fallback={<ServiceTableSkeleton />}>
						<ServiceTable currentPage={currentPage} />
					</Suspense>
					<CustomPagination totalPages={totalPages} />
				</CardContent>
			</Card>
		</div>
	);
}
