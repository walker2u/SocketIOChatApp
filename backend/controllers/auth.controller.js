import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords don't match" });
        }

        const user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({ error: "Username already exists" });
        }

        //Hash Password
        const hashPassword = bcryptjs.hashSync(password, 10);
        console.log(hashPassword);

        // Default Profile Pic
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password: hashPassword,
            gender,
            profilePic: gender === 'male' ? boyProfilePic : girlProfilePic
        });

        if (newUser) {
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic,

            });
        }
        else {
            return res.status(500).json({ error: "Invalid Data!" });
        }

    } catch (error) {
        console.log('Error', error);
        res.status(500).json({ error: "Server Error" });
    }
};

export const login = (req, res) => {
    res.send('Sign In!')
};

export const logout = (req, res) => {
    res.send('Sign Out!')
};