import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getInitials(name: string) {
	return name
		.split(" ")
		.map((n) => n[0])
		.join("");
}

export function getTime(date: Date) {
	return date.toLocaleTimeString("en-US", {
		hour: "numeric",
		minute: "numeric",
		hour12: false,
	});
}

export function getDate(date: Date): string {
	return date.toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});
}

export const generatePagination = (currentPage: number, totalPages: number) => {
	// If the total number of pages is 7 or less,
	// display all pages without any ellipsis.
	if (totalPages <= 7) {
		return Array.from({ length: totalPages }, (_, i) => i + 1);
	}

	// If the current page is among the first 3 pages,
	// show the first 3, an ellipsis, and the last 2 pages.
	if (currentPage <= 3) {
		return [1, 2, 3, "...", totalPages - 1, totalPages];
	}

	// If the current page is among the last 3 pages,
	// show the first 2, an ellipsis, and the last 3 pages.
	if (currentPage >= totalPages - 2) {
		return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
	}

	// If the current page is somewhere in the middle,
	// show the first page, an ellipsis, the current page and its neighbors,
	// another ellipsis, and the last page.
	return [
		1,
		"...",
		currentPage - 1,
		currentPage,
		currentPage + 1,
		"...",
		totalPages,
	];
};

// time = "10:00"
export function timeToDate(time: string) {
	const [hours, minutes] = time.split(":").map(Number);
	const date = new Date();
	date.setHours(hours);
	date.setMinutes(minutes);
	return date;
}

// date: "2021-10-10"
export function dateToDate(date: string) {
	const [year, month, day] = date.split("-").map(Number);
	const newDate = new Date();
	newDate.setFullYear(year);
	newDate.setMonth(month - 1);
	newDate.setDate(day);
	return newDate;
}
