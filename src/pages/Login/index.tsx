import { Container, Info } from './styles'
import { LoginBoxSignUp } from '../../components/LoginBoxSignUp'
import { LoginBoxSignIn } from '../../components/LoginBoxSignIn'
import { useState } from 'react'

export function Login() {
  const [login, setLogin] = useState<boolean>(true)

  const classe = login ? 'login' : 'register'

  return (
    <>
      <Container className={classe}>
        <LoginBoxSignUp />
        <LoginBoxSignIn />
        <Info className="toggle-box">
          <div className="toggle-painel toggle-left">
            <h1>GrowTwitter</h1>
            <small>Aplicação inspiradora do bloco intermediário</small>
            <p>
              Junte-se à comunidade GrowTwitter e conecte-se com o mundo.
              Compartilhe ideias, descubra conteúdos e interaja com liberdade.
            </p>
            <button
              onClick={() => {
                setLogin(!login)
              }}
              disabled={!login}
            >
              Cadastre-se
            </button>
          </div>
          <div className="toggle-painel toggle-right">
            <h1>GrowTwitter</h1>
            <small>Aplicação inspiradora do bloco intermediário</small>
            <p>
              Acesse sua conta e continue compartilhando, explorando e se
              conectando com o mundo
            </p>
            <button
              onClick={() => {
                setLogin(!login)
              }}
              disabled={login}
            >
              Login
            </button>
          </div>
        </Info>
      </Container>
    </>
  )
}
