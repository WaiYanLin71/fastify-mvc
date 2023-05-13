import mongoose from 'mongoose';

const connectDatabase = async (cb) => {
    const uri = process.env.APP_ENV === 'local' ? process.env.LOCAL_DATABASE : provide.env.SERVER_DATABASE;
    try {
        await mongoose.connect(uri)
        cb(false)
    } catch (error) {
        cb(error)
    }

}

export default connectDatabase