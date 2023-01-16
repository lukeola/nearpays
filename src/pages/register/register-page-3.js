import React from 'react'
import { RegisterContainer, SuccessHeader, SuccessIcon, SuccessPage, SuccessText } from './RegisterElements'
import Successimg from '../../images/Tickcircle.png'

const Register3 = () => {
  return (
    <>
    <RegisterContainer/>
    
        <SuccessPage>
            <SuccessIcon>
                <img src={Successimg} alt=''/>
            </SuccessIcon>
            <SuccessHeader>Your request has been recieved.</SuccessHeader>
            <SuccessText>
            A support team member will reach out to you in 24 hours
            </SuccessText>
        </SuccessPage>
 
    </>
  )
}

export default Register3