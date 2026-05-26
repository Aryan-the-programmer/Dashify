"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { useEffect, useState } from "react"


const cellColor = {
  "Organic": "#22C55E",
  "Paid Ads": "#F59E0B",
  "Social": "#3B82F6",
  "Direct": "#A855F7",
}

export function TrafficChart() {
  const [data,setData] = useState([])

  useEffect( () => {

    async function fetchTrafficData() {
      const response = await fetch("/api/traffic-data")
      const jsonResponse = await response.json()
      setData(jsonResponse.data)
    }
    fetchTrafficData()

  },[])


  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Traffic Sources</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={4}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index} `} fill={cellColor[entry.name]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#7C79FFCC",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  color: "#FFFFFF",
                }}
                formatter={(value: number) => [`${value}%`, "Share"]}
              />
              <Legend
                verticalAlign="bottom"
                height={36}
                formatter={(value) => (
                  <span style={{ color: "hsl(var(--foreground))" }}>{value}</span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}



// Previous code : 
    // <Card className="border-border">
    //   <CardHeader>
    //     <CardTitle className="text-foreground">Traffic Sources</CardTitle>
    //   </CardHeader>
    //   <CardContent>
    //     <div className="h-80">
    //       <ResponsiveContainer width="100%" height="100%">
    //         <PieChart>
    //           <Pie
    //             data={data}
    //             cx="50%"
    //             cy="50%"
    //             innerRadius={60}
    //             outerRadius={100}
    //             paddingAngle={4}
    //             dataKey="value"
    //             label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
    //             labelLine={false}
    //           >
    //             {data.map((entry, index) => (
    //               <Cell key={`cell-${index}`} fill={entry.color} />
    //             ))}
    //           </Pie>
    //           <Tooltip
    //             contentStyle={{
    //               backgroundColor: "hsl(var(--card))",
    //               border: "1px solid hsl(var(--border))",
    //               borderRadius: "8px",
    //               color: "hsl(var(--foreground))",
    //             }}
    //             formatter={(value: number) => [`${value}%`, "Share"]}
    //           />
    //           <Legend
    //             verticalAlign="bottom"
    //             height={36}
    //             formatter={(value) => (
    //               <span style={{ color: "hsl(var(--foreground))" }}>{value}</span>
    //             )}
    //           />
    //         </PieChart>
    //       </ResponsiveContainer>
    //     </div>
    //   </CardContent>
    // </Card>