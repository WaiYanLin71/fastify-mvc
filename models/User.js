import mongoose, { Schema } from "mongoose";
import { hash } from "../helper/bcrypt.js";

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, max: 20 }
}, { timestamps: true })

const  User = mongoose.model('user', UserSchema);

UserSchema.pre('save', async function(next){
    UserSchema.password = await hash(UserSchema.password)
    next()
})

UserSchema.pre('findOneAndUpdate', async function (next) {
    if(UserSchema.password) this.password = await hash(UserSchema.password)
    else delete UserSchema.password
    next();
});

export default User