'use client'

import { AnimatedCard } from '@/components/animated/AnimatedCard'
import { SlideInText } from '@/components/animated/SlideInText'
import { Building2 } from 'lucide-react'

export function Universities() {
  const universities = [
    { name: 'Bangalore University', mode: 'Online/Offline' },
    { name: 'Mysore University', mode: 'Online/Offline' },
    { name: 'Karnataka State Open University', mode: 'Distance' },
    { name: 'Annamalai University', mode: 'Distance' },
    { name: 'MGR University', mode: 'Distance' },
    { name: 'VELS University', mode: 'Distance' },
    { name: 'Capital University', mode: 'Distance' },
    { name: 'Subharthi University', mode: 'Distance' },
  ]

  return (
    <section id="universities" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <SlideInText direction="down" className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 text-balance">
            Affiliated Universities
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Partnerships with renowned national and international universities
          </p>
        </SlideInText>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {universities.map((university, index) => (
            <AnimatedCard
              key={university.name}
              delay={index * 80}
              animation="slide-up"
            >
              <div className="group relative h-full p-6 bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-700 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-red-500 transition overflow-hidden">
                <div className="absolute -right-12 -top-12 w-24 h-24 bg-red-500/10 rounded-full group-hover:scale-150 transition duration-300" />
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition shadow-lg mb-4">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-base leading-tight mb-2">
                    {university.name}
                  </h3>
                  <p className="text-sm text-red-600 dark:text-red-400 font-semibold">
                    {university.mode}
                  </p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        <AnimatedCard animation="scale" delay={600}>
          <div className="relative p-10 sm:p-12 lg:p-16 bg-gradient-to-r from-red-600 via-red-600 to-red-700 rounded-3xl text-white shadow-2xl overflow-hidden">
            <div className="absolute -right-40 -top-40 w-80 h-80 bg-white/10 rounded-full" />
            <div className="absolute -left-40 -bottom-40 w-80 h-80 bg-white/10 rounded-full" />
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-bold mb-3">Recognized by Government</h3>
                  <p className="text-red-100 text-lg leading-relaxed">
                    Registration No: JSSKOS/M-207/2023-08/212<br />
                    <span className="font-semibold">UGC-AICTE-DEC Recognized</span>
                  </p>
                </div>
                <div className="flex justify-center md:justify-end">
                  <button className="bg-white text-red-600 hover:bg-gray-100 font-bold px-10 py-4 rounded-xl transition transform hover:scale-105 shadow-lg">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </section>
  )
}
