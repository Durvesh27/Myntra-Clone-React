import React from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from 'axios'
import { useContext } from "react";
import { AuthContext } from "../../Context";
import { useEffect } from "react";
const Register = () => {
  const router = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmedPassword: "",
    role:"Buyer"
  });
  const{state}=useContext(AuthContext)
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (
      userData.name &&
      userData.email &&
      userData.role &&
      userData.password &&
      userData.confirmedPassword
    ) {
      if (userData.password === userData.confirmedPassword) {
      const response=await axios.post("http://localhost:8001/register",{userData})
      if(response.data.success){
        setUserData({
          name: "",
          email: "",
          role:"Buyer",
          password: "",
          confirmedPassword: "",
        });
        toast.success(response.data.message);
        router("/login");
      }else {
        toast.error(response.data.message);
      }
      }
      else {
        toast.error("Password & Confirm Password not matched");
      }
    }else{
      toast.error("All Fields are Compulsory")
    }
  };

  function selectRole(e){
  setUserData({...userData,role:e.target.value})
  }
  useEffect(()=>{
    if(state?.user?.name){
    router("/")
    }
    },[state])
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
            <select onChange={selectRole} value={userData.role} className="select-input">
              <option >Buyer</option>
              <option >Seller</option>
            </select>
            <input
              type="password"
              name="password"
              value={userData.password}
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
