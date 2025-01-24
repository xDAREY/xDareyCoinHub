'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

// Mock data for trade history
const tradeHistory = [
  { id: 1, date: '2025-01-09', time: '14:30', type: 'Crypto', asset: 'Bitcoin', direction: 'Buy', amount: '0.5 BTC', price: '$45,000', total: '$22,500' },
  { id: 2, date: '2025-01-08', time: '10:15', type: 'Forex', asset: 'EUR/USD', direction: 'Sell', amount: '10,000 EUR', price: '1.2000', total: '$12,000' },
  { id: 3, date: '2025-01-07', time: '16:45', type: 'Stock', asset: 'AAPL', direction: 'Buy', amount: '50 shares', price: '$150', total: '$7,500' },
  { id: 4, date: '2025-01-06', time: '09:30', type: 'Crypto', asset: 'Ethereum', direction: 'Sell', amount: '10 ETH', price: '$3,000', total: '$30,000' },
  { id: 5, date: '2025-01-05', time: '11:00', type: 'Forex', asset: 'GBP/JPY', direction: 'Buy', amount: '5,000 GBP', price: '150.00', total: '¥750,000' },
]

export default function TradesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Trade History</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Trades</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Asset</TableHead>
                <TableHead>Direction</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tradeHistory.map((trade) => (
                <TableRow key={trade.id}>
                  <TableCell>{trade.date}</TableCell>
                  <TableCell>{trade.time}</TableCell>
                  <TableCell>{trade.type}</TableCell>
                  <TableCell>{trade.asset}</TableCell>
                  <TableCell>
                    <Badge variant={trade.direction === 'Buy' ? 'default' : 'secondary'}>
                      {trade.direction}
                    </Badge>
                  </TableCell>
                  <TableCell>{trade.amount}</TableCell>
                  <TableCell>{trade.price}</TableCell>
                  <TableCell>{trade.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

