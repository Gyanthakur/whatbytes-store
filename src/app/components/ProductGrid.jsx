import React from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid({
	selectedCategory,
	price,
	selectedBrand,
	searchQuery,
}) {
	const filteredProducts = products.filter((product) => {
		const matchCategory =
			!selectedCategory ||
			selectedCategory === "All" ||
			product.category === selectedCategory;

		const matchBrand =
			!selectedBrand ||
			selectedBrand === "All" ||
			product.brand === selectedBrand;

		const matchPrice = !price || product.price <= price;

		const matchSearch =
			!searchQuery ||
			product.title.toLowerCase().includes(searchQuery.toLowerCase());

		return matchCategory && matchBrand && matchPrice && matchSearch;
	});

	return (
		<div className="flex-1">
			<h2 className="text-2xl font-bold mb-6">Product Listing</h2>
			<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
				{filteredProducts.length > 0 ? (
					filteredProducts.map((product) => (
						<ProductCard key={product.id} product={product} />
					))
				) : (
					<p className="text-gray-500">No products found.</p>
				)}
			</div>
		</div>
	);
}
