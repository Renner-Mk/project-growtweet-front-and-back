import styled from "styled-components"

export const BoxSignUp = styled.div`
    width:50%;
    padding: 15px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
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

export const FormSignUp = styled.form`
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

    .register{
        width: 175px;
        padding: 10px;
        background-color: #aaf;
        border: none;
        transition: .2s ease-in;
    }

    .register:hover{
        background-color: #aafFa9;
        cursor: pointer;
    }

    .register:disabled{
        background-color: #ccc;
        cursor: default;
    }

    label{
        color: #aaa;
        position: absolute;
        left: 5px;
        top: 10px;
        background-color: transparent;
        padding: 0 5px;
        transition: transform .3s ease, color .3s ease, font-size .2s ease;
        pointer-events: none;
    }

    input:focus+label, input:not(:placeholder-shown) + label{
        color: black;
        transform: translateY(-17px);
        font-size: 12px;
    }

    input:valid {
        background-color: #ccc;
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