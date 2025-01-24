import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bitcoin, DollarSign, TrendingUp, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DepositModal } from '@/components/DepositModal';
import { WithdrawModal } from '@/components/WithdrawModal';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Welcome, </h1>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/dashboard/settings">
              <User className="h-5 w-5" />
              <span className="sr-only">Profile</span>
            </Link>
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <div>
              <div className="text-sm font-medium text-gray-500 mb-1">Total wallet balance:</div>
              <div className="text-3xl font-bold">$0.00</div>
            </div>
            <div className="flex space-x-4">
              <DepositModal />
              <WithdrawModal />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {[
          { name: 'Cryptocurrency', icon: Bitcoin },
          { name: 'Forex', icon: DollarSign },
          { name: 'Stock', icon: TrendingUp },
        ].map((category) => (
          <Card key={category.name}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <category.icon className="h-6 w-6" />
                <span>{category.name}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Total balance</span>
                  <span className="font-bold">$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Deposit</span>
                  <span className="font-bold">$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Profit</span>
                  <span className="font-bold">$0.00</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Bitcoin Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <iframe
              src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?symbol=BITSTAMP:BTCUSD&locale=en&theme=dark"
              width="100%"
              height="400"
              frameBorder="0"
              // allowtransparency="true"
              scrolling="no"
            ></iframe>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>AAPL Stock Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <iframe
              src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?symbol=NASDAQ:AAPL&locale=en&theme=dark"
              width="100%"
              height="400"
              frameBorder="0"
              // allowtransparency="true"
              scrolling="no"
            ></iframe>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

