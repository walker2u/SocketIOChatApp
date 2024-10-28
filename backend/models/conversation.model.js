import mongoose from "mongoose";

const conversation = new mongoose.Schema({
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: []
    }]
}, { timestamps: true });

export default mongoose.model("Conversation", conversation)