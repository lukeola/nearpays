import React, { useState } from 'react'
// import { Alert} from 'react-bootstrap'
import { Navbg } from '../navbar/NavStyles';
import { Link } from 'react-router-dom';
import  axios  from 'axios';
// import { connect } from 'react-redux';
// import { setAlert } from '../../actions/alert';
// import { encodeBase64 } from 'bcryptjs';


const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjozMSwiaXNTZWNvbmRGYWN0b3JBdXRoZW50aWNhdGVkIjp0cnVlLCJyb2xlIjp7ImlkIjoic3VwZXItYWRtaW4iLCJ0YWciOiJhZG1pbiIsIm5hbWUiOiJTdXBlciBBZG1pbiIsInN0YXR1cyI6dHJ1ZSwicGVybWl0aW9ucyI6W10sImNyZWF0ZWRfYXQiOiIyMDIzLTAyLTEwVDE5OjA3OjIyLjA5OVoiLCJ1cGRhdGVkX2F0IjoiMjAyMy0wMi0xMFQxOTowNzoyMi4wOTlaIn0sImlhdCI6MTY3ODU2MDUwM30.V5p9bsATvTerrvwMh1faVGEgiDfYrUrs7K50hE4EKzE';

const authAxios = axios.create({
  baseURL: 'https://www.api.nearpays.com/',
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
})
const Signup = () =>{

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
    fullname: '',
    phone: '',
    address:''
    
  })


  const { username, email, password, password2, fullname, phone, address } = formData

  const onChange = e =>
    setFormData({...formData, [e.target.name]: e.target.value})
  
  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
    console.log('Passwords do not match')
    } else {
      const newUser = {
        username,
        email,
        password,
        fullname,
        phone,
        address
      }
      // axios.defaults.withCredentials = true;
      
      try {
        // const config = {
        //   headers: {
        //     'Content-Type': 'application/json'
        //   }
        // }
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        // headers.append('Authorization', 'Basic ' + encodeBase64(username + ":" +  password));
        headers.append('Origin', 'http://127.0.0.1:3001/api/users');
        
        const body = JSON.stringify(newUser);

        const result = await authAxios.get('/user', body);
        console.log(result)

      } catch (error) {
        console.log(error)
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
                
                <input 
                  className='sign-in-input'
                  type="email" 
                  placeholder='Enter Your Email' 
                  required
                  name='email'
                  value={email}
                  onChange={e => onChange(e)}
                 
                  >
                
                </input>

                <input 
                  className='sign-in-input'
                  type="text" 
                  placeholder="Enter Your Username" 
                  required
                  name='username'
                  value={username}
                  onChange={e => onChange(e)}>
                </input>


                <input 
                  className='sign-in-input'
                  type="text" 
                  placeholder="Enter Your Full Name" 
                  required
                  name='fullname'
                  value={fullname}
                  onChange={e => onChange(e)}>
                </input>

                <input 
                  className='sign-in-input'
                  type="phone" 
                  placeholder="Enter Your Phone Number" 
                  required
                  name='phone'
                  value={phone}
                  onChange={e => onChange(e)}>
                </input>

                <input 
                  className='sign-in-input'
                  type="address" 
                  placeholder="Enter Your Address" 
                  required
                  name='address'
                  value={address}
                  onChange={e => onChange(e)}>
            </input>
            
            <input 
                  className='sign-in-input'
                  type="password" 
                  placeholder="Enter Your Password" 
                  required
                  name='password'
                  value={password}
                  onChange={e => onChange(e)}>
            </input>
            

            <input 
                  className='sign-in-input'
                  type="password" 
                  placeholder="Comfirm Your Password" 
                  required
                  name='password2'
                  value={password2}
                  onChange={e => onChange(e)}>
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




