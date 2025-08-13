import Logo from "@/assets/logo";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Link } from "react-router";
import { ModeToggle } from "./ModeToggle";

const navigationLinks = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
];

export default function Navbar() {
	return (
		<header className="border-b">
			<div className="container mx-auto flex h-16 justify-between gap-4">
				{/* Left side */}
				<div className="flex gap-2">
					<div className="flex items-center md:hidden">
						{/* Mobile menu trigger */}
						<Popover>
							<PopoverTrigger asChild>
								<Button
									className="group size-8"
									variant="ghost"
									size="icon"
								>
									<svg
										className="pointer-events-none"
										width={16}
										height={16}
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M4 12L20 12"
											className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
										/>
										<path
											d="M4 12H20"
											className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
										/>
										<path
											d="M4 12H20"
											className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
										/>
									</svg>
								</Button>
							</PopoverTrigger>
							<PopoverContent
								align="start"
								className="w-36 p-1 md:hidden"
							>
								<NavigationMenu className="max-w-none *:w-full">
									<NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
										{navigationLinks.map((link, index) => (
											<NavigationMenuItem
												key={index}
												className="w-full"
											>
												<NavigationMenuLink
													asChild
													className="py-1.5 block"
												>
													<Link to={link.href}>
														{link.label}
													</Link>
												</NavigationMenuLink>
											</NavigationMenuItem>
										))}
									</NavigationMenuList>
								</NavigationMenu>
							</PopoverContent>
						</Popover>
					</div>
					{/* Main nav */}
					<div className="flex items-center gap-6">
						<Logo />
						{/* Navigation menu */}
						<NavigationMenu className="h-full *:h-full max-md:hidden">
							<NavigationMenuList className="h-full gap-2">
								{navigationLinks.map((link, index) => (
									<NavigationMenuItem
										key={index}
										className="h-full"
									>
										<NavigationMenuLink
											className="text-muted-foreground hover:text-primary border-b-primary hover:border-b-primary data-[active]:border-b-primary h-full justify-center rounded-none border-y-2 border-transparent py-1.5 font-medium hover:bg-transparent data-[active]:bg-transparent!"
											asChild
										>
											<Link to={link.href}>
												{link.label}
											</Link>
										</NavigationMenuLink>
									</NavigationMenuItem>
								))}
							</NavigationMenuList>
						</NavigationMenu>
					</div>
				</div>
				{/* Right side */}
				<div className="flex items-center gap-2">
					<Button
						asChild
						className="text-sm"
					>
						<Link to="/login">Login</Link>
					</Button>
					<ModeToggle />
				</div>
			</div>
		</header>
	);
}
