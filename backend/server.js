import express from 'express';
import dotenv from 'dotenv';
import authRouter from './routes/auth.routes.js';
import connectMongo from './DB/connectMongo.js';
import messageRoute from './routes/message.route.js'
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello Mayank!')
});

app.use('/api/auth', authRouter);
app.use('/api/messages', messageRoute);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port`);
    connectMongo();
})