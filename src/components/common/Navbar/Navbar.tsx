"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const Navbar = () => {
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

  const mobileLinks = [
    { href: "/", label: "HOME" },
    { href: "/ai-portfolio", label: "AI PORTFOLIO" },
    { href: "/acquisitions", label: "ACQUISITIONS" },
    { href: "/investors", label: "INVESTORS" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT US" },
  ];

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

          {/* Mobile Menu Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="lg:hidden"
                size="icon"
              >
                <Menu strokeWidth={2.5} className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] px-6">
              <SheetTitle className="text-left">Navigation Menu</SheetTitle>
              <div className="flex flex-col space-y-4 mt-8">
                {mobileLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`${linkStyles(link.href)} text-lg`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;