"use client"
import SocialLogin from '@/components/SocialLogin'
import Link from 'next/link'
import React from 'react'
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'

export default function LoginForm() {
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false // prevent auto redirect so we can handle swal
            });

            if (res?.ok) {
                Swal.fire({
                    title: "Login Successful 🎉",
                    text: "Redirecting to products page...",
                    icon: "success",
                    timer: 2000,
                    showConfirmButton: false
                });
                router.push("/products");
            } else {
                Swal.fire({
                    title: "Login Failed ❌",
                    text: res?.error || "Invalid email or password",
                    icon: "error",
                    confirmButtonText: "Try Again"
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: "Something went wrong!",
                icon: "error"
            });
            console.log(error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        placeholder="Enter your email"
                        name='email'
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        placeholder="Enter your password"
                        name='password'
                    />
                </div>

                <div className="flex items-center justify-between text-sm text-gray-300">
                    <a href="#" className="hover:underline">
                        Forgot password?
                    </a>
                    <Link href="/signup" className="hover:underline">
                        Create account
                    </Link>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg shadow-lg transition-all duration-300"
                >
                    Login
                </button>
            </form>
            <SocialLogin />
        </div>
    )
}
