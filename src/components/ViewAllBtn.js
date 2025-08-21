"use client";
import Link from 'next/link'
import React from 'react'

export default function ViewAllBtn() {
    return (
        <div className='text-center my-8'>
            <Link href={'/products'}>
                <button className='text-lg bg-blue-600 hover:bg-blue-700 cursor-pointer rounded-2xl text-white py-2 px-6 font-medium'>View All</button>
            </Link>
        </div>

    )
}
