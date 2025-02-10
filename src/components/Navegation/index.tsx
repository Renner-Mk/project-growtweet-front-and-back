import { Link, useNavigate } from 'react-router'
import {
  ButtonLogout,
  FooterNav,
  Logo,
  Nav,
  NavegationContainer,
  Profile,
  ProfileImg,
  TweetsButton,
} from './styles'
import backgroundImg from '../../assets/img/logo2.png'
import { User } from '../../layouts/DefaultLayout'
import { CiLogout } from 'react-icons/ci'
import { RiHome9Fill } from 'react-icons/ri'
import { PiHashBold } from 'react-icons/pi'
import { CiUser } from 'react-icons/ci'
import { useState } from 'react'
import { ModalTweet } from '../ModalTweet'

interface UserProps {
  user: User
}

export function Navegation({ user }: UserProps) {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('userLogged')
    navigate('login')
  }

  return (
    <NavegationContainer>
      <Nav>
        <Logo src={backgroundImg}></Logo>
        <div>
          <Link className="link top" to={'/'}>
            <RiHome9Fill className="icon" />
            Página Inicial
          </Link>
        </div>
        <div>
          <Link className="link mid" to={'/explore'}>
            <PiHashBold className="icon" />
            Explorar
          </Link>
        </div>
        <div>
          <Link className="link botton" to={'/profile'}>
            <CiUser className="icon" />
            Perfil
          </Link>
        </div>

        <TweetsButton
          onClick={() => {
            setIsOpen((prev) => !prev)
          }}
        >
          Tweetar
        </TweetsButton>
      </Nav>
      {isOpen && (
        <ModalTweet
          isOpen={isOpen}
          onClose={() => setIsOpen((prev) => !prev)}
        />
      )}
      <FooterNav>
        <Profile>
          <ProfileImg src={user.urlImg}></ProfileImg>
          <div className="profile-txt">
            <p className="name">{user.name}</p>
            <p className="username">@{user.username}</p>
          </div>
        </Profile>
        <ButtonLogout className="Btn-sair" onClick={handleLogout}>
          <div className="icon-logout">
            <CiLogout className="logout" />
          </div>
          <div className="text">Sair</div>
        </ButtonLogout>
      </FooterNav>
    </NavegationContainer>
  )
}
