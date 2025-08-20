"use client";
import Link from 'next/link'
import React from 'react'

export default function ViewAllBtn() {
    return (
        <div className='text-center my-8'>
            <Link href={'/products'}>
                <button className=' bg-blue-600 rounded-lg text-white px-4 py-2 font-medium'>View All</button>
            </Link>
        </div>

    )
}
