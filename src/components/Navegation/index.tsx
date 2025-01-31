import { Link } from 'react-router'
import {
  FooterNav,
  Logo,
  Nav,
  NavegationContainer,
  Profile,
  ProfileImg,
} from './styles'
import backgroundImg from '../../assets/img/logo2.png'
import { TweetsButton } from '../../layouts/DefaultLayout/styles'
import { User } from '../../layouts/DefaultLayout'

interface UserProps {
  user: User
}

export function Navegation({ user }: UserProps) {
  const loggout = () => {
    localStorage.removeItem('userLogged')
  }

  return (
    <NavegationContainer>
      <Nav>
        <Logo src={backgroundImg}></Logo>
        <div>
          <Link className="link" to={'/'}>
            Página Inicial
          </Link>
        </div>
        <div>
          <Link className="link" to={'/explore'}>
            Explorar
          </Link>
        </div>
        <div>
          <Link className="link" to={'/profile'}>
            Perfil
          </Link>
        </div>

        <TweetsButton>Tweetar</TweetsButton>
      </Nav>
      <FooterNav>
        <Profile>
          <ProfileImg src={user.urlImg}></ProfileImg>
          <div>
            <p>{user.name}</p>
            <p>@{user.username}</p>
          </div>
        </Profile>
        <Link className="sair" onClick={loggout} to={'login'}>
          Sair
        </Link>
      </FooterNav>
    </NavegationContainer>
  )
}
