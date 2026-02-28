'use client'

import { AnimatedCard } from '@/components/animated/AnimatedCard'
import { SlideInText } from '@/components/animated/SlideInText'
import { CheckCircle2 } from 'lucide-react'

export function Admissions() {
  const eligibility = [
    '10th or 12th Pass from KSEEB, KOS, NIOS, BOSSE',
    'Private candidates welcome',
    'No age restriction for most programs',
    'Flexible admission timings',
    'Documentation support provided',
  ]

  const steps = [
    { number: '01', title: 'Submit Application', description: 'Fill out our online form with your details' },
    { number: '02', title: 'Document Verification', description: 'Submit required education documents' },
    { number: '03', title: 'Counseling Session', description: 'Meet with our academic advisors' },
    { number: '04', title: 'Enrollment', description: 'Complete registration and start learning' },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto">
        <SlideInText direction="down" className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 text-balance">
            Admissions Open Now
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Easy admission process with flexible eligibility criteria
          </p>
        </SlideInText>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Eligibility with Image */}
          <AnimatedCard animation="slide-left">
            <div className="space-y-6">
              <div 
                className="w-full h-64 rounded-2xl shadow-lg bg-cover bg-center"
                style={{
                  backgroundImage: 'url(/images/students.jpg)',
                }}
              >
                <div className="w-full h-full bg-black/20 rounded-2xl" />
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Eligibility Criteria
                </h3>
                <ul className="space-y-4">
                  {eligibility.map((item) => (
                    <li key={item} className="flex items-start gap-3 group">
                      <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition" />
                      <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedCard>

          {/* Admission Steps with Image */}
          <AnimatedCard animation="slide-right" delay={200}>
            <div className="space-y-6">
              <div 
                className="w-full h-64 rounded-2xl shadow-lg bg-cover bg-center"
                style={{
                  backgroundImage: 'url(/images/counseling.jpg)',
                }}
              >
                <div className="w-full h-full bg-black/20 rounded-2xl" />
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Admission Process
                </h3>
                <div className="space-y-5">
                  {steps.map((step, index) => (
                    <div key={step.number} className="flex gap-4 group">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white font-bold text-lg group-hover:scale-110 transition shadow-lg">
                          {step.number}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-1 text-base lg:text-lg">
                          {step.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>

        {/* CTA */}
        <AnimatedCard animation="scale" delay={400}>
          <div className="bg-gradient-to-r from-red-600 via-red-600 to-red-700 rounded-2xl p-8 sm:p-12 lg:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-white/10 rounded-full" />
            <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-white/10 rounded-full" />
            <div className="relative">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
                Ready to Begin Your Success Story?
              </h3>
              <p className="text-red-100 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                Join thousands of successful students at Global Academy. Admissions are open for all programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-3 lg:py-4 rounded-lg transition transform hover:scale-105 shadow-lg">
                  Apply Now
                </button>
                <button className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-3 lg:py-4 rounded-lg transition">
                  Get Brochure
                </button>
              </div>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </section>
  )
}
