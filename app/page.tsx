import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import MarketPrices from '@/components/MarketPrices'
import Features from '@/components/Features'
import AITrading from '@/components/AITrading'
import Steps from '@/components/Steps'
import Chart from '@/components/Chart'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <Header />
      <Hero />
      <Stats />
      <MarketPrices />
      <Features />
      <AITrading />
      <Steps />
      <Chart />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}

