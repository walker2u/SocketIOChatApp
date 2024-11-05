import express from 'express';
import dotenv from 'dotenv';
import connectMongo from './DB/connectMongo.js';
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth.routes.js';
import messageRoute from './routes/message.route.js'
import userRouter from './routes/user.routes.js'
import { app, server } from './socket/socket.js';
import path from 'path';

dotenv.config();
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/messages', messageRoute);
app.use('/api/users', userRouter);

app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('/api', (req, res) => {
    res.send("Mayank");
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
})

server.listen(process.env.PORT, () => {
    console.log(`Mayank's app listening...`);
    connectMongo();
})