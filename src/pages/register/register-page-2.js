import React from 'react'
import { FileContainer, Filetext, FormButton,  FormContainer2, FormHeader, FormInput, Formwrapper, RegisterContainer } from './RegisterElements'

const Register2 = () => {
  return (
    <>
    <RegisterContainer/>
    <FormContainer2>
        <FormHeader>Let’s Know You - Virtual POS KYC</FormHeader>
        <Formwrapper>
          <FormInput placeholder='BVN'/>
          <FormInput placeholder='NIN'/>
          <FileContainer>
            <Filetext>
                If you have a business <span style={{color:'#2DCA72'}}>kindly upload your CAC Doc</span> (optional). 
                Supported formats: png, jpeg,pdf. Maximum size 5MB
            </Filetext>
          </FileContainer>
          <a href='/register-page-3'><FormButton>Submit</FormButton></a>
        </Formwrapper>
    </FormContainer2>
    </>
  )
}

export default Register2