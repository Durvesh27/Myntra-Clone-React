import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import { AuthContext } from "../../Context";
import { toast } from "react-hot-toast";
import axios from "axios";

const ProfileBox = ({ showProfile, setShowProfile }) => {
  const { state, login } = useContext(AuthContext);
  const [userData, setUserData] = useState({name:"",email:"",password:""});
  const router = useNavigate();

  useEffect(() => {
    if (!state.user) {
      router("/");
    }
  }, []);

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    const token=JSON.parse(localStorage.getItem("Token1"))
    const { data } =await axios.post("http://localhost:8001/update-profile", {
      userData,token
    });
    if (data.success) {
      login(data.updatedDetails);
      setUserData({});
      setShowProfile(!showProfile);
      toast.success("Profile updated");
    }else{
      toast.error(data.message)
    }
  };

  return (
    <div>
      <div className="opacity"></div>
      <div className="profile-form">
        <h2 style={{ textAlign: "center" }}>Profile</h2>
        <form onSubmit={handleSubmit}>
          <label>Change Name</label>
          <br />
          <input
            type="text"
            name="name"
            onChange={handleChange}
            className="add-input"
          />
          <br />
          <label>Change Email ID</label>
          <br />
          <input
            type="text"
            name="email"
            onChange={handleChange}
            className="add-input"
          />
          <br />
          <label>Change Password</label>
          <br />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            className="add-input"
          />
          <br />
          <input type="submit" value="Submit" className="add-btn" />
        </form>
      </div>
    </div>
  );
};

export default ProfileBox;
