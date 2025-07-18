import jwt from "jsonwebtoken"

export const generateToken = (userId, res) => {

    const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
        expiresIn: "7d"
    });

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,    //MS
        httpOnly: true,                     // Prevents XSS attracts cross-site scripting attacks
        sameSite: "strict",                 //CSRF attacks crosss-site request forgery attacks
        secure: process.env.NODE_ENV !== "development"
    });

    return token;

}