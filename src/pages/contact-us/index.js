import React, { useRef , useState, useEffect} from 'react'
import { ContactButton, ContactContainer, ContactForm, ContactHeader, ContactInput, ContactLeft, ContactRight, ContactSocial, ContactText, ContactTextArea } from './ContactElements'
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import Navbar from '../../components/navbar'
import emailjs from '@emailjs/browser';
import Aos from 'aos'
import 'aos/dist/aos.css'
import AnimatedText from 'react-animated-text-content'
import { Navbg } from '../../components/navbar/NavStyles';

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

  useEffect(() => {
    Aos.init({duration: 2000});
    
  }, []);

  
  return (
    <>
    <Navbar/>
    <Navbg/>
    <ContactContainer>
        <ContactLeft>
          <ContactHeader>
          <AnimatedText
        type="words" // animate words or chars
        animation={{
          x: '200px',
          y: '-20px',
          scale: 1.1,
          ease: 'ease-in-out',
        }}
        animationType="bounce"
        interval={0.06}
        duration={0.8}
        tag="p"
        className="animated-paragraph"
        includeWhiteSpaces
        threshold={0.1}
        rootMargin="20%"
      >
        We’d love to hear from you.
      </AnimatedText>
        </ContactHeader>
          <ContactText>
          While  we’re good with smoke signals, there are easier ways to get in touch.
          </ContactText>
          <ContactSocial>
            <a href='https://twitter.com/nearpays' style={{textDecoration:'none', color:'#5DAF60'}}><FaTwitter/></a>
            <a href='https://linkedin.com/company/89969774' style={{textDecoration:'none', color:'#5DAF60'}}><FaLinkedin/></a>
            <a href='https://instagram.com/nearpays' style={{textDecoration:'none', color:'#5DAF60'}}> <FaInstagram/></a>
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
    
    </>
  )
}

export default ContactUs