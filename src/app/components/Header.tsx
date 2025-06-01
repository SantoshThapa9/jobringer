import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActiveLink = (path: string) => pathname === path;

  return (
    <header className="bg-white border-b border-gray-200 fixed z-99 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between  items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                width={180}
                height={45}
                src="/logonew.svg"
                alt="Logo"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-7 ">
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-medium transition-colors duration-150 ${
                isActiveLink("/")
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Home
            </Link>
            <Link
              href="/jobs"
              className={`px-3 py-2 text-sm font-medium transition-colors duration-150 ${
                isActiveLink("/jobs")
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Jobs
            </Link>
            <Link
              href="/companies"
              className={`px-3 py-2 text-sm font-medium transition-colors duration-150 ${
                isActiveLink("/companies")
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Companies
            </Link>
            <Link
              href="/notifications"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActiveLink("/notifications")
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-900 hover:bg-gray-50"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </Link>
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/login"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-150"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
              >
                Post a Job
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex">
            <Link
              href="/notifications"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActiveLink("/notifications")
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-900 hover:bg-gray-50"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed z-9 inset-0 bg-gray-600 bg-opacity-50 transition-opacity  md:hidden ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      <div
        className={`fixed z-10 top-0 right-0 bottom-0 w-64 bg-white transform transition-transform ease-in-out duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-5 pb-6 px-5">
          <div className="flex items-center justify-between mb-6">
            <div className="flex-shrink-0">
              <Image
                width={128}
                height={32}
                src="/logonew.svg"
                alt="Logo"
                priority
              />
            </div>

            <button
              type="button"
              className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
          <div className="flex flex-col space-y-1">
            <Link
              href="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActiveLink("/")
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-900 hover:bg-gray-50"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/jobs"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActiveLink("/jobs")
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-900 hover:bg-gray-50"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Jobs
            </Link>
            <Link
              href="/companies"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActiveLink("/companies")
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-900 hover:bg-gray-50"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Companies
            </Link>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <Link
              href="/login"
              className="block w-full px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="block w-full px-4 py-2 mt-3 text-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Post a Job
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
