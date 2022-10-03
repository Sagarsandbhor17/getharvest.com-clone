import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'


 export const AuthContext = createContext()

const AppContext = ({children}) => {

  const navigate = useNavigate()
 
  const [loginButton, setLoginButton] = useState(true)
  const [logoutButton, setLogoutButton] = useState(false)
  const clientId  = "247283234728-jb1rhide4jk8hscjjsbj87j7ngg2a87s.apps.googleusercontent.com";

  const onLoginSuccess = (res)=>{
      console.log("Login success", res.profileObj.name)
      setLoginButton(false)
      setLogoutButton(true)
      navigate("/Customers")
  }

  const onFailureSuccess = (res)=>{
      console.log("Login Failed", res)
  }
  const onLogoutSuccess = (res)=>{
      setLoginButton(true)
      setLogoutButton(false)
  }

  return (
    <AuthContext.Provider value={{loginButton,logoutButton,clientId,onLoginSuccess,onFailureSuccess,onLogoutSuccess}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AppContext