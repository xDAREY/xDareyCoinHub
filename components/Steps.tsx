import { UserPlus, TrendingUp, DollarSign } from 'lucide-react'

const steps = [
  {
    title: 'Create Account',
    description: 'Your assets are protected by our military-grade encryption and storage systems, so you can rest assured that they are always safe.',
    icon: UserPlus,
  },
  {
    title: 'Invest',
    description: 'We have a layered security approach that includes prevention, detection, and response measures, so we can protect our systems from all types of cyber attacks.',
    icon: TrendingUp,
  },
  {
    title: 'Start Earning',
    description: 'We automatically trade crypto, forex and stocks with up to 100x leverage for you.',
    icon: DollarSign,
  },
]

export default function Steps() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">We make crypto trading easy</h2>
        <p className="text-xl mb-12 text-center">Join xDareyCoinHub and begin trading in just 3 easy steps.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <step.icon className="w-16 h-16 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

