import { unstable_noStore } from "next/cache";
import {
	dummyBranches,
	dummyReservations,
	dummyServices,
} from "./placeholder-data";
import type { Review } from "./definitions";
import { axiosInstance } from "./axios";

export async function fetchReviews() {
	try {
		const response = await axiosInstance.get("/review")
		const data = response.data;

		if (!data) {
			throw new Error("Failed to fetch reviews data.");
		}
	
		return data as Review[];
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (error: any) {
		throw new Error(error.message);
	}
}

export async function fetchServices() {
	unstable_noStore();

	try {
		// TODO: REMOVE
		// await new Promise((resolve) => setTimeout(resolve, 3000));

		const data = dummyServices;

		return data;
	} catch (error) {
		throw new Error("Failed to fetch services data.");
	}
}

export async function fetchBranches() {
	unstable_noStore();

	try {
		// TODO: REMOVE
		// await new Promise((resolve) => setTimeout(resolve, 3000));

		const data = dummyBranches;
		return data;
	} catch (error) {
		throw new Error("Failed to fetch branches data.");
	}
}

export async function fetchReservations() {
	unstable_noStore();

	try {
		// TODO: REMOVE
		// await new Promise((resolve) => setTimeout(resolve, 3000));

		const data = dummyReservations;
		return data;
	} catch (error) {
		throw new Error("Failed to fetch reservations data.");
	}
}

const ITEMS_PER_PAGE = 5;
export async function fetchFilteredServices(currentPage: number) {
	unstable_noStore();
	const offset = (currentPage - 1) * ITEMS_PER_PAGE;

	try {
		// TODO: REMOVE
		// await new Promise((resolve) => setTimeout(resolve, 3000));

		const data = dummyServices.slice(offset, offset + ITEMS_PER_PAGE);
		return data;
	} catch (error) {
		throw new Error("Failed to fetch filtered services data.");
	}
}

export async function fetchFilteredBranches(currentPage: number) {
	unstable_noStore();
	const offset = (currentPage - 1) * ITEMS_PER_PAGE;

	try {
		// TODO: REMOVE
		// await new Promise((resolve) => setTimeout(resolve, 3000));

		const data = dummyBranches.slice(offset, offset + ITEMS_PER_PAGE);
		return data;
	} catch (error) {
		throw new Error("Failed to fetch filtered branches data.");
	}
}

export async function fetchFilteredReservations(currentPage: number) {
	unstable_noStore();
	const offset = (currentPage - 1) * ITEMS_PER_PAGE;

	try {
		// TODO: REMOVE
		// await new Promise((resolve) => setTimeout(resolve, 3000));

		const data = dummyReservations.slice(offset, offset + ITEMS_PER_PAGE);
		return data;
	} catch (error) {
		throw new Error("Failed to fetch filtered reservations data.");
	}
}

export async function fetchServicesPages() {
	unstable_noStore();

	try {
		// TODO: REMOVE
		// await new Promise((resolve) => setTimeout(resolve, 3000));

		const count = dummyServices.length;
		const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
		return totalPages;
	} catch (error) {
		throw new Error("Failed to fetch service page.");
	}
}

export async function fetchBranchesPages() {
	unstable_noStore();
	try {
		// TODO: REMOVE
		// await new Promise((resolve) => setTimeout(resolve, 3000));

		const count = dummyBranches.length;
		const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
		return totalPages;
	} catch (error) {
		throw new Error("Failed to fetch branch page.");
	}
}

export async function fetchReservationsPages() {
	unstable_noStore();
	try {
		// TODO: REMOVE
		// await new Promise((resolve) => setTimeout(resolve, 3000));

		const count = dummyReservations.length;
		const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
		return totalPages;
	} catch (error) {
		throw new Error("Failed to fetch reservation page.");
	}
}
