import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useEffect } from "react";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const router = useNavigate();
  const{login,state}=useContext(AuthContext)

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    if (userData.email && userData.password) {
        const response = await axios.post("http://localhost:8001/login", { userData });
        if (response.data.success) {
            setUserData({ email: "", password: "" })
            router('/')
            toast.success(response.data.message)
            localStorage.setItem("Token1",JSON.stringify(response.data.token))
            login(response.data.user)
            console.log(response.data)
        } else {
            toast.error(response.data.message)
        }
        console.log(response,"working")
    } else {
        toast.error("All fields are mandtory.")
    }
  };
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
            <b>Login</b>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter Email Address"
              onChange={handleChange}
              name="email"
              value={userData.email}
            />
            <input
              type="password"
              placeholder="Enter your password"
              onChange={handleChange}
              name="password"
              value={userData.password}
            />
            <p style={{ fontSize: "14px", margin: "20px 0" }}>
              By continuing,i agree to the <b>Terms of use</b> 
              <b>Privacy policy</b>
            </p>
            <input type="submit" value="LOGIN" className="submit-btn" />
          </form>

          <p style={{ fontSize: "14px" }}>
            New to Myntra? <b onClick={() => router("/register")}>Sign-up</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
