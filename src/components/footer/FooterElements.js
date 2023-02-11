import styled from "styled-components";
import "../../fonts/circular-std-medium-500.ttf"
import '../../index.css'

export const FooterContainer = styled.div`
    position: relative;
    width: 100%;
    height: 731px;
    background: #080808;



    @media screen and (max-width: 769px) {
        height: 551px;
    }
`
export const FooterHeader = styled.div`
    position: relative;
    width: 30%;
    margin-left: 35%;
    top: 111px;
    font-size: 56px;
    font-weight: 700;
    line-height: 71px;
    letter-spacing: 0em;
    text-align: center;
    color: #fff;

    @media screen and (max-width: 1024px) {
      
        font-size: 42px;
       

    }

    @media screen and (max-width: 769px) {
        width: 80%;
        margin-left: 10%;
        top: 48px;
        font-size: 32px;
        font-size: 32px;
        font-weight: 500;
        line-height: 40px;
        letter-spacing: 0em;
        text-align: center;

    }

`

export const FooterText = styled.div`
    position: relative;
    height: 32px;
    width: 40%;
    margin-left: 30%;
    margin-top: 160px;
    color: #C7CFCD;
    text-align: center;


    @media screen and (max-width: 769px) {
        margin-top: 80px;
        width: 60%;
        margin-left: 20%;
    }
`


export const NavSocialContainer = styled.div`
    position: relative;
    width: 90%;
    margin-left: 5%;
    margin-top: 98px;
    display: flex;
    justify-content: space-between;
    text-align: center;

    @media screen and (max-width: 769px) {
        margin-top: 32px;
        flex-direction: column;
        width: 100%;
        margin-left: 0;
    }
`

export const NavContainer = styled.div`
    display: flex;
    color: #fff;

    @media screen and (max-width: 769px) {
        text-align: center;
        justify-content: center;
    }

    
`
export const NavItems = styled.div`
    justify-content: space-between;
    margin-right: 25px;
    cursor: pointer;
    text-decoration: none;
    color: #fff;


`

export const SocialContainer = styled.div`
    display: flex;
    color:#5DAF60;

    @media screen and (max-width: 769px) {
        text-align: center;
        justify-content: center;
        margin-top: 20px;
    }
    
`

export const BottomLinks = styled.div`
    width: 90%;
    margin-left: 5%;
    position: relative;
    margin-top: 91px;
    display: flex;
    color: #929B95;
    

    @media screen and (max-width: 769px) {
       flex-direction: column;
       margin-top: 52px;
    }
`
export const Rights = styled.div`
    width: 70%;
    
    @media screen and (max-width: 769px) {
        width: 100%;
        text-align: center;
    }

`
export const Terms = styled.div`
    width: 20%;
    text-align: end;

    @media screen and (max-width: 769px) {
        position: absolute;
        width: 100%;
        text-align: start;
        margin-top: 65px;
    }
`
export const Privacy = styled.div`
    width: 20%;
    text-align: end;


    @media screen and (max-width: 769px) {
        position: absolute;
        width: 100%;
        text-align: end;
        margin-top: 65px;
    }
`
