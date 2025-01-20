import styled from "styled-components"

export const BoxSignUp = styled.div`
    background-color: #ccc;
    width:50%;
    padding: 15px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

`

export const FormSignUp = styled.form`
    input{
        padding: 5px;
        font-size: 16px;
        width: 100%;
        margin-bottom: 25px;
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

`