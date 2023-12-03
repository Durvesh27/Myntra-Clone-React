import React from "react";
import "./Footer.css";
import "./Media.css";
const Footer = () => {
  return (
    <div className="footer">
      <div id="section" className="fut">
        <div id="shopping">
          <div id="space" className="first">
            <h3>ONLINE SHOPPING</h3>
            <p>Men</p>
            <p>women</p>
            <p>Kids</p>
            <p>Home & living</p>
            <p>beauty</p>
            <p>Gift cards</p>
            <p>Myntra Insider</p>
          </div>
          <div className="first">
            <h3>USEFUL LINKS</h3>
            <p>Blogs</p>
            <p>Career</p>
            <p>Site map</p>
            <p>Corporate Information</p>
            <p>Home &amp; living</p>
            <p>Whitechat</p>
          </div>
        </div>
        <div id="policies">
          <div className="first">
            <h3>CUSTOMER POLICIES</h3>
            <p>Contact us</p>
            <p>FAQ</p>
            <p>T&amp;C</p>
            <p>Terms of Use</p>
            <p>Track Orders</p>
            <p>Shipping</p>
            <p>Cancellation</p>
            <p>Returns</p>
            <p>Privacy policy</p>
            <p>Grievance Officer</p>
          </div>
        </div>
        <div id="experience">
          <h3 style={{ fontSize: 15, wordSpacing: 5 }}>
            EXPERINCE MYNTRA APP ON MOBILE
          </h3>
          <div id="image">
            <img src="data:image/png;base64,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" />
            <img src="data:image/png;base64,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" />
          </div>
          <h3 style={{ fontSize: 15, wordSpacing: 5 }}>KEEP IN TOUCH</h3>
          <div className="logo">
            <img src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png" />
            <img src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png" />
            <img src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png" />
            <img src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png" />
          </div>
        </div>
        <div id="guarantee">
          <div className="flex">
            <img
              style={{ width: 70, height: 60, marginTop: 10 }}
              src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
            />
            <p>
              <b>100% ORIGINAL</b> guarantee for <br />
              all products at Myntra.com
            </p>
          </div>
          <div className="flex1">
            <img
              style={{ width: 50, height: 60, marginTop: 10, marginLeft: 12 }}
              src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png"
            />
            <p style={{ marginLeft: 18 }}>
              <b>Return within 30 days</b> of <br />
              recieving your order
            </p>
          </div>
        </div>
      </div>
      <div className="footer2">
        <p>Copyright@Myntra.com</p>
      </div>
    </div>
  );
};

export default Footer;
