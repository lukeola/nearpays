import styled from "styled-components";
import "../../fonts/circular-std-medium-500.ttf"
import '../../index.css'

export const SectionOneContainer = styled.div`
    position: relative;
    width: 100%;
    height: 817px;
    display: flex;
    background: #E8F3EB;
    padding: 0 5%;
   

    @media screen and (max-width: 1129px) {
        height:900px;
        flex-direction: column;
    
    }

    @media screen and (max-width: 771px) {
        height:1150px;

    
    }

    @media screen and (max-width: 341px) {
        height:1250px;
      
    
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
        font-size: 26px;
    
    }

`
export const BoxContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(371px, 1fr));
    position: absolute;
    top: 173px;
    gap: 2rem;
 
 

    @media screen and (max-width: 1218px) {
        grid-template-columns: repeat(auto-fit, minmax(351px, 1fr));
    }
    @media screen and (max-width: 1155px) {
        grid-template-columns: repeat(auto-fit, minmax(331px, 1fr));
    }

    @media screen and (max-width: 1129px) {
        align-items: center;
        justify-content: center;
        position: relative;
        top: 73px;
        
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

    @media screen and (max-width: 771px) {
        aspect-ratio:1/.3;
    
    }
    
`
export const BoxHeading = styled.div`
    width: 100%;
    font-size: 24px;
    font-weight: 500;

    @media screen and (max-width: 771px) {
        font-size: 18px;
    }

`
export const BoxText = styled.div`  
    font-size: 16px;
    font-weight: 300;
    color: #6A706C;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    width: 100%;

   

    @media screen and (max-width: 771px) {
        font-size: 14px;
    }

`
export const Boxicon = styled.div`
    width: 10%;
    aspect-ratio: 1/1;

    @media screen and (max-width: 771px) {
        width: 50px;
    }

    @media screen and (max-width: 650px) {
        width: 10%;
    }
`
