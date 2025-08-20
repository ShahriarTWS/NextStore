import React from "react";

export default function Banner() {
    return (
        <div>
            <div className="relative min-h-screen flex items-center justify-center">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url(https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?q=80&w=1326&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                    }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/60" />

                {/* Content */}
                <div className="relative text-center text-white px-6 max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-semibold leading-tight drop-shadow-lg">
                        Welcome to World Of <span className="font-bold">Gadgets & Accessories</span>
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-gray-200">
                        Upgrade your life with smart gadgets and stylish accessories that make everyday life easier and more fun.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold shadow-lg transition duration-300">
                            Get Started
                        </button>
                        <button className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-xl font-semibold shadow-lg transition duration-300">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
