"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Home Automation", path: "/catalog" },
    { name: "Contact", path: "/contact" },
  ];

  const isHome = pathname === "/";

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-4">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/images/logo1.png"
            alt="AutoNex Logo"
            className="h-12 w-auto mr-2"
          />
          <span
            className={cn(
              "font-bold text-2xl transition-colors",
              isScrolled || !isHome
                ? "text-brand-blue"
                : "text-white"
            )}
          >
            AutoNex
          </span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-brand-blue"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={cn(
                "font-medium transition-colors duration-200",
                isHome
                  ? isScrolled
                    ? "text-brand-gray-600 hover:text-brand-blue"
                    : "text-white hover:text-brand-blue"
                  : "text-brand-gray-600 hover:text-brand-blue"
              )}
            >
              {item.name}
            </Link>
          ))}

          <Link href="/inquiry" className="btn-accent">
            Request a Quote
          </Link>
        </nav>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md animate-fade-in">
            <div className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="text-brand-gray-600 hover:text-brand-blue font-medium transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/inquiry"
                className="btn-accent text-center"
                onClick={() => setIsOpen(false)}
              >
                Request a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
