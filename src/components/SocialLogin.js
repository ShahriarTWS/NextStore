"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";
import Swal from "sweetalert2";

export default function SocialLogin() {
    const handleSocialLogin = async (providerName) => {
        try {
            const result = await signIn(providerName, {
                redirect: false, // stop auto redirect
                callbackUrl: "/products",
            });

            if (result?.error) {
                Swal.fire({
                    icon: "error",
                    title: "Login Failed",
                    text: result.error,
                });
            } else {
                Swal.fire({
                    icon: "success",
                    title: "Login Successful!",
                    showConfirmButton: false,
                    timer: 1500,
                }).then(() => {
                    window.location.href = result.url || "/products";
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
        }
    };

    return (
        <div onClick={() => handleSocialLogin("google")} className="mt-6">
            {/* Divider */}
            <div className="flex items-center my-6">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="mx-3 text-gray-300 text-sm">OR</span>
                <div className="flex-grow border-t border-gray-400"></div>
            </div>

            <button className="px-6 btn-block py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-xl font-semibold shadow-lg transition duration-300 flex items-center gap-2 justify-center">
                <div>
                    <Image
                        src={
                            "https://upload.wikimedia.org/wikipedia/commons/3/3c/Google_Favicon_2025.svg"
                        }
                        width={25}
                        height={25}
                        alt="google"
                    />
                </div>
                <p>Continue with Google</p>
            </button>
        </div>
    );
}
