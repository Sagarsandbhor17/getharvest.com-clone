import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import "../styles/LoginSignup.css"
import axios from "axios";
import { emailValidator, passwordValidator } from "./validate";
import {GoogleLogin} from 'react-google-login'
import { gapi } from "gapi-script"
import { AuthContext } from "../components/AppContext";
// import { useDispatch } from "react-redux";


const LoginSignup = () => {


  const[user, setUser] = useState([])
  const navigate = useNavigate()

useEffect(()=>{
  axios.get("http://localhost:8080/users")
    .then((res)=>{
      setUser(res.data)
    })
}, [])

const [input, setInput] = useState({ email: '', password: ''});

const [errorMessage, seterrorMessage] = useState('');
const [successMessage, setsuccessMessage] = useState('');

const handleChange = e => {
  setInput({ ...input, [e.target.name]: e.target.value });
};

const formSubmitter = e => {
  e.preventDefault();
  setsuccessMessage('');
  if (!emailValidator(input.email)) 
  return seterrorMessage('Please enter valid email id');

  if (!passwordValidator(input.password))
    return seterrorMessage('Please enter a valid password');

    user.map((e)=>{
      if(input.email !== e.email || input.password !== e.password){
        return seterrorMessage('Invalid email or password');
      }else{
        navigate('/');
      }
  })
};

        // Login with google  functions

        const { loginButton,clientId,onLoginSuccess,onFailureSuccess} = useContext(AuthContext);
        useEffect(() => {
            function start() {
              gapi.client.init({
                clientId: process.env.REACT_PUBLIC_GOOGLE_CLIENT_ID,
                scope: 'email',
              });
            }
        
            gapi.load('client:auth2', start);
          }, []);
  return (
    <div className='Login_main_container'>
        <h1>Sign in to Harvest</h1>
        {errorMessage.length > 0 && <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>}
							{successMessage.length > 0 && (
								<div style={{ marginBottom: '10px', color: 'green' }}>{successMessage}</div>
							)}
       <div className='input_div'>
             <div className='google_div'>
             {loginButton ? 
                 <GoogleLogin
                 clientId={clientId}
                buttonText="sign in google"
                onSuccess={onLoginSuccess}
                onFailure={onFailureSuccess}
                cookiePolicy={'single_host_origin'}
                 /> : null }
             </div>
             <p>OR</p>
             <div className='login_div'>
                <input placeholder='Work Email' type="email" 
                        name="email" 
                        onChange={handleChange} /> <br />
                <input placeholder='Password' type="password"
                         name="password" 
                        onChange={handleChange} /> <br />
                        
                <button onClick={formSubmitter} >Sign In</button>
             </div>
       </div>
       <div className='registration_div'>
                <p>Forgot Password?</p>
                <p onClick={()=>{navigate("/signup")}}>New Registration</p>
             </div>
    </div>
  )
}

export default LoginSignup