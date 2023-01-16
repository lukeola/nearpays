import React from 'react'
import { FormButton, FormContainer, FormHeader, FormInput, Formwrapper, RegisterContainer } from './RegisterElements'

const Register = () => {
  return (
    <>
    <RegisterContainer/>
    <FormContainer>
        <FormHeader>Tell us a little more about yourself</FormHeader>
        <Formwrapper>
          <FormInput placeholder='Full Name'/>
          <FormInput placeholder='Phone Number'/>
          <FormInput placeholder='Address'/>
          <FormInput placeholder='Email Address'/>
          <a href='/register-page-2'><FormButton>Send</FormButton></a>
        </Formwrapper>
    </FormContainer>
    </>
  )
}

export default Register