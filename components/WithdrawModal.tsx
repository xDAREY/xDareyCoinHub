'use client';

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from '@/components/ui/use-toast'

const cryptoOptions = ['BTC', 'ETH(BEP 20)', 'DOGE', 'USDT']

export function WithdrawModal() {
  const [amount, setAmount] = useState('')
  const [selectedCrypto, setSelectedCrypto] = useState('')
  const [walletAddress, setWalletAddress] = useState('')

  const handleSubmit = () => {
    const totalBalance = 1000 // Replace with actual balance
    if (parseFloat(amount) > totalBalance) {
      toast({
        title: "Insufficient balance",
        description: "The entered amount exceeds your total wallet balance.",
        variant: "destructive",
      })
      return
    }
    // Handle withdrawal submission here
    console.log('Withdrawal amount:', amount)
    console.log('Selected crypto:', selectedCrypto)
    console.log('Wallet address:', walletAddress)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button className="bg-red-500 hover:bg-red-600 text-white">Withdraw</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Withdraw</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p className="text-sm text-gray-500">
            Please double-check the recipient's wallet address before withdrawing your funds.
          </p>
          <div className="grid gap-2">
            <Label htmlFor="amount">Enter Amount</Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="$0.00"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="crypto">Select Cryptocurrency</Label>
            <Select onValueChange={setSelectedCrypto}>
              <SelectTrigger id="crypto">
                <SelectValue placeholder="Select cryptocurrency" />
              </SelectTrigger>
              <SelectContent>
                {cryptoOptions.map((crypto) => (
                  <SelectItem key={crypto} value={crypto}>
                    {crypto}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="wallet">Wallet Address</Label>
            <Input
              id="wallet"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              placeholder="Paste wallet address..."
            />
          </div>
          <Button onClick={handleSubmit}>Process Withdrawal</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}