'use client'

import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { BookOpen, Users, Award, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react'

export default function Courses() {
  const courses = [
    {
      title: '7th & 8th Standard',
      subtitle: 'Foundation Program',
      icon: BookOpen,
      color: 'from-blue-500 to-blue-600',
      image: '/images/school.webp',
      features: [
        'Basic language skills (Kannada, English, Hindi)',
        'Mathematics & Environmental Science',
        'Moral Science and Life Skills',
        'Foundation in digital literacy',
      ],
      ideal: 'Dropouts, homeschoolers, or students with disrupted primary education',
    },
    {
      title: '9th Standard',
      subtitle: 'Pre-Secondary Program',
      icon: Users,
      color: 'from-green-500 to-green-600',
      image: '/images/8a8475aecdc2c67a11e00f8c3d5d2c01.jpg',
      features: [
        'Builds subject familiarity and confidence',
        'English, Kannada/Hindi, Mathematics, Science, and Social Studies',
        'Mentorship & subject-wise assessments',
        'Bridge the learning gap with structured support',
      ],
      ideal: 'Students preparing for open board 10th',
    },
    {
      title: '10th Standard',
      subtitle: 'Secondary Program – KSOS / JSS Board',
      icon: Award,
      color: 'from-orange-500 to-orange-600',
      image: '/images/cd97be009a92475704e260ba3a0a1dc2.jpg',
      features: [
        'Recognized by colleges, skill institutions, and job agencies',
        'Flexible subject combinations (Languages + Core subjects)',
        'Personal doubt-clearing, model tests & exam coaching',
        'Equivalent to SSLC or Matriculation',
      ],
      ideal: 'Students who dropped out and want to reclaim their academic future',
    },
    {
      title: '11th & 12th Standard',
      subtitle: 'PUC Equivalent – KSOS / JSS',
      icon: GraduationCap,
      color: 'from-red-500 to-red-600',
      image: '/images/b9c87c62a04d5f7c8ce6a6c55306d5c3.jpg',
      features: [
        'Arts, Commerce, and Science streams available',
        'Board-recognized syllabus with practical and theoretical focus',
        'Career counselling for entrance tests and higher studies',
        'Continue your journey to college or competitive exams',
      ],
      ideal: 'Students seeking higher secondary education with flexibility',
    },
  ]

  const eligibleStudents = [
    'School dropouts',
    'Working youth',
    'Homemakers wanting to complete education',
    'Students from remote areas',
    'Learners needing a second chance at education',
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Courses Offered
          </h1>
          <p className="text-xl sm:text-2xl text-red-100 max-w-3xl mx-auto leading-relaxed">
            Empowering Every Learner With Recognized Education Paths
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            At Global Academy, we offer a range of courses under Karnataka State Open School (KSOS) and JSS for students from Class 7th to Class 12th. Our open schooling programs are specially designed for students who have experienced academic breaks, are unable to attend regular schools, or are seeking a flexible and inclusive education system. All our programs are structured, recognized, and aimed at both academic excellence and personal development.
          </p>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Our Course Categories
          </h2>

          <div className="space-y-16">
            {courses.map((course, index) => {
              const Icon = course.icon
              const isEven = index % 2 === 0
              return (
                <div
                  key={index}
                  className={`flex flex-col ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-8 items-center`}
                >
                  <div className="lg:w-1/2">
                    <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="lg:w-1/2 space-y-6">
                    <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${course.color} text-white px-6 py-3 rounded-full`}>
                      <Icon className="w-6 h-6" />
                      <span className="font-semibold text-lg">{course.subtitle}</span>
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
                      {course.title}
                    </h3>
                    <ul className="space-y-3">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300 text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 p-4 rounded">
                      <p className="text-base font-semibold text-red-900 dark:text-red-200">
                        Ideal for: <span className="font-normal">{course.ideal}</span>
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Who Can Enroll */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Who Can Enroll?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 text-center">
            Our courses are open to:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {eligibleStudents.map((student, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md"
              >
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-gray-900 dark:text-white font-medium text-lg">{student}</span>
              </div>
            ))}
          </div>
          <p className="text-xl text-gray-700 dark:text-gray-300 text-center leading-relaxed">
            At Global Academy, we believe education should never stop. Whether you're 14 or 40, our open schooling system ensures you're never too late to start again and succeed.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Join Our Learning Family
          </h2>
          <p className="text-xl text-red-100 mb-8 leading-relaxed">
            We believe every student deserves a second chance. At Global Academy, we don't just teach — we transform. Whether you are a parent looking for solutions or a student ready to restart your journey, we're here to help.
          </p>
          <button className="bg-white text-red-600 hover:bg-gray-100 font-bold px-10 py-4 rounded-lg transition transform hover:scale-105 shadow-lg inline-flex items-center gap-2 group">
            Get In Touch Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
