import { Revenue } from "@/models/Revenue"
import connectDb from "@/lib/db"

export async function GET(req : Request) {
    try{
        await connectDb()
        const data = await Revenue.find()
        // console.log("your revenue data is : ",data)
        return Response.json({data},{status : 200})

    }catch(err){
        console.error("Error fetching revenue data:")
        return Response.json({error: "Failed to fetch revenue data"},{status : 500})
    }

}