import { Container, Info } from './styles'
import { LoginBoxSignUp } from '../../components/LoginBoxSignUp'
import { LoginBoxSignIn } from '../../components/LoginBoxSignIn'
import { useState } from 'react'

export function Login() {
  const [login, setLogin] = useState<boolean>(true)

  const classe = login ? 'login' : 'register'

  return (
    <>
      <Container>
        <Info className={classe}>
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
            {login ? <p>Cadastre-se</p> : <p>Login</p>}
          </button>
        </Info>
        <LoginBoxSignUp />
        <LoginBoxSignIn />
      </Container>
    </>
  )
}
