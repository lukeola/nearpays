import React from 'react'
import { BottomLinks,FooterContainer, FooterHeader, FooterText, NavContainer, NavItems, NavSocialContainer, Privacy, Rights, SocialContainer, Terms } from './FooterElements'
import {FaTwitter,  FaLinkedin, FaInstagram} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SimpleForm from '../newsletter/subscribe'
import AnimatedText from 'react-animated-text-content';





const Footer = () => {
  return (
    <FooterContainer>
        <FooterHeader>
        <AnimatedText
        type="words" // animate words or chars
        animation={{
          x: '200px',
          y: '-20px',
          scale: 1.1,
          ease: 'ease-in-out',
        }}
        animationType="wave"
        interval={0.06}
        duration={0.8}
        tag="p"
        className="animated-paragraph"
        includeWhiteSpaces
        threshold={0.1}
        rootMargin="20%"
      >
        No minimums. Absolutely free.
      </AnimatedText>
        
        </FooterHeader>
        <FooterText>Subscribe to stay updated</FooterText>

      
        <SimpleForm/>
    

        <NavSocialContainer>

            <NavContainer >
            <NavItems> <Link to='/' style={{color:'#fff', textDecoration:'none'}}>Home</Link></NavItems>
            <NavItems> <Link to='/why-nearpays' style={{color:'#fff', textDecoration:'none'}}>About Us</Link></NavItems>
            <NavItems> <Link to='/faqs' style={{color:'#fff', textDecoration:'none'}}>Faqs</Link></NavItems>
            <NavItems> <Link to='/contact-us' style={{color:'#fff', textDecoration:'none'}}>Contact Us</Link></NavItems>
            </NavContainer>

            <SocialContainer>
            <NavItems><a href='https://twitter.com/nearpays' style={{textDecoration:'none', color:'#5DAF60'}}><FaTwitter/></a></NavItems>
            <NavItems><a href='https://linkedin.com/company/89969774' style={{textDecoration:'none',color:'#5DAF60'}}><FaLinkedin/></a></NavItems>
            <NavItems><a href='https://instagram.com/nearpays' style={{textDecoration:'none',color:'#5DAF60'}}><FaInstagram/></a></NavItems> 
            </SocialContainer>

        </NavSocialContainer>

        <BottomLinks>
                <Rights>Nearpays all rights reserved</Rights>
                <Terms>Terms of service</Terms>
                <Privacy><a href='/privacy-policy' style={{textDecoration:'none', color:'#929B95'}}>Privacy Policy</a></Privacy>
        </BottomLinks>

    </FooterContainer>
  )
}

export default Footer