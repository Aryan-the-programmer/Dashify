import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Transaction } from "@/models/Transaction"
import connectDb from "@/lib/db"

// const transactions = [
//   {
//     client: "Acme Corp",
//     amount: "$2,450.00",
//     status: "Paid" as const,
//     date: "May 22, 2024",
//   },
//   {
//     client: "TechStart Inc",
//     amount: "$1,890.00",
//     status: "Pending" as const,
//     date: "May 21, 2024",
//   },
//   {
//     client: "Global Media",
//     amount: "$3,200.00",
//     status: "Paid" as const,
//     date: "May 20, 2024",
//   },
//   {
//     client: "Digital Wave",
//     amount: "$780.00",
//     status: "Failed" as const,
//     date: "May 19, 2024",
//   },
//   {
//     client: "Innovate Labs",
//     amount: "$4,100.00",
//     status: "Paid" as const,
//     date: "May 18, 2024",
//   },
// ]

const statusStyles = {
  Paid: "bg-success/10 text-success hover:bg-success/20",
  Pending: "bg-warning/10 text-warning hover:bg-warning/20",
  Failed: "bg-destructive/10 text-destructive hover:bg-destructive/20",
}

export async function TransactionsTable() {

  let transactions = []

  try {
    await connectDb()
    transactions = await Transaction.find().sort({ date: -1 }).limit(5)
    // console.log("Fetched transactions from DB:", transactions)
  } catch (error) {
    console.error("Error fetching transactions:")
  }

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="text-muted-foreground">Client</TableHead>
              <TableHead className="text-muted-foreground">Amount</TableHead>
              <TableHead className="text-muted-foreground">Status</TableHead>
              <TableHead className="text-right text-muted-foreground">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction, index) => (
              <TableRow key={index} className="border-border">
                <TableCell className="font-medium text-foreground">
                  {transaction.client}
                </TableCell>
                <TableCell className="text-foreground">{(transaction.amount).toLocaleString("en-US", { style: "currency", currency: "USD",maximumFractionDigits: 0, })}</TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={cn("font-medium", statusStyles[transaction.status])}
                  >
                    {transaction.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right text-muted-foreground">
                  {transaction.date.toDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
