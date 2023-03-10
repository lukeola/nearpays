import styled from "styled-components";
import "../../fonts/circular-std-medium-500.ttf"
import '../../index.css'

export const HeroContainer = styled.div`
    position: relative;
    width: 100%;
    height: 1273px;
    left: 0px;
    background: rgb(22,30,25);
    overflow: hidden;
   

    @media screen and (max-width: 1213px) {
        height: 1000px;
        
    }

    @media screen and (max-width: 769px) {
        height: 566px;
        overflow: hidden;
    }

 
`

export const Herobg = styled.div`
position: absolute;
    width:100%;
    height: 1069px;

    @media screen and (max-width: 1213px) {
        height: 1000px;
        
    }

    @media screen and (max-width: 769px) {
        height: 566px;
        overflow: hidden;
    }

`
export const HeroHeader = styled.div`
    width: 75%;
    margin-left: 12.5%;
    font-style: normal;
    font-weight: 700;
    font-size: 100px;
    line-height: 100%;
    text-align: center;
    color: #fff;
    padding-top: 186px;
    margin-bottom: 20px;
    
    @media screen and (max-width: 1419px) {
        font-size: 65px;
    
    }

    @media screen and (max-width: 1350px) {
        font-size: 60px;
    
    }


    @media screen and (max-width: 994px) {
        font-size: 50px;

        
    }

    @media screen and (max-width: 769px) {
        font-size: 40px;
        width: 90%;
        margin-left: 5%;
        padding-top: 106px;
    }

    @media screen and (max-width: 474px) {
        font-size: 30px;

    }

    @media screen and (max-width: 355px) {
        font-size: 25px;
        
    }


`
export const HeroImg = styled.div`
position: absolute;
    height: 665px;
    width: 60%;
    left: 20%;
    margin-top: 50px;
    z-index: 6;

    @media screen and (max-width: 1350px) {
        margin-left: 0;
        height: 400px;
        overflow: hidden;
        top: 350px;
        width: 80%;
        left: 10%;
    }

    @media screen and (max-width: 769px) {
       top: 150px;
       height: 350px;
    }
`