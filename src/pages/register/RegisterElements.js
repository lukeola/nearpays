import styled from "styled-components";

export const RegisterContainer = styled.div`
    position: relative;
    width: 100%;
    height: 1024px;
    /* background: linear-gradient(0deg, rgba(8, 8, 8, 0.83), rgba(8, 8, 8, 0.83)), url(image.png); */
    /* filter: blur(10px); */
    background-color: #161E19;

    `
export const FormContainer = styled.form`
    position: absolute;
    width: 50%;
    height: 100vh;
    left: 25%;
    top: 158px;
    background: #E0EBE3;
    border-radius: 4px;
    z-index: 2;

    @media screen and (max-width: 800px) {
        width: 70%;
        left: 15%;
    }

    @media screen and (max-width: 445px) {
        width: 80%;
        left: 10%;
    }
`
export const FormContainer2 = styled.div`
    position: absolute;
    width: 50%;
    height: 100vh;
    left: 25%;
    top: 158px;
    background: #E0EBE3;
    border-radius: 4px;
    

    @media screen and (max-width: 769px) {
        
    }

`
export const FormHeader = styled.div`
    position: absolute;
    width: 70%;
    height: 122px;
    margin-left: 15%;
    top: 84px;
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 61px;
    color: #2E312F;

    @media screen and (max-width: 769px) {
        font-size: 38px;
    }

    @media screen and (max-width: 445px) {
        font-size: 30px;
    }
`
export const Formwrapper = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 278px;
    margin-left: 15%;
`
export const FormInput = styled.input`
    width: 100%;
    height: 64px;
    padding: 10px;
    background: #D3E0D7;
    border-radius: 4px;
    border: none;
`
export const FormButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px 16px;
    gap: 10px;
    width: 80%;
    margin-left: 10%;
    height: 65px;
    background: #043F2E;
    border-radius: 4px;
    color: #fff;
    border: none;
`
export const FileContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 160px;
    background: #D3E0D7;
    border: 2px dashed #E5F1E8;
    border-radius: 4px;
`
export const Filetext = styled.div`
    width: 80%;
    margin-left: 10%;
    height: 78px;
    font-family: 'Fakt Pro';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    color: #788B87;
    margin-top: 56px;
`

export const SuccessContainer = styled.div`
    position: relative;
    width: 100%;
    height: 724px;
    background-color: #161E19;

    @media screen and (max-width: 700px){
        height: 524px;
    }

    `
export const SuccessPage = styled.div`
    position: absolute;
    width: 35%;
    height: 387px;
    left: 32.5%;
    top: 219px;
    background: #E0EBE3;
    border-radius: 4px;

    @media screen and (max-width: 1100px){
        width: 45%;
        left: 27.5%;
    }

    @media screen and (max-width: 850px){
        width: 55%;
        left: 22.5%;
    }

    @media screen and (max-width: 700px){
        width: 65%;
        left: 17.5%;
        top: 119px;
    }

    @media screen and (max-width: 450px){
        width: 75%;
        left: 12.5%;
        height: 337px;
    }

    @media screen and (max-width: 450px){
        width: 85%;
        left: 7.5%;
       
    }
`

export const SuccessIcon = styled.div`
    position: absolute;
    width: 30%;
    height: 30%;
    left: 35%;
    top: 64px;

    @media screen and (max-width: 450px){
        top: 44px;
    }
`
export const SuccessHeader = styled.div`
    position: absolute;
    width: 100%;
    height: 30px;
    top: 223px;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #2E312F;

    @media screen and (max-width: 700px){
        font-size: 18px;
    }

    @media screen and (max-width: 450px){
        top: 163px;
    }
`
export const SuccessText = styled.div`
    position: absolute;
    width: 100%;
    height: 44px;
    top: 277px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: #788B87;

    @media screen and (max-width: 700px){
        font-size: 13px;
        width: 70%;
        left: 15%;
    }

    @media screen and (max-width: 450px){
        top: 213px;
    }
`
