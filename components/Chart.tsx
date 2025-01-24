'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { date: '1 Dec 2024', users: 600, revenue: 4500000 },
  { date: '13 Dec 2024', users: 750, revenue: 9000000 },
  { date: '21 Dec 2024', users: 900, revenue: 13500000 },
  { date: '8 Jan 2025', users: 1050, revenue: 18000000 },
]

export default function Chart() {
  return (
    <section className="py-16 bg-[#111111]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Growth Statistics</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="users" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-8 text-center">
          <p className="text-xl mb-2">Total Users: 1,094</p>
          <p className="text-xl mb-2">Total Revenue: £14,433,009</p>
          <p className="text-xl">Avg. Revenue/User: £13,192.88</p>
        </div>
      </div>
    </section>
  )
}

