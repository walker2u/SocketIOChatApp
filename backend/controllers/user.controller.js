import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
    try {
        const loggedUser = req.user._id;
        const filteredUsers = await User.find({ _id: { $ne: loggedUser } }).select("-password");
        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
    }
}