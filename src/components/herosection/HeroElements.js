import styled from "styled-components";


export const HeroContainer = styled.div`
    position: relative;
    width: 100%;
    height: 1069px;
    left: 0px;
    /* top: -160px; */
    background: #E8F3EB;

    @media screen and (max-width: 769px) {
        height: 696px;
        overflow: hidden;
    }
`
export const HeroHeader = styled.div`
    width: 75%;
    margin-left: 12.5%;
    font-style: normal;
    font-weight: 500;
    font-size: 100px;
    line-height: 100%;
    text-align: center;
    color: #2E312F;
    padding-top: 156px;

    @media screen and (max-width: 769px) {
        font-size: 30px;
        width: 90%;
        margin-left: 5%;
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