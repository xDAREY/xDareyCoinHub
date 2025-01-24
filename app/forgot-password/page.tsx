import ForgotPasswordForm from '@/components/ForgotPasswordForm'
import { BackButton } from '@/components/BackButton'

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <BackButton />
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-white">Forgotten your Password?</h2>
          <p className="mt-2 text-sm text-gray-400">Please Enter Your Email.</p>
        </div>
        <ForgotPasswordForm />
      </div>
    </div>
  )
}

