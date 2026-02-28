import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Stats } from '@/components/sections/Stats'
import { Programs } from '@/components/sections/Programs'
import { Banner } from '@/components/sections/Banner'
import { Features } from '@/components/sections/Features'
import { Universities } from '@/components/sections/Universities'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { Admissions } from '@/components/sections/Admissions'
import { SuccessStories } from '@/components/sections/SuccessStories'
import { Testimonials } from '@/components/sections/Testimonials'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <Hero />
      <About />
      <Stats />
      <Programs />
      <Banner />
      <Features />
      <Universities />
      <WhyChooseUs />
      <Admissions />
      <SuccessStories />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
