import pkg from 'pg';  // Default import for CommonJS module
const { Client } = pkg;  // Destructure to get the Client class

import dotenv from 'dotenv';
dotenv.config();

const client = new Client({
    user: 'postgres',
    password: 'admin',
    url:process.env.DATABASE_URL
});

client.connect()
    .then(() => {
        console.log('Connected to PostgreSQL database');
    })
    .catch((err) => {
        console.error('Error connecting to PostgreSQL database', err);
    });

export default client;