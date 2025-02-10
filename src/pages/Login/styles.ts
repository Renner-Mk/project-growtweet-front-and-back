import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    border-radius: 30px;
    border: 1px solid #ccc;
    overflow: hidden;
    width: 850px;
    height: 550px;

    .icon-box{
        background-color: #ccc;
        margin-bottom: 25px;
        padding: 0 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 22px;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    &.register .toggle-box:before{ left: 50%}


    &.register .toggle-box .toggle-painel.toggle-left{
        left: -50%;
        transition-delay: .6s;
    }

    &.login .toggle-box .toggle-painel.toggle-right{
        right: -50%;
        transition-delay: .6s;
    }

`

export const Info = styled.div`
    position: absolute;
    width: 100%;
    height:100%;

    &::before{
        content:'';
        position: absolute;
        left: -250%;
        width: 300%;
        height: 100%;
        background: #00a8fe;
        border-radius: 150px;
        z-index: 2;
        transition: 1.8s ease-in-out;
    }

    .toggle-painel{
        position: absolute;
        width: 50%;
        height: 100%;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 2;
        transition: .6s ease-in-out;
        text-align: center;
        padding: 5px 40px;
    }

    .toggle-painel.toggle-left{
        left: 0;
        transition-delay: 1.2s;
    }

    .toggle-painel.toggle-right{
        right: 0;
        transition-delay: 1.2s;
    }

    button{
        width: 175px;
        padding: 15px;
        margin-top: 30px;
        background-color: transparent;
        color: white;
        border: none;
        outline: 1px solid white;
        border-radius: 10px;
        font-size: 15px;
        overflow: hidden;
    }

    button:hover {
        background-color: #0d8ae6;
    }

    h1{
        font-size: 38px;
    }

    small{
        margin-bottom: 30px;
    }

    

`


