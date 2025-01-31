import styled from "styled-components";

export const DefaultContainer = styled.div`
    margin: auto;
    display:flex;
    justify-content:center;
    height: 100vh;
`

export const Feed = styled.main`
    width: 50vw;
    padding: 15px;
`

export const News = styled.div`
    border-left: 1px solid #ccc;
    padding: 30px 20px;
    ul{
        width: 250px;
        padding: 15px;
        background-color: #e6e6e6;
        list-style-type: none;
        border-radius: 8px;
    }
    li{
        margin-bottom: 10px;
        font-weight:700;
        font-size: 12px;
        color: #4b4b4b;
    }
    small{
        font-size: 10px;
        color: #8a8b8e;
    }
    .title{
        font-size: 13px;
        letter-spacing: 1px;
    }
`

export const TweetsButton = styled.button`

`