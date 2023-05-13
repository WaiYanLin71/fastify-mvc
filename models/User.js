import mongoose, { Schema } from "mongoose";
import { hash } from "../helper/bcrypt.js";

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, max: 20 }
}, { timestamps: true })

const  User = mongoose.model('user', UserSchema);

UserSchema.pre('save', async function(next){
    this.password = await hash(this.password)
    next()
})

export default User