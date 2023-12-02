import express from 'express';
import { MoveToCart, addCart, addWishlist, clearCart, deleteCartProduct, deleteWishlistProduct, getCartProducts, getWishlistProducts } from '../Controllers/Buyer.controller';
import { isValidUser } from '../Middlewares/All.Middlewares';
import { addComments, addRating, searchProducts } from '../Controllers/Product.Controller';

const router = express.Router();
router.post("/add-cart",addCart)
router.post("/get-cart-products",getCartProducts)
router.post("/move-to-cart",MoveToCart)
router.patch("/add-rating",isValidUser,addRating)
router.patch("/add-comments",isValidUser,addComments)
router.post("/add-wishlist",addWishlist)
router.post("/get-wishlist-products",getWishlistProducts)
router.post("/delete-cart-product",deleteCartProduct)
router.post("/delete-wishlist-product",deleteWishlistProduct)
router.post("/clear-cart",clearCart)
router.get("/products",searchProducts)

export default router;