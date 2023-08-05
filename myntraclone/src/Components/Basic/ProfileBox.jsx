import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Profile.css'
import { AuthContext } from '../../Context'
import { toast } from 'react-hot-toast'

const ProfileBox = ({showProfile,setShowProfile}) => {
    const{state,login}=useContext(AuthContext)
    const[userData,setUserData]=useState({})
    const router=useNavigate()
    useEffect(()=>{
    const current=JSON.parse(localStorage.getItem("Current-User"))
    if(!current)  {
    router("/")
    }
    const users=JSON.parse(localStorage.getItem("Users"))
    if(current && users){
        users.forEach((pro)=>{
           if( pro.email===current.email && pro.password===current.password){
            setUserData(pro)
           }
        })
    }
    },[state])
    
    const handleChange=(event)=>{
        setUserData({...userData,[event.target.name]:event.target.value})
        }
    const handleSubmit=(e)=>{
    e.preventDefault();
    const current=JSON.parse(localStorage.getItem("Current-User"))
    const users=JSON.parse(localStorage.getItem("Users"))
    users.forEach((pro)=>{
        if( pro.email===current.email && pro.password===current.password){
         pro.name=userData.name;
         pro.password=userData.password;
         pro.email=userData.email;
         current.name=userData.name;
         current.password=userData.password
         current.email=userData.email
        }
     })
     login(current)
    //  localStorage.setItem("Current-User", JSON.stringify(current))
     localStorage.setItem("Users", JSON.stringify(users))
     setUserData({})
     setShowProfile(!showProfile)
     toast.success("Profile updated")
    }
    
  return (
    <div>
<div className="opacity"></div>
<div className='profile-form'>
<h2 style={{textAlign:"center"}}>Profile</h2>
<form onSubmit={handleSubmit}>
  <label>Change Name</label><br/>
  <input type="text" name="name" onChange={handleChange}  className='add-input'/><br/>
  <label>Change Email ID</label><br/>
  <input type="text" name="email" onChange={handleChange}  className='add-input'/><br/>
  <label>Change Password</label><br/>
  <input type="password" name="password" onChange={handleChange}  className='add-input' /><br/>
  <input type='submit' value="Submit" className='add-btn'/>
</form>
</div>
</div>

  )
}

export default ProfileBox
