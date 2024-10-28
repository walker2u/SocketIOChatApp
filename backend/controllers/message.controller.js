import Message from "../models/message.model.js";
import Conversation from "../models/conversation.model.js"

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, receiverId]
            }
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            });
        }
        const newMessage = await Message.create({
            senderId,
            receiverId,
            message
        });
        await conversation.messages.push(newMessage._id);
        await conversation.save();
        res.status(200).json({ message: "Message sent successfully", newMessage, conversation });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
    }
}

export const getMessages = async (req, res) => {
    try {
        const { id: userToChatWith } = req.params;
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, userToChatWith]
            }
        }).populate("messages");

        res.status(200).json(conversation.messages);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
    }
}