import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";



export const LoginContext = createContext()

export function LoginContextProvider ({children}){

let [registredUser, setRegistredUser] = localStorage.getItem('user') ? useState(JSON.parse(localStorage.getItem('user',))) : useState([{username: 'david', password: 'k'}])
useEffect(()=>{
    localStorage.setItem('user', JSON.stringify(registredUser))
},[registredUser])

let [accessGranted, setAccessGranted] = useState(false)



return(
    <>
    <LoginContext.Provider value={{registredUser, setRegistredUser, accessGranted, setAccessGranted}}>{children}</LoginContext.Provider>
    </>
)}