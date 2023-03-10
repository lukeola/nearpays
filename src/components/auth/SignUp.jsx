import React, { useState } from 'react'
// import { Alert} from 'react-bootstrap'
import { Navbg } from '../navbar/NavStyles';
import { Link } from 'react-router-dom';
import  Axios  from 'axios';





const Signup = () =>{

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [username, setUsername] = useState('')
  const [fullname, setFullname] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Passwords do not match');
    } else {
      const newUser = {
        username,
        email,
        password,
        fullname,
        phone,
        address
      }
      Axios.defaults.withCredentials = true;

      try {
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        }
        const body = JSON.stringify(newUser);

        const res = await Axios.post('http://127.0.0.1:3001/api/users/', body);
        console.log(res.data)

      } catch (err) {
        console.error(err)
      }
    }
}


  
  return (
    <>
    <Navbg/>
    <div className='sign-up-section' >
        <div className='sign-up-container'>
            <form className='sign-in-form'>
                <h1 className='auth-header'>Register</h1>
                
                {/* {<Alert variant="danger" style={{padding:'0', top:'125px', position:'absolute', width:'100%', textAlign:'center'}}>{registerStatus}</Alert>} */}
                
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
            
            <input 
                  className='sign-in-input'
                  type="password" 
                  placeholder="Enter Your Password" 
                  required
                  onChange={(e) => {setPassword(e.target.value)}}
                  >
            </input>
            

            <input 
                  className='sign-in-input'
                  type="password" 
                  placeholder="Comfirm Your Password" 
                  required
                  onChange={(e) => {setPassword2(e.target.value)}}
                  >
                </input>



                <button className='sign-up-btn' type='submit' onClick={onSubmit}> Sign Up</button>
                <p id='sign-in-text'>Already have an account <Link to="/sign-in">Sign In</Link></p>
            </form>
        </div>
    </div>
    </>
  )
}

export default Signup;




