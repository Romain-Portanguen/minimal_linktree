import "@/styles/globals.css";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";
import Link from "next/link";

export default function RootLayout({ children }: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
						<Navbar />
						<main className="container mx-auto max-w-full px-6 flex-grow bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
							{children}
						</main>
						<footer className="w-full flex items-center justify-center py-3">
							<Link
								className="flex items-center gap-1 text-current"
								href="https://github.com/Romain-Portanguen/"
							>
								<span className="text-default-600">Powered by</span>
								<p className="text-default-600">NextUI</p> -
								<span className="text-default-600">Made by</span>
								<p className="text-primary">Romain Portanguen</p>
								<span className="text-default-600">with 🩵</span>
							</Link>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
