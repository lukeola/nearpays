import React, {useEffect} from "react";
import Footer from "../components/footer";
import HeroSection from "../components/herosection";
import Navbar from "../components/navbar";
import SectionOne from "../components/sectionone";
import SectionThree from "../components/sectionthree";
import SectionTwo from "../components/sectiontwo";
import Slider from "../components/slider/Slider";
import Aos from 'aos'
import 'aos/dist/aos.css'




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

        <div data-aos='fade-up'>
        <SectionThree/>
        </div>

        <div data-aos='fade-up'>
        <Slider/>
        </div>
        
        <Footer/>
        </>
    )
};

export default Home;
