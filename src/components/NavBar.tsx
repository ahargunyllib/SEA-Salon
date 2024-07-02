"use client";

import { cn } from "@/lib/utils";
import { CircleUser, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./ThemeToogle";
import { ScissorsIcon } from "./svg/ScissorsIcon";
import { Button } from "./ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";

export function NavBar() {
	const menus = [
		{ title: "Services", path: "#services" },
		{ title: "Reviews", path: "#reviews" },
		{ title: "Contact", path: "#contact" },
	];

	return (
		<header className="sticky top-0 flex h-16 items-center gap-4 backdrop-blur-lg bg-opacity-10 backdrop-filter">
			<Sheet>
				<SheetTrigger asChild>
					<Button
						variant="outline"
						size="icon"
						className="shrink-0 md:hidden ml-4 md:mx-6"
					>
						<Menu className="h-5 w-5" />
						<span className="sr-only">Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left">
					<nav className="grid gap-6 text-lg font-medium">
						<Link
							href="#"
							className="flex items-center gap-2 text-lg font-semibold"
						>
							<ScissorsIcon className="h-6 w-6" />
							<span className="sr-only">SEA Salon</span>
						</Link>
						{menus.map((menu) => (
							<SheetClose key={menu.title} asChild>
								<Link
									href={menu.path}
									className="text-sm font-medium hover:underline underline-offset-4"
									prefetch={false}
								>
									{menu.title}
								</Link>
							</SheetClose>
						))}
					</nav>
				</SheetContent>
			</Sheet>
			<nav className="w-full flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
				<Link
					href="/"
					className="flex items-center gap-2 text-lg font-semibold md:text-base"
				>
					<ScissorsIcon className="h-6 w-6 md:ml-4" />
					<span className="md:flex hidden text-2xl font-bold">SEA Salon</span>
				</Link>
				<div className="md:flex hidden items-center gap-4 absolute w-full justify-center md:gap-2 lg:gap-4">
					{menus.map((menu) => (
						<Link
							key={menu.title}
							href={menu.path}
							className="text-sm font-medium hover:underline underline-offset-4"
							prefetch={false}
						>
							{menu.title}
						</Link>
					))}
				</div>
			</nav>
			<div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4 px-4 md:px-6">
				<ThemeToggle />
				{/* <DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="secondary" size="icon" className="rounded-full">
							<CircleUser className="h-5 w-5" />
							<span className="sr-only">Toggle user menu</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem>Profile</DropdownMenuItem>
						<DropdownMenuItem>Dashboard</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Logout</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu> */}
				<Button asChild>
					<Link href="/auth/login">
						Login
					</Link>
				</Button>
			</div>
		</header>
	);
}
