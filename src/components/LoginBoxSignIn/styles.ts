import styled from "styled-components"

export const BoxSignIn = styled.div`
    width:50%;
    padding: 15px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    position:absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    z-index: 1;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2{
        margin-bottom: 30px;
        font-size: 32px;
    }
`

export const FormSignIn = styled.form`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input{
        padding: 8px;
        font-size: 17px;
        width: 100%;
        margin-bottom: 25px;
        outline: none;
        border: none;
        background-color: #ccc;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    button{
        width: 175px;
        padding: 10px;
        background-color: #aaf;
        border: none;
        transition: .2s ease-in;
    }
    button:hover{
        background-color: #aafFa9;
        cursor: pointer;
    }
    button:disabled{
        background-color:#ccc;
        cursor: default;
    }

    label{
        color: #797978;
        position: absolute;
        left: 5px;
        top: 10px;
        background-color: transparent;
        padding: 0 5px;
        transition: transform .3s ease, color .3s ease, font-size .2s ease;
        pointer-events: none;
    }

    input:focus+label,
    input:not(:placeholder-shown) + label {
        color: black;
        transform: translateY(-17px);
        font-size: 12px;
    }

    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px #ccc inset; 
        box-shadow: 0 0 0px 1000px #ccc inset;
    }

    .field{
        position: relative;
        display: flex;
    }
`
