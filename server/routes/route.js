import express from 'express'
const URL = process.env.URL;
const router = express.Router();
import { login, signUpUser } from '../controller/userController.js';

router.post('/signup',signUpUser );
router.post('/login',login);

export default router;