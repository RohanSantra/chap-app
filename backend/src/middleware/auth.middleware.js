import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectedRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized - No token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        if (!decoded) {
            return res.status(401).json({ message: "Unauthorized - Invalid Token" });
        }

        const user =await User.findOne({ _id: decoded.userId }, { password: false });
        if (!user) {
            return res.status(401).json({ message: "No user found" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.log("Error in Protected middleware :", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}