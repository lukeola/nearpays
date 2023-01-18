import styled from "styled-components";


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
    height: 425.79px;
    left: 5%;
    top: 140px;

    @media screen and (max-width: 769px) {
        top: 51px;
        height: 262.79px;
    }
`
export const Leftsidebg = styled.div`
    position: absolute;
    width: 38%;
    height: 594px;
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
    font-family: 'Circular Std';
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
export const RightsideText = styled.div`
    width: 60%;
    font-family: 'Fakt Pro';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 210%;
    color: #2E312F;
    
   
    

        @media screen and (max-width: 769px) {
            width: 90%;
            margin-left: 5%;
            font-size: 16px;
            line-height: 150%;
    
        }
`