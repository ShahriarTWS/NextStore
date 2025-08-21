"use client";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FaCloudUploadAlt } from "react-icons/fa"; // ✅ Using react-icons
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AddProduct() {
    const [loading, setLoading] = useState(false);
    const imageHostKey = process.env.NEXT_PUBLIC_IMGBB_KEY; // add your key in .env.local
    const { status } = useSession();
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target;
        const name = form.name.value;
        const description = form.description.value;
        const price = form.price.value;
        const details = form.details.value;
        const imageFile = form.image.files[0];

        // 1. Upload Image to imgbb
        const formData = new FormData();
        formData.append("image", imageFile);

        const imgRes = await fetch(
            `https://api.imgbb.com/1/upload?key=${imageHostKey}`,
            {
                method: "POST",
                body: formData,
            }
        );
        const imgData = await imgRes.json();

        if (imgData.success) {
            const imageUrl = imgData.data.url;

            // 2. Store Product in DB
            const product = { name, description, price, details, image: imageUrl };

            const res = await fetch("/api/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(product),
            });

            if (res.ok) {
                Swal.fire({
                    icon: "success",
                    title: "Product Added!",
                    text: "Your product has been successfully added.",
                    confirmButtonColor: "#3085d6",
                });
                form.reset();
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Failed!",
                    text: "Something went wrong while saving product.",
                });
            }
        } else {
            Swal.fire({
                icon: "error",
                title: "Image Upload Failed",
                text: "Please try again.",
            });
        }

        setLoading(false);
    };

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login"); // ✅ redirect safely
        }
    }, [status, router]);

    if (status === "loading") {
        return <p className="text-center text-white">Loading...</p>;
    }
    return (
        <div className="max-w-3xl mx-auto my-10 bg-base-200 p-8 rounded-xl shadow-md ">
            <h2 className="text-3xl font-bold mb-6 text-center">➕ Add Product</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    className="w-full p-3 rounded-lg border border-gray-500 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Short Description"
                    className="w-full p-3 rounded-lg border border-gray-500 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    className="w-full p-3 rounded-lg border border-gray-500 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                />
                <textarea
                    name="details"
                    placeholder="Product Details"
                    rows="4"
                    className="w-full p-3 rounded-lg border border-gray-500 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                ></textarea>

                {/* File Upload with Icon */}
                <label className="flex items-center gap-3 px-4 py-3 border border-gray-500 rounded-lg cursor-pointer hover:bg-white/20 transition">
                    <FaCloudUploadAlt className="w-5 h-5 text-gray-300" />
                    <span className="text-gray-300">Choose Product Image</span>
                    <input type="file" name="image" accept="image/*" required hidden />
                </label>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition duration-300 shadow-lg"
                >
                    {loading ? "Uploading..." : "Add Product"}
                </button>
            </form>
        </div>
    );
}
