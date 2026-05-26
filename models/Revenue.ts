import mongoose,{Schema} from "mongoose";

const revenueSchema = new Schema({
    month: { type: String, required: true },
    revenue: { type: Number, required: true },
    target: { type: Number, required: true },
})

export const Revenue = mongoose.models.Revenue || mongoose.model("Revenue", revenueSchema)