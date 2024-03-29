import React, {   useState } from 'react'
import { Alert} from 'react-bootstrap'
import { Navbg } from '../navbar/NavStyles';
import { useNavigate } from 'react-router-dom';
import './signin.css'
import axios  from 'axios';



export default function Signin() {

  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [signinStatus, setSigninStatus] = useState('')
  const navigate = useNavigate()


  axios.defaults.withCredentials = true;

  const body = {
    username: username,
    password: password,
  }
          const config = {
          headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': 'http://127.0.0.1:3001/'
            },
            method: 'POST',
          
        }

const signIn = (e) =>{
  e.preventDefault();
  axios.post("http://127.0.0.1:3001/api/profile", body, config).then((response) => {
    if(response.data.message){
      setSigninStatus(response.data.message)
    }else{
      // setSigninStatus(navigate('/'))
      console.log(response)
      // setSigninStatus(response.data[0].email)
    }
  })
}

 
// useEffect(() => {
//   authAxios.get("profile/").then((response) => {
//     console.log(response)
//   })

//   }, [])

  return (
    <>
    <Navbg/>
    <div className='sign-in-section'>
        <div className='sign-in-container'>
            <form className='sign-in-form'>
                <h1 className='auth-header'>Login</h1>

               

                {  <Alert variant="danger" style={{padding:'0', top:'125px', position:'absolute', width:'100%', textAlign:'center'}}> {signinStatus}</Alert>}
                <input 
                className='sign-in-input'
                type="email" 
                placeholder='Enter your Email/Username' 
                onChange={(e) => {setUsername(e.target.value)}}
                >
                </input>

                <input 
                className='sign-in-input'
                type="password" 
                placeholder="Enter Your Password" 
                onChange={(e) => {setPassword(e.target.value)}}
               >
                </input>

                <div className='btn-section'>
                <button id='sign-in-btn1' type='submit' onClick={signIn}> Sign In</button>
              
                </div>
                <p id='sign-up-text'>Don't have an account? <a href='/sign-up'>Sign up</a></p>
            </form>
           
        </div>
    </div>

    </>
  )
}



   //   try {
    //     setError("")
    //     setLoading(true)
    //     await signin(emailRef.current.value, passwordRef.current.value)
    //     navigate('/profile')
    //   } catch {
    //     setError("Failed to sign in")
    //   }
    //   setLoading(false)
    // }
