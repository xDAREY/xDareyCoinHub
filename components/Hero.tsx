import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="pt-32 pb-16 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          The Most Efficient AI Powered Trading and Investment Platform
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Professional trading system that automatically scans, analyzes, and develops strategies and trades by statistical arbitrage in cryptocurrency, Stocks and Forex markets
        </p>
        <Button size="lg" asChild>
          <Link href="/register">Get started</Link>
        </Button>
      </div>
    </section>
  )
}

