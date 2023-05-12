import mongoose from 'mongoose';

const connectDatabase = async (cb) => {
    const uri = "mongodb+srv://wai-yan-lin:bEIWbQ7EWqvQUnNB@cluster0.8tvlb2e.mongodb.net/?retryWrites=true&w=majority";
    try {
        await mongoose.connect(uri)
        cb(false)
    } catch (error) {
        cb(error)
    }

}

export default connectDatabase