"use client";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";
import toast from "react-hot-toast";

export default function ProductCard({ product }) {
	const { addToCart } = useCart();
	const handleAddToCart = () => {
		addToCart(product);
		toast.success(`${product.title} has been added to your cart 🛒`);
	};

	return (
		<div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center">
			<Link href={`/product/${product.id}`}>
				<div className="cursor-pointer">
					<Image
						src={product.image}
						alt={product.title}
						width={300}
						height={200}
						className="rounded-lg object-cover w-full h-48"
					/>
					<h3 className="font-semibold text-gray-900">{product.title}</h3>
					<p className="font-semibold text-gray-800">${product.price}</p>
				</div>
			</Link>

			<button
				onClick={handleAddToCart}
				className="mt-3 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
			>
				<ShoppingCart size={18} /> Add to Cart
			</button>
		</div>
	);
}
