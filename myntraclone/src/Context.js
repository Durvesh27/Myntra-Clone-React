import axios from "axios";
import { useEffect, useState } from "react";
import { useReducer } from "react";
import { createContext } from "react";

export const AuthContext=createContext();

const initialValue={user:null}

function reducer(state,action){
switch(action.type){
case "LOGIN":
return {...state,user:action.payload}
case "LOGOUT":
return {...state,user:null}
default:
return state
}
}

const AuthProvider=({children})=>{
const[state,dispatch]=useReducer(reducer,initialValue)
const[count,setCount]=useState(0)
const[productsUpdated,setProductsUpdated]=useState(false)

function login(activeUser){
dispatch({
type:"LOGIN",
payload:activeUser
})
}

function logout(){
localStorage.removeItem("Token1")
dispatch({
type:"LOGOUT",
})
}



useEffect(() => {
    const getCurrentUserData = async () => {
      const token = JSON.parse(localStorage.getItem("Token1"));
      if(token){
        try{
      const response = await axios.post(
        "http://localhost:8001/getCurrentUser",
        { token }
      );
      if (response.data.success) {
        dispatch({
          type: "LOGIN",
          payload: response.data.user
        });
      } else {
        dispatch({
          type: "LOGOUT",
        });
      }
    }
    catch(error){
    console.log(error)
    }
    }
    };
    getCurrentUserData();
  }, [])

return(
<AuthContext.Provider value={{state,login,logout,count,setCount,productsUpdated,setProductsUpdated}}>
    {children}
</AuthContext.Provider>
)


}
export default AuthProvider;