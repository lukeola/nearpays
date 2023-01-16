import React from 'react'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar/Navbar'
import { ContactButton, ContactContainer, ContactForm, ContactHeader, ContactInput, ContactLeft, ContactRight, ContactSocial, ContactText, ContactTextArea } from './ContactElements'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

const ContactUs = () => {
  return (
    <>
    <Navbar/>
    <ContactContainer>
        <ContactLeft>
          <ContactHeader>We’d love to hear from you.</ContactHeader>
          <ContactText>
          While  we’re good with smoke signals, there are easier ways to get in touch.
          </ContactText>
          <ContactSocial>
            <FaTwitter/>
            <FaLinkedin/>
            <FaFacebook/>
          </ContactSocial>
        </ContactLeft>
        <ContactRight>
          <ContactForm>
            <ContactInput placeholder='Your Name'></ContactInput>
            <ContactInput placeholder='Your Email'></ContactInput>
            <ContactInput placeholder='Subject (Optional)'></ContactInput>
            <ContactTextArea placeholder='Message'></ContactTextArea>
            <ContactButton>Send</ContactButton>
          </ContactForm>
        </ContactRight>
    </ContactContainer>
    <Footer/> 
    </>
  )
}

export default ContactUs