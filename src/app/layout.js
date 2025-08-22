import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import NextAuthProvider from "@/Providers/NextAuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home | NextStore",
  description:
    "Discover the best deals on electronics, fashion, accessories, and more at NextStore. Shop securely, enjoy fast delivery, and experience a modern shopping platform built with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ scrollBehavior: "smooth" }}
      >
        <NextAuthProvider>
          <Navbar />   {/* No sticky wrapper */}
          {children}
          <Footer></Footer>
        </NextAuthProvider>
      </body>
    </html>
  );
}