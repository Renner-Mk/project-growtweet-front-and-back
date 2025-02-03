import styled from "styled-components";

export const ContainerModal = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
`

export const Modal = styled.div`
    background-color: white;
    width: 450px;
    height: 265px;
    padding: 15px;
    transition: rotate ease-in-out 1s;

    .close:hover{
        transition: rotate ease-in-out .3s;
        rotate: 90deg;
    }
    
    form{
        display: flex;
        flex-direction: column;
        margin: 5px 0;
    }

    button{
        align-self: flex-end;
        margin: 12px 0 0;
        padding: 10px 18px;
        border: none;
        cursor: pointer;
        background-color: #009fea;
        color: white;
        border-radius: 20px;
    }
`

export const TextArea = styled.textarea`
    border: none;
    border-bottom: 1px solid #ccc;
    width: 100%;
    height: 160px;
    text-align: top;
    font-size: 16px;
    resize: none;

    &:focus{
        outline: none;
    }
`