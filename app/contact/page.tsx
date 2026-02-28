'use client'

import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react'
import { useState, FormEvent } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: ['RNR Global Academy', '2nd Floor, Bus Stop, No. 1, Hotel', 'Uttarahalli Main Rd, opp. to Shanthi Sagar', 'Canara Bank Colony, Bengaluru', 'Karnataka 560061'],
      color: 'from-red-500 to-red-700',
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['info@rnrglobalacademy.com', 'globalacademy1106@gmail.com'],
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: Phone,
      title: 'Phone Number',
      details: ['+91 9113676485'],
      color: 'from-green-500 to-green-700',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Saturday: 9:00 AM - 6:00 PM', 'Sunday: 10:00 AM - 2:00 PM'],
      color: 'from-purple-500 to-purple-700',
    },
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-600/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-orange-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full mb-8">
            <MapPin className="w-5 h-5" />
            <span className="font-semibold">Visit Us Today</span>
          </div>
          <h1 className="text-7xl sm:text-8xl lg:text-9xl font-extrabold mb-8 bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-2xl sm:text-3xl leading-relaxed max-w-4xl mx-auto">
            Get in touch with us. We are here to help you start your educational journey.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div
                  key={index}
                  className="group relative"
                >
                  <div className={`absolute -inset-2 bg-gradient-to-r ${info.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500`} />
                  <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-10 shadow-2xl border-2 border-gray-100 dark:border-gray-700 hover:border-transparent transition">
                    <div className="flex items-start gap-6">
                      <div className={`w-24 h-24 bg-gradient-to-br ${info.color} rounded-3xl flex items-center justify-center shadow-2xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition duration-300`}>
                        <Icon className="w-12 h-12 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-5">
                          {info.title}
                        </h3>
                        <div className="space-y-3">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600 dark:text-gray-300 text-xl leading-relaxed">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Map and Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Google Map */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl blur-2xl opacity-20" />
              <div className="relative h-[650px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0!2d77.5!3d12.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzAwLjAiTiA3N8KwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RNR Global Academy Location"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20" />
              <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Send Us a Message
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Fill out the form below and we will get back to you as soon as possible.
                </p>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-green-700 dark:text-green-300">
                    Thank you! We will contact you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
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
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
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
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600 resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-4 rounded-xl transition transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
