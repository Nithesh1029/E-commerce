import express from 'express'
const URL = process.env.URL;
const router = express.Router();
import { login, sendVerifyOtp, signUpUser, verifyOtp } from '../controller/userController.js';
import userAuth from '../AuthCheck/userAuth.js';
import { getProductById, getProducts } from '../controller/productContorller.js';


router.get('/products',getProducts);
router.get('/products/:id',getProductById);





router.post('/signup',signUpUser );
router.post('/login',login);
router.post('/sendVerifyOtp',userAuth,sendVerifyOtp);
router.post('/verifyOtp',userAuth,verifyOtp)

export default router;