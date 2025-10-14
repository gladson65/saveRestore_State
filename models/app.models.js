import mongoose from "mongoose";

const appSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true,
        unique: true,
    },
    state: {
        type: Object,
        required: true
    },
    lastUpdate: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true })

const appModel = mongoose.model("appStates", appSchema);
export default appModel;