"use client";

import Image from "next/image";
import Sidebar from "./components/Sidebar";
import ProductGrid from "./components/ProductGrid";
import { useState } from "react";
import Header from "./components/Header";

export default function Home() {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [price, setPrice] = useState(1000);
	const [selectedBrand, setSelectedBrand] = useState("All");
	const [searchQuery, setSearchQuery] = useState("");
	return (
		<div>
			{/* <Header onSearch={setSearchQuery} /> */}

			<main className="flex gap-8 p-6">
				<Sidebar
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
					price={price}
					setPrice={setPrice}
					selectedBrand={selectedBrand}
					setSelectedBrand={setSelectedBrand}
				/>
				<ProductGrid
					selectedCategory={selectedCategory}
					price={price}
					selectedBrand={selectedBrand}
					searchQuery={searchQuery}
					setSelectedBrand={setSelectedBrand}
				/>
			</main>
		</div>
	);
}
