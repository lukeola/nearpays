import styled from "styled-components";



export const Emailcontainer = styled.div`
    position: relative;
    width: 80%;
    left: 10%;
    margin-top: 33px;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 769px) {
        margin-top: 43px;
    }
`

export const EmailInput = styled.input`
    color: #fff;
    background: #080808;
    width: 60%;
    border-top: none;
    border-right: none;
    border-left: none;
    padding-bottom: 7px;
    cursor: pointer;
`
export const EmailIcon = styled.button`
    margin-left: -2%;
    cursor: pointer;
    background: transparent;
    border: none;
`