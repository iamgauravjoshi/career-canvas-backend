import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("Error connection to MongoDB: ", error.message);
        process.exit(1); // Status code 1 is Failure, and 0 is Success
    }
}