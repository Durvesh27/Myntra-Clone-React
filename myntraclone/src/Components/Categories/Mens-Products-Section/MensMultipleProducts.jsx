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

const MensMultipleProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const router = useNavigate();
  const { state, productsUpdated } = useContext(AuthContext);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/all/all-products");
      if (response.data.success) {
        setProducts(
          response.data.products
            .filter((item) => item.category === "Men Clothing")
            .slice(page - 1, page + 4)
        );
        setLoading(true);
      }
    }
    getProducts();
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
          <div className="top1 bold-text">
            <p>
              Home/Clothing/<b className="bold-text">Men T-Shirts</b>{" "}
            </p>
            <p>
              <b className="bold-text">Men T-Shirts</b>- 8 items{" "}
            </p>
          </div>
          <div className="top2">
            <p className="filters">FILTERS</p>
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
                <span
                  className="colour"
                  style={{ backgroundColor: "maroon" }}
                />
                <label>
                  Maroon<span>&nbsp;(3312)</span>
                </label>
                <br />
                <input type="checkbox" />
                <span
                  className="colour"
                  style={{ backgroundColor: "purple" }}
                />
                <label>
                  Purple<span>&nbsp;(3312)</span>
                </label>
                <br />
                <input type="checkbox" />
                <span
                  className="colour"
                  style={{ backgroundColor: "orange" }}
                />
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
              {products &&
                products.map((pro) => (
                  <div className="main">
                    <img
                      src={pro?.imgsrc}
                      onClick={() => router(`/single-product/${pro?._id}`)}
                    />
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
                    {state.user.role === "Buyer" && (
                      <div className="container">
                        <button onClick={() => addToWishlist(pro)}>
                          WISHLIST
                          <i className="fa-regular fa-heart" />
                        </button>
                        <p>Sizes: Multiple Sizes</p>
                        <span className="secText">
                          <strong>₹ {pro?.price1} </strong>
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
                {/* <p>Page 1 of 1831</p> */}
                {/* <ul className="nextPage">
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
        // <h2 style={{textAlign:"center"}}>Loading</h2>}
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

export default MensMultipleProducts;
