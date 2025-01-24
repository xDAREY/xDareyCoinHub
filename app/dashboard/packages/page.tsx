'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { DepositModal } from '@/components/DepositModal'

const packages = [
  {
    name: 'Starter Package',
    minDeposit: 100,
    maxDeposit: 1000,
    features: [
      'Access to the trading platform and basic features',
      'ROI: 20%',
      '24/7 customer support'
    ]
  },
  {
    name: 'Bronze Package',
    minDeposit: 1000,
    maxDeposit: 5000,
    features: [
      'All of the benefits of the Starter tier, plus:',
      'ROI: 35%',
      'Dedicated account manager'
    ]
  },
  {
    name: 'Silver Package',
    minDeposit: 5000,
    maxDeposit: 10000,
    features: [
      'All of the benefits of the Bronze tier, plus:',
      'ROI: 40%',
      'Weekly market analysis webinar'
    ]
  },
  {
    name: 'Gold Package',
    minDeposit: 10000,
    maxDeposit: 50000,
    features: [
      'All of the benefits of the Silver tier, plus:',
      'ROI: 50%',
      'Monthly one-on-one coaching session with a trading expert'
    ]
  },
  {
    name: 'Platinum Package',
    minDeposit: 50000,
    maxDeposit: 100000,
    features: [
      'All of the benefits of the Gold tier, plus:',
      'ROI: 60%',
      'Access to a dedicated trading concierge'
    ]
  },
  {
    name: 'Diamond Package',
    minDeposit: 100000,
    maxDeposit: Infinity,
    features: [
      'All of the benefits of the Platinum tier, plus:',
      'ROI: 70%',
      'Access to a private trading room',
      'Yearly VIP retreat with other Diamond members'
    ]
  }
]

export default function PackagesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Packages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{pkg.name}</CardTitle>
              <CardDescription>
                Minimum deposit: ${pkg.minDeposit.toLocaleString()}<br />
                Maximum deposit: {pkg.maxDeposit === Infinity ? 'over $100,000' : `$${pkg.maxDeposit.toLocaleString()}`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <div className="mt-4">
                <DepositModal />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

