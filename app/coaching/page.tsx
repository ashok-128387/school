'use client'

import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { BookOpen, Target, Lightbulb, Clock, ArrowRight, CheckCircle, Star } from 'lucide-react'

export default function Coaching() {
  const programs = [
    {
      icon: BookOpen,
      title: 'Academic Coaching',
      subtitle: 'Class 7th to 12th',
      badge: '7th to 12th',
      color: 'from-blue-500 to-blue-700',
      image: '/images/41d0abba8ff870ce4ef1cbea5b56fb29.jpg',
      description: 'Tailored subject-wise coaching for students enrolled in 7th & 8th (Foundation Level), 9th & 10th (Secondary Level – KSOS/JSS), and 11th & 12th (PUC Equivalent).',
      features: [
        'Chapter-wise conceptual teaching',
        'Regular tests & performance analysis',
        'Doubt-solving sessions',
        'Small batch sizes for personal attention',
        'Bilingual coaching (English & regional languages)',
      ],
      goal: 'Help students build clarity, confidence, and consistency in academics.',
    },
    {
      icon: Target,
      title: 'Board Exam Coaching',
      subtitle: 'KSOS / JSS',
      badge: 'Board Prep',
      color: 'from-orange-500 to-orange-700',
      image: '/images/0b3ca0ba91641d9df1e9b5c804ad8a16.jpg',
      description: 'Special crash courses and long-term coaching focused on open board preparation for 10th & 12th students.',
      features: [
        '10th & 12th board syllabus coverage',
        'Practice with model papers, previous year questions, and mock exams',
        'Answer writing strategies & time management tips',
        'Separate sessions for slow learners and late joiners',
      ],
      goal: 'Maximize your score even if you\'re returning after a study gap.',
    },
    {
      icon: Lightbulb,
      title: 'Skill-Based Coaching',
      subtitle: 'Value-Added Programs',
      badge: 'Skills',
      color: 'from-green-500 to-green-700',
      image: '/images/8b2faa8a1e3e6416af793a5bcf720c8b.jpg',
      description: 'For learners looking to boost real-world skills along with academics.',
      features: [
        'Basic Computer Training (MS Office, Internet, Email)',
        'Tally & Accounting Software',
        'Spoken English & Communication Skills',
        'Personality Development & Interview Preparation',
      ],
      goal: 'Build the confidence to succeed in academics, careers, and life.',
    },
    {
      icon: Clock,
      title: 'Custom Timings',
      subtitle: 'Hybrid Support',
      badge: 'Flexible',
      color: 'from-purple-500 to-purple-700',
      image: '/images/99def8b0b797f329e368b26d48d09e9c.jpg',
      description: 'We offer both offline classroom coaching and online support & guidance for outstation or working students.',
      features: [
        'Offline classroom coaching',
        'Online support & guidance',
        'Flexible scheduling',
        'Your time, your pace',
      ],
      goal: 'We fit into your learning schedule.',
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/30 rounded-full blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full mb-8 shadow-xl">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="font-semibold text-lg">Premium Coaching Programs</span>
          </div>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-8 bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent">
            Coaching Programs
          </h1>
          <p className="text-2xl sm:text-3xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Unlocking Potential Through Personalized Academic Support
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl blur-2xl opacity-20" />
            <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-10 sm:p-14 border border-gray-200 dark:border-gray-700">
              <p className="text-2xl text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                At Global Academy, we go beyond classroom learning by offering a wide range of coaching programs designed to help every student succeed — whether they are catching up, moving ahead, or preparing for competitive exams. Our coaching is aligned with the KSOS and JSS curriculum, ensuring both board exam readiness and skill development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs - Alternating Layout */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto space-y-32">
          {programs.map((program, index) => {
            const Icon = program.icon
            const isEven = index % 2 === 0
            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                {/* Image Side */}
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <div className={`absolute -inset-6 bg-gradient-to-r ${program.color} rounded-3xl blur-3xl opacity-25 group-hover:opacity-40 transition duration-500`} />
                    <div className="relative h-[700px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute top-8 left-8">
                        <div className={`bg-gradient-to-r ${program.color} text-white px-8 py-4 rounded-2xl font-bold text-xl shadow-2xl backdrop-blur-sm`}>
                          {program.badge}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-1/2 space-y-8">
                  <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${program.color} text-white px-6 py-3 rounded-2xl shadow-lg`}>
                    <Icon className="w-6 h-6" />
                    <span className="font-bold text-lg">{program.subtitle}</span>
                  </div>
                  
                  <h3 className="text-5xl sm:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                    {program.title}
                  </h3>
                  
                  <p className="text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                    <h4 className="font-bold text-gray-900 dark:text-white text-2xl mb-6 flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      Key Features
                    </h4>
                    <ul className="space-y-4">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                          <div className="w-3 h-3 bg-gradient-to-r from-red-600 to-orange-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 text-xl">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`bg-gradient-to-r ${program.color} p-8 rounded-3xl text-white shadow-2xl`}>
                    <p className="text-2xl font-bold">
                      🎯 Goal: {program.goal}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-600 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Join Our Learning Family
          </h2>
          <p className="text-xl sm:text-2xl mb-10 leading-relaxed">
            We believe every student deserves a second chance. At Global Academy, we don\'t just teach — we transform.
          </p>
          <button className="bg-white text-red-600 hover:bg-gray-100 font-bold px-12 py-5 rounded-full transition transform hover:scale-105 shadow-2xl inline-flex items-center gap-3 group text-lg">
            Get In Touch Today
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition" />
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
