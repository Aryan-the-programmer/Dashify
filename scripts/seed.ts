import mongoose from "mongoose"
import connectDb from "../lib/db"
import { Stats } from "../models/Stats"
import { Revenue } from "../models/Revenue"
import { Traffic } from "../models/Traffic"
import { Transaction } from "../models/Transaction"
import { Campaign } from "../models/Campaign"
// fake data
const stats = [
    {
    title: "Total Revenue",
    value: "$22,3240.0",
    change: "02.0%",
    description: "from last month",
    icon: "dollar",
    },
    {
    title: "Total Users",
    value: "3,842",
    change: "06.0%",
    description: "from last month",
    icon: "users" ,
    },
    {
    title: "Active Campaigns",
    value: "0",
    change: "13%",
    description: "from last month",
    icon: "megaphone" ,
    },
    {
    title: "Conversion Rate",
    value: ".0%",
    change: "03%",
    description: "from last month",
    icon: "trending-down" ,
    },
]
const revenues = [
  { month: "Dec", revenue: 1200, target: 35000 },
  { month: "Jan", revenue: 20000, target: 37000 },
  { month: "Feb", revenue: 34000, target: 40000 },
  { month: "Mar", revenue: 39000, target: 42000 },
  { month: "Apr", revenue: 45000, target: 43000 },
  { month: "May", revenue: 55290, target: 46000 },
];
const transactions = [
  { client: "Acme Corp",   amount: 1200, status: "Paid",    date: new Date("2025-05-12") },
  { client: "Nova Inc",    amount: 890,  status: "Pending", date: new Date("2025-05-10") },
  { client: "BlueWave",    amount: 2400, status: "Paid",    date: new Date("2025-05-08") },
  { client: "Orion Labs",  amount: 660,  status: "Failed",  date: new Date("2025-05-06") },
  { client: "Jon Doe",  amount: 6650,  status: "Paid",  date: new Date("2025-05-06") },
  { client: "Spark Media", amount: 1750, status: "Paid",    date: new Date("2025-05-03") },
];

const campaigns = [
  {
    name: "Summer Sale 2024",
    progress: 15,
    budget: "$12,000",
    spent: "$9,000",
  },
  {
    name: "Product Launch",
    progress: 35,
    budget: "$8,500",
    spent: "$3,825",
  },
  {
    name: "Brand Awareness",
    progress: 90,
    budget: "$5,000",
    spent: "$4,500",
  },
  {
    name: "Holiday Special",
    progress: 80,
    budget: "$15,000",
    spent: "$3,000",
  },
]

const traffic = [
  { name: "Organic", value: 10, },
  { name: "Paid Ads", value: 25,  },
  { name: "Social", value: 20, },
  { name: "Direct", value: 15, },
]

async function seed(){

  console.log("Starting seeding process...")
  await connectDb()

  await Stats.deleteMany({})
  await Revenue.deleteMany({})
  await Transaction.deleteMany({})
  await Traffic.deleteMany({})
  await Campaign.deleteMany({})

  await Stats.insertMany(stats)
  await Revenue.insertMany(revenues)
  await Transaction.insertMany(transactions)
  await Traffic.insertMany(traffic)
  await Campaign.insertMany(campaigns)

  console.log("Seeding completed successfully!")
  mongoose.connection.close()
}
seed()