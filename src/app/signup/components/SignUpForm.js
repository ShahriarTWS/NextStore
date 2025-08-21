"use client";
import { registerUser } from "@/app/actions/auth/registerUser";
import { signIn } from "next-auth/react";
import Link from "next/link";
import SocialLogin from "@/components/SocialLogin";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        try {
            // Show loading swal
            Swal.fire({
                title: "Creating your account...",
                text: "Please wait",
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                },
            });

            // 1️⃣ Create user in DB
            const user = await registerUser({ name, email, password });

            // 2️⃣ Immediately sign them in with credentials
            const result = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            Swal.close(); // close loading

            if (result?.ok) {
                Swal.fire({
                    icon: "success",
                    title: "Sign Up Successful 🎉",
                    text: `Welcome, ${user.name}!`,
                    timer: 2000,
                    showConfirmButton: false,
                });
                router.push("/products");
            } else {
                Swal.fire({
                    icon: "warning",
                    title: "Account Created, but Login Failed",
                    text: result?.error || "Try logging in manually",
                });
                router.push("/login");
            }

            form.reset();
        } catch (err) {
            console.error(err);
            Swal.close();
            Swal.fire({
                icon: "error",
                title: "Sign Up Failed ❌",
                text: err.message || "Something went wrong",
            });
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                        Full Name
                    </label>
                    <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        placeholder="Enter your full name"
                        name="name"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        placeholder="Enter your email"
                        name="email"
                    />
                </div>

                {/* Password */}
                <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        placeholder="Create a password"
                        name="password"
                    />
                </div>

                {/* Login redirect */}
                <div className="flex items-center justify-between text-sm text-gray-300">
                    <p>Already have an account?</p>
                    <Link href="/login" className="hover:underline">
                        Login
                    </Link>
                </div>

                {/* Sign Up Button */}
                <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg shadow-lg transition-all duration-300"
                >
                    Sign Up
                </button>
            </form>

            <SocialLogin />
        </div>
    );
}
