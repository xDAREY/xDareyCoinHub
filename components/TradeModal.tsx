'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface TradeModalProps {
  crypto: string
  onClose: () => void
}

export function TradeModal({ crypto, onClose }: TradeModalProps) {
  const [amount, setAmount] = useState('')
  const [runtime, setRuntime] = useState('0')

  const handleSubmit = () => {
    // Handle trade submission here
    console.log('Trade:', { crypto, amount, runtime })
    onClose()
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Trade {crypto}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center justify-between">
            <span>ROI:</span>
            <span>9%</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Min. Investment:</span>
            <span>$100</span>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter Amount"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="runtime">Runtime</Label>
            <Input
              id="runtime"
              type="number"
              value={runtime}
              onChange={(e) => setRuntime(e.target.value)}
              placeholder="0 days"
            />
          </div>
          <Button onClick={handleSubmit}>Trade</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

