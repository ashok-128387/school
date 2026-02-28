'use client'

import { AnimatedCard } from '@/components/animated/AnimatedCard'
import { SlideInText } from '@/components/animated/SlideInText'

export function WhyChooseUs() {
  const features = [
    {
      title: 'Happiness Culture',
      description: 'We create joyful, stress-free learning spaces.',
      subtitle: 'Happy students and teachers',
      image: '/images/SVNI-11.png.bv.webp',
    },
    {
      title: 'Wisdom over Knowledge',
      description: 'We teach students to think, reflect, and act wisely.',
      subtitle: 'Students in a classroom',
      image: '/images/SVNI-12.png.bv.webp',
    },
    {
      title: 'Independent Individuals',
      description: 'Our students grow into confident, capable people.',
      subtitle: 'Students working on a project',
      image: '/images/SVNI-13.png.bv.webp',
    },
    {
      title: 'Diverse Education',
      description: 'We balance academics with arts, sports, and creativity.',
      subtitle: 'Students in a school library',
      image: '/images/SVNI-14.png.bv.webp',
    },
    {
      title: 'Our Facilities',
      description: 'Classrooms equipped with digital and modern tools.',
      subtitle: 'School building and grounds',
      image: '/images/SVNI-15.png.bv.webp',
    },
    {
      title: 'Sports Complex',
      description: 'Training grounds for physical fitness and discipline.',
      subtitle: 'Students playing on a sports field',
      image: '/images/SVNI-17.png.bv.webp',
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <SlideInText direction="down" className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We are a school that nurtures values beyond academics.
          </p>
        </SlideInText>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedCard key={index} animation="slide-up" delay={index * 100}>
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group border border-gray-200 dark:border-gray-700">
                <div className="relative h-24 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {feature.subtitle}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}
