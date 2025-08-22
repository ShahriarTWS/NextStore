"use client";
import React, { useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";

export default function Footer() {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();

        if (!email) {
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: "Please enter a valid email address!",
            });
            return;
        }

        Swal.fire({
            icon: "success",
            title: "Subscribed!",
            text: `You have successfully subscribed with ${email}`,
            confirmButtonColor: "#3085d6",
        });

        setEmail(""); // reset field
    };

    return (
        <footer className="bg-base-100 text-base-content mt-12">
            <div className="max-w-7xl mx-auto px-4 py-12 md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* About Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">NextStore</h3>
                        <p className="text-gray-400">
                            Explore the best gadgets and accessories. Stay connected, stay ahead.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="hover:text-primary transition">Home</Link>
                            </li>
                            <li>
                                <Link href="/products" className="hover:text-primary transition">Products</Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-primary transition">About</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                        <p className="text-gray-400 mb-4">
                            Subscribe to get the latest updates and offers.
                        </p>
                        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/snjoy.420" target="_blank" className="hover:text-primary transition" aria-label="Facebook">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H7.898v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.465h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </a>
                            <a href="https://x.com/snjoy420" target="_blank" className="hover:text-primary transition" aria-label="Twitter">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 001.88-2.37 8.55 8.55 0 01-2.71 1.03 4.27 4.27 0 00-7.27 3.9 12.13 12.13 0 01-8.8-4.46 4.27 4.27 0 001.32 5.7 4.27 4.27 0 01-1.94-.54v.05a4.27 4.27 0 003.43 4.18 4.3 4.3 0 01-1.93.07 4.27 4.27 0 003.99 2.97A8.57 8.57 0 012 19.54a12.07 12.07 0 006.55 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.7 8.7 0 0024 4.56a8.44 8.44 0 01-2.54.7z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/snjoy_420/#" target="_blank" className="hover:text-primary transition" aria-label="Instagram">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 1a1 1 0 011 1v1a1 1 0 01-1 1h-1a1 1 0 01-1-1V4a1 1 0 011-1h1zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Text */}
                <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} NextStore. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
