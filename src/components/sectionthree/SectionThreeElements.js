import styled from "styled-components";
import "../../fonts/circular-std-medium-500.ttf"
import '../../index.css'


export const SectionThreeContainer = styled.div`
    position: relative;
    width: 100%;
    height: 706px;
    display: flex;
    gap: 15%;
    background: #E0EBE3; 

    

    @media screen and (max-width: 769px) {
        flex-direction: column;
        height: 668px;
        display: flex;
    }
`
export const Leftside = styled.div`
    width: 40%;
    left: 5%;

    @media screen and (max-width: 769px) {
        width: 100%;
    }
`
export const LefsideImg = styled.div`
    position: absolute;
    width: 90%;
    height: 405.79px;
    left: 5%;
    top: 120px;

    @media screen and (max-width: 769px) {
        top: 51px;
        height: 262.79px;
    }
`
export const Leftsidebg = styled.div`
    position: absolute;
    width: 38%;
    height: 544px;
    left: 8%;
    top: 56px;
    background: #C1D3C6;
    border-radius: 16px;

    @media screen and (max-width: 769px) {
        width: 90%;
        left: 5%;
        height: 364.79px;
        top: 24px;
}
`
export const Rightside = styled.div`
    width: 40%;
    margin-top: 199px;

    @media screen and (max-width: 769px) {
        width: 90%;
        margin-top: 350px;
    }
  
`
export const RightsideHeading = styled.div`
    width: 380px;
    height: 81px;
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    color: #2E312F;
    top: 199px;

    @media screen and (max-width: 769px) {
        height: 51px;
        width: 90%;
        font-size: 32px;
        margin-left: 5%;
        
    }
`
export const RightsideText = styled.p`
    width: 50px;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 210%;
    color: #2E312F;
    flex-wrap: wrap;
    
   
    

        @media screen and (max-width: 769px) {
            width: 90%;
            margin-left: 5%;
            font-size: 16px;
            line-height: 150%;
    
        }
`
export const Twoslidewrapper = styled.div`
    width: 80%;
    height: 50%;
    background-color: #C1D3C6;
    border: 1px solid black;
    position: absolute;
    left: 10%;
    top: 25%;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 5%;

    @media screen and (max-width: 769px) {
        height: 75%;
        top: 12.5%;
    }
`
export const Twosliderbalance = styled.div`
    font-style: normal;
    font-weight: 450;
    font-size: 18px;
    line-height: 23px;
    color: #6A706C;

    @media screen and (max-width: 769px) {
        font-size: 16px;
    }
`
export const TwoslideHeader = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    color: #2E312F;

    @media screen and (max-width: 769px) {
        font-size: 27px;
    }
`
export const Twoslidebtn1 = styled.div`
    width: 80%;
    height: 60px;
    background: #D5E7DA;
    border-radius: 8px;
    font-weight: 450;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    padding-top: 15px;
    padding-bottom: 10px;

`
export const Twoslidebtn2 = styled.div`
    width: 80%;
    height: 60px;
    background: #161E19;
    border-radius: 8px;
    font-weight: 450;
    font-size: 18px;
    line-height: 23px;
    color: #FFFFFF;
    text-align: center;
    padding-top: 10px;
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    padding-bottom: 5px;
  

`
export const Btn2icon = styled.div`
    margin-top: 5px;
`