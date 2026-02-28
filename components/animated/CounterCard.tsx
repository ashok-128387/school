'use client'

import { useEffect, useRef, useState } from 'react'

interface CounterCardProps {
  number: number
  label: string
  suffix?: string
  delay?: number
}

export function CounterCard({ number, label, suffix = '', delay = 0 }: CounterCardProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const timer = setTimeout(() => {
      const duration = 2000
      const start = Date.now()

      const animate = () => {
        const now = Date.now()
        const progress = Math.min((now - start) / duration, 1)
        const currentCount = Math.floor(progress * number)
        setCount(currentCount)

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }, delay)

    return () => clearTimeout(timer)
  }, [isVisible, number, delay])

  return (
    <div
      ref={ref}
      className="text-center animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-10 hover:bg-white/15 transition">
        <div className="text-6xl sm:text-7xl font-bold text-white mb-3 drop-shadow-lg">
          {count}
          <span className="text-5xl sm:text-6xl ml-1">{suffix}</span>
        </div>
        <p className="text-white/80 text-lg sm:text-xl font-medium">{label}</p>
      </div>
    </div>
  )
}
