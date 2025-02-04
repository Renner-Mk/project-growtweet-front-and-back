import styled from "styled-components"

export const BoxSignUp = styled.div`
    width:50%;
    padding: 15px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    position:relative;
    z-index: -1;
    display:flex;
    flex-direction: column;
    justify-content: center;

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