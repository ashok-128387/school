'use client'

import { AnimatedCard } from '@/components/animated/AnimatedCard'
import { SlideInText } from '@/components/animated/SlideInText'

export function SuccessStories() {
  const images = [
    '/images/0b3ca0ba91641d9df1e9b5c804ad8a16.jpg',
    '/images/8a8475aecdc2c67a11e00f8c3d5d2c01.jpg',
    '/images/8b2faa8a1e3e6416af793a5bcf720c8b.jpg',
    '/images/41d0abba8ff870ce4ef1cbea5b56fb29.jpg',
    '/images/99def8b0b797f329e368b26d48d09e9c.jpg',
    '/images/1445a7df028a931b425a1cc4595199a1.jpg',
    '/images/6122f90f3fe4268db82f13e0a9543b7d.jpg',
    '/images/20542e46cb947c57d0ec39fbb699fb33.jpg',
    '/images/26653d8947cf66b9c0005bf019844806.jpg',
    '/images/b9c87c62a04d5f7c8ce6a6c55306d5c3.jpg',
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <SlideInText direction="down" className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Our Student Success Stories
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Celebrating the achievements of our students
          </p>
        </SlideInText>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <AnimatedCard key={index} animation="scale" delay={index * 50}>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition group">
                <img
                  src={image}
                  alt={`Success Story ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}
