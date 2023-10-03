import React, { useEffect } from "react";
import "./../../Categories/MultipleProduct.css";
import MensData from "./MensProData";
import star1 from './../../Images/star.png'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const MensMultipleProducts = ({proCount,setProCount}) => {
const [products,setProducts]=useState([])
const[myData,setMyData]=useState(false)

// useEffect(()=>{
// const productData=JSON.parse(localStorage.getItem("Men"))
// setProducts(productData)
// },[proCount])
useEffect(()=>{
async function MensProducts(){
const response=await axios.get("http://localhost:8001/all-products")
if(response.data.success){
  setProducts(response.data.products.filter((item)=>item.category==="Men Clothing"))
}
} 
MensProducts()
},[])

const router=useNavigate()
  return (
    <div>
      <div className="top1">
        <p>
          Home/Clothing/<b>Men T-Shirts</b>{" "}
        </p>
        <p>
          <b>Men T-Shirts</b>-105493 items{" "}
        </p>
      </div>
      <div className="top2">
        <p>FILTERS</p>
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
            <h4>CATEGORIES</h4>
            <input type="checkbox" />
            <label>
              Tshirt<span>&nbsp;(102631)</span>
            </label>
            <br />
            <input type="checkbox" />
            <label>
              Lounge T-shirts<span>&nbsp;(1221)</span>
            </label>
            <br />
          </div>
          <div>
            <h4>BRAND</h4>
            <input type="checkbox" />
            <label>
              Roadster<span>&nbsp;(3312)</span>
            </label>
            <br />
            <input type="checkbox" />
            <label>
              Allen solly<span>&nbsp;(1012)</span>
            </label>
            <br />
            <input type="checkbox" />
            <label>
              Nike<span>&nbsp;(2512)</span>
            </label>
            <br />
            <input type="checkbox" />
            <label>
              Puma<span>&nbsp;(3201)</span>
            </label>
            <br />
            <input type="checkbox" />
            <label>
              Adidas<span>&nbsp;(3254)</span>
            </label>
            <br />
            <input type="checkbox" />
            <label>
              Benetton<span>&nbsp;(5631)</span>
            </label>
            <br />
            <input type="checkbox" />
            <label>
              U.S Polo<span>&nbsp;(3242)</span>
            </label>
            <br />
            <input type="checkbox" />
            <label>
              Tommy Hilfighter<span>&nbsp;(3214)</span>
            </label>
            <p className="more">+630 more</p>
          </div>
          <div>
            <h4>COLOUR</h4>
            <input type="checkbox" />
            <span className="colour" />
            <label>
              Blue<span>&nbsp;(3312)</span>
            </label>
            <br />
            <input type="checkbox" />
            <span className="colour" style={{ backgroundColor: "black" }} />
            <label>
              Black<span>&nbsp;(3312)</span>
            </label>
            <br />
            <input type="checkbox" />
            <span className="colour" style={{ backgroundColor: "red" }} />
            <label>
              Red<span>&nbsp;(3312)</span>
            </label>
            <br />
            <input type="checkbox" />
            <span className="colour" style={{ backgroundColor: "maroon" }} />
            <label>
              Maroon<span>&nbsp;(3312)</span>
            </label>
            <br />
            <input type="checkbox" />
            <span className="colour" style={{ backgroundColor: "purple" }} />
            <label>
              Purple<span>&nbsp;(3312)</span>
            </label>
            <br />
            <input type="checkbox" />
            <span className="colour" style={{ backgroundColor: "orange" }} />
            <label>
              Orange<span>&nbsp;(3312)</span>
            </label>
            <br />
            <input type="checkbox" />
            <span
              className="colour"
              style={{ backgroundColor: "greenyellow" }}
            />
            <label>
              green<span>&nbsp;(3312)</span>
            </label>
            <p className="more">+39 more</p>
          </div>
          <div>
            <h4>PRICE</h4>
            <input type="checkbox" />
            <label>
              Rs. 124 to Rs. 9093<span>&nbsp;(103570)</span>
            </label>
            <br />
            <input type="checkbox" />
            <label>
              Rs. 9093 to Rs. 18062<span>&nbsp;(496)</span>
            </label>
            <br />
            <input type="checkbox" />
            <label>
              Rs. 18062 to Rs. 27031<span>&nbsp;(23)</span>
            </label>
            <br />
            <input type="checkbox" />
            <label>
              Rs. 27031 to Rs. 36000<span>&nbsp;(1)</span>
            </label>
            <br />
          </div>
          <div>
            <h4>DISCOUNT RANGE</h4>
            <input type="radio" />
            <label>10% and above</label>
            <br />
            <input type="radio" />
            <label>20% and above</label>
            <br />
            <input type="radio" />
            <label>30% and above</label>
            <br />
            <input type="radio" />
            <label>40% and above</label>
            <br />
            <input type="radio" />
            <label>50% and above</label>
            <br />
            <input type="radio" />
            <label>60% and above</label>
            <br />
            <input type="radio" />
            <label>70% and above</label>
            <br />
            <input type="radio" />
            <label>80% and above</label>
            <br />
          </div>
        </div>
        <div id="rightSection">
          {products.map((pro) => (
            <div className="main">
              <img src={pro?.imgsrc} onClick={()=>router(`/single-product/${pro?._id}`)}/>
              <h4>{pro?.pri}</h4>
              <p>{pro?.category}</p>
              <span className="box">
                <b>{pro?.rating}</b>
                <img src={star1} alt />
                <b>| 19.3k</b>
              </span>
              <span className="secText">
                <strong>₹ {pro?.price1} </strong>
                <span>
                  MRP
                  <del>₹ {pro?.price2}</del>
                </span>
                <b>({pro?.discount}% OFF)</b>
              </span>
              <div className="container">
                <button>
                  WISHLIST
                  <i className="fa-regular fa-heart" />
                </button>
                <p>Sizes: M</p>
                <span className="secText">
                  <strong>₹ {pro?.price1} </strong>
                  <span>
                    MRP
                    <del>₹ {pro?.price2}</del>
                  </span>
                  <b>({pro?.discount}% OFF)</b>
                </span>
              </div>
            </div>
          ))}
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
              <button>NEXT &gt;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MensMultipleProducts;
