import { useState } from 'react'
import { SignUp } from '../../services/project-api'
import { BoxSignUp, FormSignUp } from './styles'

export function LoginBoxSignUp() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  async function signUp(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault()
    setIsSubmitting(true)

    const resultado = await SignUp(
      ev.currentTarget.nameSignUp.value,
      ev.currentTarget.emailSignUp.value,
      ev.currentTarget.usernameSignUp.value,
      ev.currentTarget.passwordSignUp.value,
    )

    alert(resultado.message || 'erro inesperado')
    setIsSubmitting(false)
  }

  return (
    <BoxSignUp>
      <FormSignUp onSubmit={signUp}>
        <label htmlFor="nameSignUp">Nome: </label>
        <input type="text" id="nameSignUp" name="nameSignUp" required />

        <label htmlFor="emailSignUp">Email: </label>
        <input type="text" id="emailSignUp" name="emailSignUp" required />

        <label htmlFor="usernameSignUp">Nome de usuário: </label>
        <input type="text" id="usernameSignUp" name="usernameSignUp" required />

        <label htmlFor="passwordSignUp">Senha: </label>
        <input
          type="passwordSignUp"
          id="passwordSignUp"
          name="passwordSignUp"
          required
        />

        <button className="register" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Verificando dados...' : 'Registrar-se'}
        </button>
      </FormSignUp>
    </BoxSignUp>
  )
}
