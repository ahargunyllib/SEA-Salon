"use client";

import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { cn, generatePagination } from "@/lib/utils";
import { usePathname, useSearchParams } from "next/navigation";

export function CustomPagination({ totalPages }: { totalPages: number }) {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const currentPage = Number(searchParams.get("page")) || 1;

	const allPages = generatePagination(currentPage, totalPages);

	const createPageURL = (pageNumber: number | string) => {
		const params = new URLSearchParams(searchParams);
		params.set("page", pageNumber.toString());
		return `${pathname}?${params.toString()}`;
	};

	return (
		<Pagination className="mt-2">
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						className={cn(currentPage > 1 ? "flex" : "hidden")}
						href={createPageURL(currentPage - 1)}
					/>
				</PaginationItem>
				{allPages.map((page, index) => {
					return (
						<PaginationItem key={page}>
							<PaginationLink
								href={createPageURL(page)}
								isActive={currentPage === page}
							>
								{page}
							</PaginationLink>
						</PaginationItem>
					);
				})}
				<PaginationItem>
					<PaginationNext
						className={cn(currentPage < totalPages ? "flex" : "hidden")}
						href={createPageURL(currentPage + 1)}
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
