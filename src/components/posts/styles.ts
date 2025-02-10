import styled from "styled-components";

export const Tweet = styled.div`
display: flex;
padding: 15px;
border-bottom: 1px solid #ccc;
`
export const TweetContainer = styled.div`
display: flex;
flex-direction: column;
`
export const TweetContent = styled.div`
    h3{
        font-size: 15px;
        margin-bottom: 2px;
    } 
    span{
        font-weight: normal;
        font-size: 15px;
        margin-left: 5px;
    }
    p{
        padding: 2px 0 5px;
        font-size: 16px;
    }

`
export const TweetImg = styled.img`
    border-radius: 50%;
    width: 45px;
    height: 45px;
    margin-right: 15px;
`