import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import connectDb from "@/lib/db"
import { Campaign } from "@/models/Campaign"

// const campaigns = [
//   {
//     name: "Summer Sale 2024",
//     progress: 75,
//     budget: "$12,000",
//     spent: "$9,000",
//   },
//   {
//     name: "Product Launch",
//     progress: 45,
//     budget: "$8,500",
//     spent: "$3,825",
//   },
//   {
//     name: "Brand Awareness",
//     progress: 90,
//     budget: "$5,000",
//     spent: "$4,500",
//   },
//   {
//     name: "Holiday Special",
//     progress: 20,
//     budget: "$15,000",
//     spent: "$3,000",
//   },
// ]

export async function CampaignsProgress() {

  let campaigns = []
  try {
    await connectDb()
    campaigns = await Campaign.find()
    // console.log("Fetched campaigns from DB:", campaigns)

  } catch (err) {
    console.error("Error fetching campaign data:")
  }

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Campaign Progress</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {campaigns.map((campaign) => {
          campaign.progress = ((Number(campaign.spent) / Number(campaign.budget)) * 100).toFixed(2)
          campaign.spent = Number(campaign.spent).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
          })
          campaign.budget = Number(campaign.budget).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
          })
          // console.log(`Calculated progress for ${campaign.name}: ${campaign.progress}%`)

          return (
            <div key={campaign.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">
                  {campaign.name}
                </span>
                <span className="text-sm text-muted-foreground">
                  {campaign.progress}%
                </span>
              </div>
              <Progress value={campaign.progress} className="h-2" />
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Spent: {campaign.spent}</span>
                <span>Budget: {campaign.budget}</span>
              </div>
            </div>
          )
        }
        )}
      </CardContent>
    </Card>
  )
}
