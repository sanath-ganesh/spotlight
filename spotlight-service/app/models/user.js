import mongoose from "mongoose";

//Mongoose Schema for User
const Schema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true ,unique:true},
    userType: { type: String, default: "User" },
    phone: {
        countryCode: { type: String, required: true },
        phone: { type: Number, required: true }
    },
    location: { type: String, required: true },
    username: { type: String, required: true,unique:true },
    password: { type: String, required: true },
    profilePic: { type: String, required: false, default: "" }
});

const model = mongoose.model("user",Schema);

export default model;