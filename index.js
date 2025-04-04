import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { connect } from './database/db.js';
import communityRouter from './routes/communityRoutes.js';
import userRouter from './routes/userRoutes.js';
import blogRouter from './routes/blogRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/communities', communityRouter);
app.use('/api/auth', userRouter);
app.use('/api/blog', blogRouter);


connect();

app.listen(5000, () => {
    console.log(`Server is running on port http://localhost:5000`)
})
