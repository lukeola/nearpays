import styled from "styled-components";
import "../../fonts/circular-std-medium-500.ttf"
import '../../index.css'

export const SectionOneContainer = styled.div`
    position: relative;
    width: 100%;
    height: 817px;
    display: flex;
    background: #E8F3EB;
   

    @media screen and (max-width: 1129px) {
        height:900px;
        flex-direction: column;
    
    }

    @media screen and (max-width: 733px) {
        height:1100px;
        flex-direction: column;
    
    }



`
export const SectionOneLeft = styled.div`
    width: 35%;
    left: 5%;

    @media screen and (max-width: 1129px) {
       left: 32.5%;
       position: relative;
    }

`

export const SectionOneRight = styled.div`
    width: 60%;

    @media screen and (max-width: 1129px) {
        width: 100%;
        position: relative;
    }
`
export const ImageContainer = styled.div`
    margin-top: 247px;
    width: 90%;
    margin-left: 10%;

    @media screen and (max-width: 1129px) {
       display: none;
        
    }
`
export const SectionOneHeader = styled.div`
    position: relative;
    width: 100%;
    margin-left: 0%;
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 61px;
    color: #000;
    top: 64px;

    @media screen and (max-width: 1129px) {
        font-size: 34px;
        top: 40px;
        text-align: center;
    
    }

    @media screen and (max-width: 600px) {
        font-size: 28px;
    
    }

`
export const BoxContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(371px, 0.6fr));
    position: absolute;
    top: 173px;
    gap: 2rem;
 
 

    @media screen and (max-width: 1190px) {
        grid-template-columns: repeat(auto-fit, minmax(351px, 0.7fr));
    }

    @media screen and (max-width: 1129px) {
        align-items: center;
        justify-content: center;
        position: relative;
        top: 113px;
        
    }

    @media screen and (max-width: 733px) {
        gap: 3rem;
    }




`
export const Boxes = styled.div`
    display: flex;
    flex-direction: column;
    gap:20px ;
    aspect-ratio:1/.6;
    padding-left:10px;

    @media screen and (max-width: 733px) {
        aspect-ratio:1/.4;
    
    }
    
`
export const BoxHeading = styled.div`
    width: 100%;
    font-size: 24px;
    font-weight: 500;

    @media screen and (max-width: 769px) {
        font-size: 18px;
    }

`
export const BoxText = styled.div`  
    font-size: 16px;
    font-weight: 300;
    color: #6A706C;

    text-align: left;
    width: 100%;

   

    @media screen and (max-width: 769px) {
        font-size: 14px;
    }

`
export const Boxicon = styled.div`
    width: 10%;
    aspect-ratio: 1/1;
`
