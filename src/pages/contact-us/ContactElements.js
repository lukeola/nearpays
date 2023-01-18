import styled from "styled-components";

export const ContactContainer = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    height: 903px;
    background: #E0EBE3;

    @media screen and (max-width: 769px) {
        flex-direction: column;
    }
    `
export const ContactLeft = styled.div`
    width: 40%;
    margin-left: 5%;
    margin-top: 172px;

    @media screen and (max-width: 769px) {
        width: 100%;
    }
`
export const ContactRight = styled.div`
    width: 50%;
    margin-top: 172px;

    @media screen and (max-width: 769px) {
        width: 100%;
        margin-top: 34px;
    }
`
export const ContactHeader = styled.div`
    width: 80%;
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 500;
    font-size: 64px;
    line-height: 81px;
    color: #2E312F;

    @media screen and (max-width: 769px) {
        font-size: 32px;
        width: 60%;
        line-height: 40px;

    }
`
export const ContactText = styled.div`
    width: 50%;
    font-family: 'Fakt Pro';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 158%;
    color: #6A706C;
    margin-top: 24px;

    @media screen and (max-width: 769px) {
        font-size: 16px;
        width: 70%;

    }

`
export const ContactSocial = styled.div`
    display: flex;
    height: 16px;
    width: 70px;
    left: 2px;
    gap: 10px;
    margin-top: 26px;
    border-radius: 0px;
    color: #5DAF60;

`
export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media screen and (max-width: 769px) {
        width: 100%;
        gap: 10px;
    }
    
`
export const ContactInput = styled.input`
    width: 78%;
    padding: 2%;
    height: 82px;
    background: #D3E0D7;
    border-radius: 16px;
    border: none;

    @media screen and (max-width: 769px) {
        width: 90%;
        margin-left: 5%;
        height: 60px;
    }
`
export const ContactTextArea = styled.textarea`
    width: 78%;
    padding: 2%;
    height: 192px;
    background: #D3E0D7;
    border-radius: 16px;
    border: none;

    @media screen and (max-width: 769px) {
        width: 90%;
        margin-left: 5%;
        height: 151px;
    }
`
export const ContactButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 24px 16px;
    gap: 10px;
    width: 78%;
    height: 73px;
    background: #043F2E;
    border-radius: 16px;
    color: #fff;
    border: none;
    cursor: pointer;
    
    @media screen and (max-width: 769px) {
        width: 90%;
        margin-left: 5%;
        height: 60px;
    }
`
