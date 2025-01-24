'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  {
    question: 'How do I create an account on xDareyCoinHub?',
    answer: 'To create an account on xDareyCoinHub, visit our website and click on the "Register" button. Follow the prompts to provide your personal information and complete the verification process.',
  },
  {
    question: 'How can I contact your customer support?',
    answer: 'You can contact our customer support team through various channels. We offer 24/7 live chat support on our website, email support at support@xDareyCoinHub.com, and phone support at +1 (800) 123-4567.',
  },
  {
    question: 'Is xDareyCoinHub a safe crypto investment platform?',
    answer: 'Yes, xDareyCoinHub is a safe crypto investment platform. We employ state-of-the-art security measures, including multi-factor authentication, cold storage for assets, and regular security audits to ensure the safety of your investments.',
  },
  {
    question: 'How do I Buy Bitcoin?',
    answer: 'To buy Bitcoin on xDareyCoinHub, log into your account, navigate to the "Buy/Sell" section, select Bitcoin, enter the amount you wish to purchase, and choose your payment method. Review the transaction details and confirm your purchase.',
  },
  {
    question: 'How do I deposit/withdraw cryptocurrency?',
    answer: 'To deposit cryptocurrency, go to your xDareyCoinHub wallet, select the currency you want to deposit, and use the provided wallet address. For withdrawals, navigate to the withdrawal section, select the cryptocurrency, enter the amount and destination address, and confirm the transaction.',
  },
]

export default function FAQ() {
  return (
    <section className="py-16 bg-[#111111]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Frequently asked questions?</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

