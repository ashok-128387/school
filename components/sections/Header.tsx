'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [showAdmissionForm, setShowAdmissionForm] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', course: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Form submitted successfully!')
    setFormData({ name: '', email: '', phone: '', course: '', message: '' })
    setShowAdmissionForm(false)
  }

  return (
    <header className="fixed w-full top-0 z-[10000] bg-white/98 dark:bg-slate-900/98 backdrop-blur-md shadow-lg border-b border-gray-100 dark:border-gray-800">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-16 h-16 md:w-52 md:h-52 flex items-center justify-center bg-transparent">
            <img src="/images/logo.png" alt="Global Academy" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-primary font-medium transition relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-700 group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-primary font-medium transition relative group">
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-700 group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="/courses" className="text-gray-700 dark:text-gray-300 hover:text-primary font-medium transition relative group">
            Courses
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-700 group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="/coaching" className="text-gray-700 dark:text-gray-300 hover:text-primary font-medium transition relative group">
            Coaching
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-700 group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="/why-choose-us" className="text-gray-700 dark:text-gray-300 hover:text-primary font-medium transition relative group">
            Why Choose Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-700 group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-primary font-medium transition relative group">
            Contact Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-700 group-hover:w-full transition-all duration-300" />
          </Link>
          <button onClick={() => setShowAdmissionForm(true)} className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-2.5 rounded-lg transition font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform" suppressHydrationWarning>
            Admissions
          </button>
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

      {/* Admission Form Modal */}
      {showAdmissionForm && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => setShowAdmissionForm(false)} style={{ paddingTop: '100px' }}>
          <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 max-w-2xl w-full mx-4 shadow-2xl max-h-[90vh] overflow-y-auto" style={{ marginTop: '524px' }} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowAdmissionForm(false)} className="absolute top-4 right-4 w-10 h-10 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-slate-600 transition" suppressHydrationWarning>
              <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
            
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Admission Form</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Course Interested *</label>
                <select
                  required
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  <option value="">Select a course</option>
                  <option value="7th-8th">7th & 8th Standard</option>
                  <option value="9th">9th Standard</option>
                  <option value="10th">10th Standard (SSLC)</option>
                  <option value="11th-12th">11th & 12th Standard (PUC)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600 resize-none"
                  placeholder="Any additional information..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 rounded-xl transition transform hover:scale-105 shadow-lg"
                suppressHydrationWarning
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="px-4 py-6 space-y-3">
            <Link
              href="/"
              className="block text-gray-700 dark:text-gray-300 hover:text-primary font-medium transition py-2.5 border-b border-gray-100 dark:border-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 dark:text-gray-300 hover:text-primary font-medium transition py-2.5 border-b border-gray-100 dark:border-gray-800"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/courses"
              className="block text-gray-700 dark:text-gray-300 hover:text-primary font-medium transition py-2.5 border-b border-gray-100 dark:border-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/coaching"
              className="block text-gray-700 dark:text-gray-300 hover:text-primary font-medium transition py-2.5 border-b border-gray-100 dark:border-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Coaching
            </Link>
            <Link
              href="/why-choose-us"
              className="block text-gray-700 dark:text-gray-300 hover:text-primary font-medium transition py-2.5 border-b border-gray-100 dark:border-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Why Choose Us
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 dark:text-gray-300 hover:text-primary font-medium transition py-2.5"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <button onClick={() => setShowAdmissionForm(true)} className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg transition font-semibold shadow-lg mt-4" suppressHydrationWarning>
              Admissions
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
