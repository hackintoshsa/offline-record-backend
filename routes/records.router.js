import express from 'express';
import { authenticateJWT } from '../middleware/auth.jwt.js';
import {
    getAllRecords,
    addNewRecord,
    updateExistingRecord
} from '../controllers/record.controller.js';
import {syncRecordsController} from "../controllers/sync.controller.js";

const router = express.Router();

router.get('/', authenticateJWT, getAllRecords);
router.post('/', authenticateJWT, addNewRecord);
router.put('/:id', authenticateJWT, updateExistingRecord);
router.post('/sync', authenticateJWT, syncRecordsController);


export default router;