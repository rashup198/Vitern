const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../models/User');

//auth
exports.auth = async (req, res, next) => {
    try {
        //extract token from header
        const token = req.cookies.token || req.body.token || req.header("Authorisation").replace("Bearer ", "")

        //if no token found
        if(!token){
            return res.status(401).json({
                success: false,
                message: "No token found"
            })
        }

        //verify token
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log("decode", decode);
            req.user=decode;

        } catch (error) {
            console.log("error", error);
            return res.status(401).json({
                success: false,
                message: "Invalid token"
            })
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "something went wring. Please try again later"
        })
    }
}

// isstudent

exports.isUser = async (req, res, next) => {
    try {
        //get
        if(req.user.accountType !== "user"){
            return res.status(401).json({
                success: false,
                message: "You are not authorized to access this route this is for user only"
            })
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User role is not verified. Please try again later"
        })
    }
}

//isInstructor

exports.isCreator = async (req, res, next) => {
    try {
        //get
        if(req.user.accountType !== "Creator"){
            return res.status(401).json({
                success: false,
                message: "You are not authorized to access Creator route"
            })
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User role is not verified. Please try again later"
        })
    }
}

// admin

exports.isAdmin = async (req, res, next) => {
    try {
        //get
        if(req.user.accountType !== "Admin"){
            return res.status(401).json({
                success: false,
                message: "You are not authorized to access Admin route"
            })
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User role is not verified. Please try again later"
        })
    }
}