import jwt from "jsonwebtoken";
import User from '../models/user.model.js';

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) return res.status(401).json({ error: "Not Authorized!" });
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) return res.status(401).json({ error: "Not Authorized!!" });
        const user = await User.findById(decoded.id).select("-password");
        if (!user) return res.status(401).json({ error: "User Not Found!!" });
        req.user = user;
        next();
    } catch (error) {
        console.log("Protect Route Error: ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}