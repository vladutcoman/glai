import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#111] text-white py-20 mt-[120px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="block">
              <Image
                src="/logo.svg"
                alt="Global AI Logo"
                width={120}
                height={40}
                className="brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-gray-400">
              A publicly traded company (OTC US: GLAI) creating shareholder value through strategic acquisitions in AI technology.
            </p>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-6">Solutions</h3>
            <div className="space-y-3">
              <Link href="/" className="block text-sm text-gray-400 hover:text-white transition-colors">
                AI Data Readiness
              </Link>
              <Link href="/" className="block text-sm text-gray-400 hover:text-white transition-colors">
                Applicative AI
              </Link>
              <Link href="/" className="block text-sm text-gray-400 hover:text-white transition-colors">
                AI Advisory
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <div className="space-y-3">
              <Link href="/" className="block text-sm text-gray-400 hover:text-white transition-colors">
                About GlobalAI
              </Link>
              <Link href="/" className="block text-sm text-gray-400 hover:text-white transition-colors">
                Research Lab
              </Link>
              <Link href="/" className="block text-sm text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Investor Relations */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-6">Investor Relations</h3>
            <div className="space-y-3">
              <Link href="/" className="block text-sm text-gray-400 hover:text-white transition-colors">
                Investor Information
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            Copyright © GlobalAI 2023. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
              License
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;