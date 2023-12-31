import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context";
import api from "../Api Config";

const UpdateProduct = ({ id, setProData, click, setClick }) => {
  const [storeData, setStoreData] = useState({
    pri: "",
    sec: "",
    price1: "",
    price2: "",
    discount: "",
    category: "Men Clothing",
    imgsrc: "",
  });

  const { state } = useContext(AuthContext);

  function handleChange(e) {
    setStoreData({ ...storeData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    const token = JSON.parse(localStorage.getItem("Token1"));
    e.preventDefault();
    try {
      console.log("proId", id, "userId", state?.user?._id);
      const { data } = await api.patch("/seller/update-product", {
        storeData,
        productId: id,
        token,
      });
      if (data.success) {
        toast.success("Product Updated");
        setClick(!click);
        setProData(data.productData);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <div className="opacity"></div>
      <div className="add-product">
        <h2 className="add-title">
          <span style={{ fontSize: "18px" }}>Update Product</span>
          <span
            style={{ fontSize: "18px", marginLeft: "250px" }}
            onClick={() => setClick(!click)}
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
          <input type="submit" value="Update Product" className="add-btn" />
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
