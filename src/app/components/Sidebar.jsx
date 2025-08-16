"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Sidebar({
	selectedCategory,
	setSelectedCategory,
	price,
	setPrice,
	selectedBrand,
	setSelectedBrand,
}) {
	const [isOpen, setIsOpen] = useState(false);

	const categories = ["All", "Electronics", "Clothing", "Home"];
	const brands = ["All", "Apple", "Nike", "Samsung", "Adidas", "Sony"];

	return (
		<>
			<button
				className="lg:hidden fixed top-4 left-4 z-50 bg-blue-700 text-white p-2 rounded-lg shadow-md"
				onClick={() => setIsOpen(!isOpen)}
			>
				{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
			</button>

			<aside
				className={`
          fixed top-0 left-0 h-full w-64 bg-gray-100 shadow-lg p-4 transform transition-transform duration-300 z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:h-auto
        `}
			>
				<div className="bg-blue-700 text-white rounded-xl p-4 shadow-md mb-6">
					<h2 className="font-bold text-lg mb-4">Filters</h2>

					<div className="mb-4">
						<h3 className="font-semibold mb-2">Category</h3>
						{categories.map((cat) => (
							<label
								key={cat}
								className="flex items-center gap-2 mb-2 cursor-pointer"
							>
								<input
									type="radio"
									name="category"
									value={cat}
									checked={selectedCategory === cat}
									onChange={() => setSelectedCategory(cat)}
									className="accent-white"
								/>
								<span>{cat}</span>
							</label>
						))}
					</div>

					<div>
						<h3 className="font-semibold mb-2">Price</h3>
						<input
							type="range"
							min="0"
							max="1000"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
							className="w-full accent-white"
						/>
						<div className="flex justify-between text-sm mt-1">
							<span>0</span>
							<span>{price}</span>
							<span>1000</span>
						</div>
					</div>
				</div>

				<div className="bg-white  rounded-xl p-4 shadow-sm">
					<h2 className="font-bold text-gray-700 mb-4">Brand</h2>
					{brands.map((br) => (
						<label
							key={br}
							className="flex items-center gap-2 mb-2 cursor-pointer"
						>
							<input
								type="radio"
								name="brand"
								value={br}
								checked={selectedBrand === br}
								onChange={() => setSelectedBrand(br)}
								className="accent-blue-600"
							/>
							<span>{br}</span>
						</label>
					))}

					<div className="mt-4">
						<h3 className="font-semibold text-gray-700 mb-2">Max Price</h3>
						<input
							type="number"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
							className="w-full border rounded-lg px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
							placeholder="Enter max price"
						/>
					</div>
				</div>
			</aside>

			{isOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-40 z-30 lg:hidden"
					onClick={() => setIsOpen(false)}
				/>
			)}
		</>
	);
}
