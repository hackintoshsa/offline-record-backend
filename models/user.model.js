import pool from '../config/db.js';
import { v4 as uuidv4 } from 'uuid';

// Create a new user
export const createUser = async (username, hashedPassword) => {
    try {
        console.log("Username:", username, "Password:", hashedPassword);
        const query = 'INSERT INTO users(id, username, password) VALUES ($1, $2, $3) RETURNING *';
        console.log(query)
        const values = [uuidv4(), username, hashedPassword];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (err) {
        console.error('Error executing query', err.stack);
        throw new Error('Error creating user');
    }
};


// Get a user by username
export const getUserByUsername = async (username) => {
    const query = 'SELECT * FROM users WHERE username = $1';
    const values = [username];
    const result = await pool.query(query, values);
    return result.rows[0]; // Return user or null
};