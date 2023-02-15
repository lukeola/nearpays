import React, {useEffect} from "react";
import HeroSection from "../components/herosection";
import SectionOne from "../components/sectionone";
import SectionTwo from "../components/sectiontwo";
import Aos from 'aos'
import 'aos/dist/aos.css'
import SectionThree from "../components/sectionthree";




const Home = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
        
      }, []);

    return (
        <>
    
        <HeroSection />
        <SectionOne/>
       
        <div data-aos='fade-up'>
        <SectionTwo/>
        </div>

        <SectionThree/>
          
        </>
    )
};

export default Home;
