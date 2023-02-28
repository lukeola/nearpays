import React from 'react'
import { SuccessContainer, SuccessHeader, SuccessIcon, SuccessPage, SuccessText } from './RegisterElements'
import Successimg from '../../images/Tickcircle.png'

const Register3 = () => {
  return (
    <>
    <SuccessContainer/>
    
        <SuccessPage>
            <SuccessIcon>
                <img src={Successimg} alt='' style={{objectFit:'contain', height:'100%', width:'100%'}}/>
            </SuccessIcon>
            <SuccessHeader>Registration Successfull.</SuccessHeader>
            <SuccessText>
             <a href='/sign-in' style={{textDecoration:'none', marginRight:'5px'}}>Login</a> to your dashboard
            </SuccessText>
        </SuccessPage>
 
    </>
  )
}

export default Register3