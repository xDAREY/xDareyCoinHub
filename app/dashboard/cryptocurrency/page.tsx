'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { DepositModal } from '@/components/DepositModal'
import { WithdrawModal } from '@/components/WithdrawModal'
import { TradeModal } from '@/components/TradeModal'

export default function CryptocurrencyPage() {
  const [cryptoData, setCryptoData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [selectedCrypto, setSelectedCrypto] = useState<string | null>(null)

  // Fetch crypto data on component mount
  useEffect(() => {
    async function fetchCryptoData() {
      try {
        setLoading(true)
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
        const data = await response.json()
        setCryptoData(data)
        setLoading(false)
      } catch (err) {
        console.error('Failed to fetch crypto data:', err)
        setError(true)
        setLoading(false)
      }
    }

    fetchCryptoData()
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Cryptocurrency</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <div>
              <div className="text-sm font-medium text-gray-500 mb-1">Total balance:</div>
              <div className="text-3xl font-bold">$0.00</div>
            </div>
            <div className="flex space-x-4">
              <DepositModal />
              <WithdrawModal />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm font-medium text-gray-500">Deposit</div>
              <div className="text-lg font-semibold">$0.00</div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Profit</div>
              <div className="text-lg font-semibold">$0.00</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Cryptocurrency Market</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div>Loading data...</div>
          ) : error ? (
            <div className="text-red-500">Failed to load data. Please try again later.</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Crypto</TableHead>
                  <TableHead>Current Price</TableHead>
                  <TableHead>Price Change (24h)</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cryptoData.map((crypto) => (
                  <TableRow key={crypto.id}>
                    <TableCell>{crypto.name}</TableCell>
                    <TableCell>${crypto.current_price.toLocaleString()}</TableCell>
                    <TableCell
                      className={
                        crypto.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'
                      }
                    >
                      {crypto.price_change_percentage_24h.toFixed(2)}%
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedCrypto(crypto.name)}
                      >
                        Trade
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {selectedCrypto && (
        <TradeModal crypto={selectedCrypto} onClose={() => setSelectedCrypto(null)} />
      )}
    </div>
  )
}

