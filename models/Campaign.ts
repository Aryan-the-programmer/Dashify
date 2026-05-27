import mongoose,{Schema} from "mongoose";

const campaignSchema = new Schema({
    name: { type: String, required: true },
    progress: { type: Number, required: false },
    budget: { type: Number, required: true },
    spent: { type: Number, required: true },
})

export const Campaign = mongoose.models.Campaign || mongoose.model("Campaign", campaignSchema)