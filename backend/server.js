import express from 'express';
import dotenv from 'dotenv';
import connectMongo from './DB/connectMongo.js';
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth.routes.js';
import messageRoute from './routes/message.route.js'
import userRouter from './routes/user.routes.js'
import { app, server } from './socket/socket.js';

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello Mayank!')
});

app.use('/api/auth', authRouter);
app.use('/api/messages', messageRoute);
app.use('/api/users', userRouter);

app.get('/api', (req, res) => {
    res.send("Mayank");
});

server.listen(process.env.PORT, () => {
    console.log(`Example app listening on port`);
    connectMongo();
})