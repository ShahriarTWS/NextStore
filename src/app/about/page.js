import Image from "next/image";
import React from "react";

export default function AboutPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
                About Us
            </h1>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
                Welcome to <span className="font-semibold text-blue-600">Our Store</span> —
                your trusted destination for high-quality products at the best prices.
                We combine modern design, great value, and excellent service to give
                you the best shopping experience.
            </p>

            {/* Section 1: Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
                <div>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                        Our Mission
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Our mission is simple: to make shopping enjoyable, affordable,
                        and reliable. We handpick our products with care and ensure that
                        every item meets our quality standards. Customer satisfaction is
                        at the heart of everything we do.
                    </p>
                </div>
                <div className="relative w-full h-64 md:h-80">
                    <Image
                        src="https://img.freepik.com/premium-photo/man-touching-mission-text-screen_218381-4228.jpg?semt=ais_hybrid&w=740&q=80"
                        alt="Our Mission"
                        fill
                        className="object-cover rounded-2xl shadow-lg"
                    />
                </div>
            </div>

            {/* Section 2: Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
                <div className="relative w-full h-64 md:h-80 order-last md:order-first">
                    <Image
                        src="https://t3.ftcdn.net/jpg/04/18/52/88/360_F_418528804_xgyFvVsMSHeWk1UgDtR9aoccqSC7BrHy.jpg"
                        alt="Our Vision"
                        fill
                        className="object-cover rounded-2xl shadow-lg"
                    />
                </div>
                <div>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                        Our Vision
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        We envision a community where people shop with confidence, knowing
                        they are getting value for their money. By constantly innovating
                        and improving, we aim to become a leading platform for modern,
                        customer-focused shopping.
                    </p>
                </div>
            </div>

            {/* Section 3: Why Choose Us */}
            <div className="bg-base-200 p-8 rounded-2xl shadow-md text-center">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                    Why Choose Us?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-base-100 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold mb-2 text-blue-600">
                            ✅ Quality Products
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Each product is carefully chosen to meet our quality standards.
                        </p>
                    </div>
                    <div className="p-6 bg-base-100 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold mb-2 text-blue-600">
                            🚀 Fast Delivery
                        </h3>
                        <p className="text-gray-600 text-sm">
                            We deliver quickly and ensure your products reach you on time.
                        </p>
                    </div>
                    <div className="p-6 bg-base-100 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold mb-2 text-blue-600">
                            💬 24/7 Support
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Our support team is always available to help you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
