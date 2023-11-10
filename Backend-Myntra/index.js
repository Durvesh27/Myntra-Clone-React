import express  from "express"
import dotenv from "dotenv"
import cors from 'cors'
import mongoose from "mongoose"
import { Login, Register, UpdateProfile, getCurrentUser } from './Controllers/User.Controller.js';
import { SingleProduct, addComments, addProduct, addRating, allProducts, deleteYourProduct, getYourProduct, updateYourProduct } from './Controllers/Product.Controller.js';
import { Admin, checkSeller, isValidUser } from './Middlewares/All.Middlewares.js';
import { MoveToCart, addCart, addWishlist, clearCart, deleteCartProduct, deleteWishlistProduct, getCartProducts, getWishlistProducts } from './Controllers/Buyer.controller.js';
import { blockProduct, blockUser, getAllBuyers, getAllProducts, getAllSellers, unBlockProduct, unBlockUser, verifyProduct } from './Controllers/Admin.Controller.js';

const app=express()
app.use(express.json())
dotenv.config();
app.use(cors())
app.get("/",(req,res)=>{
res.send("App Working")
})
app.post("/register",Register)
app.post("/login",Login)
app.post("/getCurrentUser",getCurrentUser)

app.post("/addProduct",checkSeller,addProduct)

app.get("/all-products",allProducts)
app.get("/get-your-product",checkSeller,getYourProduct)
app.patch("/update-product",checkSeller,updateYourProduct)
app.delete("/delete-product",checkSeller,deleteYourProduct)
app.post("/add-cart",addCart)
app.post("/get-cart-products",getCartProducts)
app.post("/move-to-cart",MoveToCart)
app.patch("/add-rating",isValidUser,addRating)
app.patch("/add-comments",isValidUser,addComments)
app.post("/single-product",SingleProduct)
app.post("/update-profile",UpdateProfile)
app.post("/add-wishlist",addWishlist)
app.post("/get-wishlist-products",getWishlistProducts)
app.post("/delete-cart-product",deleteCartProduct)
app.post("/delete-wishlist-product",deleteWishlistProduct)
app.post("/clear-cart",clearCart)
app.get("/get-all-buyers",Admin,getAllBuyers)
app.get("/get-all-sellers",Admin,getAllSellers)
app.get("/get-all-products",Admin,getAllProducts)
app.patch("/block-user",Admin,blockUser)
app.patch("/unblock-user",Admin,unBlockUser)

app.patch("/block-product",Admin,blockProduct)
app.patch("/unblock-product",Admin,unBlockProduct)

app.patch("/verify-product",Admin,verifyProduct)
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
console.log("Connected to DB")
})
app.listen(8001,()=>{
console.log("Server running on port 8001")
})