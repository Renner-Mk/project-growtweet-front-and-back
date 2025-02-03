import styled from "styled-components"

export const NavegationContainer = styled.div`
display:flex;
flex-direction:column;
justify-content: space-between;
border-right: 1px solid #ccc;
`

export const Nav = styled.nav`
    display:flex;
    flex-direction: column;

    .link{
        text-decoration:none;
        font-size: 16px;
        letter-spacing: 1px;
        display: inline-block;
        width: 100%;
        padding: 14px 0 14px 8px;

        &:hover{
        box-shadow: 0px 3px 4px -5px blueviolet inset,
        0px -3px 4px -5px blueviolet inset;
    }
    }

    div{
        /* margin: 5px 0 9px; */
        width: 200px;
    }
    .icon{
        font-size: 20px;
        vertical-align: -2px;
        margin-right: 7px;
    }
`

export const Logo = styled.img`
width: 110px;
background-size: contain;
margin-bottom: 15px;
`

export const Profile = styled.div`
    display:flex;
    padding: 5px 0;

    div{
        margin-left: 7px;
    }
    .name{
        font-weight: bold;
        font-size: 18px;
        text-transform: capitalize;
    }
    .username{
        font-size: 14px;
    }

    .profile-txt{
        display:flex;
        flex-direction: column;
        justify-content: center;
    }
`

export const ProfileImg = styled.img`
    width: 55px;
    height: 55px;
    object-fit:contain;
    border-radius: 50%;
`

export const FooterNav = styled.footer`
    display: flex;
    flex-direction: column;
`

export const ButtonLogout = styled.button`
    margin: 5px 5px 10px;
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: center; 
    position: relative;
    border: none;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    cursor: pointer;
    overflow: hidden;
    transition: width 0.3s ease, border-radius 0.3s ease; 
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
    background-color: transparent;
    padding: 0 10px; 

    .icon-logout {
        width: 20px; 
        transition: transform 0.3s ease; 
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logout {
        font-size: 20px;
    }

    .text {
        font-size: 1.2rem;
        font-weight: 600;
        white-space: nowrap;
        opacity: 0;
        width: 0;
        overflow: hidden;
        transition: width 0.3s ease, opacity 0.3s ease;
    }

    &:hover {
        width: 100%; 
        border-radius: 40px;
    }

    &:hover .icon-logout {
        transform: translateX(0px); 
    }

    &:hover .text {
        opacity: 1;
        width: auto; 
        margin-left: 10px;     }
`;


export const TweetsButton = styled.button`
    padding: 10px;
    width: 150px;
    margin: 5px auto auto;
    border: none;
    background-color: #006eea;
    border-radius: 30px;
    color: white;
    letter-spacing: 1px;
    transition-duration: .3s;
    
    &:hover{
        text-shadow: 0 1px 5px wheat;
        box-shadow: 1px 3px 10px -3px black;
        scale: 1.1;
    }
`