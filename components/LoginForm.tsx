'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function LoginForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
    // Redirect to dashboard
    router.push('/dashboard')
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="Enter your email" onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" required placeholder="Enter your Password" onChange={handleChange} />
        </div>
        <div className="text-right">
          <Link href="/forgot-password" className="text-sm font-medium text-blue-500 hover:text-blue-400">
            Forgot password?
          </Link>
        </div>
      </div>

      <Button type="submit" className="w-full">Sign In</Button>

      <div className="text-center text-sm">
        <span className="text-gray-400">Don't have an account? </span>
        <Link href="/register" className="font-medium text-blue-500 hover:text-blue-400">
          Sign Up
        </Link>
      </div>
    </form>
  )
}

