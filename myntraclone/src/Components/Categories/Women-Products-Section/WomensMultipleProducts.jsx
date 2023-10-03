import React from 'react'
import "./../../Categories/MultipleProduct.css";
import star1 from './../../Images/star.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
const WomensMultipleProducts = () => {
const[WomensData,setWomensData]=useState([])
const router=useNavigate();
useEffect(()=>{
  async function MensProducts(){
  const response=await axios.get("http://localhost:8001/all-products")
  if(response.data.success){
    setWomensData(response.data.products.filter(item=>item.category==="Womens Clothing"))
  }
  } 
  MensProducts()
  },[])
  return (
<div>
  <div className="top1">
    <p>Home / Clothing / <b> Sarees</b> </p>
    <p><b>Sarees</b>-123939 items </p>
  </div>
  <div className="top2">
    <p>FILTERS</p>
    <p className="clear">Clear All</p>
    <div className="drop">
      <div>
        <span>Bundles</span>
        <select />
      </div>
      <div>
        <span>Country of Origin</span>
        <select />
      </div>
      <div>
        <span>Size</span>
        <select />
      </div>
    </div>
    <div className="drop-option">
      <select>
        <option>Recommended</option>
        <option>Whats new</option>
        <option>Popularity</option>
        <option>Discounts</option>
        <option>Price:High-to-low</option>
        <option>Price:Low-to-high</option>
      </select>
    </div>
  </div>
  <div id="body">
    <div id="leftSection">
      <div>
        <input type="radio" />
        <label><b>Women</b></label><br />
        <input type="radio" />
        <label><b>Girls</b></label>  
      </div>
      <div>
        <h4>CATEGORIES</h4>
        <input type="checkbox" />
        <label>Sarees <span>&nbsp;(15631)</span></label><br />
        <input type="checkbox" />
        <label>Sarees blouse<span>&nbsp;(1151)</span></label><br />
      </div>
      <div>
        <h4>BRAND</h4>
        <input type="checkbox" />
        <label>Kalini<span>&nbsp;(4232)</span></label><br />
        <input type="checkbox" />
        <label>Mitera<span>&nbsp;(1122)</span></label><br />
        <input type="checkbox" />
        <label>Saree mall<span>&nbsp;(2812)</span></label><br />
        <input type="checkbox" />
        <label>Pothys<span>&nbsp;(2601)</span></label><br />
        <input type="checkbox" />
        <label>Charukriti<span>&nbsp;(2854)</span></label><br />
        <input type="checkbox" />
        <label>Anouk<span>&nbsp;(5631)</span></label><br />
        <input type="checkbox" />
        <label>Unnati Silks<span>&nbsp;(3392)</span></label><br />
        <input type="checkbox" />
        <label>Kala Mandir<span>&nbsp;(2516)</span></label>
        <p className="more">+930 more</p>
      </div>
      <div>
        <h4>COLOUR</h4>
        <input type="checkbox" />
        <span className="colour" />
        <label>Blue<span>&nbsp;(3312)</span></label><br />
        <input type="checkbox" />
        <span className="colour" style={{backgroundColor: 'green'}} />
        <label>Green<span>&nbsp;(3312)</span></label><br />
        <input type="checkbox" />
        <span className="colour" style={{backgroundColor: 'red'}} />
        <label>Red<span>&nbsp;(3312)</span></label><br />
        <input type="checkbox" />
        <span className="colour" style={{backgroundColor: 'pink'}} />
        <label>Pink<span>&nbsp;(3312)</span></label><br />
        <input type="checkbox" />
        <span className="colour" style={{backgroundColor: 'yellow'}} />
        <label>Yellow<span>&nbsp;(3312)</span></label><br />
        <input type="checkbox" />
        <span className="colour" style={{backgroundColor: 'grey'}} />
        <label>Grey<span>&nbsp;(3312)</span></label><br />
        <input type="checkbox" />
        <span className="colour" style={{backgroundColor: 'Black'}} />
        <label>Black<span>&nbsp;(3312)</span></label>
        <p className="more">+38 more</p>
      </div>
      <div>
        <h4>PRICE</h4>
        <input type="checkbox" />
        <label>Rs. 244 to Rs. 18434<span>&nbsp;(123783)</span></label><br />
        <input type="checkbox" />
        <label>Rs. 18434 to Rs. 36624<span>&nbsp;(176)</span></label><br />
        <input type="checkbox" />
        <label>Rs. 36624 to Rs. 54814<span>&nbsp;(5)</span></label><br />
        <input type="checkbox" />
        <label>Rs. 54814 to Rs. 73004<span>&nbsp;(5)</span></label><br />
      </div>
      <div>
        <h4>DISCOUNT RANGE</h4>
        <input type="radio" />
        <label>10% and above</label><br />
        <input type="radio" />
        <label>20% and above</label><br />
        <input type="radio" />
        <label>30% and above</label><br />
        <input type="radio" />
        <label>40% and above</label><br />
        <input type="radio" />
        <label>50% and above</label><br />
        <input type="radio" />
        <label>60% and above</label><br />
        <input type="radio" />
        <label>70% and above</label><br />
        <input type="radio" />
        <label>80% and above</label><br />
      </div>
    </div>

    <div id="rightSection">
    {
WomensData.map((WomensData)=>(
      <div className="main">
        <img src={WomensData?.imgsrc} alt="" onClick={()=>router(`/single-product/${WomensData?._id}`)}/>
        <h4>{WomensData?.pri}</h4>
        <p>{WomensData?.category}</p>
        <span className="box">
          <b>{WomensData?.rating}</b>
          <img src={star1} alt="" />
          <b>| 14.1k</b>
        </span>
        <span className="secText">
          <strong>₹ {WomensData?.price1} </strong>
          <span>MRP
            <del>₹ {WomensData?.price2}</del>
          </span>
          <b>({WomensData?.discount}% OFF)</b>
        </span>
        <div className="container">
          <button>
            WISHLIST
            <i className="fa-regular fa-heart" />
          </button>
          <p>Sizes: Onesize</p>
          <span className="secText">
            <strong>₹ {WomensData?.price1}</strong>
            <span>MRP
              <del>₹ {WomensData?.price1}</del>
            </span>
            <b>({WomensData?.discount}% OFF)</b>
          </span>
        </div>
      </div>
      ))
}
      <div className="downline" />
      <div className="bottomFlex">
        <p>Page 1 of 1831</p>
        <ul className="nextPage">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
        </ul>
        <div className="lastButton">
          <button>
            NEXT &gt;
          </button>
        </div>
      </div>
    </div>

  </div></div>

  )
}

export default WomensMultipleProducts
