import styled from "styled-components"

export const BoxSignIn = styled.div`
    width:50%;
    padding: 15px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    position:relative;
    z-index: -1;
`

export const FormSignIn = styled.form`
    input{
        border: 1px solid #ccc;
        padding: 5px;
        font-size: 16px;
        width: 100%;
        outline: none;
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
        top: 6px;
        background-color: white;
        padding: 0 5px;
        transition: transform .3s ease, color .3s ease, font-size .2s ease;
        pointer-events: none;
    }

    input:focus+label,
    input:not(:placeholder-shown) + label {
        transform: translateY(-14px);
        font-size: 12px;
    }

    .field{
        position: relative;
        margin-bottom: 25px;
    }
`
