import styled from "styled-components"

export const Logo = styled.img`
width: 110px;
background-size: contain;
margin-bottom: 15px;
`

export const NavegationContainer = styled.div`
display:flex;
flex-direction:column;
justify-content: space-between;
padding: 0 20px 15px;
border-right: 1px solid #ccc;
`

export const Profile = styled.div`
 display:flex;
 padding: 5px 0;
`

export const ProfileImg = styled.img`
    width: 50px;
    height: 50px;
    object-fit:contain;
    border-radius: 50%;
    /* background-color: yellow; */
`

export const Nav = styled.nav`
    display:flex;
    flex-direction: column;

    .link{
        text-decoration:none;
        font-size: 18px;
    }
    div{
        margin-top: 5px;
        width: 150px;
    }
`

export const FooterNav = styled.footer`
    display: flex;
    flex-direction: column;
    
    .sair{
        text-decoration: none;
        font-size: 14px;
        color: blue;
    }
`