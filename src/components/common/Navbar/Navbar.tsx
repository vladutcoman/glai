"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const linkStyles = (path: string) => {
    return `text-sm relative transition-all duration-300 hover:text-primary
      ${isActive(path) ? 'font-bold' : 'font-medium'}
      after:content-[''] after:absolute after:left-0 after:bottom-[-4px] 
      after:w-full after:h-[2px] after:bg-primary after:origin-left
      after:transition-transform after:duration-300
      ${isActive(path) ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}
    `;
  };

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
          <Link href="/" className={linkStyles('/')}>
            HOME
          </Link>
          <Link href="/ai-portfolio" className={linkStyles('/ai-portfolio')}>
            AI PORTFOLIO
          </Link>
          <Link href="/acquisitions" className={linkStyles('/acquisitions')}>
            ACQUISITIONS
          </Link>
          <Link href="/investors" className={linkStyles('/investors')}>
            INVESTORS
          </Link>
          <Link href="/about" className={linkStyles('/about')}>
            ABOUT
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {/* Contact Button - Desktop */}
          <Button asChild variant="default" size="lg" className="hidden lg:inline-flex py-[16px] px-[28px] rounded-[40px]">
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
                className={linkStyles('/')}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                href="/ai-portfolio"
                className={linkStyles('/ai-portfolio')}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                AI PORTFOLIO
              </Link>
              <Link
                href="/acquisitions"
                className={linkStyles('/acquisitions')}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ACQUISITIONS
              </Link>
              <Link
                href="/investors"
                className={linkStyles('/investors')}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                INVESTORS
              </Link>
              <Link
                href="/about"
                className={linkStyles('/about')}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                href="/contact"
                className={linkStyles('/contact')}
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