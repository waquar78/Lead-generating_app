import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDb } from './utils/db.js';
import leadRoute from './routes/leadRoute.js';

const app = express();

dotenv.config();
connectDb();

const PORT = process.env.PORT || 5000;

app.use(cors({
       origin: process.env.FRONTEND_URL,
       credentials: true
}
));
app.use(express.json());

app.use("/api/v1/lead",leadRoute);

app.listen(PORT,()=>{
    console.log("app is listining at port ",PORT);
    
})