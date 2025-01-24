import RegisterForm from '@/components/RegisterForm'
import { BackButton } from '@/components/BackButton'

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <BackButton />
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-white">Create your account</h2>
          <p className="mt-2 text-sm text-gray-400">Enter Your Details to enjoy automated trading.</p>
        </div>
        <RegisterForm />
      </div>
    </div>
  )
}

