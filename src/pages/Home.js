import React from "react";
import Footer from "../components/footer";
import HeroSection from "../components/herosection";
import Navbar from "../components/navbar";
import SectionOne from "../components/sectionone";
import SectionThree from "../components/sectionthree";
import SectionTwo from "../components/sectiontwo";
import Slider from "../components/slider/Slider";



const Home = () => {
    return (
        <>
        <Navbar/>
        <HeroSection/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <Slider/>
        <Footer/>
        </>
    )
};

export default Home;
