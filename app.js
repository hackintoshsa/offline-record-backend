import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import pg from 'pg';
import dotenv from 'dotenv';
import router from './routes/index.js';
import authRoutes from './routes/login.router.js';
import recordRoutes from './routes/records.router.js';


const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config();
app.use(morgan('dev'));


app.use('/', router);
app.use('/api/auth', authRoutes);
app.use('/api/records', recordRoutes);

// Start the server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
