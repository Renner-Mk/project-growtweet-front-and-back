import { Outlet } from 'react-router'
import { DefaultContainer, Feed, News } from './styles'
import { Navegation } from '../../components/Navegation'
import { useEffect, useState } from 'react'

export interface User {
  id: string
  name: string
  email: string
  username: string
  token: string
  urlImg: string
}

const defaultUser: User = {
  id: '',
  name: '',
  email: '',
  username: '',
  token: '',
  urlImg: '',
}

export function DefaultLayout() {
  const [userLogged, setUserLogged] = useState<User>(defaultUser)

  useEffect(() => {
    const user = localStorage.getItem('userLogged')
    if (user) {
      setUserLogged(JSON.parse(user) as User)
    }
  }, [])

  return (
    <>
      <DefaultContainer>
        <Navegation user={userLogged} />
        <Feed>
          <Outlet />
        </Feed>
        <News>
          <ul>
            <li className="title">O que está acontecendo?</li>

            <small>Esportes - Há 45 min</small>
            <li>Assunto sobre esportes</li>

            <small>Assunto do Momento em Brasil</small>
            <li>Assunto do Momento</li>

            <small>Música - Assunto do Momento</small>
            <li>Assunto sobre Música</li>

            <small>Cinema - Assunto do Momento</small>
            <li>Assunto sobre Filmes e Cinema</li>
          </ul>
        </News>
      </DefaultContainer>
    </>
  )
}
