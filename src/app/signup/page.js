import Link from "next/link";
import React from "react";
import SignUpForm from "./components/SignUpForm";

export const metadata = {
    title: "Sign Up | NextStore",
    description:
        "Create your NextStore account to start shopping, track your orders, and enjoy a seamless online shopping experience tailored for you.",
};

export default function Register() {
    return (
        <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1468495244123-6c6c332eeece?q=80&w=1021&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70" />

            {/* Register Card */}
            <div className="relative z-10 w-full max-w-md sm:max-w-lg md:max-w-md lg:max-w-lg xl:max-w-xl p-6 sm:p-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-[1.02] my-16">
                {/* Title */}
                <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-4 sm:mb-6">
                    Register Now!
                </h1>

                {/* Subtitle */}
                <p className="text-center text-gray-200 text-sm sm:text-base mb-6 sm:mb-8">
                    Create your account and join the community
                </p>

                {/* Sign Up Form */}
                <SignUpForm />


            </div>
        </div>
    );
}
