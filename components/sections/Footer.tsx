'use client'

import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 py-8 sm:py-10 lg:py-12 border-b border-gray-800">
          {/* Brand & About */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">RNR Global Academy</h3>
            <p className="text-base sm:text-lg text-gray-400 mb-4 sm:mb-6 leading-relaxed">
              Empowering students with quality education and personalized coaching for academic excellence.
            </p>
            <div className="flex gap-2 sm:gap-3">
              <a href="#" className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#about" className="text-base sm:text-lg hover:text-primary transition-colors hover:translate-x-1 inline-block">About Us</a></li>
              <li><a href="#programs" className="text-base sm:text-lg hover:text-primary transition-colors hover:translate-x-1 inline-block">Our Programs</a></li>
              <li><a href="#universities" className="text-base sm:text-lg hover:text-primary transition-colors hover:translate-x-1 inline-block">Universities</a></li>
              <li><a href="#contact" className="text-base sm:text-lg hover:text-primary transition-colors hover:translate-x-1 inline-block">Contact Us</a></li>
              <li><a href="#" className="text-base sm:text-lg hover:text-primary transition-colors hover:translate-x-1 inline-block">Admissions</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Programs</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#programs" className="text-base sm:text-lg hover:text-primary transition-colors hover:translate-x-1 inline-block">School Level</a></li>
              <li><a href="#programs" className="text-base sm:text-lg hover:text-primary transition-colors hover:translate-x-1 inline-block">Graduation</a></li>
              <li><a href="#programs" className="text-base sm:text-lg hover:text-primary transition-colors hover:translate-x-1 inline-block">Post-Graduation</a></li>
              <li><a href="#programs" className="text-base sm:text-lg hover:text-primary transition-colors hover:translate-x-1 inline-block">Specialized Courses</a></li>
              <li><a href="#" className="text-base sm:text-lg hover:text-primary transition-colors hover:translate-x-1 inline-block">Online Learning</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Contact Us</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-base sm:text-lg">
                  <p>2nd Floor, Uttarahalli Main Rd</p>
                  <p>Bengaluru, Karnataka 560061</p>
                </div>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                <a href="tel:+919113676485" className="text-base sm:text-lg hover:text-primary transition-colors">+91 9113676485</a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                <a href="mailto:info@rnrglobalacademy.com" className="text-base sm:text-lg hover:text-primary transition-colors break-all">info@rnrglobalacademy.com</a>
              </li>
            </ul>
            <div className="mt-3 sm:mt-4 p-3 bg-gray-800/50 rounded-lg">
              <p className="text-sm sm:text-base font-semibold text-white mb-1">Office Hours</p>
              <p className="text-sm sm:text-base text-gray-400">Mon-Sat: 9:00 AM - 6:00 PM</p>
              <p className="text-sm sm:text-base text-gray-400">Sunday: 10:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-base sm:text-lg text-gray-400 text-center md:text-left">
              &copy; {year} RNR Global Academy. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-base sm:text-lg">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Sitemap</a>
            </div>
          </div>
          <div className="text-center mt-3 sm:mt-4">
            <p className="text-base sm:text-lg text-gray-400">
              Designed & Developed By <a href="https://peakinfosolution.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 hover:underline">Peakinfosolution.com</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
