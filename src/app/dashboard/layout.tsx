import { ThemeToggle } from "@/components/ThemeToogle";
import { ScissorsIcon } from "@/components/svg/ScissorsIcon";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";
import { CircleUser, FileCheck2Icon, HeartHandshakeIcon, MapPinIcon, Menu } from "lucide-react";
import Link from "next/link";
import { SideBar } from "../../components/SideBar";
import { Logout } from "./Logout";

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const dashboardMenus = [
		{ title: "Services", path: "/dashboard/service", icon: HeartHandshakeIcon },
		{ title: "Branch", path: "/dashboard/branch", icon: MapPinIcon },
		{
			title: "Reservation",
			path: "/dashboard/reservation",
			icon: FileCheck2Icon,
		},
	];
	
	return (
		<div className="flex flex-col w-full h-screen divide-y-2">
			<nav className="flex flex-row w-full h-16 divide-x-2">
				{/* left */}
				<div className="w-64 hidden md:flex">
					<Link
						href="/"
						className="flex items-center gap-2 text-lg font-semibold md:text-base"
					>
						<ScissorsIcon className="h-6 w-6 md:ml-4" />
						<span className="md:flex hidden text-2xl font-bold">SEA Salon</span>
					</Link>
				</div>
				{/* right */}
				<div className="flex flex-1 flex-row justify-between items-center px-4 py-2 bg-muted">
					{/* left */}
					<div className="flex flex-row gap-2 ">
						<Sheet>
							<SheetTrigger asChild>
								<Button
									variant="outline"
									size="icon"
									className="shrink-0 md:hidden"
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
										<span className="">SEA Salon</span>
									</Link>
									{dashboardMenus.map((menu) => (
										<SheetClose key={menu.title} asChild>
											<Link
												href={menu.path}
												className="text-sm font-medium flex gap-2 items-center transition-all hover:underline underline-offset-4"
												prefetch={false}
											>
												{<menu.icon className="w-4 h-4" />}
												{menu.title}
											</Link>
										</SheetClose>
									))}
								</nav>
							</SheetContent>
						</Sheet>
						<Link
							href="/"
							className="gap-2 text-lg font-semibold md:text-base md:hidden"
						>
							<ScissorsIcon className="w-full h-full" />
						</Link>
					</div>
					{/* right */}
					<div className="flex flex-row gap-2">
						<ThemeToggle />
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant="secondary"
									size="icon"
									className="rounded-full"
								>
									<CircleUser className="h-5 w-5" />
									<span className="sr-only">Toggle user menu</span>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuItem>
									<Logout />
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>
			</nav>
			<div className="flex flex-1 flex-row w-full h-full divide-x-2">
				<SideBar />
				<main className="flex flex-1 p-6">{children}</main>
			</div>
		</div>
	);
}
