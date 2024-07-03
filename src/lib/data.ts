import { unstable_noStore } from "next/cache";
import type { Branch, Reservation, Review, Service } from "./definitions";
import { db } from "./prisma";

export async function fetchReviews() {
	unstable_noStore();

	try {
		const data = await db.review.findMany({
			select: {
				id: true,
				comment: true,
				rating: true,
				user: {
					select: {
						fullName: true,
					},
				},
			},
		});

		return data as Review[];
	} catch (error) {
		console.log(error);
		return [] as Review[];
	}
}

export async function fetchServices() {
	unstable_noStore();

	try {
		const data = await db.service.findMany({
			select: {
				id: true,
				name: true,
				description: true,
				duration: true,
			},
		});

		return data as Service[];
	} catch (error) {
		throw new Error("Failed to fetch services data.");
	}
}

export async function fetchBranches() {
	unstable_noStore();

	try {
		const data = await db.branch.findMany({
			select: {
				id: true,
				name: true,
				location: true,
				openingTime: true,
				closingTime: true,
			},
		});

		const branch = [];

		for (const d of data) {
			const b = d as Branch;

			const services = await db.branchService.findMany({
				where: {
					branchId: d.id,
				},
				select: {
					service: {
						select: {
							id: true,
							name: true,
						},
					},
				},
			});

			b.services = services.map((service) => service.service);

			branch.push(b);
		}

		return branch as Branch[];
	} catch (error) {
		throw new Error("Failed to fetch branches data.");
	}
}

export async function fetchReservations() {
	unstable_noStore();

	try {
		const data = await db.reservation.findMany({
			select: {
				id: true,
				branchId: true,
				branch: {
					select: {
						id: true,
						name: true,
					},
				},
				serviceId: true,
				service: {
					select: {
						id: true,
						name: true,
					},
				},
				userId: true,
				name: true,
				phoneNumber: true,
				date: true,
				time: true,
			},
		});

		return data as Reservation[];
	} catch (error) {
		throw new Error("Failed to fetch reservations data.");
	}
}

const ITEMS_PER_PAGE = 5;
export async function fetchFilteredServices(currentPage: number) {
	unstable_noStore();
	const offset = (currentPage - 1) * ITEMS_PER_PAGE;

	try {
		const data = await db.service.findMany({
			select: {
				id: true,
				name: true,
				description: true,
				duration: true,
			},
			skip: offset,
			take: ITEMS_PER_PAGE,
		});

		return data as Service[];
	} catch (error) {
		throw new Error("Failed to fetch filtered services data.");
	}
}

export async function fetchFilteredBranches(currentPage: number) {
	unstable_noStore();
	const offset = (currentPage - 1) * ITEMS_PER_PAGE;

	try {
		const data = await db.branch.findMany({
			select: {
				id: true,
				name: true,
				location: true,
				openingTime: true,
				closingTime: true,
			},
			skip: offset,
			take: ITEMS_PER_PAGE,
		});

		const branch = [];

		for (const d of data) {
			const b = d as Branch;

			const services = await db.branchService.findMany({
				where: {
					branchId: d.id,
				},
				select: {
					service: {
						select: {
							id: true,
							name: true,
						},
					},
				},
			});

			b.services = services.map((service) => service.service);

			branch.push(b);
		}

		return data as Branch[];
	} catch (error) {
		throw new Error("Failed to fetch filtered branches data.");
	}
}

export async function fetchFilteredReservations(currentPage: number) {
	unstable_noStore();
	const offset = (currentPage - 1) * ITEMS_PER_PAGE;

	try {
		const data = await db.reservation.findMany({
			select: {
				id: true,
				branchId: true,
				branch: {
					select: {
						id: true,
						name: true,
					},
				},
				serviceId: true,
				service: {
					select: {
						id: true,
						name: true,
					},
				},
				userId: true,
				name: true,
				phoneNumber: true,
				date: true,
				time: true,
			},
			skip: offset,
			take: ITEMS_PER_PAGE,
		});

		return data as Reservation[];
	} catch (error) {
		throw new Error("Failed to fetch filtered reservations data.");
	}
}

export async function fetchServicesPages() {
	unstable_noStore();

	try {
		const count = await db.service.count();

		const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
		return totalPages;
	} catch (error) {
		throw new Error("Failed to fetch service page.");
	}
}

export async function fetchBranchesPages() {
	unstable_noStore();

	try {
		const count = await db.branch.count();

		const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
		return totalPages;
	} catch (error) {
		throw new Error("Failed to fetch branch page.");
	}
}

export async function fetchReservationsPages() {
	unstable_noStore();

	try {
		const count = await db.reservation.count();

		const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
		return totalPages;
	} catch (error) {
		throw new Error("Failed to fetch reservation page.");
	}
}
