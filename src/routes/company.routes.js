import express from 'express';
import { getCompanies, createCompany, createBulkCompanies } from '../controllers/company.controller.js';

const router = express.Router();

router.get('/', getCompanies);
router.post('/', createCompany);
router.post('/bulk', createBulkCompanies);

export default router;
