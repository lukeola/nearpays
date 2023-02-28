import React, { useState } from 'react'
import { Alert} from 'react-bootstrap'
import { Navbg } from '../navbar/NavStyles';
import { Link, useNavigate } from 'react-router-dom';
import  Axios  from 'axios';





export default function Signup(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [fullname, setFullname] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [registerStatus, setRegisterStatus] = useState('')
  const navigate = useNavigate()

  Axios.defaults.withCredentials = true;
  
  const signUp = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/sign-up", {
      email: email,
      username: username,
      password: password,
      fullname: fullname,
      phone: phone,
      address: address

    }).then((response) => {
      if(response.data.message){
        setRegisterStatus(response.data.message)
      }else{
        setRegisterStatus(navigate('/success'))
      }
    })
  }

  
  return (
    <>
    <Navbg/>
    <div className='sign-up-section' >
        <div className='sign-up-container'>
            <form className='sign-in-form'>
                <h1 className='auth-header'>Register</h1>
                
                {<Alert variant="danger" style={{padding:'0', top:'125px', position:'absolute', width:'100%', textAlign:'center'}}>{registerStatus}</Alert>}
                
                <input 
                  className='sign-in-input'
                  type="email" 
                  placeholder='Enter your Email' 
                  required
                  onChange={(e) => {setEmail(e.target.value)}}
                 
                  >
                
                </input>

                <input 
                  className='sign-in-input'
                  type="text" 
                  placeholder="Enter Username" 
                  required
                  onChange={(e) => {setUsername(e.target.value)}}
                  >
                </input>

                <input 
                  className='sign-in-input'
                  type="password" 
                  placeholder="Enter Your Password" 
                  required
                  onChange={(e) => {setPassword(e.target.value)}}
                  >
                </input>

                {/* <h1 className='auth-header'>Tell us a little more about yourself</h1> */}

                <input 
                  className='sign-in-input'
                  type="text" 
                  placeholder="Enter Your Full Name" 
                  required
                  onChange={(e) => {setFullname(e.target.value)}}
                  >
                </input>

                <input 
                  className='sign-in-input'
                  type="phone" 
                  placeholder="Enter Your Phone Number" 
                  required
                  onChange={(e) => {setPhone(e.target.value)}}
                  >
                </input>

                <input 
                  className='sign-in-input'
                  type="address" 
                  placeholder="Enter Your Address" 
                  required
                  onChange={(e) => {setAddress(e.target.value)}}
                  >
                </input>



                <button className='sign-up-btn' type='submit' onClick={signUp}> Sign Up</button>
                <p id='sign-in-text'>Already have an account <Link to="/sign-in">Sign In</Link></p>
            </form>
        </div>
    </div>
    </>
  )
}





// async function handleSubmit(e) {
  // 

  //     if (passwordRef.current.value !== passwordconfirmRef.current.value) {
  //       return setError("Passwords Do Not Match")
  //     }

  //     try {
  //       setError('')
  //       await signup(emailRef.current.value, passwordRef.current.value)
  //       navigate('/profile')
  //     } catch {
  //       setError("Failed to create an account")
  //     }
     
    // }