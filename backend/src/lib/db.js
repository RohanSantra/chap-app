import mongoose from 'mongoose';

export const connetDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Mongo db connected : ${conn.connection.host}`);
    } catch (error) {
        console.log("Mongo connection error :", error);
    }
}
