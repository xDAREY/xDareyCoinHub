import { Shield, Lock, DollarSign, UserCheck } from 'lucide-react'

const features = [
  {
    title: 'Secure Asset Storage',
    description: 'Your assets are protected by our military-grade encryption and storage systems, so you can rest assured that they are always safe.',
    icon: Shield,
  },
  {
    title: 'Trusted platform',
    description: 'We have a layered security approach that includes prevention, detection, and response measures, so we can protect our systems from all types of cyber attacks.',
    icon: Lock,
  },
  {
    title: 'Insured Assets',
    description: 'Invest with confidence. Your assets are insured against fraud, theft, and other unforeseen circumstances.',
    icon: DollarSign,
  },
  {
    title: 'Account Security',
    description: 'We protect your account by implementing the highest security standards and security measures to keep your account safe from unauthorized access.',
    icon: UserCheck,
  },
]

export default function Features() {
  return (
    <section className="py-16 bg-[#111111]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Your most trusted Brokerage platform</h2>
        <p className="text-xl mb-12 text-center">Here are a few reasons why you should choose xDareyCoinHub</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#1A1A1A] p-6 rounded-lg">
              <feature.icon className="w-12 h-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

