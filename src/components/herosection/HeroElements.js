import styled from "styled-components";
import "../../fonts/circular-std-medium-500.ttf"
import '../../index.css'

export const HeroContainer = styled.div`
    position: relative;
    width: 100%;
    height: 1069px;
    left: 0px;
    background: #E8F3EB;
    overflow: hidden;
    margin-top: -1px;

    @media screen and (max-width: 1213px) {
        height: 1150px;
        
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
    color: #2E312F;
    padding-top: 66px;
    margin-bottom: 20px;

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
        padding-top: 66px;
    }

    @media screen and (max-width: 474px) {
        font-size: 30px;

        
    }


`
export const HeroImg = styled.div`
    height: 665px;
    width: 100%;
    margin-top: 50px;

    @media screen and (max-width: 769px) {
        width: 120%;
        margin-left: 0;
        height: 400px;
        overflow: hidden;
        margin-top: 80px;
    }
`