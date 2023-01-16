import styled from "styled-components";

export const RegisterContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 1024px;
    background: linear-gradient(0deg, rgba(8, 8, 8, 0.83), rgba(8, 8, 8, 0.83)), url(image.png);
    filter: blur(10px);

    `
export const FormContainer = styled.div`
    position: absolute;
    width: 50%;
    height: 755px;
    left: 25%;
    top: 158px;
    background: #E0EBE3;
    border-radius: 16px;
    z-index: 2;

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
    padding: 2%;
    background: #D3E0D7;
    border-radius: 16px;
    border: none;
`
export const FormButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px 16px;
    gap: 10px;
    width: 100%;
    height: 65px;
    background: #043F2E;
    border-radius: 16px;
    color: #fff;
    border: none;
`
export const FileContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 160px;
    background: #D3E0D7;
    border: 2px dashed #E5F1E8;
    border-radius: 16px;
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
export const SuccessPage = styled.div`
    position: absolute;
    width: 35%;
    height: 387px;
    left: 32.5%;
    top: 219px;
    background: #E0EBE3;
    border-radius: 16px;
`
export const SuccessIcon = styled.div`
    position: absolute;
    width: 135px;
    height: 135px;
    left: 40%;
    top: 64px;
`
export const SuccessHeader = styled.div`
    position: absolute;
    width: 100%;
    height: 30px;
    top: 223px;
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #2E312F;
`
export const SuccessText = styled.div`
    position: absolute;
    width: 50%;
    height: 44px;
    left: 25%;
    top: 277px;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #788B87;
`
