import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";

export const AuthContext=createContext();

const initialValue={user:null}

function reducer(state,action){
switch(action.type){
case "LOGIN":
return {user:action.payload}
case "LOGOUT":
return {user:null}
default:
return state
}
}

const AuthProvider=({children})=>{
const[state,dispatch]=useReducer(reducer,initialValue)

function login(activeUser){
localStorage.setItem("Current-User",JSON.stringify(activeUser))
dispatch({
type:"LOGIN",
payload:activeUser
})
}

function logout(){
localStorage.removeItem("Current-User")
dispatch({
type:"LOGOUT",
})
}

useEffect(()=>{
const logged=JSON.parse(localStorage.getItem('Current-User')) 
if(logged){
dispatch({
type:"LOGIN",
payload:logged
})
}
},[])

return(
<AuthContext.Provider value={{state,login,logout}}>
    {children}
</AuthContext.Provider>
)


}
export default AuthProvider;