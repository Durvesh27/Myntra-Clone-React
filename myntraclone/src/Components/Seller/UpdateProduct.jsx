import React from "react";
import { useState } from "react";

const UpdateProduct = ({id,setProData,click,setClick}) => {
  const [storeData, setStoreData] = useState({
    pri: "",
    sec:"",
    price1: "",
    price2: "",
    discount: "",
    category: "Men Clothing",
    imgsrc: "",
  });

  const [myData, setMyData] = useState();

  function handleChange(e) {
    setStoreData({ ...storeData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    storeData["id"] = id;
    const products = JSON.parse(localStorage.getItem("Men"));

    let updated = products.findIndex((item) => {
      if (id === item.id) return item;
    });

    products.splice(updated, 1, storeData);
    localStorage.setItem("Men", JSON.stringify(products));
    setProData(storeData);
    setClick(!click)
    alert("Product Updated");
  }


  return (
    <div>
      <div
        style={{
          background: "rgba(0,0,0,0.5)",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 99,
        }}
      ></div>
      <div
        style={{
          width: "30%",
          lineHeight: "30px",
          position: "absolute",
          top: "130px",
          left: "510px",
          padding: "20px",
          zIndex: 999,
          background: "white",
        }}
      >
        <h2>
          Update Product{" "}
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
           <input type="text" placeholder='Enter Product Description' className='add-input'name="sec" onChange={handleChange}/>
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
