'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { DepositModal } from '@/components/DepositModal';
import { WithdrawModal } from '@/components/WithdrawModal';
import { TradeModal } from '@/components/TradeModal';

export default function ForexPage() {
  const forexSymbols = [
    { name: 'EUR/USD', symbol: 'FX:EURUSD' },
    { name: 'GBP/USD', symbol: 'FX:GBPUSD' },
    { name: 'AUD/USD', symbol: 'FX:AUDUSD' },
    { name: 'USD/JPY', symbol: 'FX:USDJPY' },
  ];

  const [selectedPair, setSelectedPair] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Forex</h1>
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
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Forex Market</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Pair</TableHead>
                <TableHead>Live Chart</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {forexSymbols.map((pair) => (
                <TableRow key={pair.name}>
                  <TableCell>{pair.name}</TableCell>
                  <TableCell>
                    {/* TradingView widget for live chart */}
                    <div
                      className="tradingview-widget-container"
                      style={{ height: '100px', width: '200px' }}
                    >
                      <iframe
                        src={`https://s.tradingview.com/embed-widget/mini-symbol-overview/?symbol=${pair.symbol}&locale=en&theme=dark`}
                        width="100%"
                        height="100"
                        frameBorder="0"
                       
                        scrolling="no"
                      ></iframe>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedPair(pair.name)}
                    >
                      Trade
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {selectedPair && (
        <TradeModal crypto={selectedPair} onClose={() => setSelectedPair(null)} />
      )}
    </div>
  );
}

