import React, { useState } from "react";
import "./Index.css";
import logo from "../Images/myntraLOGO.webp";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context";
import { useEffect } from "react";
import AddProduct from "../Seller/AddProduct";
import toast from "react-hot-toast";
import "./Media.css";
import api from "../Api Config";
const Navbar = () => {
  const router = useNavigate();
  const [logged, setLogged] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const { state, logout, setCount, count } = useContext(AuthContext);

  useEffect(() => {
    if (state.user) {
      setLogged(true);
      setCount(state.user.cartCount);
    } else {
      setLogged(false);
    }
  }, [state]);

  const handleSearch = async () => {
    try {
      if (search.length) {
        const response = await api.get(`/buyer/products?search=${search}`);
        if (response.data.success) {
          setSearchResult(response.data.products);
        }
      }
    } catch (error) {
      toast.error("Failed to load search result");
    }
  };

  useEffect(() => {
    handleSearch();
    if (!search.length) {
      setSearchResult([]);
    }
  }, [search]);

  const handleRedirect = (id) => {
    router(`single-product/${id}`);
    window.location.reload();
  };
  return (
    <div id="navbar">
      <div id="icon">
        <img src={logo} alt="err" onClick={() => router("/")} />
      </div>
      <div id="navi">
        <div onClick={() => router("/mens-multiple-products")}>Men</div>
        <div onClick={() => router("/womens-multiple-products")}>Women</div>
        <div onClick={() => router("/kids-multiple-products")}>Kids</div>
        <div onClick={() => router("/home-multiple-products")}> Living</div>
        <div onClick={() => router("/beauty-multiple-products")}>Beauty</div>
        <div>Studio</div>
        <span className="text">NEW</span>
      </div>
      <div id="search">
        <i className="fa-solid fa-magnifying-glass" />
        <input
          type="search"
          placeholder="Search for products,brands and more"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ backgroundColor: search.length ? "white" : "#F5F5F6" }}
        />

        <div className="search-query">
          {searchResult &&
            searchResult.map((item) => (
              <div
                key={item?._id}
                className="search-query-item"
                onClick={() => handleRedirect(item._id)}
              >
                {item?.pri}
              </div>
            ))}
        </div>
      </div>

      <div id="profile">
        <div id="pp">
          <i className="fa-solid fa-user " onClick={() => router("/profile")} />
          <div style={{ marginTop: "3px", marginLeft: "18px" }}>Profile</div>
          <div className="login">
            <div>
              <h3>Welcome</h3>
              <p> To access account and manage orders</p>
              {logged && (
                <p>
                  Hello!{" "}
                  <span style={{ color: "green", fontWeight: 600 }}>
                    &nbsp;{state?.user?.name}
                  </span>
                </p>
              )}
              {logged ? (
                <button onClick={logout}>LOGOUT</button>
              ) : (
                <button onClick={() => router("/login")}>
                  LOGIN / SIGN UP
                </button>
              )}
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
            <div className="login-sec-div">
              {logged && <p onClick={() => router("/profile")}>Edit profile</p>}
            </div>
          </div>
        </div>
        {logged && (
          <>
            {state?.user?.role === "Buyer" ? (
              <>
                <div id="wishlist">
                  <i
                    style={{ color: "black" }}
                    className="fa-solid fa-cart-shopping "
                    onClick={() => router("/wishlist")}
                  />
                  <div style={{ marginTop: "3px", marginLeft: "20px" }}>
                    Wishlist
                  </div>
                </div>
                <div id="bag">
                  <i
                    style={{ color: "black" }}
                    className="fa-solid fa-bag-shopping"
                    onClick={() => router("/cart")}
                  />
                  <div style={{ marginTop: "3px", marginLeft: "20px" }}>
                    Bag
                  </div>
                  {count !== 0 && <span className="cart-count">{count}</span>}
                </div>
              </>
            ) : (
              <div id="add" onClick={() => setShowAdd(true)}>
                <i
                  class="fa-solid fa-plus fa-xl plus-i"
                  style={{ color: "black" }}
                ></i>
                <div style={{ marginTop: "3px", marginLeft: "20px" }}>
                  Add Products
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {showAdd && <AddProduct showAdd={showAdd} setShowAdd={setShowAdd} />}
    </div>
  );
};

export default Navbar;
