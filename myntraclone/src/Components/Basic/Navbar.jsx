import React, { useState } from 'react'
import './Index.css'
import logo from '../Images/myntraLOGO.webp'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../Context'
import { useEffect } from 'react'
import AddProduct from '../Seller/AddProduct'
const Navbar = ({proCount,setProCount}) => {
const router=useNavigate()
const[logged,setLogged]=useState(false)
const[showAdd,setShowAdd]=useState(false)
const {state,logout}=useContext(AuthContext)

useEffect(()=>{
if(state?.user){
setLogged(true)
}else{
setLogged(false)
}
},[state])
// console.log(state.user,"user")
  return (
<div id="navbar">
  <div id="icon">
    <img src={logo} alt="err" onClick={()=>router('/')}/>
  </div>
  <div id="navi">
    <div onClick={()=>router('/mens-multiple-products')}>Men</div>
    <div onClick={()=>router('/womens-multiple-products')}>Women</div>
    <div onClick={()=>router('/kids-multiple-products')}>Kids</div>
    <div onClick={()=>router('/home-multiple-products')}> Living</div>
    <div onClick={()=>router('/beauty-multiple-products')}>Beauty</div>
    <div>Studio</div>
    <span className="text">NEW</span>
  </div>
  <div id="search">
    <i className="fa-solid fa-magnifying-glass" />
    <input type="search" placeholder="Search for products,brands and more" />
  </div>
  <div id="profile">
    <div id="pp" >
      <i className="fa-solid fa-user " onClick={()=>router('/profile')}/>
      <div style={{marginTop: "3px", marginLeft: "18px"}}>Profile</div>
      <div className="login">
        <div>
          <h3>Welcome</h3>
          <p> To access account and manage orders</p>
          {
            logged && <p>Hello!  <span style={{color:"green",fontWeight:600}}>&nbsp;{state?.user?.name}</span></p>
          }
         
            <button onClick={()=>router('/login')}>
              LOGIN / SIGN UP
            </button>
        </div>
        <ul>
          <li>Orders</li>
          <li>Wishlist</li>
          <li>Gift Cards</li>
          <li>Contact us</li>
          <li>Myntra Insider</li>
        </ul>
        <ul>
          <li>Myntra Credit</li>
          <li>Coupons</li>
          <li>Saved Cards</li>
          <li>Saved VPA</li>
          <li>Saved Address</li>
        </ul>
        <button onClick={logout}>LOGOUT</button>
      </div>
   
    </div>
    {
      logged &&
    
    <>
    {
      state?.user?.role==="Buyer"?
    
    <>
    <div id="wishlist">
        <i style={{color: 'black'}} className="fa-solid fa-cart-shopping " onClick={()=>router('/wishlist')}/>
      <div style={{marginTop: "3px", marginLeft: "20px"}}>Wishlist</div>
    </div>
    <div id="bag">
      <i style={{color: 'black'}} className="fa-solid fa-bag-shopping" onClick={()=>router('/cart')}  />
      <div style={{marginTop: "3px", marginLeft: "20px"}}>Bag</div>
    </div>
    </>:
    <div id="add" onClick={()=>setShowAdd(true)}>
       <i class="fa-solid fa-plus fa-xl plus-i" style={{color: 'black'}}></i>
      <div style={{marginTop: "3px", marginLeft: "20px"}}>Add Products</div>
    </div>
}
</>
}
  </div>
  {
    showAdd && <AddProduct showAdd={showAdd} setShowAdd={setShowAdd} proCount={proCount} setProCount={setProCount}/>
  }
</div>

  )
}

export default Navbar
