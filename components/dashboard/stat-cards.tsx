import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Users, Megaphone, TrendingUp, TrendingDown } from "lucide-react"
import { cn } from "@/lib/utils"
import connectDb from "@/lib/db"
import { Stats } from "@/models/Stats"


export async function StatCards() {

  const icons = {
    "dollar": DollarSign,
    "users": Users,
    "megaphone": Megaphone,
    "trending-down": TrendingDown,
  }

  // const stats = [
  //   {
  //   title: "Total Revenue",
  //   value: "NA",
  //   change: "NA",
  //   trend: "up" ,
  //   description: "from last month",
  //   icon: "dollar-sign",
  //   },
  //   {
  //   title: "Total Users",
  //   value: "NA",
  //   change: "NA",
  //   trend: "up",
  //   description: "from last month",
  //   icon: "users"  ,
  //   },
  //   {
  //   title: "Active Campaigns",
  //   value: "NA",
  //   change: "NA",
  //   trend: "up" ,
  //   description: "from last month",
  //   icon: "mega-phone" ,
  //   },
  //   {
  //   title: "Conversion Rate",
  //   value: "NA",
  //   change: "NA",
  //   trend: "down" as const,
  //   description: "from last month",
  //   icon : "treding-down",
  //   },
  // ]


  await connectDb()
  const stats  = await Stats.find()

  // console.log("Fetched stats from DB:", stats)



  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
          const Icon = icons[stat.icon] // Default icon
        return (
        <Card key={stat.title} className="border-border">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div
                className={cn(
                  "flex items-center gap-1 text-xs font-medium",
                  stat.trend === "up" ? "text-success" : "text-destructive"
                )}
              >
                {stat.trend === "up" ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                {stat.change}
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-foreground">{stat.value}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{stat.title}</p>
            </div>
          </CardContent>
        </Card>
      )})}
    </div>
  )
}
