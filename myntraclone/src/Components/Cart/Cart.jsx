import React, { useContext, useEffect } from "react";
import "./Cart.css";
import logo from "../Images/myntraLOGO.webp";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Cart = () => {
  const [cart, setCart] = useState();
  const [final, setFinal] = useState(0);

  const users = JSON.parse(localStorage.getItem("Users"));
  const current = JSON.parse(localStorage.getItem("Current-User"));

  useEffect(() => {
    users.forEach((element) => {
      if (element.email === current.email){
        setCart(element.cart);
      }
    });
  }, []);

  useEffect(() => {
    if (cart?.length >= 0) {
      let totalPrice = 0;
      cart.forEach((item) => {
        totalPrice += item?.price1;
      });
      setFinal(totalPrice);
    }
  }, [cart]);

  function delItem(itemId) {
    let updatedItems = cart.filter((ele) => {
      return ele.id !== itemId;
    });
    users.forEach((data) => {
      if (data.email === current.email) {
        data.cart = updatedItems;
      }
    });
    toast("Item deleted")
    localStorage.setItem("Users",JSON.stringify(users))
    setCart(updatedItems);
  }

  function clearAll() {
    users.forEach((data) => {
      if (data.email === current.email) {
        data.cart = [];
      }
    });
    toast.success("Proceed to Checkout")
    localStorage.setItem("Users",JSON.stringify(users))
    setCart([])
  }

  return (
    <div>
      {/* <div className="cart-navbar">
    <div className="image">
 
        <img src={logo} alt />
    </div>
    <div className="middle">
      <ul>
        <li><a href>BAG</a></li> 
        <li className="dot" />
        <li><a href>ADDRESS</a></li> 
        <li className="dot" />
        <li><a href>PAYMENT</a></li>
      </ul>
    </div>
    <div className="last">
      <img src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png" />
      <p>100% SECURE</p>
    </div>
  </div> */}
      <div className="section">
        <div className="cart-left">
          <div className="details">
            <div className="div1">
              <p>
                Deliver to:{" "}
                <b style={{ color: "black" }}>Durvesh Nakhawa 400702</b>
              </p>
              <p>
                Karanja Navapada, Tal-Uran, Dist-Raigad, Hanuman Mandir, Uran
              </p>
            </div>
            <div className="div2">
              <button>CHANGE ADDRESS</button>
            </div>
          </div>
          <div className="offer">
            <i className="fa-solid fa-percent" />
            <b>&nbsp;&nbsp;Available offers</b>
            <ul className="list">
              <li>
                10% Instant Discount on ICICI Bank Credit and Debit Cards on a
                min spend of Rs 3,500.TCA
              </li>
            </ul>
            <p>Show more</p>
          </div>
          <div className="seller">
            <i className="fa-solid fa-user-tie" />
            <b>&nbsp;&nbsp;Seller has changed</b>
            <p>
              Seller of one or more items in your bag has changed. Please review
              them before proceeding.
            </p>
          </div>
          <div className="item">
            <div className="p1">
              <img
                src="https://constant.myntassets.com/checkout/assets/img/oos.webp"
                alt
              />
              <p>Items out of Stock</p>
            </div>
            <p className="p2">VIEW</p>
          </div>
          <div className="select">
            <div className="pri">
              <input type="checkbox" />
              <p>
                &nbsp;&nbsp;<b>{cart?.length}/{cart?.length} ITEMS SELECTED</b>
              </p>
            </div>
            <div className="sec">
              <p>REMOVE&nbsp;&nbsp;&nbsp;&nbsp;|</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;MOVE TO WISHLIST</p>
            </div>
          </div>
          <div>
            {cart?.map((Cart) => (
              <div className="product">
                <i
                  class="fa-solid fa-xmark cart-cross"
                  onClick={() => delItem(Cart?.id)}
                ></i>
                <div>
                  <img src={Cart?.imgsrc} alt="" />
                  <input type="checkbox" className="product-check" />
                </div>
                <div className="info">
                  <h4>{Cart?.pri}</h4>
                  <p>{Cart?.sec}</p>
                  <p>Sold by-{Cart?.pri} clothing</p>
                  <div className="num">
                    <button className="same">
                      <b>Size:L</b>
                      <i className="fa-solid fa-angle-down" />
                    </button>
                    <button className="same">
                      <b>Qty:1</b>
                      <i className="fa-solid fa-caret-down" />
                    </button>
                  </div>
                  <span className="secText">
                    <strong>₹{Cart?.price1} </strong>
                    <span>
                      MRP
                      <del>₹{Cart?.price2} </del>
                    </span>
                    <b>({Cart?.discount}% OFF)</b>
                  </span>
                  <p
                    style={{
                      fontSize: 12,
                      margin: "2px 0",
                      paddingLeft: 5,
                      color: "#282c3f",
                    }}
                  >
                    <b>14 Days</b> Returnable
                  </p>
                  <p style={{ fontSize: 12, paddingLeft: 5, color: "#282c3f" }}>
                    Delivery by <b>9th June 2023</b>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="wish">
            Add more items from Wishlist
            <span>&gt;</span>
          </div>
        </div>
        <div className="cart-right">
          <div className="coupon">
            <h5 style={{ marginBottom: 10 }}>COUPONS</h5>
            <div className="mb">
              <i className="fa-solid fa-tag" />
              <span>Apply Coupons</span>
              <button className="apply">APPLY</button>
            </div>
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#282c3f",
                marginBottom: 25,
              }}
            >
              SUPPORT TRANSFORMATIVE WORK IN INDIA
            </p>
            <div style={{ marginBottom: 20 }}>
              <input
                style={{ width: 16, height: 16 }}
                type="checkbox"
                name
                id
              />
              <span style={{ fontSize: 14, marginTop: 8 }}>
                &nbsp;Support us
              </span>
            </div>
            <div className="boxx">
              <div className="box1">Rs.10</div>
              <div className="box1">Rs.50</div>
              <div className="box1">Rs.100</div>
            </div>
            <p
              style={{
                margin: "25px 0",
                color: "#ff3f6c",
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              Know more
            </p>
          </div>
          <div className="price">
            <h5>PRICE DETAILS (2 Items)</h5>
            <div className="price-flex">
              <div style={{ marginRight: 150 }}>Total MRP</div>
              <div>Rs.{final}</div>
            </div>
            <div className="price-flex">
              <div style={{ marginRight: 101 }}>Discount on MRP</div>
              <div>-Rs.{final / 3}</div>
            </div>
            <div className="price-flex">
              <div style={{ marginRight: 75 }}>Coupon Discount</div>
              <div style={{ color: "#ff3f6c" }}>Apply coupon</div>
            </div>
            <div className="price-flex">
              <div style={{ marginRight: 132 }}>Convinience fee</div>
              <div>Rs.10</div>
            </div>
          </div>
          <div className="price-flex">
            <div style={{ marginRight: 132, fontWeight: 700 }}>
              Total amount
            </div>
            <div style={{ fontWeight: 700 }}>Rs.{final - final / 3 - 10}</div>
          </div>
          <button
            style={{
              width: "100%",
              height: 40,
              marginTop: 10,
              backgroundColor: "#ff3f6c",
              border: "1px solid #ff3f6c",
              color: "white",
              fontWeight: 700,
            }}
         onClick={clearAll} >
            PLACE ORDER
          </button>
        </div>
      </div>
      <div className="footer">
        <div className="footer-section">
          <div className="footerimg">
            <img
              src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png"
              alt
            />
            <img
              src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png"
              alt
            />
            <img
              src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png"
              alt
            />
            <img
              src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png"
              alt
            />
            <img
              src="https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png"
              alt
            />
            <img
              src="https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png"
              alt
            />
            <img
              src="https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png"
              alt
            />
            <img
              src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png"
              alt
            />
            <img
              src="https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png"
              alt
            />
            <img
              src="https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png"
              alt
            />
          </div>
          <h4 style={{ fontSize: 14, padding: "10px 0" }}>
            Need help? Contact us
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Cart;
