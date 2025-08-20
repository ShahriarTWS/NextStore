import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductCard({ product }) {
    return (
        <div className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-xl hover:scale-105 shadow-lg transition duration-300 relative">

            {/* Product Image */}
            <div className="relative w-full h-60 rounded-xl overflow-hidden">
                <Image
                    src={product.image}      // use actual value, no quotes
                    alt={product.name}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Product Info */}
            <div className="py-4 flex flex-col items-center text-center">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>

                <div className='flex gap-4 items-center'>
                    {/* Price */}
                    <div className="text-lg flex items-center gap-2">
                        <span className="text-gray-400 line-through">${product.price + 15}</span>
                        <span className="font-bold text-blue-600 text-xl">${product.price}</span>
                    </div>

                    {/* View Details Button */}
                    <Link href={`/products/${product._id}`}>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition duration-300">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
