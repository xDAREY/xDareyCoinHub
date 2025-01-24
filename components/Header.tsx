'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A] bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          xDareyCoinHub
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Button variant="ghost" asChild>
                <Link href="/login">Login</Link>
              </Button>
            </li>
            <li>
              <Button variant="default" asChild>
                <Link href="/register">Register</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

