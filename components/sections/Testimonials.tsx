'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { SlideInText } from '@/components/animated/SlideInText'

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Ramesh K.',
      role: 'Degree Student',
      text: 'Global Academy gave me a second chance to complete my degree. The faculty support and flexible learning system helped me balance my job and studies successfully.',
    },
    {
      name: 'Priya S.',
      role: 'PUC Student',
      text: 'I discontinued my studies earlier, but with the guidance here, I completed my PUC confidently. The staff are very supportive and friendly.',
    },
    {
      name: 'Arun M.',
      role: 'Distance Education – B.Com',
      text: 'The study materials and regular follow-ups kept me motivated. The entire admission process was smooth and transparent.',
    },
    {
      name: 'Kavya R.',
      role: 'SSLC Private',
      text: 'I was worried about writing exams privately, but the academy guided me step by step. I passed with good marks!',
    },
    {
      name: 'Imran P.',
      role: 'Working Professional – Degree',
      text: 'As a working professional, flexible timing was important for me. Global Academy made it possible to continue my education without leaving my job.',
    },
    {
      name: 'Nisha T.',
      role: 'PG Student',
      text: 'The faculty members are highly experienced and always ready to clarify doubts. I highly recommend this institution.',
    },
    {
      name: 'Suresh B.',
      role: 'Diploma Student',
      text: 'The support system here is excellent. From admission to examination, everything was well organized.',
    },
    {
      name: 'Aishwarya D.',
      role: 'PUC Private Candidate',
      text: 'They motivated me when I had lost confidence. Today, I have completed my education successfully.',
    },
    {
      name: 'Manjunath H.',
      role: 'Distance Degree',
      text: 'Very professional and trustworthy study center. I am thankful for their proper guidance and constant encouragement.',
    },
    {
      name: 'Lakshmi V.',
      role: 'SSLC & PUC Completed',
      text: 'Because of Global Academy, I was able to restart and complete my studies. It truly changed my career path.',
    },
  ]

  const itemsPerPage = 4
  const maxIndex = Math.ceil(testimonials.length / itemsPerPage) - 1

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0))
  }

  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  )

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-6xl mx-auto">
        <SlideInText direction="down" className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Our Students Says
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
            Student Testimonials
          </p>
        </SlideInText>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition"
              >
                <Quote className="w-10 h-10 text-red-600 dark:text-red-400 mb-4" />
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-red-600 dark:text-red-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handlePrev}
              className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    index === currentIndex ? 'bg-red-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
