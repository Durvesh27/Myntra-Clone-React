import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import star1 from "../Images/star.png";
import star2 from "../Images/STAR2.jpg";
import { useParams } from "react-router-dom";
import UpdateProduct from "../Seller/UpdateProduct";
import { useContext } from "react";
import { AuthContext } from "../../Context";
import { toast } from "react-hot-toast";
import axios from "axios";
const SingleProduct = () => {
  const { userId } = useParams();
  const [proData, setProData] = useState();
  const [click, setClick] = useState(false);
  const { state, count, setCount } = useContext(AuthContext);
  useEffect(() => {
    async function viewProduct() {
      const { data } = await axios.post(
        "http://localhost:8001/single-product",
        { userId }
      );
      if (data.success) {
        setProData(data.productData);
      }
    }
    viewProduct();
  }, []);



  const addTocart = async () => {
    const productId = proData._id;
    const token = JSON.parse(localStorage.getItem("Token1"));
    const { data } = await axios.post("http://localhost:8001/add-cart", {
      productId,
      token,
    });
    if (data.success) {
      setCount(count + 1);
      toast.success("Item added to cart");
    }
  };

  const addToWishlist = async () => {
    const productId = proData._id;
    const token = JSON.parse(localStorage.getItem("Token1"));
    const { data } = await axios.post("http://localhost:8001/add-wishlist", {
      productId,
      token,
    });
    if (data.success) {
      toast.success("Item added to Wishlist");
    }
  };



  return (
    <div>
      <div id="text">
        <p className="bold-text">
          Home/Clothing/{proData?.category}/Casuals/
          <b className="bold-text">
            {proData?.pri} Wears&gt;More By {proData?.pri}
          </b>
        </p>
      </div>
      <div className="single-main">
        <div className="left">
          <div className="img1 ">
            <img src={proData?.imgsrc}  />
          </div>
          <div className="img2">
            <img src={proData?.imgsrc} />
          </div>
          <div className="img3">
            <img src={proData?.imgsrc}  />
          </div>
          <div className="img4">
            <img src={proData?.imgsrc} />
          </div>
          <div className="img5">
            <img src={proData?.imgsrc} />
          </div>
        </div>
        <div className="right">
          <div className="name">
            <h2 className="main-Text">{proData?.pri}</h2>
            <p>{proData?.sec}</p>
            <span>
              <b>{proData?.rating}</b>
              <img src={star1} alt="" />| 19.3K Ratings
            </span>
          </div>
          <div className="size">
            <span>
              <strong>₹{proData?.price1}</strong>&nbsp;
              <span style={{ fontSize: "1.05rem", color: "grey" }}>
                MRP
                <del>₹{proData?.price2}</del>&nbsp;
              </span>
              <b>({proData?.discount}% OFF)</b>
            </span>
            <p>inclusive of all Taxes</p>
            {proData?.category == "Men Clothing" && (
              <div>
                <div className="add-btn-item">SELECT SIZE</div>
                <div className="add-btn-item">SIZE CHART&gt;</div>
              </div>
            )}
            {proData?.category == "Men Clothing" && (
              <div>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
              </div>
            )}

            <div>
              {state?.user?.role === "Buyer" ? (
                <>
                  <button className="addCart-btn">
                    <i className="fa-solid fa-bag-shopping fa-lg" />
                    <b onClick={addTocart} className="bold-text">&nbsp;ADD TO BAG</b>
                  </button>
                  <button className="wish-btn" >
                    <i className="fa-regular fa-heart fa-lg" />
                    <b onClick={addToWishlist} className="bold-text">&nbsp;WISHLIST</b>
                  </button>
                </>
              ) : (
                <button className="addCart-btn">
                  <i class="fa-solid fa-pen"></i>
                  <b onClick={() => setClick(!click)} className="bold-text">
                    &nbsp;&nbsp;UPDATE PRODUCT
                  </b>
                </button>
              )}
            </div>
          </div>
          <div className="options">
            <b>DELIVERY OPTIONS&nbsp;</b>
            <i className="fa-solid fa-truck" />
            <br />
            <input type="text" placeholder="Enter pincode" />
            <span>Check</span>
            <p>
              Please enter PIN code to check delivery time &amp; Pay on Delivery
              Availability
            </p>
            <div>
              <p>100% Original Products</p>
              <p>Pay on delivery might be available</p>
              <p>Easy 14 days returns and exchanges</p>
              <p>Try &amp; Buy might be available</p>
            </div>
          </div>
          <div className="offers">
            <div>
              <b>BEST OFFERS&nbsp;</b>
              <i className="fa-solid fa-tag" />
            </div>
            <div>
              <b className="bold-text">Best Price:</b>
              <b className="bold-text">Rs.283</b>
              <ul>
                <li>
                  Applicable on: Orders above Rs. 599 (only on first purchase)
                </li>
                <li>
                  Coupon code: <b className="bold-text">MYNTRA100</b>
                </li>
                <li>
                  Coupon Discount: Rs. 57 off (check cart for final savings)
                </li>
              </ul>
              <p>View Eligible products</p>
              <p>
                <b className="bold-text">Up To Rs 500 Cashback on CRED pay transactions.</b>
              </p>
              <ul>
                <li>Min Spend Rs 1,000. Available only on Android Devices.</li>
              </ul>
              <p>Terms &amp; Condition</p>
              <p>
                <b className="bold-text">EMI option available</b>
              </p>
              <ul>
                <li>EMI starting from Rs.16/month</li>
              </ul>
              <p>View Plan</p>
            </div>
          </div>
          <div className="products">
            <div>
              <b>PRODUCT DETAILS&nbsp;</b>
              <i className="fa-solid fa-file-lines" />
            </div>
            <p className="prod-text">
              Beige and Black printed T-shirt, has a round neck, and short
              sleeves
            </p>
            <div>
              <b className="bold-text">Size and Fit</b>
              <p className="prod-text">The model (height 6') is wearing a size M </p>
            </div>
            <div>
              <b className="bold-text">Material &amp; Care</b>
              <p className="prod-text">Material: 52% Cotton 48% Polyester</p>
              <p className="prod-text">Machine Wash</p>
            </div>
            <div>
              <b className="bold-text">Specifications</b>
              <div id="flex">
                <div>
                  <p>Fabric</p>
                  <p>Cotton</p>
                </div>
                <div>
                  <p>Fit</p>
                  <p>Regular Fit</p>
                </div>
                <div>
                  <p>Main Trend</p>
                  <p>Slogan Print</p>
                </div>
                <div>
                  <p>Neck</p>
                  <p>Round Neck</p>
                </div>
                <div>
                  <p>Fabric 2</p>
                  <p>Polyester</p>
                </div>
                <div>
                  <p>Length</p>
                  <p>Regular</p>
                </div>
                <div>
                  <p>Multipack Set</p>
                  <p>Single</p>
                </div>
                <div>
                  <p>Occasion</p>
                  <p>Casual</p>
                </div>
              </div>
              <p>See more</p>
            </div>
          </div>
          <div className="ratings">
            <div>
              <b className="bold-text">RATINGS</b>
              <i className="fa-regular fa-star" />
            </div>
            <div className="flex-rating">
              <div>
                <span>4</span>
                <img src={star1} alt="" />
                <p>19.4k Verified Buyers</p>
              </div>
              <div />
              {/* linings */}
              <div>
                <div>
                  <p className="font-color">5</p>
                  <img src={star2} alt="" />
                  <div className="index">
                    <div />
                    <div />
                  </div>
                  <p className="font-color">9754</p>
                </div>
                <div>
                  <p className="font-color">4</p>
                  <img src={star2} alt="" />
                  <div className="index">
                    <div />
                    <div />
                  </div>
                  <p className="font-color">4486</p>
                </div>
                <div>
                  <p className="font-color">3</p>
                  <img src={star2} alt="" />
                  <div className="index">
                    <div />
                    <div />
                  </div>
                  <p className="font-color">2204</p>
                </div>
                <div>
                  <p className="font-color">2</p>
                  <img src={star2} alt="" />
                  <div className="index">
                    <div />
                    <div />
                  </div>
                  <p className="font-color">1055</p>
                </div>
                <div>
                  <p className="font-color">1</p>
                  <img src={star2} alt="" />
                  <div className="index">
                    <div />
                    <div />
                  </div>
                  <p className="font-color">1875</p>
                </div>
              </div>
            </div>
            <div>
              <span>WHAT CUSTOMERS SAID</span>
              <i className="fa-regular fa-star" />
            </div>
            <div className="fitting">
              <p>Fit</p>
              <div>
                <div>
                  <div />
                  <div />
                </div>
                <p>Just Right(77%)</p>
              </div>
              <p>Length</p>
              <div>
                <div>
                  <div />
                  <div />
                </div>
                <p>Just Right(83%)</p>
              </div>
              <p>View Details</p>
            </div>
          </div>
          <div className="customer">
            <p>Customer Photos(142)</p>
            <img src="https://assets.myntassets.com/h_150,q_75,w_150,c_thumb,fl_progressive/assets/images/2023/5/13/bad90e20-18b1-4b9e-9755-1877f678294a1683975906414-IMG_20230513_150548.jpg" />
            <img src="https://assets.myntassets.com/h_150,q_75,w_150,c_thumb,fl_progressive/assets/images/2020/9/22/cba30ad6-e6ea-4a7e-90dd-77a8b48155271600756109965-IMG20200922115536.jpg" />
            <img src="https://assets.myntassets.com/h_150,q_75,w_150,c_thumb,fl_progressive/assets/images/2020/2/20/64b0f35e-3b13-41f5-b38e-f811ae57cfcb1582207360391-Snapchat-1443973849.jpg" />
            <img src="https://assets.myntassets.com/h_150,q_75,w_150,c_thumb,fl_progressive/assets/images/2022/9/19/756566b2-bbf1-4064-bdf8-370d6bf28d3c1663595943523-IMG_20220919_192132.jpg" />
            <p>Customer Reviews (1434)</p>
            <div>
              <p>
                Great product for its price. Slightly loose from waste and
                sleeves but overall a good product. Also the colour is slightly
                different from the images. In reality the colour is lighter and
                cooler shade of grey. Nice for summers.
              </p>
              <p>Ashwani Kadyan&nbsp;|&nbsp;2 Mar 2022</p>
            </div>
            <div>
              <p>
                Although in this price the fabric quality is great and color
                looks good. You can use it for daily use purpose and it gives
                more attractive look when you are muscle pumped. According to me
                it'll not suit much for skinny or thin people. The black border
                part is meant to be a sensitive part as it can be faded if you
                used a brush hard on it while washing. So be careful of it while
                washing otherwise no color fade in the main fabric and it is
                good although 💪✌️✌️
              </p>
              <p>Ajay Bajpai &nbsp;|&nbsp;5 Mar 2022</p>
            </div>
            <div>
              <p>
                Alert guys!!! The product shown (beige melange) and the product
                which is received is different in color. It instead is more of
                white melange. Get ready with the color if you are trying to
                order one. Material wise it is soft and stretchable. Just the
                color
              </p>
              <p>Sanjay Chettri&nbsp;|&nbsp;10 Mar 2022</p>
            </div>
            <div>
              <p>View all 1434 reviews</p>
              <p>
                Product Code: <b className="bold-text">11148764</b>
              </p>
              <p style={{ textTransform: "uppercase" }}>
                Seller:&nbsp;<b className="bold-text">{proData?.pri} CLOTHING PRIVATE LIMITED</b>
              </p>
              <p>
                <b className="bold-text">View Supplier Information</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      {click && (
        <UpdateProduct
          id={proData?._id}
          setProData={setProData}
          click={click}
          setClick={setClick}
        />
      )}
    </div>
  );
};

export default SingleProduct;
