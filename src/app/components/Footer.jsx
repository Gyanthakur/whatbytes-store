import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-blue-900 text-white py-8">
			<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
				<div>
					<h2 className="text-lg font-bold mb-3">Filters</h2>
					<ul className="space-y-2">
						<li>
							<a href="#" className="hover:underline">
								All
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline">
								Electronics
							</a>
						</li>
					</ul>
					<p className="mt-4 text-sm text-gray-300">© 2024 American</p>
				</div>

				<div>
					<h2 className="text-lg font-bold mb-3">About Us</h2>
					<ul className="space-y-2">
						<li>
							<a href="/about" className="hover:underline">
								About Us
							</a>
						</li>
						<li>
							<a href="/contact" className="hover:underline">
								Contact
							</a>
						</li>
					</ul>
				</div>

				<div>
					<h2 className="text-lg font-bold mb-3">Follow Us</h2>
					<div className="flex space-x-4">
						<a
							href="https://facebook.com"
							target="_blank"
							className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition"
						>
							<Facebook size={20} />
						</a>
						<a
							href="https://twitter.com"
							target="_blank"
							className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition"
						>
							<Twitter size={20} />
						</a>
						<a
							href="https://instagram.com"
							target="_blank"
							className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition"
						>
							<Instagram size={20} />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
