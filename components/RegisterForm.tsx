'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    password: '',
    confirmPassword: '',
    agreePolicy: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="fullName">Full name</Label>
          <Input id="fullName" name="fullName" type="text" required placeholder="Enter your full name" onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="Enter your email" onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" required placeholder="Enter your Phone Number" onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="country">Select Country</Label>
          <Select name="country" onValueChange={(value) => setFormData(prev => ({ ...prev, country: value }))}>
            <SelectTrigger>
              <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              {/* Add more countries as needed */}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" required placeholder="Password must be 6+ characters" onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="confirmPassword">Confirm password</Label>
          <Input id="confirmPassword" name="confirmPassword" type="password" required placeholder="Re-enter your password" onChange={handleChange} />
        </div>
        <div className="flex items-center">
          <Checkbox id="agreePolicy" name="agreePolicy" onChange={handleChange} />
          <Label htmlFor="agreePolicy" className="ml-2 text-sm text-gray-400">
            I agree with xDareyCoinHub Privacy Policy
          </Label>
        </div>
      </div>

      <Button type="submit" className="w-full">Create account</Button>

      <div className="text-center text-sm">
        <span className="text-gray-400">Already have an account? </span>
        <Link href="/login" className="font-medium text-blue-500 hover:text-blue-400">
          Sign in
        </Link>
      </div>
    </form>
  )
}

