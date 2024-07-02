import { FileCheck2Icon, HeartHandshakeIcon, MapPinIcon } from "lucide-react";

export type ReviewType = {
	id: number;
	name: string;
	rating: number; // 1-5
	review: string;
};

export const dummyReviews: ReviewType[] = [
	{
		id: 1,
		name: "John Doe",
		rating: 5,
		review: "Great product!",
	},
	{
		id: 2,
		name: "Jane Doe",
		rating: 4,
		review: "Good product!",
	},
	{
		id: 3,
		name: "John Smith",
		rating: 3,
		review: "Average product!",
	},
];

export const dashboardMenus = [
	{ title: "Services", path: "/dashboard/service", icon: HeartHandshakeIcon },
	{ title: "Branch", path: "/dashboard/branch", icon: MapPinIcon },
	{
		title: "Reservation",
		path: "/dashboard/reservation",
		icon: FileCheck2Icon,
	},
];

export type ServiceType = {
	id: number;
	name: string;
	description: string;
	duration: number;
};

export const dummyServices: ServiceType[] = [
	{
		id: 1,
		name: "Haircut",
		description: "Haircut",
		duration: 30,
	},
	{
		id: 2,
		name: "Hair Color",
		description: "Hair Color",
		duration: 60,
	},
	{
		id: 3,
		name: "Hair Treatment",
		description: "Hair Treatment",
		duration: 45,
	},
	{
		id: 4,
		name: "Hair Styling",
		description: "Hair Styling",
		duration: 45,
	},
	{
		id: 5,
		name: "Hair Spa",
		description: "Hair Spa",
		duration: 60,
	},
	{
		id: 6,
		name: "Hair Spa",
		description: "Hair Spa",
		duration: 60,
	},
	{
		id: 7,
		name: "Hair Spa",
		description: "Hair Spa",
		duration: 60,
	},
];

export type BranchType = {
	id: number;
	name: string;
	location: string;
	openingTime: Date;
	closingTime: Date;
	services: ServiceType[];
};

export const dummyBranches: BranchType[] = [
	{
		id: 1,
		name: "Branch 1",
		location: "Location 1",
		openingTime: new Date(),
		closingTime: new Date(),
		services: dummyServices.slice(0, 3),
	},
	{
		id: 2,
		name: "Branch 2",
		location: "Location 2",
		openingTime: new Date(),
		closingTime: new Date(),
		services: dummyServices.slice(3, 6),
	},
	{
		id: 3,
		name: "Branch 3",
		location: "Location 3",
		openingTime: new Date(),
		closingTime: new Date(),
		services: dummyServices.slice(6, 7),
	},
];

export type ReservationType = {
	id: number;
	userId: string;
	name: string;
	phoneNumber: string;
	service: ServiceType;
	date: Date;
	time: Date;
	branch: BranchType;
};

export const dummyReservations: ReservationType[] = [
	{
		id: 1,
		userId: "1",
		name: "John Doe",
		phoneNumber: "0812345678",
		service: dummyServices[0],
		date: new Date(),
		time: new Date(),
		branch: dummyBranches[0],
	},
	{
		id: 2,
		userId: "2",
		name: "Jane Doe",
		phoneNumber: "0812345678",
		service: dummyServices[1],
		date: new Date(),
		time: new Date(),
		branch: dummyBranches[1],
	},
	{
		id: 3,
		userId: "3",
		name: "John Smith",
		phoneNumber: "0812345678",
		service: dummyServices[2],
		date: new Date(),
		time: new Date(),
		branch: dummyBranches[2],
	},
];

export type User = {
	id: string;
	fullName: string;
	email: string;
	phoneNumber: string;
	password: string;
};
