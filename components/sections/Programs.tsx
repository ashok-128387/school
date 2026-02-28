'use client'

import { AnimatedCard } from '@/components/animated/AnimatedCard'
import { SlideInText } from '@/components/animated/SlideInText'
import { BookOpen, GraduationCap, Award, Users } from 'lucide-react'

export function Programs() {
  const programCategories = [
    {
      title: 'School Level',
      icon: BookOpen,
      programs: ['SSLC (10th Standard)', 'PUC (12th Standard)', 'ICSE, CBSE & State Syllabus'],
      color: 'from-red-500 to-red-600',
      image: '/images/school.webp',
    },
    {
      title: 'Graduation',
      icon: GraduationCap,
      programs: ['BA, B.Com, B.Sc', 'BCA, B.Pharm, B.Ed'],
      color: 'from-red-600 to-red-700',
      image: '/images/8a8475aecdc2c67a11e00f8c3d5d2c01.jpg',
    },
    {
      title: 'Post-Graduation',
      icon: Award,
      programs: ['MA, M.Com, M.Sc', 'MBA, MCA, M.Tech', 'Ph.D. Programs'],
      color: 'from-red-700 to-red-800',
      image: '/images/cd97be009a92475704e260ba3a0a1dc2.jpg',
    },
    {
      title: 'Specialized Programs',
      icon: Users,
      programs: ['NTT (Nursery Teacher Training)', 'D.Pharm', 'Diploma Courses'],
      color: 'from-red-600 to-red-700',
      image: '/images/b9c87c62a04d5f7c8ce6a6c55306d5c3.jpg',
    },
  ]

  return (
    <section id="programs" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-red-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-200/30 dark:bg-red-900/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-200/30 dark:bg-orange-900/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SlideInText direction="down" className="text-center mb-24">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-3 rounded-full mb-8 shadow-xl">
            <span className="font-bold text-lg">🎓 Academic Excellence</span>
          </div>
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-gray-900 dark:text-white mb-8 bg-gradient-to-r from-gray-900 via-red-900 to-gray-900 dark:from-white dark:via-red-200 dark:to-white bg-clip-text text-transparent">
            Our Programs
          </h2>
          <p className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive education solutions from school to post-graduation level
          </p>
        </SlideInText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {programCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <AnimatedCard
                key={category.title}
                delay={index * 150}
                animation="slide-up"
                className="h-full"
              >
                <div className="group relative h-full">
                  <div className={`absolute -inset-2 bg-gradient-to-r ${category.color} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500`} />
                  <div className="relative h-full bg-white dark:bg-slate-800 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border-4 border-white dark:border-slate-700">
                    <div className="relative h-[650px] overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
                      <div className="absolute inset-0 flex flex-col justify-end p-10">
                        <div className={`inline-flex items-center gap-4 bg-gradient-to-r ${category.color} text-white px-8 py-4 rounded-2xl mb-6 shadow-2xl w-fit group-hover:scale-105 transition`}>
                          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                            <Icon className="w-7 h-7" />
                          </div>
                          <span className="font-extrabold text-2xl">{category.title}</span>
                        </div>
                        <ul className="space-y-3">
                          {category.programs.map((program) => (
                            <li key={program} className="flex items-start gap-4 text-white">
                              <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0" />
                              <span className="text-xl font-semibold leading-relaxed drop-shadow-lg">{program}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
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
