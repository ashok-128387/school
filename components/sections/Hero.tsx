'use client'

import { SlideInText } from '@/components/animated/SlideInText'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const banners = [
    '/images/banner1.png',
    '/images/banner2.png',
  ]
  const mobileBanners = [
    '/images/banner-mobile1.png',
    '/images/banner-mobile2.png',
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Desktop Carousel Background */}
      <div className="hidden md:block absolute inset-0">
        {banners.map((banner, index) => (
          <div
            key={banner}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${banner})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        ))}
      </div>

      {/* Mobile Carousel Background */}
      <div className="md:hidden absolute inset-0">
        {mobileBanners.map((banner, index) => (
          <div
            key={banner}
            className={`absolute top-0 left-0 w-full h-screen z-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${banner})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
              backgroundRepeat: 'no-repeat',
              minHeight: '100vh',
              maxHeight: '100vh',
            }}
          />
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % banners.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Decorative elements */}
    </section>
  )
}
