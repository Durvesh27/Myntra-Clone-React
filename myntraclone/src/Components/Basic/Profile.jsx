import React, { useContext } from "react"
import './Profile.css'
import ProfileBox from "./ProfileBox"
import { useState } from "react"
import { AuthContext } from "../../Context"
const Profile = () => {
const[showProfile,setShowProfile]=useState(false)
const{state}=useContext(AuthContext)
  return (
<div>
  <div className="profile-page">
    <div className="profile">
      <h3>Account</h3>
      <p className="fs-12 mb-15">{state?.user?.name}</p>
      <div className="section">
        <div className="profile-left">
          <div className="ptb-20 fs-15 bb">Overview</div>
          <div className="ptb-20 bb">
            <p className="pb-15 fs-12">ORDERS</p>
            <p className="fs-15">Orders &amp; Returns</p>
          </div>
          <div className="ptb-20 bb">
            <p className="fs-12 pb-15">CREDITS</p>
            <p className="fs-15 pb-5">Coupons</p>
            <p className="fs-15 pb-5">Myntra Credit</p>
            <p className="fs-15 pb-5">MynCash</p>
          </div>
          <div className="ptb-20 bb">
            <p className="fs-12 pb-15">ACCOUNT</p>
            <p style={{color: '#14cda8', fontWeight: 700}} className="fs-15 pb-5">Profile</p>
            <p className="fs-15 pb-5">Saved Cards</p>
            <p className="fs-15 pb-5">Saved VPA</p>
            <p className="fs-15 pb-5">Addresses</p>
            <p className="fs-15 pb-5">Myntra Insider</p>
          </div>
          <div className="ptb-20 ">
            <p className="fs-12 pb-15">LEGAL</p>
            <p className="fs-15 pb-5">Terms of Use</p>
            <p className="fs-15 pb-5">Privacy policy</p>
          </div>
        </div>
        <div className="profile-right">
          <p className="fs-18 fw-600 bb ptb-20 pl-20 mb-30">Profile Details <span style={{marginLeft:"330px",color:"#FF3E6C",fontSize:"16px"}} onClick={()=>{setShowProfile(!showProfile)}}>Edit</span></p>
          <ul className="ls-none fl-left lh-47 ">
            <li>Full Name</li>
            <li>Mobile Number</li>
            <li>Email ID</li>
            <li>Gender</li>
            <li>Date of Birth</li>
            <li>Location</li>
            <li>Alternate Mobile</li>
            <li>Hint Name</li>
          </ul>
          <ul className="ls-none fl-right lh-47">
            <li>{state?.user?.name}</li>
            <li>8369041343</li>
            <li>{state?.user?.email}</li>
            <li>MALE</li>
            <li>06/10/1998</li>
            <li>- Not added -</li>
            <li>- Not added -</li>
            <li>- Not added -</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {
    showProfile &&  <ProfileBox showProfile={showProfile} setShowProfile={setShowProfile}/>
  }

</div>

  )
}

export default Profile
