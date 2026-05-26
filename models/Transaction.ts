import mongoose, {Schema} from "mongoose";

const transactionSchema = new Schema({
    client: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, required: true },
    date: { type: Date, required: true },
})

export const Transaction = mongoose.models.Transaction || mongoose.model("Transaction", transactionSchema)