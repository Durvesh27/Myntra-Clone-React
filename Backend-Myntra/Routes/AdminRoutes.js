import express from 'express';
import { Admin } from '../Middlewares/All.Middlewares';
import { blockProduct, blockUser, getAllBuyers, getAllProducts, getAllSellers, unBlockProduct, unBlockUser, verifyProduct } from '../Controllers/Admin.Controller';

const router = express.Router();
router.get("/get-all-buyers",Admin,getAllBuyers)
router.get("/get-all-sellers",Admin,getAllSellers)
router.get("/get-all-products",Admin,getAllProducts)
router.patch("/block-user",Admin,blockUser)
router.patch("/unblock-user",Admin,unBlockUser)
router.patch("/block-product",Admin,blockProduct)
router.patch("/unblock-product",Admin,unBlockProduct)
router.patch("/verify-product",Admin,verifyProduct)


export default router;