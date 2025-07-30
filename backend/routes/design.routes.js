import express from 'express';
import {createDesign,getDesignById} from '../controller/design.controller.js';


const router = express.Router();
router.post('/', createDesign);
router.get('/:id', getDesignById);

export default router;
