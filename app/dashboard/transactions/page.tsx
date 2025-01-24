'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

// Mock data for transactions
const transactions = [
  { date: '9th, January 2025', type: 'Deposit', amount: '$100.00', time: '12:59 pm', status: 'Pending' },
  { date: '8th, January 2025', type: 'Withdrawal', amount: '$50.00', time: '10:30 am', status: 'Completed' },
  { date: '7th, January 2025', type: 'Deposit', amount: '$200.00', time: '3:45 pm', status: 'Completed' },
  { date: '6th, January 2025', type: 'Withdrawal', amount: '$75.00', time: '9:15 am', status: 'Completed' },
  { date: '5th, January 2025', type: 'Deposit', amount: '$150.00', time: '2:00 pm', status: 'Completed' },
]

export default function TransactionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Transactions</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction, index) => (
                <TableRow key={index}>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>{transaction.amount}</TableCell>
                  <TableCell>{transaction.time}</TableCell>
                  <TableCell>
                    <Badge variant={transaction.status === 'Completed' ? 'default' : 'secondary'}>
                      {transaction.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

