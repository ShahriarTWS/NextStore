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

        // ✅ Step 1: Validate password BEFORE showing Swal
        const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!pattern.test(password)) {
            Swal.fire({
                icon: "warning",
                title: "Invalid Password",
                text: "Password must be at least 6 characters long, including a number, a lowercase letter, and an uppercase letter.",
            });
            return; // Stop submission if invalid
        }

        // ✅ Step 2: Password is valid → now show loading Swal
        try {
            Swal.fire({
                title: "Creating your account...",
                text: "Please wait",
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                },
            });

            const user = await registerUser({ name, email, password });

            const result = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            Swal.close();

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
                <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Create a password"
                        required
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must be at least 8 characters, including a number, lowercase, and uppercase letter"
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                </div>

                <div className="flex items-center justify-between text-sm text-gray-300">
                    <p>Already have an account?</p>
                    <Link href="/login" className="hover:underline">
                        Login
                    </Link>
                </div>

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
