import mongoose, {Schema} from "mongoose"

const trafficSchema = new Schema({
    name: { type: String, required: true },
    value: { type: Number, required: true },
})

export const Traffic = mongoose.models.Traffic || mongoose.model("Traffic", trafficSchema)