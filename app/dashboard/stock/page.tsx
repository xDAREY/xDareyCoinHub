'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DepositModal } from '@/components/DepositModal';
import { WithdrawModal } from '@/components/WithdrawModal';
import { TradeStockModal } from '@/components/TradeStockModal';

export default function StocksPage() {
  const [selectedStock, setSelectedStock] = useState<any | null>(null);

  const stocksList = [
    'AAPL', // Apple Inc.
    'TSLA', // Tesla, Inc.
    'AMZN', // Amazon.com, Inc.
    'MSFT', // Microsoft Corporation
    'GOOGL', // Alphabet Inc. (Google)
    'META', // Meta Platforms, Inc. (Facebook)
    'NVDA', // NVIDIA Corporation
    'NFLX', // Netflix, Inc.
    'AMD', // Advanced Micro Devices, Inc.
    'INTC', // Intel Corporation
    'BABA', // Alibaba Group Holding Limited
    'ORCL', // Oracle Corporation
    'DIS', // The Walt Disney Company
    'UBER', // Uber Technologies, Inc.
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Stocks</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Stocks Market</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Stock Name</TableHead>
                <TableHead>Live Chart</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stocksList.map((stock) => (
                <TableRow key={stock}>
                  <TableCell>{stock}</TableCell>
                  <TableCell>
                    {/* TradingView widget for live stock chart */}
                    <div
                      className="tradingview-widget-container"
                      style={{ width: '100%', height: '150px' }}
                    >
                      <iframe
                        src={`https://s.tradingview.com/embed-widget/mini-symbol-overview/?symbol=NASDAQ:${stock}&locale=en&theme=dark`}
                        width="100%"
                        height="150"
                        frameBorder="0"
                        scrolling="no"
                      ></iframe>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedStock(stock)}
                    >
                      Buy
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {selectedStock && (
        <TradeStockModal stock={selectedStock} onClose={() => setSelectedStock(null)} />
      )}
    </div>
  );
}

