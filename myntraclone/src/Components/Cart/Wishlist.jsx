import React, { useContext } from "react";
import "./Wishlist.css";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Triangle } from "react-loader-spinner";
import { AuthContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import api from "../Api Config";
const Wishlist = () => {
  const { state } = useContext(AuthContext);
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const [updatedData, setUpdatedData] = useState(false);
  const [loading, setLoading] = useState(false);
  const { count, setCount } = useContext(AuthContext);
  const router = useNavigate();

  var token = JSON.parse(localStorage.getItem("Token1"));
  useEffect(() => {
    async function getWishlistProducts() {
      const { data } = await api.post("/buyer/get-wishlist-products", {
        token,
      });
      if (data.success) {
        setWishlistProducts(data.products);
        setLoading(true);
      }
    }
    if (token) {
      getWishlistProducts();
    }
  }, [updatedData]);

  useEffect(() => {
    if (!token) {
      setLoading(true);
    }
  }, []);

  const delItem = async (productId) => {
    const { data } = await api.post("/buyer/delete-wishlist-product", {
      productId,
      token,
    });
    if (data.success) {
      setUpdatedData(!updatedData);
      toast.success("Item removed from wishlist");
    }
  };

  const moveToCart = async (productId) => {
    const token = JSON.parse(localStorage.getItem("Token1"));
    const { data } = await api.post("/buyer/move-to-cart", {
      productId,
      token,
    });
    if (data.success) {
      setUpdatedData(!updatedData);
      setCount(count + 1);
      toast.success("Item moved to cart");
    }
  };
  const goToShopping = () => {
    if (token) {
      router("/mens-multiple-products");
    } else {
      toast("Please Login");
    }
  };
  return (
    <>
      {loading ? (
        wishlistProducts?.length === 0 || !state.user ? (
          <div className="empty-cart">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5OAXIaKeTYv80C8NF6o1tZMVw09hVTEdxHw&usqp=CAU"
              alt=""
              className="em-img"
            />
            <h3>YOUR WISHLIST IS EMPTY</h3>
            <p className="no-text">
              There is nothing in your Wishlist. Let's add some items.
            </p>
            <button
              className="ad-wish"
              onClick={goToShopping}
              style={{ textTransform: "uppercase" }}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="wishlist">
            <p className="first">
              <b className="wish-bold">My Wishlist</b>{" "}
              {wishlistProducts?.length} items
            </p>
            <div className="wishlist-items" key={wishlistProducts?._id}>
              {wishlistProducts?.map((item) => (
                <div className="wishlist-item">
                  <img src={item?.imgsrc} alt />
                  <h3 className="item-name">{item?.pri}</h3>
                  <div className="secText">
                    <strong>₹{item?.price1} </strong>
                    <span>
                      Rs.
                      <del>₹{item?.price2} </del>
                    </span>
                    <b>({item?.discount}% OFF)</b>
                  </div>
                  <p className="last-box" onClick={() => moveToCart(item._id)}>
                    MOVE TO BAG
                  </p>
                  <div className="cancel" onClick={() => delItem(item?._id)}>
                    <i className="fa-solid fa-xmark" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      ) : (
        <div
          style={{
            height: "80vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Triangle
            height="60"
            width="60"
            color="#4fa94d"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      )}
    </>
  );
};
export default Wishlist;
