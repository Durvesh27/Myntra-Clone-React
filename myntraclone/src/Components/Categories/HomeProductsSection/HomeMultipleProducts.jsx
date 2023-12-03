import React, { useEffect } from "react";
import "./../../Categories/MultipleProduct.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { useContext } from "react";
import { AuthContext } from "../../../Context";
import star1 from "./../../Images/star.png";
import toast from "react-hot-toast";
import api from "../../Api Config";
const HomeMultipleProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const router = useNavigate();
  const { state, productsUpdated } = useContext(AuthContext);

  useEffect(() => {
    async function MensProducts() {
      const response = await api.get("/all/all-products");
      if (response.data.success) {
        setProducts(
          response.data.products
            .filter((item) => item.category === "Home Appliances")
            .slice(page - 1, page + 4)
        );
        setLoading(true);
      }
    }
    MensProducts();
  }, [page, productsUpdated]);

  useEffect(() => {
    if (products.length == 0) {
      setPage(1);
    }
  }, [products]);
  const addToWishlist = async (proData) => {
    const productId = proData._id;
    const token = JSON.parse(localStorage.getItem("Token1"));
    if (token) {
      const { data } = await api.post("/buyer/add-wishlist", {
        productId,
        token,
      });
      if (data.success) {
        toast.success("Item added to Wishlist");
      }
    } else {
      toast("Please Login");
    }
  };
  return (
    <>
      {loading ? (
        <div>
          <div className="top1">
            <p>
              Home /<b> Bedding Sets</b>{" "}
            </p>
            <p>
              <b>Bedding Sets</b>-2555 items{" "}
            </p>
          </div>
          <div className="top2">
            <p>FILTERS</p>
            <p className="clear">Clear All</p>
            <div className="drop">
              <div>
                <span>Bed size</span>
                <select />
              </div>
              <div>
                <span>Bundles</span>
                <select />
              </div>
              <div>
                <span>Country of Origin</span>
                <select />
              </div>
              <div>
                <span>Fabric</span>
                <select />
              </div>
              <div>
                <span>Rating</span>
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
                <label>
                  <b>Men</b>
                </label>
                <br />
                <input type="radio" />
                <label>
                  <b>Women</b>
                </label>
                <br />
                <input type="radio" />
                <label>
                  <b>Boys</b>
                </label>
                <br />
                <input type="radio" />
                <label>
                  <b>Girls</b>
                </label>
              </div>
              <div>
                <h4>BRAND</h4>
                <input type="checkbox" />
                <label>
                  JC Collection <span>&nbsp;(15631)</span>
                </label>
                <br />
                <input type="checkbox" />
                <label>
                  Layers<span>&nbsp;(1567)</span>
                </label>
                <br />
                <input type="checkbox" />
                <label>
                  HOUMN<span>&nbsp;(15861)</span>
                </label>
                <br />
                <input type="checkbox" />
                <label>
                  Home Grace<span>&nbsp;(14569)</span>
                </label>
                <br />
                <input type="checkbox" />
                <label>
                  Romee<span>&nbsp;(11831)</span>
                </label>
                <br />
                <input type="checkbox" />
                <label>
                  Divine CASA<span>&nbsp;(7536)</span>
                </label>
                <br />
                <input type="checkbox" />
                <label>
                  Boutique Living India<span>&nbsp;(2255)</span>
                </label>
                <p className="more">+33 more</p>
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
                <span className="colour" style={{ backgroundColor: "green" }} />
                <label>
                  Green<span>&nbsp;(3312)</span>
                </label>
                <br />
                <input type="checkbox" />
                <span className="colour" style={{ backgroundColor: "red" }} />
                <label>
                  Red<span>&nbsp;(3312)</span>
                </label>
                <br />
                <input type="checkbox" />
                <span className="colour" style={{ backgroundColor: "pink" }} />
                <label>
                  Pink<span>&nbsp;(3312)</span>
                </label>
                <br />
                <input type="checkbox" />
                <span
                  className="colour"
                  style={{ backgroundColor: "yellow" }}
                />
                <label>
                  Yellow<span>&nbsp;(3312)</span>
                </label>
                <br />
                <input type="checkbox" />
                <span className="colour" style={{ backgroundColor: "navy" }} />
                <label>
                  Navy blur<span>&nbsp;(3312)</span>
                </label>
                <br />
                <input type="checkbox" />
                <span className="colour" style={{ backgroundColor: "Black" }} />
                <label>
                  Black<span>&nbsp;(3312)</span>
                </label>
                <p className="more">+38 more</p>
              </div>
              <div>
                <h4>PRICE</h4>
                <input type="checkbox" />
                <label>
                  Rs. 490 to Rs. 9269<span>&nbsp;(249783)</span>
                </label>
                <br />
                <input type="checkbox" />
                <label>
                  Rs. 9269 to Rs. 15680<span>&nbsp;(33)</span>
                </label>
                <br />
                <input type="checkbox" />
                <label>
                  Rs. 15680 to Rs. 58999<span>&nbsp;(7)</span>
                </label>
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
              {products &&
                products.map((pro) => (
                  <div className="main">
                    <img
                      src={pro?.imgsrc}
                      alt=""
                      onClick={() => router(`/single-product/${pro?._id}`)}
                    />
                    <h4>{pro?.pri}</h4>
                    <p>{pro?.category}</p>
                    <span className="box">
                      <b>{pro?.rating}</b>
                      <img src={star1} alt="" />
                      <b>| 141</b>
                    </span>
                    <span className="secText">
                      <strong>₹ {pro?.price1} </strong>
                      <span>
                        MRP
                        <del>₹ {pro?.price2} </del>
                      </span>
                      <b>({pro?.discount}% OFF)</b>
                    </span>
                    {state.user && state?.user.role === "Buyer" && (
                      <div className="container">
                        <button onClick={() => addToWishlist(pro)}>
                          WISHLIST
                          <i className="fa-regular fa-heart" />
                        </button>
                        <p>Sizes: 3-4Y</p>
                        <span className="secText">
                          <strong>₹ {pro?.price1}</strong>
                          <span>
                            MRP
                            <del>₹ {pro?.price2}</del>
                          </span>
                          <b>({pro?.discount}% OFF)</b>
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              <div className="downline" />
              <div className="bottomFlex">
                {/* <p>Page 1 of 1831</p>
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
        </ul> */}
                <div className="lastButton">
                  {page === 1 ? (
                    <button onClick={() => setPage(page + 5)}>NEXT </button>
                  ) : (
                    <>
                      <button onClick={() => setPage(page + 5)}>NEXT </button>
                      <button onClick={() => setPage(page - 5)}>PREV </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
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
          <ColorRing
            visible={true}
            height="50"
            width="50"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      )}
    </>
  );
};

export default HomeMultipleProducts;
