import React, {useEffect} from "react";
import HeroSection from "../components/herosection";
import SectionOne from "../components/sectionone";
import SectionTwo from "../components/sectiontwo";
import Aos from 'aos'
import 'aos/dist/aos.css'
import SectionThree from "../components/sectionthree";
import Navbar from '../components/navbar/index'
import CookieConsent from "react-cookie-consent"





const Home = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
        
      }, []);

    return (
        <>
        <Navbar/>
        <HeroSection />
        <SectionOne/>
       
        <div data-aos='fade-up'>
        <SectionTwo/>
        </div>

        <SectionThree/>
        <CookieConsent 
          debug={true}
          style={{ backgroundColor: '#080808' }}
          buttonStyle={{ color: '#000', backgroundColor: '#5DAF60', marginRight:'20px', display:'flex' }}
          buttonText="Accept"
        ><p style={{ fontSize: '14px', color: '#929B95' }}>This website uses cookies to optimize your experience and to provide us insight on how to interact with the site. All information shared with us through cookies are secured and covered by our data privacy obligation. <span style={{ fontSize: '14px', color: '#929B95' }}>See our </span><a href='/privacy-policy' style={{ textDecoration: 'none', color: '#5DAF60', fontSize: '14px', }}>privacy policy</a> <span style={{ fontSize: '14px', color: '#929B95' }}>for more</span></p>
        
        </CookieConsent>
          
        </>
    )
};

export default Home;
