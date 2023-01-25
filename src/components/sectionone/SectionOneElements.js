import styled from "styled-components";

export const SectionOneContainer = styled.div`
    position: relative;
    width: 100%;
    height: 847px;
    background: #161E19;

    @media screen and (max-width: 769px) {
        height: 1250px;
    }
`
export const SectionOneText = styled.div`
    position: absolute;
    width: 80%;
    margin-left: 10%;
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: #FFFFFF;
    top: 100px;

    @media screen and (max-width: 769px) {
        font-size: 16px;
        width: 80%;
        margin-left: 5%;
        top: 48px;
    }
`
export const SectionOneHeader = styled.div`
    position: relative;
    width: 60%;
    margin-left: 10%;
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 61px;
    color: #fff;
    top: 152px;

    @media screen and (max-width: 769px) {
        font-size: 24px;
        width: 90%;
        margin-left: 5%;
        top: 100px;
    }

`
export const BoxContainer = styled.div`
    position: relative;
    top: 220px;
    display: flex;
    width: 80%;
    margin-left: 10%;
    justify-content: space-between;

    @media screen and (max-width: 769px) {
        flex-direction: column;
        gap: 285px;
        top: 163px;
        width: 90%;
        margin-left: 5%;
    }

`
export const Boxes = styled.div`
    position: relative;
    width: 100%;

    @media screen and (max-width: 769px) {
        font-size: 24px;
        width: 90%;
        margin-left: 5%;


    }
    
 
`
export const BoxHeading = styled.div`
    width: 80%;
    font-size: 24px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 50px;
    margin-left: 10%;

    @media screen and (max-width: 769px) {
        font-size: 18px;
    }

`
export const BoxText = styled.div`  
    font-size: 16px;
    font-weight: 300;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 20px;
    width: 80%;
    margin-left: 10%;

    @media screen and (max-width: 769px) {
        font-size: 14px;
    }

`
export const Box1 = styled.div`
    position: absolute;
    width: 90%;
    height: 310.1px;
    left: 10%;
    background: #45C6BE;
    border-radius: 48px;
    z-index: 1;

    @media screen and (max-width: 769px) {
        height: 267px;
        left: 5%;
    }
`
export const Box1bg = styled.div`
    position: absolute;
    width: 90%;
    height: 313.38px;
    top: 5px;
    left: 12%;
    background: #A0EFEA;
    border-radius: 48px;

    @media screen and (max-width: 769px) {
        height: 270px;
        left: 7%;
    }
`
export const Box2 = styled.div`
    position: absolute;
    width: 90%;
    height: 310.1px;
    left: 10%;
    top: 10px;
    background: #80CFF5;
    border-radius: 48px;
    transform: matrix(1, 0.01, 0, 1, 0, 0);
    z-index: 1;

    @media screen and (max-width: 769px) {
        height: 267px;
        transform: none;
        left: 5%;
    }
`
export const Box2bg = styled.div`
    position: absolute;
    width: 90%;
    height: 313.38px;
    top: 15px;
    left: 12%;
    background: #B8E8FF;
    border-radius: 48px;
    transform: matrix(1, 0.01, 0, 1, 0, 0);

    @media screen and (max-width: 769px) {
        height: 270px;
        transform: none;
        left: 7%;
    }
`
export const Box3 = styled.div`
    position: absolute;
    width: 90%;
    height: 310.1px;
    top: 20px;
    left: 10%;
    background: #9FE7C0;
    border-radius: 48px;
    transform: matrix(1, 0.06, -0.08, 1, 0, 0);
    z-index: 1;

    @media screen and (max-width: 769px) {
        height: 267px;
        transform: none;
        left: 5%;
    }
`
export const Box3bg = styled.div`
    position: absolute;
    width: 90%;
    height: 313.38px;
    top: 25px;
    left: 12%;
    background: #DDFFED;
    border-radius: 48px;
    transform: matrix(1, 0.06, -0.08, 1, 0, 0);

    @media screen and (max-width: 769px) {
        height: 270px;
        transform: none;
        left: 7%;
    }
`