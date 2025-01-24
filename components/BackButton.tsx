import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function BackButton() {
  return (
    <Button variant="ghost" size="icon" asChild className="absolute top-4 left-4">
      <Link href="/">
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Back to Home</span>
      </Link>
    </Button>
  )
}

