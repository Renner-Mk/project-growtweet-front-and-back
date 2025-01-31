import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    width: 60%;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    border-radius: 10px;
    border: 1px solid #ccc;
`

export const Info = styled.div`
    background-color: #00a8fe;
    width: 50%;
    height:100%;
    position: absolute;
    top: 0;
    padding: 15px;

    button{
        width:150px;
        padding: 15px;
    }
    
    &.login{
        left:0;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
    
    &.register{
        right: 0;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    h1{
        font-size:48px;
    }
`


