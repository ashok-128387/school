import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { SlideInText } from '@/components/animated/SlideInText'
import { AnimatedCard } from '@/components/animated/AnimatedCard'
import { Heart, Target, Lightbulb, Users, Award, Zap } from 'lucide-react'

export const metadata = {
  title: 'About Global Academy | Your Future Begins Here',
  description: 'Discover Global Academy\'s mission to transform education. Learn our story, values, and commitment to helping students succeed.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(/images/about-hero.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
          </div>

          <div className="max-w-5xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8 py-20 text-center">
            <SlideInText direction="down">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg mb-6 text-balance">
                About Global Academy
              </h1>
            </SlideInText>
            <SlideInText direction="up" delay={200}>
              <p className="text-xl sm:text-2xl text-white/90 drop-shadow-md max-w-3xl mx-auto leading-relaxed">
                Transforming lives through accessible, quality education since 2007
              </p>
            </SlideInText>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <SlideInText direction="left" className="hidden lg:block">
                <div 
                  className="w-full h-96 rounded-2xl shadow-2xl bg-cover bg-center"
                  style={{
                    backgroundImage: 'url(/images/team-collaboration.jpg)',
                  }}
                >
                  <div className="w-full h-full bg-black/10 rounded-2xl" />
                </div>
              </SlideInText>

              <SlideInText direction="right">
                <div className="space-y-6">
                  <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                    Our Story
                  </h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Global Academy is an educational institution functioning under RNR Educational Trust, established in 2007. Located in Uttarahalli, Bangalore South, we are affiliated with many UGC-AICTE recognised universities across South and North India.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    We are known for fostering creativity, knowledge, and skills while maintaining the highest standards of discipline and responsibility. Our commitment is clear: every student receives comprehensive, engaging education designed to prepare them for success ahead.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Founded to meet the needs of our local community, Global Academy provides quality education at affordable prices. We offer both regular and distance education programs for students seeking flexible learning pathways.
                  </p>
                </div>
              </SlideInText>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-slate-800 dark:to-slate-900">
          <div className="max-w-6xl mx-auto">
            <SlideInText direction="down" className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 text-balance">
                Our Mission & Vision
              </h2>
            </SlideInText>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Mission */}
              <AnimatedCard animation="slide-up" delay={0}>
                <div className="relative h-full p-8 sm:p-10 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition">
                  <div className="absolute -right-12 -top-12 w-24 h-24 bg-red-500/10 rounded-full" />
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                      <Target className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      Our Mission
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                      To make quality education accessible to all students — regardless of age, background, or academic history — and guide them toward academic and professional success through personalized mentorship, expert teaching, and a nurturing environment.
                    </p>
                  </div>
                </div>
              </AnimatedCard>

              {/* Vision */}
              <AnimatedCard animation="slide-up" delay={200}>
                <div className="relative h-full p-8 sm:p-10 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition">
                  <div className="absolute -right-12 -top-12 w-24 h-24 bg-red-500/10 rounded-full" />
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                      <Lightbulb className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      Our Vision
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                      To build a vibrant community of lifelong learners by delivering flexible, progressive, and inclusive education that unlocks every student's potential and shapes them into responsible, skilled, and confident individuals.
                    </p>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* Why We Exist Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <SlideInText direction="left">
                <div className="space-y-6">
                  <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                    Why We Exist
                  </h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Thousands of students in India face barriers that prevent them from completing their schooling. Whether due to financial constraints, personal issues, health concerns, or academic challenges — mainstream education doesn't always fit all.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-semibold text-red-600 dark:text-red-400">
                    At Global Academy, we offer an alternative that works.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4 group">
                      <div className="w-6 h-6 bg-red-500 rounded-full mt-1 group-hover:scale-110 transition flex-shrink-0" />
                      <span className="text-lg text-gray-700 dark:text-gray-300">Recognized certification through KSOS & JSS</span>
                    </li>
                    <li className="flex items-start gap-4 group">
                      <div className="w-6 h-6 bg-red-500 rounded-full mt-1 group-hover:scale-110 transition flex-shrink-0" />
                      <span className="text-lg text-gray-700 dark:text-gray-300">Career and college readiness support</span>
                    </li>
                    <li className="flex items-start gap-4 group">
                      <div className="w-6 h-6 bg-red-500 rounded-full mt-1 group-hover:scale-110 transition flex-shrink-0" />
                      <span className="text-lg text-gray-700 dark:text-gray-300">Welcoming environment with small class sizes and individual attention</span>
                    </li>
                  </ul>
                </div>
              </SlideInText>

              <SlideInText direction="right" className="hidden lg:block">
                <div 
                  className="w-full h-96 rounded-2xl shadow-2xl bg-cover bg-center"
                  style={{
                    backgroundImage: 'url(/images/transformation.jpg)',
                  }}
                >
                  <div className="w-full h-full bg-black/10 rounded-2xl" />
                </div>
              </SlideInText>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-slate-800 dark:to-slate-900">
          <div className="max-w-6xl mx-auto">
            <SlideInText direction="down" className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 text-balance">
                What Sets Us Apart
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Distinctive features that make Global Academy your best choice
              </p>
            </SlideInText>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: 'Government-Recognized',
                  description: 'Certified KSOS & JSS study center with official government recognition'
                },
                {
                  icon: Users,
                  title: 'Flexible Learning',
                  description: 'Programs tailored for 7th to 12th standard students and working professionals'
                },
                {
                  icon: Zap,
                  title: 'Inclusive Education',
                  description: 'Ideal for dropouts, working students, and those seeking flexible learning paths'
                },
                {
                  icon: Heart,
                  title: 'Holistic Approach',
                  description: 'Academic, career, and life skill development combined for complete growth'
                },
                {
                  icon: Target,
                  title: 'Individual Attention',
                  description: 'Small class sizes ensuring personalized mentorship and guidance'
                },
                {
                  icon: Lightbulb,
                  title: 'Compassionate Team',
                  description: 'Dedicated staff helping students restart, rebuild, and succeed'
                }
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <AnimatedCard key={item.title} delay={index * 100} animation="slide-up">
                    <div className="group relative h-full p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-red-500 transition overflow-hidden">
                      <div className="absolute -right-16 -top-16 w-32 h-32 bg-red-500/10 rounded-full group-hover:scale-150 transition duration-300" />
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedCard>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
          <div className="max-w-6xl mx-auto">
            <AnimatedCard animation="scale" delay={400}>
              <div className="relative p-12 sm:p-16 lg:p-20 bg-gradient-to-r from-red-600 via-red-600 to-red-700 rounded-3xl text-white shadow-2xl overflow-hidden">
                <div className="absolute -right-40 -top-40 w-80 h-80 bg-white/10 rounded-full" />
                <div className="absolute -left-40 -bottom-40 w-80 h-80 bg-white/10 rounded-full" />
                
                <div className="relative">
                  <div className="text-center space-y-8">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
                      Join Our Learning Family
                    </h2>
                    <p className="text-lg sm:text-xl text-red-100 max-w-2xl mx-auto leading-relaxed">
                      We believe every student deserves a second chance. At Global Academy, we don't just teach — we transform. Whether you are a parent looking for solutions or a student ready to restart your journey, we're here to help.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                      <button className="bg-white text-red-600 hover:bg-gray-100 font-bold px-10 py-4 rounded-xl transition transform hover:scale-105 shadow-lg">
                        Get In Touch
                      </button>
                      <button className="border-2 border-white text-white hover:bg-white/10 font-bold px-10 py-4 rounded-xl transition">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
