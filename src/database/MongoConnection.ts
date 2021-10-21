import mongoose from "mongoose";
import { config } from "../config/Constants";

class MongoConnection {
    public async connection(): Promise<void> {
        try {
            await mongoose.connect(config.MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
            console.log("DATABASE CONNECTED!");
        } catch (error) {
            console.log(error);
            process.exit(1);
        }
    }
}

export default MongoConnection;