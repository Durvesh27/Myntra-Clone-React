import express from 'express';
import { checkSeller } from '../Middlewares/All.Middlewares';
import { addProduct, deleteYourProduct, getYourProduct, updateYourProduct } from '../Controllers/Product.Controller';



const router = express.Router();
router.post("/addProduct",checkSeller,addProduct)
router.get("/get-your-product",checkSeller,getYourProduct)
router.patch("/update-product",checkSeller,updateYourProduct)
router.delete("/delete-product",checkSeller,deleteYourProduct)

export default router;