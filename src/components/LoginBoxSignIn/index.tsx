import { useNavigate } from 'react-router'
import { SignIn } from '../../services/project-api'
import { BoxSignIn, FormSignIn } from './styles'
import { useState } from 'react'

export function LoginBoxSignIn() {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  async function signIn(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault()
    setIsSubmitting(true)

    const resultado = await SignIn(
      ev.currentTarget.email.value,
      ev.currentTarget.password.value,
    )

    if (resultado.user) {
      localStorage.setItem('userLogged', JSON.stringify(resultado.user))
      navigate('/')
    }

    alert(resultado.message || 'erro inesperado')
    setIsSubmitting(false)
  }
  return (
    <BoxSignIn>
      <FormSignIn onSubmit={signIn}>
        <div className="field">
          <input type="text" id="email" name="email" placeholder=" " required />
          <label htmlFor="email">Email</label>
        </div>

        <div className="field">
          <input
            type="password"
            name="password"
            id="password"
            placeholder=" "
            required
          />
          <label htmlFor="password">Senha</label>
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Aguarde...' : 'Conectar-se'}
        </button>
      </FormSignIn>
    </BoxSignIn>
  )
}
