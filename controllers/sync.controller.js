import { syncRecords } from '../models/records.model.js';

export const syncRecordsController = async (req, res) => {
    const { records } = req.body; // Array of records to be uploaded

    if (!Array.isArray(records) || records.length === 0) {
        return res.status(400).send('No records to sync.');
    }

    try {
        // Call the model to insert or update records in the database
        const syncedRecords = await syncRecords(records);
        return res.status(200).json(syncedRecords); // Return synced records as response
    } catch (err) {
        console.error('Error syncing records:', err);
        return res.status(500).send('Internal Server Error');
    }
};