"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/books", label: "Books" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg sm:text-xl">
            <div className="w-8 h-8 sm:w-10 sm:h-10 relative flex-shrink-0">
              <Image
                src="/GFUNMlogo.png"
                alt="GFUNM Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-blue-600 hidden xs:inline sm:inline">
              GFUNM
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}

          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-blue-50 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-blue-100"
          >
            <div className="container mx-auto px-4 py-4 sm:px-6">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-4 rounded-lg text-base font-medium transition-colors duration-200 min-h-[48px] flex items-center ${
                      pathname === item.href
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      

    </nav>
  );
}