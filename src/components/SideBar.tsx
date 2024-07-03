"use client";

import { ScissorsIcon } from "@/components/svg/ScissorsIcon";
import { cn } from "@/lib/utils";
import { FileCheck2Icon, HeartHandshakeIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SideBar() {
	const pathname = usePathname();

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
		<nav className="w-64 hidden flex-col gap-4 px-4 py-8 text-lg font-medium md:flex bg-muted">
			{dashboardMenus.map((menu) => (
				<Link
					key={menu.title}
					href={menu.path}
					className={cn(
						"flex items-center gap-2 transition-all hover:underline underline-offset-4",
						{
							"text-muted-foreground": pathname !== menu.path,
						},
					)}
					prefetch={false}
				>
					<menu.icon className="h-6 w-6" />
					{menu.title}
				</Link>
			))}
		</nav>
	);
}
