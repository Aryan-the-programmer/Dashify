"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"


export function RevenueChart() {
  const [data,setData] = useState([])

  useEffect( () => {
    async function fetchRevenueData() {

      const response = await fetch("/api/revenue-data")
      const result= await response.json()
      setData(result.data)
      // console.log("Fetched revenue data in component:", result.data)
    }
    fetchRevenueData()
      
  },[])



  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Revenue vs Target</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full rounded-2xl    p-4 shadow-sm">

          {/* Responsive Height */}
          <div className="h-[300px] w-full sm:h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                {/* Grid */}
                <CartesianGrid stroke="#292E50" />

                {/* Bottom Text */}
                <XAxis
                  dataKey="month"
                  stroke="#6b7280"
                />

                {/* Left Side Numbers */}
                <YAxis stroke="#6b7280" />

                {/* Hover Box */}
                <Tooltip contentStyle={{
                  backgroundColor: "#111827",
                  border: "1px solid #374151",
                  borderRadius: "12px",
                  color: "#ffffff",
                }} />

                {/* Top Labels */}
                <Legend />

                {/* First Line */}
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#2563eb"
                  strokeWidth={3}
                />

                {/* Second Line */}
                <Line
                  type="monotone"
                  dataKey="target"
                  stroke="#16a34a"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>

    </Card>
  )
}


//  previous code : 
// <Card className="border-border">
//   <CardHeader>
//     <CardTitle className="text-foreground">Revenue vs Target</CardTitle>
//   </CardHeader>
//   <CardContent>
//     <div className="h-80">
//       <ResponsiveContainer width="100%" height="100%">
//         <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//           <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
//           <XAxis
//             dataKey="month"
//             stroke="hsl(var(--muted-foreground))"
//             fontSize={12}
//             tickLine={false}
//             axisLine={false}
//           />
//           <YAxis
//             stroke="hsl(var(--muted-foreground))"
//             fontSize={12}
//             tickLine={false}
//             axisLine={false}
//             tickFormatter={(value) => `$${value / 1000}k`}
//           />
//           <Tooltip
//             contentStyle={{
//               backgroundColor: "hsl(var(--card))",
//               border: "1px solid hsl(var(--border))",
//               borderRadius: "8px",
//               color: "hsl(var(--foreground))",
//             }}
//             labelStyle={{ color: "hsl(var(--foreground))" }}
//             formatter={(value: number) => [`$${value.toLocaleString()}`, ""]}
//           />
//           <Legend />
//           <Line
//             type="monotone"
//             dataKey="revenue"
//             name="Revenue"
//             stroke="hsl(var(--primary))"
//             strokeWidth={2}
//             dot={{ fill: "hsl(var(--primary))", strokeWidth: 2 }}
//             activeDot={{ r: 6, fill: "hsl(var(--primary))" }}
//           />
//           <Line
//             type="monotone"
//             dataKey="target"
//             name="Target"
//             stroke="hsl(var(--accent))"
//             strokeWidth={2}
//             strokeDasharray="5 5"
//             dot={{ fill: "hsl(var(--accent))", strokeWidth: 2 }}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   </CardContent>
// </Card>