'use client';

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Copy } from 'lucide-react'
import { toast } from '@/components/ui/use-toast'

const cryptoAddresses = [
  { name: 'BTC', address: 'bc1qj6wfphulvuexps3s3mv0wysfw40ng5gmkymyrg' },
  { name: 'ETH', address: '0x59e4Ad35E1AF028282299b15fb1C5d0190BB1534' },
  { name: 'DOGE', address: 'DFZfKD5UztJQ9wkKFCg1otS22Hp14bg5Gm' },
  { name: 'USDT(TRC20)', address: 'TSQfdRch8w78zfgnacwzYSzEFwUSUW179Y' },
]

export function DepositModal() {
  const [amount, setAmount] = useState('')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0])
    }
  }

  const handleSubmit = () => {
    // Handle deposit submission here
    console.log('Deposit amount:', amount)
    console.log('Proof of payment:', selectedFile)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Address copied",
        description: "The wallet address has been copied to your clipboard.",
      })
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-green-500 hover:bg-green-600 text-white">Deposit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Deposit</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
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
          <Tabs defaultValue="BTC">
            <TabsList>
              {cryptoAddresses.map((crypto) => (
                <TabsTrigger key={crypto.name} value={crypto.name}>
                  {crypto.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {cryptoAddresses.map((crypto) => (
              <TabsContent key={crypto.name} value={crypto.name}>
                <div className="flex items-center justify-between">
                  <Input value={crypto.address} readOnly />
                  <Button variant="outline" size="icon" onClick={() => copyToClipboard(crypto.address)}>
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
          <div className="grid gap-2">
            <Label htmlFor="proof">Proof of Payment</Label>
            <Input
              id="proof"
              type="file"
              onChange={handleFileUpload}
            />
          </div>
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}