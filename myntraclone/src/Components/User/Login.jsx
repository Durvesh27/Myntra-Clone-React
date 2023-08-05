import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context";
import { toast } from "react-hot-toast";

const Login = () => {
  const [currentUserData, setCurrentUserData] = useState({
    email: "",
    password: "",
  });
  const router = useNavigate();
  const{login,state}=useContext(AuthContext)
  const handleChange = (e) => {
    setCurrentUserData({ ...currentUserData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUserData.email && currentUserData.password) {
      const getData = JSON.parse(localStorage.getItem("Users"));
      let flag = false;
      for (let i = 0; i < getData.length; i++) {
        if (
          currentUserData.email === getData[i].email &&
          currentUserData.password === getData[i].password
        ) {
          flag = true;
          login(getData[i])
          break;
        }
      }
      if (flag === false) {
        setCurrentUserData({ email: "", password: "" });
        return alert("Invalid credentials");
      } else {
        // localStorage.setItem("Current-User", JSON.stringify(currentUserData));
        toast.success("Logged in successfully");
        router("/");
        setCurrentUserData({ email: "", password: "" });
      }
      
    } else {
      toast.error("Please fill all the fields");
    }
  };
  return (
    <div className="form-body">
      <div className="mainBox">
        <img
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/c2be095d-a4fb-4981-bdad-9d69ea189da31675792659902-offer-banner-500-600x240-code-_-MYNTRA200.jpg"
          alt
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
              value={currentUserData.email}
            />
            <input
              type="password"
              placeholder="Enter your password"
              onChange={handleChange}
              name="password"
              value={currentUserData.password}
            />
            <p style={{ fontSize: "14px", margin: "20px 0" }}>
              By continuing,i agree to the <b>Terms of use</b> &amp;{" "}
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
