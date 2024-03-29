import styled from "styled-components";
import "../../fonts/circular-std-medium-500.ttf"
import '../../index.css'


export const SectionTwoContainer = styled.div`
    position: relative;
    height: 798px;
    width: 100%;
    background: #FFFFFF;

    @media screen and (max-width: 905px) {
        height: 968px;
    }

    @media screen and (max-width: 769px) {
        height: 868px;
    }
    @media screen and (max-width: 376px) {
        height: 958px;
    }
`
export const SectionTwoHeader = styled.div`
    position: relative;
    width: 80%;
    margin-left: 5%;
    top: 102px;
    font-size: 48px;
    font-weight: 500;
    line-height: 61px;
    letter-spacing: 0em;
    text-align: left;

    @media screen and (max-width: 769px) {
        font-size: 24px;
        top: 32px;
    }

`
export const BoxHeader = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: #2E312F;
    width: 65%;

    @media screen and (max-width: 769px) {
        font-size: 18px;
    }

`
export const BoxText = styled.div`
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 167.5%;
    color: #6A706C;
    width: 70%;
    margin-top: 20px;

    @media screen and (max-width: 769px) {
        font-size: 14px;
        width: 90%;
    }

`
export const BoxNumber = styled.div`
    box-sizing: border-box;
    position: relative;
    width: 59px;
    height: 59px;
    top: 4px;
    border-radius: 50%;
    border: 1px solid #EBEBEB;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #043F2E;
    padding-left: 20px;
    margin-bottom: 16px;

    @media screen and (max-width: 769px) {
        font-size: 14px;
        font-size: 22px;
        width: 39px;
        height: 39px;
        left: 2%;
        padding-left: 13px;
    }
`
export const BoxesContainer = styled.div`
        position: relative;
        width: 90%;
        left: 5%;
        top: 218px;
        display: flex;
        justify-content: space-between;
        gap: 5%;

        @media screen and (max-width: 769px) {
        flex-direction: column;
        width: 90%;
        left: 5%;
        top: 56px;
        gap: 30px;
    }
`
export const BoxItems = styled.div`
    position: relative;
    width: 30%;
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 50px;

    @media screen and (max-width: 769px) {
        flex-direction: column;
        width: 100%;
        left: 0;
       
    }
`
export const Box1 = styled.div`
    top: 0;
`

export const Box2 = styled.div`
    margin-top: 100px;

    @media screen and (max-width: 769px) {
        margin-top: 10px;
    }
`

export const Box3 = styled.div`
    margin-top: -50px;

    @media screen and (max-width: 769px) {
    
    margin-top: 10px;
}
`
export const GreenLine = styled.div`
    position: absolute;
    width: 25%;
    height: 131px;
    left: 18%;
    margin-top: -50px;


    @media screen and (max-width: 1024px) {
    margin-top: -70px;
    display:none;
    }

    @media screen and (max-width: 769px) {
        position: absolute;
        width: 50%;
        height: 61px;
        margin-left: 40%;
        margin-top: 150px;
        transform: rotate(90.52deg);
}



`
export const BlueLine = styled.div`
    position: absolute;
    width: 25%;
    height: 131px;
    left: 60%;
    margin-top: 225px;

    @media screen and (max-width: 1246px) {
        position: absolute;
        margin-top: 345px;
       
    }

    @media screen and (max-width: 1024px) {
        position: absolute;
        margin-top: 285px;
        left: 60%;
        display:none;
    }

    @media screen and (max-width: 769px) {
        position: absolute;
        width: 25%;
        height: 31px;
        left: 20%;
        margin-top: 450px;
     
        transform:  rotate(140deg) ;
      

}
`