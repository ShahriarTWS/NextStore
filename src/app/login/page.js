import Link from "next/link";
import React from "react";
import LoginForm from "./components/LoginForm";

export const metadata = {
    title: "Login | NextStore",
    description:
        "Access your NextStore account to manage orders, track deliveries, and enjoy a personalized shopping experience. Secure and easy login.",
};

export default function Login() {
    return (
        <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1702390740712-ce6daf1673be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70" />

            {/* Login Card */}
            <div className="relative z-10 w-full max-w-md sm:max-w-lg md:max-w-md lg:max-w-lg xl:max-w-xl p-6 sm:p-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-[1.02] my-16">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-white mb-4 sm:mb-6">
                    Welcome Back 👋
                </h1>
                <p className="text-center text-gray-200 mb-6 sm:mb-8 text-sm sm:text-base">
                    Login to your account
                </p>

                <LoginForm></LoginForm>

            </div>
        </div>
    );
}
