import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">About xDareyCoinHub</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">Company</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Careers</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Press</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">Trading</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Investments</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">AI Solutions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">Help Center</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Contact Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Trade</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">Crypto</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Stocks</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Forex</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Join a new generation of Traders</h2>
          <p className="text-xl mb-8">Trade on a platform trusted by millions of users.</p>
          <Button size="lg">Get started</Button>
        </div>
        <div className="mt-12 text-center text-gray-400">
          © 2025 xDareyCoinHub. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

