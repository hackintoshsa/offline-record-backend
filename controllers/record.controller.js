import { createRecord, getRecords, updateRecord } from '../models/records.model.js';

// Get All Records (Protected)
export const getAllRecords = async (req, res) => {
    try {
        const records = await getRecords();
        res.json(records);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Add a New Record (Protected)
export const addNewRecord = async (req, res) => {
    const { title, description, barcode } = req.body;

    try {
        const newRecord = await createRecord(title, description, barcode);
        res.status(201).json({ message: 'Record added', record: newRecord });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update a Record (Protected)
export const updateExistingRecord = async (req, res) => {
    const { id } = req.params;
    const { title, description, barcode } = req.body;

    try {
        const updatedRecord = await updateRecord(id, title, description, barcode);
        if (!updatedRecord) return res.status(404).json({ error: 'Record not found' });
        res.json({ message: 'Record updated', record: updatedRecord });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};
