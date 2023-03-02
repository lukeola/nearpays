import axios from "axios";
import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import {  useLocation, useNavigate } from "react-router-dom";
import { Navbg } from "../../components/navbar/NavStyles";
import "./update.scss"

const Update = () => {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "null",
    fullname: "",
    phone:"",
    address:""
  });
  const [error,setError] = useState(false)

  const location = useLocation();
  const navigate = useNavigate();

  const userId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3001/user/${userId}`, user);
      navigate("/profile");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };


  
  return (
    <>
    <Navbg/>
    <div className='sign-up-section' >
        <div className='sign-up-container'>
            <form className='sign-in-form'>
                <h2 className='auth-header'>Update your profile</h2>
                
                {<Alert variant="danger" style={{padding:'0', top:'125px', position:'absolute', width:'100%', textAlign:'center'}}>{error}</Alert>}
                
                <input 
                  className='sign-in-input'
                  type="email" 
                  placeholder='Enter your Email' 
                  required
                  name="email"
                  onChange={handleChange}
                 
                  >
                
                </input>

                <input 
                  className='sign-in-input'
                  type="text" 
                  placeholder="Enter Username" 
                  required
                  name="username"
                  onChange={handleChange}
                  >
                </input>

                <input 
                  className='sign-in-input'
                  type="password" 
                  placeholder="Enter Your Password" 
                  required
                  name="password"
                  onChange={handleChange}
                  >
                </input>

                {/* <h1 className='auth-header'>Tell us a little more about yourself</h1> */}

                <input 
                  className='sign-in-input'
                  type="text" 
                  placeholder="Enter Your Full Name" 
                  required
                  name="fullname"
                  onChange={handleChange}
                  >
                </input>

                <input 
                  className='sign-in-input'
                  type="phone" 
                  placeholder="Enter Your Phone Number" 
                  required
                  name="phone"
                  onChange={handleChange}
                  >
                </input>

                <input 
                  className='sign-in-input'
                  type="address" 
                  placeholder="Enter Your Address" 
                  required
                  name="address"
                  onChange={handleChange}
                  >
                </input>



                <button className='update-btn' type='submit' onClick={handleClick}> update</button>
                {/* <Link to="/profile">Back</Link> */}
              
            </form>
        </div>
    </div>
    </>
  )
}

export default Update;
