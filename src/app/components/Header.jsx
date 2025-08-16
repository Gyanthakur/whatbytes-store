"use client";
import { ShoppingCart, Search } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";

export default function Header({ onSearch }) {
	const { cart } = useCart();
	const router = useRouter();

	const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

	return (
		<header className="bg-blue-700 py-3">
			<div className="container mx-auto px-4 flex items-center justify-between">
				<div
					className="text-white text-2xl font-bold cursor-pointer"
					onClick={() => router.push("/")}
				>
					Logo
				</div>

				<div className="flex-1 mx-6 relative max-w-xl w-full">
					<Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white w-5 h-5" />
					<input
						type="text"
						placeholder="Search for products..."
						onChange={(e) => onSearch(e.target.value)}
						className="w-full pl-10 pr-4 py-2 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-200"
					/>
				</div>

				<button
					onClick={() => router.push("/cart")}
					className="relative flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
				>
					<ShoppingCart className="w-5 h-5" />
					<span>Cart</span>
					{cartCount > 0 && (
						<span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
							{cartCount}
						</span>
					)}
				</button>
			</div>
		</header>
	);
}
