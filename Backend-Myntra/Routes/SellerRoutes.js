import express from "express";
import { checkSeller } from "../Middlewares/All.Middlewares.js";
import {
  addProduct,
  deleteYourProduct,
  getYourProduct,
  updateYourProduct,
} from "../Controllers/Product.Controller.js";

const router = express.Router();
router.post("/addProduct", checkSeller, addProduct);
router.get("/get-your-product", checkSeller, getYourProduct);
router.patch("/update-product", checkSeller, updateYourProduct);
router.delete("/delete-product", checkSeller, deleteYourProduct);

export default router;
