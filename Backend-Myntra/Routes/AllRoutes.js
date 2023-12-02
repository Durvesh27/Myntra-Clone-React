import express from 'express';
import { Login, Register, UpdateProfile, getCurrentUser } from '../Controllers/User.Controller';
import { SingleProduct, allProducts } from '../Controllers/Product.Controller';


const router = express.Router();
router.post("/register", Register);
router.post("/login", Login);
router.post("/getCurrentUser", getCurrentUser);
router.get("/all-products",allProducts)
router.post("/single-product",SingleProduct)
router.post("/update-profile",UpdateProfile)

export default router;