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
      navigate('/profile')
    }

    alert(resultado.message || 'erro inesperado')
    setIsSubmitting(false)
  }
  return (
    <BoxSignIn>
      <FormSignIn onSubmit={signIn}>
        <label htmlFor="email">Email: </label>
        <input type="text" id="email" name="email" required />

        <label htmlFor="">Senha: </label>
        <input type="password" name="password" required />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Aguarde...' : 'Conectar-se'}
        </button>
      </FormSignIn>
    </BoxSignIn>
  )
}
