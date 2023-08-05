import React from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Register = () => {
  const router = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    enteredPassword: "",
    confirmedPassword: "",
    role:"Buyer"
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userData.name &&
      userData.email &&
      userData.enteredPassword &&
      userData.confirmedPassword
    ) {
      if (userData.enteredPassword === userData.confirmedPassword) {
        const array = JSON.parse(localStorage.getItem("Users")) || [];
        const data = {
          name: userData.name,
          email: userData.email,
          password: userData.enteredPassword,
          role:userData.role,
          cart: [],
        };

        if (array.length >= 0) {
          for (let i = 0; i < array.length; i++) {
            if (
              array[i].email === userData.email &&
              array[i].password === userData.enteredPassword
            ) {
              setUserData({
                name: "",
                email: "",
                enteredPassword: "",
                confirmedPassword: "",
              });
              return alert("Account Already Exist");
            }
          }
        }

        array.push(data);
        localStorage.setItem("Users", JSON.stringify(array));
        alert("Account Created Successfully");
        router("/login");
        setUserData({
          name: "",
          email: "",
          enteredPassword: "",
          confirmedPassword: "",
        });
      } else {
        return alert("Please check entered password");
      }
    } else {
      alert("Please fill all the fields");
    }
  };

  function selectRole(e){
  setUserData({...userData,role:e.target.value})
  }

  return (
    <div className="form-body">
      <div className="mainBox">
        <img
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/c2be095d-a4fb-4981-bdad-9d69ea189da31675792659902-offer-banner-500-600x240-code-_-MYNTRA200.jpg"
          alt=""
        />
        <div className="second">
          <div>
            <b>Sign-up</b>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={userData.name}
              placeholder="Enter your name"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              value={userData.email}
              placeholder="Enter Email Address"
              onChange={handleChange}
            />
            <select onChange={selectRole} value={userData.role}>
              <option >Buyer</option>
              <option >Seller</option>
            </select>
            <input
              type="password"
              name="enteredPassword"
              value={userData.enteredPassword}
              placeholder="Create New password"
              onChange={handleChange}
            />
            <input
              type="password"
              name="confirmedPassword"
              value={userData.confirmedPassword}
              placeholder="Confirm password"
              onChange={handleChange}
            />
            <p style={{ fontSize: "14px" }}>
              By continuing,i agree to the <b>Terms of use</b> &amp;{" "}
              <b>Privacy policy</b>{" "}
            </p>
            <input type="submit" value="CONTINUE" className="submit-btn" />
          </form>

          <p style={{ fontSize: "14px" }}>
            Already have an account{" "}
            <b onClick={() => router("/register")}>LOGIN</b>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
