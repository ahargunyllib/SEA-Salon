import { AvatarImage } from "@/components/ui/avatar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { ReviewSection } from "../components/ReviewSection";


export default function Component() {
	return (
		<div className="flex flex-col min-h-[100dvh]">
			<NavBar />
			<main className="flex-1">
				<HeroSection />
				<ServiceSection />
				<ReviewSection />
				<ContactSection />
			</main>
			<Footer />
		</div>
	);
}

function ContactSection() {
	return (
		<section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
							Contact Us
						</h2>
						<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Get in touch with our talented team of stylists and estheticians.
						</p>
					</div>
				</div>
				<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
					<div className="flex flex-col justify-center space-y-4">
						<div className="grid gap-1">
							<h3 className="text-xl font-bold">Thomas</h3>
							<p className="text-muted-foreground">Phone: 08123456789</p>
						</div>
					</div>
					<div className="flex flex-col justify-center space-y-4">
						<div className="grid gap-1">
							<h3 className="text-xl font-bold">Emily Lee</h3>
							<p className="text-muted-foreground">Esthetician</p>
							<p className="text-muted-foreground">Phone: 08164829372</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function ServiceSection() {
	return (
		<section id="services" className="w-full py-24 md:py-24 lg:py-32 bg-muted">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
							Our Services
						</h2>
						<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Discover our wide range of salon services to enhance your beauty.
						</p>
					</div>
				</div>
				<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
					<div className="flex flex-col justify-center space-y-4">
						<div className="grid gap-1">
							<h3 className="text-xl font-bold">Haircuts</h3>
							<p className="text-muted-foreground">
								Experience our expert stylists' precision cuts.
							</p>
						</div>
					</div>
					<div className="flex flex-col justify-center space-y-4">
						<div className="grid gap-1">
							<h3 className="text-xl font-bold">Manicures &amp; Pedicures</h3>
							<p className="text-muted-foreground">
								Pamper your hands and feet with our luxurious treatments.
							</p>
						</div>
					</div>
					<div className="flex flex-col justify-center space-y-4">
						<div className="grid gap-1">
							<h3 className="text-xl font-bold">Facial Treatments</h3>
							<p className="text-muted-foreground">
								Revitalize your skin with our rejuvenating facials.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function HeroSection() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
			<div className="container px-4 md:px-6">
				<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
					<div className="flex flex-col justify-center space-y-4">
						<div className="space-y-2">
							<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
								SEA Salon
							</h1>
							<p className="max-w-[600px] text-muted-foreground md:text-xl">
								Beauty and Elegance Redefined
							</p>
						</div>
					</div>
					<img
						src="/hero.svg"
						alt="Salon"
						className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
					/>
				</div>
			</div>
		</section>
	);
}
