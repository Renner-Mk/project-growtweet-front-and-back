import { Container, Info } from './styles'
import { LoginBoxSignUp } from '../../components/LoginBoxSignUp'
import { LoginBoxSignIn } from '../../components/LoginBoxSignIn'
import { useState } from 'react'

export function Login() {
  const [login, setLogin] = useState<boolean>(true)

  const classe = login ? 'login toggle-box' : 'register toggle-box'

  return (
    <>
      <Container>
        <LoginBoxSignUp />
        <LoginBoxSignIn />
        <Info className={classe}>
          <div className="toggle-painel toggle-left">
            <h1>GrowTwitter</h1>
            <small>Trabalho final do bloco intermediário</small>
            <p>
              O Growtwitter é a plataforma definitiva para todos os apaixonados
              por redes sociais que buscam uma experiência familiar e poderosa,
              semelhante ao Twitter, mas com um toque único. Seja parte desta
              comunidade que valoriza a liberdade de expressão, a conexão com
              pessoas de todo o mundo e a disseminação de ideias.
            </p>
            <button
              onClick={() => {
                setLogin(!login)
              }}
            >
              Cadastre-se
            </button>
          </div>
          <div className="toggle-painel toggle-right">
            <h1>GrowTwitter</h1>
            <small>Trabalho final do bloco intermediário</small>
            <p>
              O Growtwitter é a plataforma definitiva para todos os apaixonados
              por redes sociais que buscam uma experiência familiar e poderosa,
              semelhante ao Twitter, mas com um toque único. Seja parte desta
              comunidade que valoriza a liberdade de expressão, a conexão com
              pessoas de todo o mundo e a disseminação de ideias.
            </p>
            <button
              onClick={() => {
                setLogin(!login)
              }}
            >
              Login
            </button>
          </div>
        </Info>
      </Container>
    </>
  )
}
