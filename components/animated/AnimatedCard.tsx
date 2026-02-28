'use client'

import { useEffect, useRef, useState } from 'react'
import { ReactNode } from 'react'

interface AnimatedCardProps {
  children: ReactNode
  delay?: number
  animation?: 'slide-up' | 'slide-left' | 'slide-right' | 'scale' | 'fade'
  className?: string
}

export function AnimatedCard({
  children,
  delay = 0,
  animation = 'slide-up',
  className = '',
}: AnimatedCardProps) {
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

  const animationClass = {
    'slide-up': 'animate-slide-up',
    'slide-left': 'animate-slide-left',
    'slide-right': 'animate-slide-right',
    scale: 'animate-scale-in',
    fade: 'animate-fade-in',
  }[animation]

  return (
    <div
      ref={ref}
      className={`${isVisible ? animationClass : 'opacity-0'} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
