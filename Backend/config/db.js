import mongoose from 'mongoose'

// Fuction to connect the database
export const connectDB = async () => {
    try {
        const conn  = await mongoose.connect(process.env.MONGO_URI); // Fetch the mongoDB connection string from the .env file
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1) // Process code 1 means exit with failure, 0 means success
    }
}