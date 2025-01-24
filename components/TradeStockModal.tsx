'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface TradeStockModalProps {
  stock: any
  onClose: () => void
}

export function TradeStockModal({ stock, onClose }: TradeStockModalProps) {
  const [units, setUnits] = useState('0')

  const handleSubmit = () => {
    // Handle trade submission here
    console.log('Trade:', { stock: stock.name, units })
    onClose()
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{stock.name}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center justify-between">
            <span>Price:</span>
            <span>${stock.minimum ? stock.minimum.toLocaleString() : '-'}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Profit:</span>
            <span>{stock.profit}%</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Cycle:</span>
            <span>{stock.cycle}</span>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="units">How Many Units?</Label>
            <Input
              id="units"
              type="number"
              value={units}
              onChange={(e) => setUnits(e.target.value)}
              placeholder="0"
            />
          </div>
          <div className="flex items-center justify-between">
            <span>Amount:</span>
            <span>${(parseInt(units) * (stock.minimum || 0)).toLocaleString()}</span>
          </div>
          <Button onClick={handleSubmit}>Buy</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

