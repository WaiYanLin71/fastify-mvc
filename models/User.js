import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, max: 20 }
}, { timestamps: true })

const  User = mongoose.model('user', UserSchema);

export default User