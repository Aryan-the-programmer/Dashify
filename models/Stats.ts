import mongoose from "mongoose"
import {Schema} from "mongoose"
const statsSchema = new Schema({
    title : {
        type: String,
        required: true,
    },
    value : {
        type : String,
        required : true
    },
    change : {
        type : String,
        required : true
    },
    description : {
        type : String,
        default : "from last month"
    },
    icon : {
        type : String,
        required : true
    }
})


export const Stats = mongoose.models.Stat || mongoose.model("Stat", statsSchema)
