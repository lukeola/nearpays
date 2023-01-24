import React, { useRef , useState} from 'react'
import Footer from '../../components/footer'
import { ContactButton, ContactContainer, ContactForm, ContactHeader, ContactInput, ContactLeft, ContactRight, ContactSocial, ContactText, ContactTextArea } from './ContactElements'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import Navbar from '../../components/navbar'
import emailjs from '@emailjs/browser';

const ContactUs = () => {

  const Form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2477dnl', 'template_hvpy2lu', Form.current, '5e3MIH-M9QU58fZtv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  const [message, setMessage] = useState('');

  // 👇️ called every time input's value changes
  const handleChange = event => {
    setMessage(event.target.value);
  };

  
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
          <ContactForm ref={Form} onSubmit={sendEmail}>
            <ContactInput type='text' name='your_name' placeholder='Your Name' required onChange={handleChange}
        value={message}></ContactInput>
            <ContactInput type='text' name='your_email' placeholder='Your Email' required></ContactInput>
            <ContactInput type='text' name='your_subject' placeholder='Subject (Optional)'></ContactInput>
            <ContactTextArea type='text' name='your_message' placeholder='Message' required></ContactTextArea>
            <ContactButton type='submit'>Send</ContactButton>
          </ContactForm>
        </ContactRight>
    </ContactContainer>
    <Footer/> 
    </>
  )
}

export default ContactUs