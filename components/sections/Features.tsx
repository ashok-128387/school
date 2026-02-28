'use client'

import { AnimatedCard } from '@/components/animated/AnimatedCard'
import { SlideInText } from '@/components/animated/SlideInText'
import { CheckCircle, Users, Zap, Target, BookMarked, Award } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: CheckCircle,
      title: '100% Result-Oriented',
      description: 'Proven track record with exceptional exam success rates and student outcomes',
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Highly qualified teachers with years of experience in their respective fields',
    },
    {
      icon: Zap,
      title: 'Modern Teaching Methods',
      description: 'Latest teaching techniques and technology-enabled learning solutions',
    },
    {
      icon: Target,
      title: 'Personalized Guidance',
      description: 'One-on-one mentoring and career counseling for every student',
    },
    {
      icon: BookMarked,
      title: 'Quality Study Materials',
      description: 'Comprehensive notes, solved papers, and interactive learning resources',
    },
    {
      icon: Award,
      title: 'Recognized Affiliation',
      description: 'Registered by Government of Karnataka with multiple university affiliations',
    },
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-6xl mx-auto">
        <SlideInText direction="down" className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 text-balance">
            Why Choose Global Academy
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Excellence in education through dedicated teaching and student-centric approach
          </p>
        </SlideInText>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <AnimatedCard
                key={feature.title}
                delay={index * 100}
                animation="slide-up"
              >
                <div className="group relative p-8 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:border-red-500 transition duration-300 h-full overflow-hidden">
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-red-500/5 rounded-full group-hover:scale-150 transition duration-300" />
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300 shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </AnimatedCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
