"use client";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Header from "../components/Header";

export default function CartPage() {
	const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
	const router = useRouter();

	const totalPrice = cart.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);

	const handleRemove = (id, title) => {
		removeFromCart(id);
		toast.error(`${title} removed from cart`);
	};

	const handleClearCart = () => {
		clearCart();
		toast.error("Cart cleared");
	};

	return (
		<>
		<Header />
		<div className="container mx-auto px-6 py-10">
			<h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

			{cart.length === 0 ? (
				<div className="text-center">
					<p className="text-gray-600 mb-4">Your cart is empty.</p>
					<button
						onClick={() => router.push("/")}
						className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
					>
						Continue Shopping
					</button>
				</div>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{/* Cart Items */}
					<div className="md:col-span-2 space-y-6">
						{cart.map((item) => (
							<div
								key={item.id}
								className="flex items-center justify-between bg-white p-4 rounded-xl shadow"
							>
								{/* Product Info */}
								<div className="flex items-center space-x-4">
									<img
										src={item.image || "/placeholder.png"}
										alt={item.title}
										className="w-20 h-20 object-cover rounded-lg"
									/>
									<div>
										<h2 className="text-lg font-semibold">{item.title}</h2>
										<p className="text-gray-600">${item.price}</p>
										<p className="text-sm text-gray-500">{item.category}</p>
									</div>
								</div>

								{/* Quantity & Actions */}
								<div className="flex items-center space-x-4">
									<input
										type="number"
										min="1"
										value={item.quantity}
										onChange={(e) =>
											updateQuantity(item.id, parseInt(e.target.value))
										}
										className="w-16 border rounded-lg px-2 py-1 text-center"
									/>
									<button
										onClick={() => handleRemove(item.id, item.title)}
										className="text-red-500 hover:text-red-700 font-medium"
									>
										Remove
									</button>
								</div>
							</div>
						))}
					</div>

					{/* Order Summary */}
					<div className="bg-white p-6 rounded-xl shadow">
						<h2 className="text-xl font-bold mb-4">Order Summary</h2>
						<div className="flex justify-between mb-2">
							<span>Subtotal</span>
							<span>${totalPrice.toFixed(2)}</span>
						</div>
						<div className="flex justify-between mb-4">
							<span>Shipping</span>
							<span className="text-green-600">Free</span>
						</div>
						<hr className="my-2" />
						<div className="flex justify-between text-lg font-bold">
							<span>Total</span>
							<span>${totalPrice.toFixed(2)}</span>
						</div>

						<button
							onClick={() => alert("Proceeding to checkout...")}
							className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
						>
							Checkout
						</button>

						<button
							onClick={handleClearCart}
							className="mt-3 w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition"
						>
							Clear Cart
						</button>
					</div>
				</div>
			)}
		</div>
		</>
	);
}
