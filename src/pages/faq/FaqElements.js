import styled from "styled-components";


export const FaqContainer = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    height: auto;
    padding-bottom:100px;
    margin-top: 0;
    background: #E0EBE3;
    overflow: hidden;
  

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
    margin-top: 80px;

    @media screen and (max-width: 769px) {
        margin-top: 98px;
        width: 95%;
        margin-left: 2.5%;

    }
`
export const FaqHeader = styled.div`
    position: relative;
    width: 100%;
    top: 251px;
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
    flex-direction: column;
    width: 100%;
    border-radius: 4px;
    padding: 24px 28px 14px 18px;
    background: #D3E0D7;
    border: 1px solid #D3E0D7;
    cursor: pointer;
 

    @media screen and (max-width: 769px) {
        width: 95%;
        left: 2.5%;

    }

    @media screen and (max-width: 555px) {
        padding: 14px 28px 4px 18px;

    }
`
export const FaqQuestion = styled.div`
    position: relative;
    width: 98%;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    color: #2E312F;
    align-items: center;
    top: 12px;
`
export const FaqAnswer = styled.div`
    position: relative;
    color: #2E312F;
    width: 98%;

`
export const Faqicons = styled.div`
    position: absolute;
    color: #2E312F;
    cursor: pointer;
    top: 43%;
    text-align: right;
    justify-content: end;
    left: 95%;

    @media screen and (max-width: 769px) {
        
        left: 90%;
    }
`
export const Moretext =styled.div`
    position: relative;
    font-size: 20px;
    font-weight: 450;
    color: #2E312F;
    top: 36px;

    @media screen and (max-width: 769px) {
        /* top: 1096px; */

    }
`