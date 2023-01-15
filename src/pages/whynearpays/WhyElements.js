import styled from "styled-components";


export const WhyContainer = styled.div`
    width: 100%;
`
export const SectionOne = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 530px;
    gap: 20%;

    @media screen and (max-width: 769px) {
        flex-direction: column;
    }
  
`
export const Header = styled.div`
    position: relative;
    width: 30%;
    height: 183px;
    left: 5%;
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 450;
    font-size: 48px;
    line-height: 61px;
    color: #2E312F;
    top: 162px;

    @media screen and (max-width: 769px) {
        font-size: 24px;
        width: 70%;
        left: 5%;
        top: 82px;
        line-height: 41px;
    }
`
export const Text = styled.div`
    position: relative;
    width: 30%;
    height: 256px;
    margin-left: 5%;
    font-family: 'Fakt Pro';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 158%;
    color: #6A706C;
    top: 174px;

    @media screen and (max-width: 769px) {
        position: absolute;
        font-size: 16px;
        width: 95%;
        margin-left: 2.5%;
        top: 226px;
    }

` 
export const SectionTwo = styled.div`
    width: 100%;
    height: 619px;

    @media screen and (max-width: 769px) {
        height: 271px;
    }
`
export const SectionThree = styled.div`
    position: relative;
    height: 505px;
    width: 100%;

    @media screen and (max-width: 769px) {
        height: 366px;
    }
   
`
export const ThreeHeader = styled.div`
    position: relative;
    width: 60%;
    left: 20%;
    margin-top: 132px;
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 450;
    font-size: 48px;
    color: #2E312F;
    text-align: center;

    @media screen and (max-width: 769px) {
        position: relative;
        margin-top: 32px;
        font-size: 24px;
    }
`

export const ThreeText1 = styled.div`
    position: absolute;
    width: 60%;
    left: 20%;
    margin-top: 93px;
    font-family: 'Fakt Pro';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 180%;
    text-align: center;
    color: #6A706C;

    @media screen and (max-width: 769px) {
        position: relative;
        width: 90%;
        margin-top: 32px;
        font-size: 16px;
        left: 5%;
    }
`
export const ThreeText2 = styled.div`
    position:absolute;
    width: 60%;
    left: 20%;
    margin-top: 200px;
    font-family: 'Fakt Pro';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 180%;
    text-align: center;
    color: #6A706C;

    @media screen and (max-width: 769px) {
        position: relative;
        width: 90%;
        margin-top: 32px;
        font-size: 16px;
        left: 5%;
    }

`
export const SectionFour = styled.div`
    position: relative;
    width: 100%;
    height: 941px;
    background: #E0EBE3;
`
export const SectionFourUp = styled.div`
    position: absolute;
    width: 100%;
    
`
export const Upheader = styled.div`
    position: absolute;
    width: 45%;
    height: 122px;
    left: 12%;
    top: 71px;
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 61px;
    color: #2E312F;

    @media screen and (max-width: 769px) {
        position: relative;
        width: 60%;
        top: 32px;
        font-size: 24px;
        left: 10%;
        line-height: 31px;
    
    }

`
export const Uptext = styled.div`
    position: absolute;
    width: 60%;
    height: 108px;
    left: 12%;
    top: 241px;
    font-family: 'Fakt Pro';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 180%;
    color: #2E312F;

    @media screen and (max-width: 769px) {
        position: absolute;
        width: 80%;
        top: 112px;
        font-size: 16px;
        left: 10%;
    }

`
export const Upline = styled.div`
    position: absolute;
    width: 2px;
    height: 278px;
    left: 8%;
    top: 71px;
    background-color: #043F2E ;
    border: 2px solid #043F2E;

    @media screen and (max-width: 769px) {
        position: absolute;
        width: 2px;
        top: 32px;
        left: 5%;
    }

   
`
export const SectionFourDown = styled.div`
    position: absolute;
    width: 100%;

`
export const Downheader = styled.div`
    position: relative;
    width: 35%;
    height: 122px;
    left: 47%;
    top: 491px;
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 61px;
    color: #2E312F;

    @media screen and (max-width: 769px) {
        position: relative;
        width: 60%;
        top: 655px;
        font-size: 24px;
        left: 5%;
        line-height: 31px;
    
    }
`
export const Downtext = styled.div`
    position: absolute;
    width: 35%;
    height: 180px;
    left: 47%;
    top: 661px;
    font-family: 'Fakt Pro';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 180%;
    color: #2E312F;

    @media screen and (max-width: 769px) {
        position: absolute;
        width: 90%;
        top: 739px;
        font-size: 16px;
        left: 5%;
    }
`
export const Downline = styled.div`
    position: absolute;
    width: 3px;
    height: 350px;
    left: 85%;
    top: 509px;
    background-color: #043F2E;

    @media screen and (max-width: 769px) {
        
        top: 655px;
        left: 95%;
        height: 256px;
    
    }
    
`
export const DownImage = styled.div`
    position: absolute;
    width: 35%;
    height: 397px;
    left: 8%;
    top: 444px;
    border-radius: 16px;

    @media screen and (max-width: 769px) {
        position: absolute;
        width: 90%;
        top: 367px;
        left: 5%;
        height: 256px;
    
    }
`
export const SectionFive = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 668px;
    background: #161E19; 

    @media screen and (max-width: 769px) {
        flex-direction: column;
    }
`
export const FiveHeader = styled.div`
    position: relative;
    width: 100%;
    top: 251px;
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 500;
    font-size: 84px;
    color: #FFFFFF;
    text-align: center;

    @media screen and (max-width: 769px) {
        font-size: 32px;
        top: 48px;
    }

`
export const LeftSide = styled.div`
    width: 30%;
    left: 10%;

    @media screen and (max-width: 769px) {
        width: 100%;
        left: 0;

    }
`
export const RightSide = styled.div`
    width: 50%;

    @media screen and (max-width: 769px) {
        top: 48px;
        width: 95%;
        margin-left: 2.5%;

    }
`
export const Faqwrapper = styled.div`
    margin-top: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const Faqitems = styled.div`
    position: relative;
    height: auto;
    display: flex;
    width: 100%;
    border-radius: 16px;
    padding: 24px 48px 24px 48px;
    background: #1E3125;
;

`
export const FaqQuestion = styled.div`
    position: absolute;
    width: 100%;
    font-family: 'Fakt Pro';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    color: #FFFFFF;
`
export const FaqAnswer = styled.div`
    position: relative;

`
export const Faqicons = styled.div`
    position: relative;
    left: 50%;
    color: #fff;

    @media screen and (max-width: 769px) {
        position: absolute;
        margin-left: 40%;

    }
`
export const Moretext =styled.div`
    position: absolute;
    font-family: Circular Std;
    font-size: 20px;
    font-weight: 450;
    line-height: 36px;
    color: #FFFFFF;
    top: 532px;

    @media screen and (max-width: 769px) {
        top: 602px;

    }

`