"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import products from "../../data/products";
import { useCart } from "../../context/CartContext";
import { ShoppingCart, Minus, Plus } from "lucide-react";
import toast from "react-hot-toast";
import Header from "@/app/components/Header";

export default function ProductDetail() {
	const { id } = useParams();
	const product = products.find((p) => p.id === parseInt(id));
	const { addToCart } = useCart();
	const [qty, setQty] = useState(1);

	if (!product) return <p>Product not found</p>;

	const handleAddToCart = () => {
		addToCart(product, qty);
		toast.success(`${qty} × ${product.title} added to cart!`);
	};


	return (
		<>
		<Header/>
		<div className="container mx-auto p-6 grid md:grid-cols-2 gap-10">
			<div className="border rounded-2xl overflow-hidden">
				<Image
					src={product.image}
					alt={product.title}
					width={500}
					height={500}
					className="object-contain w-full h-[400px]"
				/>
			</div>

			<div className="space-y-6">
				<h1 className="text-2xl font-bold">{product.title}</h1>
				<p className="text-xl font-semibold text-green-600">${product.price}</p>
				<p className="text-gray-600">{product.description}</p>
				<p className="text-sm text-gray-500">Category: {product.category}</p>
				<p className="text-sm text-gray-500">Brand: {product.brand}</p>
				<p className="text-sm text-gray-500">Rating: {product.rating}</p>
				
				

				<div className="flex items-center gap-4">
					<button
						onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
						className="p-2 border rounded-lg hover:bg-gray-100"
					>
						<Minus size={18} />
					</button>
					<span className="text-lg font-medium">{qty}</span>
					<button
						onClick={() => setQty(qty + 1)}
						className="p-2 border rounded-lg hover:bg-gray-100"
					>
						<Plus size={18} />
					</button>
				</div>

				<button
					onClick={handleAddToCart}
					className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl shadow hover:bg-blue-700"
				>
					<ShoppingCart size={20} /> Add to Cart
				</button>
			</div>
		</div>
		</>
	);
}
