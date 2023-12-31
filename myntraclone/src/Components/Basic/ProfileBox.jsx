import React, { useContext, useEffect } from "react";
import { useState } from "react";
import "./Profile.css";
import { AuthContext } from "../../Context";
import { toast } from "react-hot-toast";
import api from "../Api Config";

const ProfileBox = ({ showProfile, setShowProfile }) => {
  const { login } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("Token1"));
    const { data } = await api.post("/all/update-profile", {
      userData,
      token,
    });
    if (data.success) {
      login(data.updatedDetails);
      setUserData({});
      setShowProfile(!showProfile);
      toast.success("Profile updated");
    } else {
      toast.error(data.message);
    }
  };

  return (
    <div>
      <div className="opacity"></div>
      <div className="profile-form">
        <h2
          style={{
            textAlign: "center",
            margin: "15px 0",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <span>Edit Profile</span>
          <span
            style={{ fontSize: "18px", marginLeft: "200px" }}
            onClick={() => setShowProfile(!showProfile)}
          >
            X
          </span>
        </h2>
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
