'use client'

import { CounterCard } from '@/components/animated/CounterCard'

export function Stats() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900 via-red-900 to-red-950 text-white overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" style={{ transform: 'translate(-50%, -50%)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-balance">
            Our Track Record
          </h2>
          <p className="text-lg sm:text-xl text-white/90">
            Trusted by thousands of students for quality education and success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <CounterCard number={2000} label="KSOS & JSS Batches" suffix="+" delay={0} />
          <CounterCard number={8} label="Exam Success Rate" suffix="+" delay={200} />
          <CounterCard number={100} label="School Dropouts Recovered" suffix="%" delay={400} />
        </div>
      </div>
    </section>
  )
}
