"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { toast } from "sonner";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thank you for subscribing to our newsletter!");
    e.currentTarget.reset();
  };

  return (
    <footer className="bg-brand-gray-700 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <section className="space-y-4">
            <Link href="/" className="text-2xl font-bold">
              Autonex Systems 
            </Link>

            <p className="text-brand-gray-300 max-w-xs">
              Driving digital transformation through Industry 4.0, IIoT solutions,
              and custom IT services for modern enterprises.
            </p>

            <div className="flex space-x-4">
              {socialIcons.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white hover:text-brand-orange transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </section>

          {/* Quick Links */}
          <section>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-gray-300 hover:text-brand-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Services */}
          <section>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-brand-gray-300 hover:text-brand-orange transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Contact + Newsletter */}
          <section>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>

            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <Phone className="text-brand-orange mr-3 h-5 w-5" />
                <span className="text-brand-gray-300">
                  +254 (0)20 54054005
                </span>
              </div>

              <div className="flex items-center">
                <Mail className="text-brand-orange mr-3 h-5 w-5" />
                <span className="text-brand-gray-300">
                  info@autonexsystemsltd.com
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="font-semibold mb-2">Subscribe to Newsletter</h5>
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex"
              >
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  className="py-2 px-3 bg-brand-gray-600 text-white border border-brand-gray-500 rounded-l-md focus:outline-none focus:ring-1 focus:ring-brand-orange w-full"
                />
                <button
                  type="submit"
                  className="bg-brand-orange hover:bg-brand-orange/90 text-white py-2 px-4 rounded-r-md transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </section>
        </div>

        {/* Copyright */}
        <div className="border-t border-brand-gray-600 mt-12 pt-8">
          <p className="text-center text-brand-gray-400">
            © {currentYear} Autonex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* -------------------- */
/* Supporting Data */
/* -------------------- */

// Brand icons from lucide-react are deprecated. Using react-icons instead.
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaYoutube , FaLinkedin } from "react-icons/fa";

const socialIcons = [
  { href: "https://www.facebook.com/autonexsmart", icon: FaFacebook, label: "Facebook" },
  { href: "https://twitter.com/autonexsystems", icon: FaTwitter, label: "Twitter" },
  { href: "https://www.instagram.com/autonexsmart", icon: FaInstagram, label: "Instagram" },
  { href: "https://github.com/autonexsmart", icon: FaGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/company/autonex-systems-limited", icon: FaLinkedin, label: "LinkedIn" },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/inquiry", label: "Request a Quote" },
  { href: "/contact", label: "Contact Us" },
];

const services = [
  { href: "/services#industry40", label: "Industry 4.0 Transformation" },
  { href: "/services#iiot", label: "IIoT Solutions" },
  { href: "/services#it", label: "Custom IT Services" },
  { href: "/services#homeauto", label: "Smart Factory" },
  { href: "/services#analytics", label: "Data Analytics" },
];
