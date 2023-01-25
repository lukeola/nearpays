import React, {useEffect} from "react";
import Footer from "../components/footer";
import HeroSection from "../components/herosection";
import Navbar from "../components/navbar";
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
        <Navbar />
        <HeroSection />
        <SectionOne/>
       
        <div data-aos='fade-up'>
        <SectionTwo/>
        </div>

        <SectionThree/>
      
        
        <Footer/>
        </>
    )
};

export default Home;
