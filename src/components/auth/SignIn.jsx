import React, { useState } from 'react'
import {auth, signInWithGoogle} from '../firebase'
import {signInWithEmailAndPassword} from "firebase/auth"
import AuthDetails from './AuthDetails';
import './singin.css'


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState();

    const SignIn = (e) => {
      //todo: sign in
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      })
    }

  return (
    <div className='sign-in-container'>
        <form onSubmit={SignIn} className='sign-in-form'>
            <h1 className='auth-header'>Login</h1>
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

            <button id='sign-in-btn1' type='submit'> Sign In</button>
            <button id='sign-in-btn2' onClick={signInWithGoogle}> Sign In With Google</button>
            <p id='sign-up-text'>Don't have an account <a href='/sign-up'>Sign up</a></p>
        </form>
        <AuthDetails/>
    </div>
  )
}

export default SignIn