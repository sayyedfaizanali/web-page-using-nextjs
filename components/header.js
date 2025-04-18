"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Headers() {
  // State for mobile menu visibility
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-black shadow-md">
      {/* Navigation always rendered, but mobile menu controlled with CSS */}
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              className="h-16 w-auto"
              src="/images/thinklife-logo-without_bg-white.png"
              width={70}
              height={32}
              alt="travel"
            />
          </Link>
        </div>

        {/* Hamburger button for mobile */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-12">
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white hover:text-customeGreen"
              aria-expanded={isDropdownOpen}
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              Our Products
              <svg
                className="h-5 w-5 flex-none text-white hover:text-customeGreen"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 z-10 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
                <ul>
                  <li>
                    <Link
                      href="/products"
                      className="block px-4 py-2 text-sm hover:bg-customeGreen hover:text-white"
                    >
                      Product 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/categories"
                      className="block px-4 py-2 text-sm hover:bg-customeGreen hover:text-white"
                    >
                      Product 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/brands"
                      className="block px-4 py-2 text-sm hover:bg-customeGreen hover:text-white"
                    >
                      Product 3
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link
            href="/#whyus"
            className="text-sm font-semibold leading-6 text-white hover:text-customeGreen"
          >
            Why Choose Us?
          </Link>
          <Link
            href="/#aboutus"
            className="text-sm font-semibold leading-6 text-white hover:text-customeGreen"
          >
            About Us
          </Link>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-50 h-screen overflow-hidden lg:hidden">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  className="h-12 w-auto"
                  src="/images/thinklife-logo-without_bg-white.png"
                  width={100}
                  height={32}
                  alt="travel"
                />
              </Link>
              <div className="-mr-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close main menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-4">
                <Link
                  href="/"
                  className="text-base font-medium text-white hover:text-gray-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>

                {/* Dropdown Button for Our Products */}
                <div>
                  <button
                    type="button"
                    className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white hover:text-customeGreen"
                    aria-expanded={isDropdownOpen}
                    onClick={() => setDropdownOpen(!isDropdownOpen)}
                  >
                    Our Products
                    <svg
                      className="h-5 w-5 flex-none text-white hover:text-customeGreen"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="mt-2 rounded-md shadow-lg">
                      <Link
                        href="/"
                        className="block px-4 py-2 text-base font-medium text-white hover:bg-customeGreen"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        SuperBeena Talbeena Vanilla
                      </Link>
                      <Link
                        href="/"
                        className="block px-4 py-2 text-base font-medium text-white hover:bg-customeGreen"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        SuperBeena Talbeena Chocolate
                      </Link>
                      <Link
                        href="/"
                        className="block px-4 py-2 text-base font-medium text-white hover:bg-customeGreen"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        ThinkLife Tooth Brush
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/#whyus"
                  className="text-base font-medium text-white hover:text-gray-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Why Us?
                </Link>
                <Link
                  href="/#aboutus"
                  className="text-base font-medium text-white hover:text-gray-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
