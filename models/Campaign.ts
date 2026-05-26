import mongoose,{Schema} from "mongoose";

const campaignSchema = new Schema({
    name: { type: String, required: true },
    progress: { type: Number, required: true },
    budget: { type: String, required: true },
    spent: { type: String, required: true },
})

export const Campaign = mongoose.models.Campaign || mongoose.model("Campaign", campaignSchema)