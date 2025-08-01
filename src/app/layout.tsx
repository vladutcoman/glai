import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar/Navbar";
import Footer from "@/components/common/Footer/Footer";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="min-h-screen flex flex-col relative">
          <div className="absolute inset-0 w-full h-full -z-10">
            <Image
              src="/bg.png"
              alt="Background Pattern"
              fill
              className="object-cover"
              priority
              quality={100}
            />
          </div>
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
