import express from 'express';
import dotenv from 'dotenv';
import authRouter from './routes/auth.routes.js';
import connectMongo from './DB/connectMongo.js';

const app = express();
dotenv.config();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello Mayank!')
});

app.use('/api/auth', authRouter);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port`);
    connectMongo();
})