import React, { useContext } from "react";
import "./Seller.css";
import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { AuthContext } from "../../Context";
const AddProduct = ({showAdd,setShowAdd}) => {
  const [addPro, setAddPro] = useState({
    pri: "",
    sec: "",
    price1: "",
    price2: "",
    discount: "",
    category: "Men Clothing",
    imgsrc: "",
  });
  const {productsUpdated,setProductsUpdated}=useContext(AuthContext)
  function handleChange(e) {
    setAddPro({ ...addPro, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      addPro.pri &&
      addPro.sec &&
      addPro.price1 &&
      addPro.price2 &&
      addPro.discount &&
      addPro.category &&
      addPro.imgsrc
    ) {
      const token = JSON.parse(localStorage.getItem("Token1"));
      const response = await axios.post("http://localhost:8001/addProduct",{token, addPro });
      if (response.data.success) {
        setAddPro({
          pri:"",
          sec:"",
          price1:"",
          price2:"",
          discount:"",
          category:"",
          imgsrc:""
        })
        toast.success("Product added");
        setShowAdd(!showAdd)
        setProductsUpdated(!productsUpdated)
      }
    }
  }
  return (
    <div>
      <div className="opacity"></div>
      <div className="add-product">
        <h2 className="add-title">
          <span style={{fontSize:"18px"}}>Add product</span>
          <span
            className="x-mark"
            onClick={() => setShowAdd(!showAdd)}
          >
            X
          </span>
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Product Title"
            className="add-input"
            name="pri"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Enter Product Description"
            className="add-input"
            name="sec"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Enter Selling Price"
            className="add-input"
            name="price1"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Enter MRP"
            className="add-input"
            name="price2"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Enter Discount in %"
            className="add-input"
            name="discount"
            onChange={handleChange}
          />
          <select className="add-input" name="category" onChange={handleChange}>
            <option>Mens Clothing</option>
            <option>Womens Clothing</option>
            <option>Kids Clothing</option>
            <option>Home Appliances</option>
            <option>Beauty Products</option>
          </select>
          <input
            type="text"
            placeholder="Enter Image URL"
            className="add-input"
            name="imgsrc"
            onChange={handleChange}
          />
          <input type="submit" value="Add Product" className="add-btn"  />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
