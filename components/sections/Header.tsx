'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-[10000] bg-white/98 dark:bg-slate-900/98 backdrop-blur-md shadow-lg border-b border-gray-100 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-32 h-32 md:w-52 md:h-52">
            <img src="/images/logo.png" alt="Global Academy" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-primary font-medium transition relative group uppercase text-sm">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-700 group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-primary font-medium transition relative group uppercase text-sm">
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-700 group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="/courses" className="text-gray-700 dark:text-gray-300 hover:text-primary font-medium transition relative group uppercase text-sm">
            Courses
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-700 group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="/coaching" className="text-gray-700 dark:text-gray-300 hover:text-primary font-medium transition relative group uppercase text-sm">
            Coaching
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-700 group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="/why-choose-us" className="text-gray-700 dark:text-gray-300 hover:text-primary font-medium transition relative group uppercase text-sm">
            Why Choose Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-700 group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-primary font-medium transition relative group uppercase text-sm">
            Contact Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-700 group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="/contact" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-2.5 rounded-lg transition font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform uppercase text-sm">
            Admissions
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          suppressHydrationWarning
        >
          {isOpen ? (
            <X className="w-6 h-6 text-gray-900 dark:text-white" />
          ) : (
            <Menu className="w-6 h-6 text-gray-900 dark:text-white" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="px-4 py-6 space-y-3">
            <Link
              href="/"
              className="block text-gray-700 dark:text-gray-300 hover:text-primary font-medium transition py-2.5 border-b border-gray-100 dark:border-gray-800 uppercase"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 dark:text-gray-300 hover:text-primary font-medium transition py-2.5 border-b border-gray-100 dark:border-gray-800 uppercase"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/courses"
              className="block text-gray-700 dark:text-gray-300 hover:text-primary font-medium transition py-2.5 border-b border-gray-100 dark:border-gray-800 uppercase"
              onClick={() => setIsOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/coaching"
              className="block text-gray-700 dark:text-gray-300 hover:text-primary font-medium transition py-2.5 border-b border-gray-100 dark:border-gray-800 uppercase"
              onClick={() => setIsOpen(false)}
            >
              Coaching
            </Link>
            <Link
              href="/why-choose-us"
              className="block text-gray-700 dark:text-gray-300 hover:text-primary font-medium transition py-2.5 border-b border-gray-100 dark:border-gray-800 uppercase"
              onClick={() => setIsOpen(false)}
            >
              Why Choose Us
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 dark:text-gray-300 hover:text-primary font-medium transition py-2.5 uppercase"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/contact"
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg transition font-semibold shadow-lg mt-4 uppercase text-center block"
              onClick={() => setIsOpen(false)}
            >
              Admissions
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
