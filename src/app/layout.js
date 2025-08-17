import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata = {
	title: "My Whatbytes-store App",
	description: "Whatbytes store built with Next.js",
};

export default function RootLayout({ children, searchQuery, setSearchQuery }) {
	return (
		<html lang="en">
			<body className="bg-gray-100 text-gray-800">
				<CartProvider>
					<main className="container min-h-screen ">{children}</main>
				</CartProvider>
				<Footer />
				<Toaster position="top-right" reverseOrder={false} />
			</body>
		</html>
	);
}
