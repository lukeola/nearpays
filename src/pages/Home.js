import React from "react";
import Footer from "../components/footer";
import HeroSection from "../components/herosection";
import Navbar from "../components/navbar/Navbar";
import SectionOne from "../components/sectionone";
import SectionThree from "../components/sectionthree";
import SectionTwo from "../components/sectiontwo";


const Home = () => {
    return (
        <>
        <Navbar/>
        <HeroSection/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <Footer/>
        </>
    )
};

export default Home;
