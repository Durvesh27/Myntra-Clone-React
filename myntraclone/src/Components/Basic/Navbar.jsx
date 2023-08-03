import React from 'react'
import './Index.css'
import logo from '../Images/myntraLOGO.webp'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
const router=useNavigate()
  return (
<div id="navbar">
  <div id="icon">
    <img src={logo} alt="err"/>
  </div>
  <div id="navi">
    <div onClick={()=>router('/mens-multiple-products')}>Men</div>
    <div onClick={()=>router('/womens-multiple-products')}>Women</div>
    <div onClick={()=>router('/kids-multiple-products')}>Kids</div>
    <div><a href="Myntra page2D.html">Home &amp; Living</a></div>
    <div><a href="Myntra page2E.html">Beauty</a></div>
    <div>Studio</div>
    <span className="text">NEW</span>
  </div>
  <div id="search">
    <i className="fa-solid fa-magnifying-glass" />
    <input type="search" placeholder="Search for products,brands and more" />
  </div>
  <div id="profile">
    <div id="pp">
      <i className="fa-solid fa-user " />
      <div style={{marginTop: 3, marginLeft: 18}}>Profile</div>
      <div className="login">
        <div>
          <h3>Welcome</h3>
          <p> To access account and manage orders</p>
          <a href="Mynta page3A.html">
            <button>
              LOGIN / SIGN UP
            </button>
          </a>
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
      </div>
    </div>
    <div id="wishlist">
      <a href="Myntra page6.html">
        <i style={{color: 'black'}} className="fa-solid fa-cart-shopping " /></a>
      <div style={{marginTop: 3, marginLeft: 20}}>Wishlist</div>
    </div>
    <div id="bag">
      <a href="Myntra page4.html">
        <i style={{color: 'black'}} className="fa-solid fa-bag-shopping" /></a>
      <div style={{marginTop: 3, marginLeft: 20}}>Bag</div>
    </div>
  </div>
</div>

  )
}

export default Navbar
