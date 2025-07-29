"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full flex justify-center border-b bg-white/50 backdrop-blur-md fixed top-0 z-50 py-[16px] px-[40px]">
      <div className="container flex h-16 items-center justify-between w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.svg"
            alt="Global AI Logo"
            className="h-30 w-30"
            width={120}
            height={120}
          />

        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden lg:flex items-center gap-[36px]">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            HOME
          </Link>
          <Link href="/ai-portfolio" className="text-sm font-medium transition-colors hover:text-primary">
            AI PORTFOLIO
          </Link>
          <Link href="/acquisitions" className="text-sm font-medium transition-colors hover:text-primary">
            ACQUISITIONS
          </Link>
          <Link href="/investors" className="text-sm font-medium transition-colors hover:text-primary">
            INVESTORS
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            ABOUT
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {/* Contact Button - Desktop */}
          <Button asChild variant="default" size="lg" className="hidden md:inline-flex py-[16px] px-[28px] rounded-[40px]">
            <Link href="/contact">
              CONTACT US
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-4 w-4"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="lg:hidden"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu strokeWidth={2.5} className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 top-[64px] z-50 bg-background/80 backdrop-blur-sm animate-in fade-in-0"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed inset-x-4 top-[64px] z-50 rounded-lg bg-white p-6 shadow-lg animate-in fade-in-0 zoom-in-95">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                href="/ai-portfolio"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                AI PORTFOLIO
              </Link>
              <Link
                href="/acquisitions"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ACQUISITIONS
              </Link>
              <Link
                href="/investors"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                INVESTORS
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;