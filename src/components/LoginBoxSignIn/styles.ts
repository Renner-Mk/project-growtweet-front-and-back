import styled from "styled-components"

export const BoxSignIn = styled.div`
    background-color: #ccc;
    width:50%;
    padding: 15px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`

export const FormSignIn = styled.form`
    input{
        padding: 5px;
        font-size: 16px;
        width: 100%;
        margin-bottom: 25px;
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
`
