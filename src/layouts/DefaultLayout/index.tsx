import { Outlet } from 'react-router'
import { DefaultContainer, Feed, Logo, Nav, News } from './styles'

export function DefaultLayout() {
  return (
    <>
      <DefaultContainer>
        <Nav>
          <div>
            <Logo></Logo>
          </div>
          <footer>
            <div>
              <Logo></Logo>
              <p></p>
              <p></p>
            </div>
            <button>Sair</button>
          </footer>
        </Nav>
        <Feed>
          <Outlet />
        </Feed>
        <News>
          <ul>
            <li>Lista de novidades</li>
            <li>Lista de novidades</li>
            <li>Lista de novidades</li>
          </ul>
        </News>
      </DefaultContainer>
    </>
  )
}
