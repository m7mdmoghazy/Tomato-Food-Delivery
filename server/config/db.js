import mongoose from "mongoose";

const ConnectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/food-del");
        console.log("✅ ✅ ✅ LOCAL DB CONNECTED SUCCESSFULLY!");
    } catch (error) {
        console.error("❌ Local DB connection failed:", error.message);
    }
}

export default ConnectDB;