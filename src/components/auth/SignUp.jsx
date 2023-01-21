import React, { useState } from 'react'
import {auth} from '../firebase'
import {createUserWithEmailAndPassword} from "firebase/auth"

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState();

    const SignUp = (e) => {
      //todo: sign up
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      })
    }

  return (
    <div className='sign-up-container'>
        <form className='sign-in-form' onSubmit={SignUp}>
            <h1 className='auth-header'>Register</h1>
            <input 
            className='sign-in-input'
            type="email" 
            placeholder='Enter your Email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}>
            </input>

            <input 
            className='sign-in-input'
            type="password" 
            placeholder="Enter Your Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}>
            </input>

            <input 
            className='sign-in-input'
            type="password" 
            placeholder="Confirm Your Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}>
            </input>

            <button id='sign-up-btn1' type='submit'> Sign Up</button>
            <p id='sign-in-text'>Already have an account <a href='/sign-in'>Sign in</a></p>
        </form>
    </div>
  )
}

export default SignUp