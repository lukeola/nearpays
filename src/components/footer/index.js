import React from 'react'
import { BottomLinks,FooterContainer, FooterHeader, FooterText, NavContainer, NavItems, NavSocialContainer, Privacy, Rights, SocialContainer, Terms } from './FooterElements'
import {FaTwitter, FaFacebookF, FaLinkedin} from 'react-icons/fa'
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
            <NavItems> <Link to='/faq' style={{color:'#fff', textDecoration:'none'}}>Faq</Link></NavItems>
            <NavItems> <Link to='/contact-us' style={{color:'#fff', textDecoration:'none'}}>Contact Us</Link></NavItems>
            </NavContainer>

            <SocialContainer>
            <NavItems><a href='twitter.com' style={{textDecoration:'none', color:'#5DAF60'}}><FaTwitter/></a></NavItems>
            <NavItems><a href='linkedin.com' style={{textDecoration:'none',color:'#5DAF60'}}><FaLinkedin/></a></NavItems>
            <NavItems><a href='facebook.com' style={{textDecoration:'none',color:'#5DAF60'}}><FaFacebookF/></a></NavItems> 
            </SocialContainer>

        </NavSocialContainer>

        <BottomLinks>
                <Rights>Nearpays.all rights reserved</Rights>
                <Terms>Terms of service</Terms>
                <Privacy>Privacy Policy</Privacy>
        </BottomLinks>

    </FooterContainer>
  )
}

export default Footer