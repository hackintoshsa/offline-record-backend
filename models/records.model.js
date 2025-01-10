import pool from '../config/db.js';
import { v4 as uuidv4 } from 'uuid';

// Create a new record
export const createRecord = async (title, description, barcode) => {
    const query = 'INSERT INTO records (id, title, description, barcode) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [uuidv4(), title, description, barcode || null];
    const result = await pool.query(query, values);
    return result.rows[0];
};

// Get all records
export const getRecords = async () => {
    const query = 'SELECT * FROM records';
    const result = await pool.query(query);
    return result.rows;
};

// Update a record
export const updateRecord = async (id, title, description, barcode) => {
    const query = 'UPDATE records SET title = $1, description = $2, barcode = $3, updated_at = NOW() WHERE id = $4 RETURNING *';
    const values = [title, description, barcode || null, id];
    const result = await pool.query(query, values);
    return result.rows[0];
};

export const syncRecords = async (records) => {
    const query = `
    INSERT INTO records (id, title, description, barcode, updated_at)
    VALUES ($1, $2, $3, $4, NOW())
    ON CONFLICT (id) 
    DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description, 
                 barcode = EXCLUDED.barcode, updated_at = NOW()
    RETURNING *`;

    const syncedRecords = [];

    for (const record of records) {
        const { id, title, description, barcode } = record;
        const values = [id, title, description, barcode || null];
        const result = await pool.query(query, values);
        syncedRecords.push(result.rows[0]);
    }

    return syncedRecords; // Return all synced records
};