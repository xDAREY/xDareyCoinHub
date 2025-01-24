import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    name: 'John Smith',
    location: 'New York, USA',
    content: "I'm a beginner trader and I was looking for a way to automate my trading. I found xDareyCoinHub AI Trading and I'm really happy with the results. I've been able to grow my account by 10% in the past 6 months.",
  },
  {
    name: 'Sandra Lee',
    location: 'Singapore',
    content: "I'm a female trader and I was looking for a company that understands the challenges that women face in the financial markets. I've been very impressed with the support from xDareyCoinHub. They have a team of experienced female traders who are always available to answer my questions.",
  },
  {
    name: 'Alejandro Perez',
    location: 'Argentina',
    content: "I'm a beginner trader and I was looking for a way to get started without risking too much money. I found xDareyCoinHub to be very easy to use and I've been able to make some profits. I'm still learning but I'm confident that I can use this platform to achieve my trading goals.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">What people are saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-[#1A1A1A] border-none">
              <CardContent className="p-6">
                <p className="mb-4">{testimonial.content}</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-400">{testimonial.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

