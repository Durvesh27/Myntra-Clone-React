import React from 'react'
import './Wishlist.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
const Wishlist = () => {
const [wishlistProducts,setWishlistProducts]=useState([])
const [updatedData,setUpdatedData]=useState(false)
var token=JSON.parse(localStorage.getItem("Token1"))
useEffect(()=>{
  async function getWishlistProducts(){ 
    const {data}=await axios.post("http://localhost:8001/get-wishlist-products",{token})
    if(data.success){
    setWishlistProducts(data.products)
    }
    }
    getWishlistProducts()
},[updatedData])

const delItem=async(productId)=>{
  const {data}=await axios.post("http://localhost:8001/delete-wishlist-product",{productId,token})
  if(data.success){
    setUpdatedData(!updatedData)
  }
  }

const moveToCart=async(productId)=>{
  const token=JSON.parse(localStorage.getItem("Token1"))
  const {data}=await axios.post("http://localhost:8001/move-to-cart",{productId,token})
  if(data.success){
  setUpdatedData(!updatedData)
  toast.success("Item moved to cart")
  }  
}
  return (
<div className="wishlist">
  <p className="first"><b>My Wishlist</b> {wishlistProducts?.length} items</p>
  {
    wishlistProducts?.length? 
  <div className="wishlist-items" key={wishlistProducts?._id}>
    {
      wishlistProducts?.map((item)=>(
        <div className="wishlist-item">
        <img src={item?.imgsrc} alt />
        <h3 className="item-name">{item?.pri}</h3>
        <div className="secText">
          <strong>₹{item?.price1} </strong>
          <span>Rs.
            <del>₹{item?.price2} </del>
          </span>
          <b>({item?.discount}% OFF)</b>
        </div>
        <p className="last-box" onClick={()=>moveToCart(item._id)}>MOVE TO BAG</p>
        <div className="cancel" onClick={()=>delItem(item?._id)}>
          <i className="fa-solid fa-xmark" />
        </div>
      </div>
      ))
    }

  </div>:
  <div>
    Add product to wishlist
  </div>
}
</div>

  )
}

export default Wishlist
