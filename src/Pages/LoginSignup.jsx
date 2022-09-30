import React from 'react'
import "../styles/LoginSignup.css"
const LoginSignup = () => {
  return (
    <div className='Login_main_container'>
        <h1>Sign in to Harvest</h1>
       <div className='input_div'>
             <div className='google_div'>sign in with google</div>
             <p>OR</p>
             <div className='login_div'>
                <input placeholder='Work Email' type="email" /> <br />
                <input placeholder='Password' type="password" /> <br />
                <button>Sign In</button>
             </div>
       </div>
       <div className='registration_div'>
                <p>Forgot Password?</p>
                <p>New Registration</p>
             </div>
    </div>
  )
}

export default LoginSignup