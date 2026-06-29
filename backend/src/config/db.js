import mongoose from 'mongoose';
export async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('MONGO_DB connected successfully')
    } catch (error) {
        console.log("Failed to connect to mongoDB", error)
        process.exit(1)
    }
}