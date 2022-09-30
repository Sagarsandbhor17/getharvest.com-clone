import React, { useState } from 'react'
import "../styles/Signup.css"
import axios from 'axios';
import { useEffect } from 'react';
import { emailValidator, passwordValidator } from "./validate";
import { Navigate } from 'react-router';
const Signup = () => {

  const [errorMessage, seterrorMessage] = React.useState('');
	const [successMessage, setsuccessMessage] = React.useState('');

	

  const [formData, setFormData] = useState({
    id: "",
    firstname: "",
    lastname: "",
    email: "",
     company: "",
    password: ""
});

const formSubmitter = e => {
  axios.post("http://localhost:8080/users", formData)
    .then(()=>{
        setFormData({
          id: "",
          firstname: "",
          lastname: "",
          email: "",
          company: "",
          password: ""
        })
    })
    .then(()=>{
        getData();
    })



  setsuccessMessage('');
  if (!emailValidator(formData.email)) return seterrorMessage('Please enter valid email id');

  if (!passwordValidator(formData.password))
    return seterrorMessage(
      'Password should have minimum 8 character with the combination of uppercase, lowercase, numbers and specialcharaters'
    );

  if(formData.firstname === ""){
   
  }
  if(formData.lastname === ""){
    return seterrorMessage("Please enter the lastname")
  }
  if(formData.mobile === ""){
    return seterrorMessage("Please enter the mobile number")
  }
  Navigate('/signin')
  }

const [data, setData] = useState({});

const handleChange = (e)=>{
    const {id, value} = e.target;
    setFormData({
        ...formData,
        [id]:value
    })
}


useEffect(()=>{
    getData();
}, []);

const getData = ()=>{
    axios.get("http://localhost:8080/users")
    .then((res)=>{
        setData(res.data)
    })
}
  return (
    <div className='signup_main_container'>
              <h1>Get a FREE Trial</h1>
               <p>No credit card required</p>
               {errorMessage.length > 0 && <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>}
							{successMessage.length > 0 && (
								<div style={{ marginBottom: '10px', color: 'green' }}>{successMessage}</div>
							)}
        <div className='signup_google_div'>
            <h2>Signup with google</h2>
        </div>
            <p>OR</p>
            <div className='signup_input_div'>
               <div className='signup_company_input'>
               <input type="text" placeholder='First Name'
               id="firstname"
               onChange={handleChange} 
             value={formData.firstname} />

               <input type="text" placeholder='Last Name'
               id="lastname"
               onChange={handleChange} 
             value={formData.lastname} />
               </div>
               <div className='signup_name_input'>
               <input type="text" placeholder='Company name' 
               id="company"
               onChange={handleChange} 
             value={formData.company} />
               <input type="email" placeholder='Work mail'
               id="email"
               onChange={handleChange} 
             value={formData.email}  />
               </div>
               <div className='submit_div'>
                 <input type="password" placeholder='Password' id="password" onChange={handleChange} 
             value={formData.password} /><br />
                 <button onClick={formSubmitter}>Create my account</button>
               </div>
            </div>

    </div>
  )
}

export default Signup