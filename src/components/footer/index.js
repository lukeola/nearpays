import React from 'react'
import { BottomLinks,FooterContainer, FooterHeader, FooterText, NavContainer, NavItems, NavSocialContainer, Privacy, Rights, SocialContainer, Terms } from './FooterElements'
import {FaTwitter, FaFacebookF, FaLinkedin} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SimpleForm from '../newsletter/subscribe'





const Footer = () => {
  return (
    <FooterContainer>
        <FooterHeader>No minimums. Absolutely free.</FooterHeader>
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