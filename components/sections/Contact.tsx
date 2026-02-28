'use client'

import { SlideInText } from '@/components/animated/SlideInText'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { FormEvent, useState } from 'react'

export function Contact() {
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
      label: 'Location',
      value: 'Bangalore, Karnataka',
      details: 'Global Academy - JSS KSOS Study Center',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-XXX-XXX-XXXX',
      details: 'Available 9 AM - 6 PM, Mon-Sat',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@globalacademy.in',
      details: 'Response within 24 hours',
    },
    {
      icon: Clock,
      label: 'Office Hours',
      value: 'Mon - Sat: 9 AM - 6 PM',
      details: 'Sun: 10 AM - 2 PM',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <SlideInText direction="down" className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Have questions? We're here to help you on your educational journey
          </p>
        </SlideInText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info) => {
              const Icon = info.icon
              return (
                <SlideInText key={info.label} direction="left" className="animate-fade-in">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                        {info.label}
                      </h4>
                      <p className="font-semibold text-primary mb-1">{info.value}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {info.details}
                      </p>
                    </div>
                  </div>
                </SlideInText>
              )
            })}
          </div>

          {/* Contact Form */}
          <SlideInText direction="right">
            <form onSubmit={handleSubmit} className="space-y-4">
              {submitted && (
                <div className="p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-300">
                  Thank you! We'll contact you soon.
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </SlideInText>
        </div>
      </div>
    </section>
  )
}
