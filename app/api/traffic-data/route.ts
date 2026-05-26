import connectDb from "@/lib/db";
import { Traffic } from "@/models/Traffic";

export async function GET(req : Request) {
    try {
        await connectDb()
        const data = await Traffic.find()
        // console.log("your traffic data is : ",data)
        return Response.json({data},{status : 200})

    } catch (error) {
        console.error("Error fetching traffic data:")
        return Response.json({error: "Failed to fetch traffic data"},{status : 500})
    }

}