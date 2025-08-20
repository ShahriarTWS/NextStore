import dbConnect from '@/lib/dbConnect';
import Image from 'next/image';
import { ObjectId } from 'mongodb';
import React from 'react';

export default async function ProductDetails({ params }) {
    const { id } = await params;

    if (!id) {
        return <p>Product not found.</p>;
    }

    const product = await dbConnect("products").findOne({ _id: new ObjectId(id) });

    if (!product) {
        return <p>Product not found.</p>;
    }

    return (
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 my-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center">Product Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 bg-base-200 rounded-2xl shadow-lg overflow-hidden">

                {/* Left: Image */}
                <div className="relative w-full h-64 sm:h-80 md:h-full">
                    <Image
                        src={product.image || "/placeholder.png"}
                        alt={product.name}
                        fill
                        className="object-cover rounded-lg"
                        priority
                    />
                </div>

                {/* Right: Product Info */}
                <div className="flex flex-col justify-center p-4 sm:p-6 md:p-8">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                        {product.name}
                    </h1>

                    <p className="text-xl sm:text-2xl font-semibold text-blue-600 mb-3 sm:mb-4">
                        ${product.price}
                    </p>

                    <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                        {product.description}
                    </p>

                    {product.details && (
                        <div className="bg-gray-100 dark:bg-gray-800 p-3 sm:p-4 rounded-lg mb-4 sm:mb-6">
                            <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Key Features</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{product.details}</p>
                        </div>
                    )}

                    <button className="w-full md:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-white text-sm sm:text-base font-medium rounded-xl hover:bg-blue-700 transition-all">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}
