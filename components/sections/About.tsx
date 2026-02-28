'use client'

import { AnimatedCard } from '@/components/animated/AnimatedCard'
import { SlideInText } from '@/components/animated/SlideInText'
import { ArrowRight } from 'lucide-react'

export function About() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedCard animation="slide-left">
            <div className="relative h-[700px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/0555ec85-73b0-47be-aa91-a102aa31b3bc_removalai_preview.png"
                alt="Global Academy"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedCard>

          <AnimatedCard animation="slide-right" delay={200}>
            <div className="space-y-6">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                GLOBAL ACADEMY – JSS KARNATAKA<br />OPEN SCHOOL STUDY CENTER
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 text-justify">
                <p className="text-lg">
                  <span className="font-semibold text-red-600 dark:text-red-400">
                    Recognized by the Government of Karnataka
                  </span>
                  <br />
                  (Reg. No: JSSKOS/M-207/2023-08/212)
                </p>
                <p className="text-base leading-relaxed">
                  We are a trusted Regular and Distance Education Study Center offering academic programs under UGC–AICTE–DEC recognized universities. Our institution is committed to providing accessible, flexible, and career-focused education opportunities for students who wish to continue or complete their studies through private or distance learning modes.
                </p>
                <p className="text-base leading-relaxed">
                  At Global Academy, we understand that every student's educational journey is unique. Whether you are a working professional, a student who discontinued studies, or someone looking to upgrade qualifications, we provide structured academic support tailored to your needs.
                </p>
                <p className="text-base leading-relaxed font-semibold text-gray-900 dark:text-white">
                  Our goal is to empower students to complete their education confidently and professionally through:
                </p>
                <ul className="space-y-2 text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                    <span>Experienced and Qualified Teaching Faculty</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                    <span>Personalized Academic Guidance & Mentorship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                    <span>Flexible Learning Schedules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                    <span>Well-Structured Study Materials</span>
                  </li>
                </ul>
              </div>
              <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-8 py-4 rounded-lg transition transform hover:scale-105 shadow-lg flex items-center gap-2 group">
                Explore Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  )
}
