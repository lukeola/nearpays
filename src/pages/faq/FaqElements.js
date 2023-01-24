import styled from "styled-components";


export const FaqContainer = styled.div`
    display: flex;
    width: 100%;
    position: absolute;
    height: 1174px;
    margin-top: 0;
    background: #E0EBE3;
    z-index: 6;

    @media screen and (max-width: 769px) {
        flex-direction: column;

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
    margin-top: 190px;

    @media screen and (max-width: 769px) {
        top: 48px;
        width: 95%;
        margin-left: 2.5%;

    }
`
export const FaqHeader = styled.div`
    position: relative;
    width: 100%;
    top: 251px;
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 500;
    font-size: 84px;
    color: #2E312F;
    text-align: center;
    cursor: pointer;

    @media screen and (max-width: 769px) {
        font-size: 32px;
        top: 82px;
    }
`
export const Faqwrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media screen and (max-width: 769px) {
        width:95%;
        
    }
`
export const Faqitems = styled.div`
    position: relative;
    height: auto;
    display: flex;
    width: 100%;
    border-radius: 16px;
    padding: 24px 48px 24px 48px;
    background: #D3E0D7;
    cursor: pointer;
 

    @media screen and (max-width: 769px) {
        width: 95%;
        left: 2.5%;

    }
`
export const FaqQuestion = styled.div`
    position: absolute;
    width: 100%;
    font-family: 'Fakt Pro';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    color: #2E312F;
`
export const FaqAnswer = styled.div`
    position: relative;
    color: #2E312F;

`
export const Faqicons = styled.div`
    position: relative;
    left: 30%;
    color: #2E312F;
    cursor: pointer;

    @media screen and (max-width: 769px) {
        position: absolute;
        margin-left: 60%;

    }
`
export const Moretext =styled.div`
    position: absolute;
    font-size: 20px;
    font-weight: 450;
    line-height: 36px;
    color: #2E312F;
    top: 1036px;

    @media screen and (max-width: 769px) {
        top: 1096px;

    }
`