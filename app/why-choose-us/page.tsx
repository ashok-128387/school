'use client'

import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { Award, BookOpen, Users, Clock, Target, Shield, Lightbulb, Heart, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: 'Recognized KSOS & JSS Study Center',
      color: 'from-blue-500 to-blue-700',
      description: 'We are an authorized study center for Karnataka State Open School (KSOS) and JSS (Jagadguru Shikshan Sansthe). This means your education is valid, recognized, and opens doors for higher studies and jobs.',
    },
    {
      icon: BookOpen,
      title: 'Education from 7th to 12th',
      color: 'from-green-500 to-green-700',
      description: 'From foundation classes (7th & 8th) to 10th and 12th standard (SSLC & PUC equivalent), we provide a complete academic journey for students who have stepped away from the traditional path.',
    },
    {
      icon: Users,
      title: 'Experienced, Caring Faculty',
      color: 'from-purple-500 to-purple-700',
      description: 'Our educators specialize in working with dropout students, working youth, academically struggling learners, and those returning to study after years.',
    },
    {
      icon: Target,
      title: 'Student-Centric Learning',
      color: 'from-orange-500 to-orange-700',
      description: 'We customize the way we teach so it suits your speed, your schedule, and your level. Our focus is on concept clarity, practical understanding, and performance improvement.',
    },
    {
      icon: Clock,
      title: 'Flexible & Progressive Learning',
      color: 'from-red-500 to-red-700',
      description: 'Flexible admission throughout the year, weekend or evening classes for working students, and online + offline support available.',
    },
    {
      icon: Shield,
      title: 'Board Exam Success',
      color: 'from-teal-500 to-teal-700',
      description: 'Complete syllabus coverage, regular mock tests, answer writing practice, and previous year question solving to help you prepare confidently.',
    },
    {
      icon: Lightbulb,
      title: 'Skill Add-on Programs',
      color: 'from-yellow-500 to-yellow-700',
      description: 'Practical training in Spoken English, Basic Computers, Interview Skills, Personality Development, and Accounting Tools like Tally.',
    },
    {
      icon: Heart,
      title: 'Safe, Supportive Environment',
      color: 'from-pink-500 to-pink-700',
      description: 'A judgment-free, inclusive space where students feel respected regardless of age, background, or past. Discipline and motivation are nurtured.',
    },
  ]

  const benefits = [
    'A second chance at education',
    'A flexible, student-friendly academic path',
    'Personal attention and career guidance',
    'Board-recognized certification (KSOS & JSS)',
    'Coaching that adapts to your pace and goals',
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <Header />

      {/* Banner Section */}
      <section className="w-full pt-20">
        <img
          src="/images/Global%20Academy%20Open%20School%202.png"
          alt="Global Academy Banner"
          className="w-full h-auto object-cover"
        />
      </section>

      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-600 via-orange-600 to-red-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-8">
            Why Choose Us
          </h1>
          <p className="text-2xl sm:text-3xl leading-relaxed max-w-4xl mx-auto">
            At Global Academy, we believe that every student deserves a second chance at education and a bright future.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Whether you are returning after a gap, unable to continue in mainstream schooling, or simply looking for a more supportive environment — we are here to guide you with care, structure, and excellence.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r ${reason.color} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition`} />
                  <div className="relative">
                    <div className={`w-16 h-16 bg-gradient-to-r ${reason.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {reason.title}
                    </h3>
                    <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-bold mb-8">Our Promise</h2>
          <p className="text-3xl font-semibold mb-12">
            We do not just enroll students – we build futures.
          </p>
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20">
            <h3 className="text-3xl font-bold mb-8">Choose Global Academy If You Want:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 text-left">
                  <CheckCircle2 className="w-7 h-7 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-xl">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            Join Our Learning Family
          </h2>
          <p className="text-2xl mb-10 leading-relaxed">
            We believe every student deserves a second chance. At Global Academy, we do not just teach — we transform.
          </p>
          <button className="bg-white text-red-600 hover:bg-gray-100 font-bold px-12 py-5 rounded-full transition transform hover:scale-105 shadow-2xl inline-flex items-center gap-3 group text-xl">
            Get In Touch Today
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition" />
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
