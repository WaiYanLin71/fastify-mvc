import mongoose from 'mongoose';

const connectDatabase = async (cb) => {
    const uri = process.env.APP_ENV === 'local' ? process.env.LOCAL_DATABASE : process.env.SERVER_DATABASE;
    try {
        await mongoose.connect('mongodb+srv://wai-yan-lin:bEIWbQ7EWqvQUnNB@cluster0.8tvlb2e.mongodb.net/?retryWrites=true&w=majority')
        cb(false)
    } catch (error) {
        cb(error)
    }

}

export default connectDatabase