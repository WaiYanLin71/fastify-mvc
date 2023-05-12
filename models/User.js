import mongoose, { Schema } from "mongoose";
import { hash } from "../controller/bcrypt.js";

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, max: 20 }
}, { timestamps: true })

const  User = mongoose.model('user', UserSchema);

UserSchema.pre('save', function(next){
    this.password = hash(this.password)
    next()
})

export default User